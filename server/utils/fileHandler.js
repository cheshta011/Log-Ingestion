const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../logs.json");

function readLogs() {
  if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, "[]");
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

function writeLogs(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

module.exports = { readLogs, writeLogs };
