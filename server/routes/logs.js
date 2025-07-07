const express = require("express");
const router = express.Router();
const logSchema = require("../validators/logSchema");
const { readLogs, writeLogs } = require("../utils/fileHandler");

// POST /logs
router.post("/", (req, res) => {
  const { error, value } = logSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.message });

  try {
    const logs = readLogs();
    logs.push(value);
    writeLogs(logs);
    return res.status(201).json(value);
  } catch (err) {
    return res.status(500).json({ error: "Failed to write log data." });
  }
});

// GET /logs
router.get("/", (req, res) => {
  try {
    let logs = readLogs();
    const {
      level,
      message,
      resourceId,
      timestamp_start,
      timestamp_end,
      traceId,
      spanId,
      commit,
    } = req.query;

    if (level) logs = logs.filter((log) => log.level === level);
    if (message)
      logs = logs.filter((log) =>
        log.message.toLowerCase().includes(message.toLowerCase())
      );
    if (resourceId) logs = logs.filter((log) => log.resourceId === resourceId);
    if (timestamp_start)
      logs = logs.filter(
        (log) => new Date(log.timestamp) >= new Date(timestamp_start)
      );
    if (timestamp_end)
      logs = logs.filter(
        (log) => new Date(log.timestamp) <= new Date(timestamp_end)
      );
    if (traceId) logs = logs.filter((log) => log.traceId === traceId);
    if (spanId) logs = logs.filter((log) => log.spanId === spanId);
    if (commit) logs = logs.filter((log) => log.commit === commit);

    // Sort reverse-chronologically
    logs.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    res.status(200).json(logs);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve logs." });
  }
});
module.exports = router;

// GET /logs/analytics
router.get("/analytics", (req, res) => {
  try {
    let logs = readLogs();
    const { timestamp_start, timestamp_end } = req.query;

    if (timestamp_start)
      logs = logs.filter(
        (log) => new Date(log.timestamp) >= new Date(timestamp_start)
      );

    if (timestamp_end)
      logs = logs.filter(
        (log) => new Date(log.timestamp) <= new Date(timestamp_end)
      );

    // Initialize count map
    const levelCounts = {
      error: 0,
      warn: 0,
      info: 0,
      debug: 0,
    };

    logs.forEach((log) => {
      if (levelCounts.hasOwnProperty(log.level)) {
        levelCounts[log.level]++;
      }
    });

    res.status(200).json(levelCounts);
  } catch (err) {
    res.status(500).json({ error: "Failed to compute analytics." });
  }
});
