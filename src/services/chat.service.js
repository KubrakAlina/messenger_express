const { readDB, writeDB } = require("../models/db.js");

async function getAllChats() {
  const db = await readDB();
  return db.chats;
}

async function findChatByUserId(user_id) {
  console.log("findChatByUserId works")
  const db = await readDB();
  return db.chats.filter((chat) => chat.user1 === user_id || chat.user2 === user_id);
}

async function findChatById(chat_id) {
  console.log("findChatById works")
  const db = await readDB();
  return db.chats.filter((chat) => chat.id === chat_id);
}

module.exports = {
  getAllChats,
  findChatByUserId,
  findChatById
};
