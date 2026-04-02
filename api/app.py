"""
app.py — Flask entrypoint for the Ishan Vepa RAG chatbot API.

Endpoints:
  POST /chat      { "message": "...", "session_id": "..." }  → { "reply": "...", "session_id": "..." }
  DELETE /session { "session_id": "..." }                    → { "message": "Session cleared." }
  GET  /health                                               → { "status": "ok" }
"""

import os
import uuid

from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_cors import CORS

load_dotenv()  # Load OPENAI_API_KEY etc. from .env in development

# Validate required env vars early so errors are obvious at startup
if not os.getenv("OPENAI_API_KEY"):
    raise EnvironmentError(
        "OPENAI_API_KEY is not set. "
        "Add it to your .env file or set it as an environment variable."
    )

# Import agent after env vars are loaded (agent imports rag which imports OpenAI)
from agent import chat, clear_session  # noqa: E402

app = Flask(__name__)

# ---------------------------------------------------------------------------
# CORS — allow your portfolio domain in production, all origins in dev
# ---------------------------------------------------------------------------
ALLOWED_ORIGINS = os.getenv(
    "ALLOWED_ORIGINS",
    "https://www.ishanvepa.com,http://localhost:3000",
).split(",")

CORS(app, resources={r"/*": {"origins": ALLOWED_ORIGINS}})


# ---------------------------------------------------------------------------
# Routes
# ---------------------------------------------------------------------------

@app.route("/health", methods=["GET"])
def health():
    return jsonify({"status": "ok"}), 200


@app.route("/chat", methods=["POST"])
def chat_endpoint():
    data = request.get_json(force=True, silent=True) or {}

    message = (data.get("message") or "").strip()
    if not message:
        return jsonify({"error": "message is required"}), 400

    # Auto-generate a session ID if the client doesn't supply one
    session_id = (data.get("session_id") or "").strip() or str(uuid.uuid4())

    result = chat(message, session_id)
    return jsonify(result), 200


@app.route("/session", methods=["DELETE"])
def clear_session_endpoint():
    data = request.get_json(force=True, silent=True) or {}
    session_id = (data.get("session_id") or "").strip()
    if not session_id:
        return jsonify({"error": "session_id is required"}), 400

    clear_session(session_id)
    return jsonify({"message": "Session cleared.", "session_id": session_id}), 200


# ---------------------------------------------------------------------------
# Entry point (local dev only — use gunicorn in production)
# ---------------------------------------------------------------------------
if __name__ == "__main__":
    port = int(os.getenv("PORT", 5000))
    debug = os.getenv("FLASK_ENV", "production") == "development"
    print(f"[App] Starting on port {port} (debug={debug})")
    app.run(host="0.0.0.0", port=port, debug=debug)
