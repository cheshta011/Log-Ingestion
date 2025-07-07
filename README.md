# 🔍 Log Ingestion and Querying System

A full-stack developer tool built with **Node.js** and **React** to ingest, persist, and query structured logs. Designed to simulate a real-world logging system for monitoring and debugging applications.

## 📦 Tech Stack

- **Backend**: Node.js, Express, File System (JSON for storage)
- **Frontend**: React (Vite), Axios, Chart.js
- **Styling**: Custom CSS , bootstrap
- **Data Storage**: Single JSON file (no DB)

## 🧩 Features

### 🚀 Log Ingestion (Backend)

- `POST /logs`: Accepts log data conforming to a strict schema.
- Stores logs in a local JSON file.
- Validates required fields (level, message, timestamp, etc.).

### 🔎 Log Querying (Frontend)

- View logs in reverse chronological order.
- **Filter by**:
  - Message (full-text search)
  - Log level (`info`, `warn`, `error`, `debug`)
  - Resource ID
  - Timestamp range (start & end)
- Dynamic filtering (auto-refresh on change)
- Visual log level cues (color-coded)
- Tabs for `Logs` and `Analytics` (optional)

---

## 📁 Folder Structure

root/
├── backend/
│ ├── server.js
│ ├── logs.json
│ └── utils/
| |**routes/
| |**validators
├── client/
│ ├── src/
│ │ ├── components/
| | |── pages/
│ │ ├── services/
│ │ └── App.jsx
│ └── index.html
└── README.md

## ⚙️ Setup Instructions

### 1. Clone the repo

git clone [https://github.com/your-username/log-query-system.git]   (https://github.com/cheshta011/Log-Ingestion.git)

2. Backend (Node.js)

cd server

npm install

nodemon server.js

Runs on: http://localhost:5000


Endpoints:

POST /logs – Ingest a log

GET /logs – Query logs with filters

Note: Logs are stored in logs.json. The file is created if not present.

3. Frontend (React)

   cd client
   
   npm install
   
   npm run dev
   
   Runs on: http://localhost:5173

🧪 Sample Log Format

{
"level": "error",
"message": "Failed to connect to database",
"resourceId": "server-1234",
"timestamp": "2023-07-06T15:00:00Z",
"traceId": "abc-xyz-123",
"spanId": "span-456",
"commit": "5e5342f",
"metadata": {
"parentResourceId": "server-5678",
}
}

🎯 Design Decisions & Assumptions

Used the Node fs module for persistence to keep full control over read/write.
Used in-memory filtering with .filter, .includes, .sort to follow assignment goals.
Vite + React for speed and simplicity.
Timestamp format assumed to be ISO 8601 for parsing and comparisons.

✅ Bonus Feature -

Analytics tab (bar chart: logs per level)
