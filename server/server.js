const express = require("express");
const cors = require("cors");
const logsRouter = require("./routes/logs");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/logs", logsRouter);

app.listen(5000, () => {
  console.log("app is running on port " + 5000);
});
