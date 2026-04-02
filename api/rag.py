"""
rag.py — Loads ishan_rag_knowledge.txt, chunks it, embeds it with OpenAI,
         builds an in-memory FAISS vector store, and exposes retrieve().
"""

import os
from pathlib import Path

from langchain_community.document_loaders import TextLoader
from langchain_community.vectorstores import FAISS
from langchain_openai import OpenAIEmbeddings
from langchain_text_splitters import RecursiveCharacterTextSplitter

# ---------------------------------------------------------------------------
# Resolve knowledge file path.
# Checks two locations so the same code works in both environments:
#   1. api/ishan_rag_knowledge.txt  ← Elastic Beanstalk deployment (file copied in)
#   2. ../public/ishan_rag_knowledge.txt ← local dev (file lives in project public/)
# ---------------------------------------------------------------------------
_HERE = Path(__file__).parent
_CANDIDATES = [
    _HERE / "ishan_rag_knowledge.txt",           # same dir as app.py (EB)
    _HERE.parent / "public" / "ishan_rag_knowledge.txt",  # local dev
]
KNOWLEDGE_FILE = next((p for p in _CANDIDATES if p.exists()), _CANDIDATES[0])


def _load_vector_store() -> FAISS:
    """Build and return an in-memory FAISS vector store from the knowledge file."""
    if not KNOWLEDGE_FILE.exists():
        raise FileNotFoundError(
            f"Knowledge file not found at: {KNOWLEDGE_FILE}\n"
            "Make sure ishan_rag_knowledge.txt is present in the public/ directory."
        )

    print(f"[RAG] Loading knowledge file: {KNOWLEDGE_FILE}")

    loader = TextLoader(str(KNOWLEDGE_FILE), encoding="utf-8")
    raw_docs = loader.load()

    splitter = RecursiveCharacterTextSplitter(
        chunk_size=512,
        chunk_overlap=64,
        separators=["\n\n", "\n", ".", " ", ""],
    )
    chunks = splitter.split_documents(raw_docs)
    print(f"[RAG] Split into {len(chunks)} chunks.")

    embeddings = OpenAIEmbeddings(
        model=os.getenv("EMBEDDING_MODEL", "text-embedding-3-small")
    )
    store = FAISS.from_documents(chunks, embeddings)
    print("[RAG] FAISS vector store built successfully.")
    return store


# Singleton — built once at startup, reused for every request.
_vector_store: FAISS | None = None


def get_vector_store() -> FAISS:
    global _vector_store
    if _vector_store is None:
        _vector_store = _load_vector_store()
    return _vector_store


def retrieve(query: str, k: int = 4) -> str:
    """
    Similarity-search the vector store and return the top-k chunks
    as a single formatted string for the agent to reason over.
    """
    store = get_vector_store()
    docs = store.similarity_search(query, k=k)

    if not docs:
        return "No relevant information found in the knowledge base."

    sections = []
    for i, doc in enumerate(docs, start=1):
        sections.append(f"[Chunk {i}]\n{doc.page_content.strip()}")

    return "\n\n---\n\n".join(sections)
