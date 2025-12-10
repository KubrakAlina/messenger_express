const { readDB, writeDB } = require("../models/db.js");

async function getAllMessages() {
  const db = await readDB();
  return db.messages;
}

async function findMessagesForChat(chat_id) {
  const db = await readDB();
  return db.messages.filter(m => m.chatId === chat_id);
}

module.exports = {
  getAllMessages,
  findMessagesForChat
};
