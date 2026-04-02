"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ChatBot.module.css";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const API_URL =
  process.env.NEXT_PUBLIC_CHATBOT_API_URL ?? "http://localhost:5000";

// Generate a stable session ID for the browser tab
function getSessionId(): string {
  if (typeof window === "undefined") return "ssr";
  let id = sessionStorage.getItem("chat_session_id");
  if (!id) {
    id = Math.random().toString(36).slice(2) + Date.now().toString(36);
    sessionStorage.setItem("chat_session_id", id);
  }
  return id;
}

const SUGGESTIONS = [
  "What is Ishan studying?",
  "What projects has he built?",
  "What are his hobbies?",
  "Where has he worked?",
];

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId] = useState(getSessionId);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Focus input when panel opens
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 120);
    }
  }, [open]);

  async function send(text?: string) {
    const message = (text ?? input).trim();
    if (!message || loading) return;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: message }]);
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, session_id: sessionId }),
      });

      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I couldn't reach the server. Please try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  const isEmpty = messages.length === 0;

  return (
    <>
      {/* ── Floating trigger button ── */}
      <button
        className={styles.trigger}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Chat with Ishan's assistant"}
        title={open ? "Close" : "Ask me anything"}
      >
        {open ? (
          // Close icon
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path
              d="M1 1L14 14M14 1L1 14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          // Chat bubble icon
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M14 1H2C1.45 1 1 1.45 1 2v9c0 .55.45 1 1 1h2v3l3-3h7c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1z"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      {/* ── Chat panel ── */}
      <div
        className={`${styles.panel} ${open ? styles.panelOpen : ""}`}
        role="dialog"
        aria-label="Chat with Ishan's assistant"
      >
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.dot} />
            <span className={styles.headerTitle}>ask ishan</span>
          </div>
        </div>

        {/* Message area */}
        <div className={styles.messages}>
          {isEmpty && (
            <div className={styles.empty}>
              <p className={styles.emptyText}>
                Hi! I&apos;m a bot that knows all about Ishan. Ask me anything.
              </p>
              <div className={styles.suggestions}>
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    className={styles.suggestionBtn}
                    onClick={() => send(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((m, i) => (
            <div
              key={i}
              className={`${styles.bubble} ${
                m.role === "user" ? styles.bubbleUser : styles.bubbleBot
              }`}
            >
              {m.content}
            </div>
          ))}

          {loading && (
            <div className={`${styles.bubble} ${styles.bubbleBot}`}>
              <span className={styles.typingDots}>
                <span />
                <span />
                <span />
              </span>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className={styles.inputRow}>
          <input
            ref={inputRef}
            className={styles.input}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Ask something…"
            disabled={loading}
            aria-label="Chat message input"
            maxLength={500}
          />
          <button
            className={styles.sendBtn}
            onClick={() => send()}
            disabled={loading || !input.trim()}
            aria-label="Send message"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M12.5 7H1.5M7.5 2L12.5 7L7.5 12"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
