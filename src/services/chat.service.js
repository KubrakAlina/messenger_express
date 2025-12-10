const { readDB } = require("../models/db.js");

async function getAllChats() {
  const db = await readDB();
  return db.chats;
}

async function findChatByUserId(user_id) {
  const db = await readDB();
  return db.chats.filter((chat) => chat.user1 === user_id || chat.user2 === user_id);
}

async function findChatById(chat_id) {
  const db = await readDB();
  return db.chats.filter((chat) => chat.id === chat_id);
}

module.exports = {
  getAllChats,
  findChatByUserId,
  findChatById
};
