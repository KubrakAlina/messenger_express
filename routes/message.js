const express = require("express");
const router = express.Router();
const fs = require("fs").promises;

const DB_PATH = "./data/db.json";

async function readDB() {
  const data = await fs.readFile(DB_PATH, "utf8");
  return JSON.parse(data);
}

//GET /message/getAll
router.get("/getAll", async (req, res) => {
  const db = await readDB();
  res.send(db.messages);
});

//GET /message/getAll/:chat_id
router.get("/getAll/:chat_id", async (req, res) => {
  const db = await readDB();
  res.send(db.messages.filter((message) => message.chatId === req.params.chat_id));
});

module.exports = router;
