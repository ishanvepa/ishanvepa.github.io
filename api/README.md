# Ishan Vepa — RAG Chatbot API

A Flask-based Retrieval-Augmented Generation (RAG) chatbot that lets visitors ask questions about Ishan. It embeds `ishan_rag_knowledge.txt` into a FAISS vector store and uses a LangChain ReAct agent backed by GPT-4o-mini to answer questions conversationally.

---

## Project Structure

```
api/
├── app.py              # Flask routes (/chat, /session, /health)
├── agent.py            # LangChain ReAct agent + per-session memory
├── rag.py              # FAISS vector store built from knowledge file
├── requirements.txt    # Python dependencies
├── Procfile            # For AWS Elastic Beanstalk
├── .env.example        # Environment variable template
└── README.md           # This file

# Root-level (needed for Docker build):
Dockerfile              # Container definition for AWS App Runner / ECS
public/
└── ishan_rag_knowledge.txt   # Knowledge base (read by rag.py)
```

---

## Local Development

### 1. Prerequisites
- Python 3.11+
- An OpenAI API key

### 2. Create and activate a virtual environment
```bash
cd api
python -m venv .venv

# Windows
.venv\Scripts\activate

# macOS / Linux
source .venv/bin/activate
```

### 3. Install dependencies
```bash
pip install -r requirements.txt
```

### 4. Configure environment variables
```bash
cp .env.example .env
# Edit .env and set OPENAI_API_KEY=sk-...
```

### 5. Run the development server
```bash
# From the api/ directory
FLASK_ENV=development python app.py
```

The API will start at `http://localhost:5000`.

### 6. Test it
```bash
curl -X POST http://localhost:5000/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "What is Ishan studying?", "session_id": "test-123"}'
```

---

## API Reference

### `POST /chat`
Send a message to the chatbot.

**Request body:**
```json
{
  "message": "What projects has Ishan built?",
  "session_id": "unique-user-session-id"   // optional — auto-generated if omitted
}
```

**Response:**
```json
{
  "reply": "Ishan has built several projects including...",
  "session_id": "unique-user-session-id"
}
```

---

### `DELETE /session`
Clear a user's conversation history.

**Request body:**
```json
{ "session_id": "unique-user-session-id" }
```

---

### `GET /health`
Liveness probe.

**Response:** `{ "status": "ok" }`

---

## Deployment on AWS

AWS Amplify is designed for frontend apps. For the Flask API backend, the recommended AWS options are below (all integrate cleanly alongside your Amplify-hosted Next.js frontend).

---

### Option A — AWS Elastic Beanstalk (simplest, closest to "Amplify for backends")

Elastic Beanstalk manages the EC2 instance, load balancer, and deployment for you.

1. **Install the EB CLI:**
   ```bash
   pip install awsebcli
   ```

2. **Initialize from the project root:**
   ```bash
   eb init ishanvepa-chatbot-api --platform python-3.12 --region us-east-1
   ```

3. **Create an environment:**
   ```bash
   eb create chatbot-api-prod
   ```

4. **Set environment variables via the console or CLI:**
   ```bash
   eb setenv OPENAI_API_KEY=sk-... ALLOWED_ORIGINS=https://www.ishanvepa.com
   ```

5. **Deploy:**
   ```bash
   eb deploy
   ```

   Elastic Beanstalk will detect the `Procfile` and run `gunicorn app:app` automatically.

> **Note:** The `Procfile` and `api/` directory must be deployed together. EB deploys from the project root, so this works out of the box.

---

### Option B — AWS App Runner (easiest container-based option)

App Runner builds and runs your Docker container automatically from source or ECR.

1. **Build and push to ECR:**
   ```bash
   aws ecr create-repository --repository-name ishanvepa-chatbot-api
   docker build -t ishanvepa-chatbot-api .
   docker tag ishanvepa-chatbot-api:latest <account>.dkr.ecr.us-east-1.amazonaws.com/ishanvepa-chatbot-api:latest
   docker push <account>.dkr.ecr.us-east-1.amazonaws.com/ishanvepa-chatbot-api:latest
   ```

2. **Create an App Runner service** in the AWS Console:
   - Source: ECR image
   - Port: `8080`
   - Add environment variable: `OPENAI_API_KEY`
   - Add environment variable: `ALLOWED_ORIGINS=https://www.ishanvepa.com`

3. App Runner gives you a public HTTPS URL like `https://abc123.us-east-1.awsapprunner.com`.

---

### Connecting to the Next.js Frontend

Once deployed, set the API URL as an environment variable in your Amplify frontend:

```
NEXT_PUBLIC_CHATBOT_API_URL=https://your-api-domain.com
```

Then call it from your React components:
```ts
const res = await fetch(`${process.env.NEXT_PUBLIC_CHATBOT_API_URL}/chat`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ message, session_id: sessionId }),
});
const { reply } = await res.json();
```

---

## Environment Variables Reference

| Variable | Required | Default | Description |
|---|---|---|---|
| `OPENAI_API_KEY` | ✅ | — | OpenAI API key |
| `LLM_MODEL` | ❌ | `gpt-4o-mini` | OpenAI chat model to use |
| `EMBEDDING_MODEL` | ❌ | `text-embedding-3-small` | OpenAI embedding model |
| `ALLOWED_ORIGINS` | ❌ | `https://www.ishanvepa.com,http://localhost:3000` | Comma-separated CORS origins |
| `PORT` | ❌ | `5000` | Port for local dev server |
| `FLASK_ENV` | ❌ | `production` | Set to `development` for debug mode |
