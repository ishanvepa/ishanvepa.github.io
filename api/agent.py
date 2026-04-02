"""
agent.py — OpenAI function-calling agent with RAG tool + per-session memory.

Uses create_openai_tools_agent instead of create_react_agent to avoid the
fragile text-based ReAct format that causes "Missing 'Action:' after 'Thought:'"
parse errors with GPT-4o-mini.
"""

import os
from collections import defaultdict
from typing import Any

from langchain.agents import AgentExecutor, create_openai_tools_agent
from langchain.memory import ConversationBufferWindowMemory
from langchain.tools import Tool
from langchain_core.messages import SystemMessage
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain_openai import ChatOpenAI

from rag import retrieve

# ---------------------------------------------------------------------------
# LLM  (singleton per process — cheap to reuse)
# ---------------------------------------------------------------------------
_llm: ChatOpenAI | None = None


def _get_llm() -> ChatOpenAI:
    global _llm
    if _llm is None:
        _llm = ChatOpenAI(
            model=os.getenv("LLM_MODEL", "gpt-4o-mini"),
            temperature=0.4,
        )
    return _llm


# ---------------------------------------------------------------------------
# Tools
# ---------------------------------------------------------------------------
RAG_TOOL = Tool(
    name="search_knowledge_base",
    func=retrieve,
    description=(
        "Search Ishan Vepa's personal knowledge base for factual information about him. "
        "Use this tool for ANY question about Ishan — education, work experience, projects, "
        "skills, research, publications, interests, hobbies, or background. "
        "Input should be a concise search query."
    ),
)

TOOLS = [RAG_TOOL]

# ---------------------------------------------------------------------------
# Prompt  (ChatPromptTemplate — works natively with openai-tools agent)
# ---------------------------------------------------------------------------
SYSTEM_PROMPT = """You are a friendly, knowledgeable assistant on Ishan Vepa's personal portfolio website.
Your job: help visitors learn about Ishan.

Rules:
1. ALWAYS call search_knowledge_base before answering any factual question about Ishan.
2. Be warm, concise, and conversational. Use third person (e.g. "Ishan studied at Georgia Tech...").
3. Keep answers to 2-4 sentences unless the user asks for more.
4. If the knowledge base does not contain what the user is asking, say exactly: "I don't have that information in my knowledge base."
5. Never guess or fabricate personal details not found in the knowledge base."""

PROMPT = ChatPromptTemplate.from_messages(
    [
        SystemMessage(content=SYSTEM_PROMPT),
        MessagesPlaceholder(variable_name="chat_history"),
        ("human", "{input}"),
        MessagesPlaceholder(variable_name="agent_scratchpad"),
    ]
)

# ---------------------------------------------------------------------------
# Per-session memory  (return_messages=True required for ChatPromptTemplate)
# ---------------------------------------------------------------------------
_memories: dict[str, ConversationBufferWindowMemory] = defaultdict(
    lambda: ConversationBufferWindowMemory(
        memory_key="chat_history",
        k=10,
        return_messages=True,   # must be True for message-based prompts
        input_key="input",
        output_key="output",
    )
)


def _get_memory(session_id: str) -> ConversationBufferWindowMemory:
    return _memories[session_id]


def clear_session(session_id: str) -> None:
    """Remove a session's conversation history."""
    if session_id in _memories:
        del _memories[session_id]


# ---------------------------------------------------------------------------
# Public chat interface
# ---------------------------------------------------------------------------
def chat(message: str, session_id: str = "default") -> dict[str, Any]:
    """
    Run the agent for a user message within a session.
    Returns { reply: str, session_id: str }
    """
    llm = _get_llm()
    memory = _get_memory(session_id)

    agent = create_openai_tools_agent(llm=llm, tools=TOOLS, prompt=PROMPT)
    executor = AgentExecutor(
        agent=agent,
        tools=TOOLS,
        memory=memory,
        verbose=True,
        handle_parsing_errors=True,
        max_iterations=6,
        return_intermediate_steps=False,
    )

    try:
        result = executor.invoke({"input": message})
        reply = result.get("output", "Sorry, I couldn't generate a response.")
    except Exception as e:
        print(f"[Agent] Error: {e}")
        reply = "I ran into an issue processing your request. Please try again."

    return {"reply": reply, "session_id": session_id}
