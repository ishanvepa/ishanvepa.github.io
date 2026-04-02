FROM python:3.12-slim

WORKDIR /app

# Copy the knowledge file (needed by rag.py path resolution)
COPY public/ishan_rag_knowledge.txt /app/public/ishan_rag_knowledge.txt

# Install dependencies
COPY api/requirements.txt /app/api/requirements.txt
RUN pip install --no-cache-dir -r /app/api/requirements.txt

# Copy API source
COPY api/ /app/api/

WORKDIR /app/api

EXPOSE 8080

CMD ["gunicorn", "app:app", "--bind", "0.0.0.0:8080", "--workers", "2", "--timeout", "120"]
