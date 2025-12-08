const express = require("express");
const router = express.Router();
const fs = require("fs").promises;

const DB_PATH = "./data/db.json";

async function readDB() {
  const data = await fs.readFile(DB_PATH, "utf8");
  return JSON.parse(data);
}

//GET /chat/getAll
router.get("/getAll", async (req, res) => {
  const db = await readDB();
  res.send(db.chats);
});

//GET /chat/getAll:user_id
router.get("/getAll/:user_id", async (req, res) => {
  const db = await readDB();
  res.send(db.chats.filter((chat) => chat.user1 === req.params.user_id || chat.user2 === req.params.user_id));
});

//GET /chat/:chat_id
router.get("/:chat_id", async (req, res) => {
  const db = await readDB();
  res.json(db.chats.find((chat) => chat.id === req.params.chat_id));
});

module.exports = router;
