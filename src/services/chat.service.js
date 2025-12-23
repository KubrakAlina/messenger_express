const { readDB, writeDB } = require("../models/db.js");

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

async function addNewChat({ user1, user2 }) {
  const db = await readDB();
  const newChat = {
    id: String(db.chats.length + 1),
    user1,
    user2
  };
  db.chats.push(newChat);
  await writeDB(db);
  return newChat;
}

async function deleteChat(chat_id) {
  const db = await readDB();
  const index = db.chats.findIndex(u => u.id === chat_id)
  const deletedChat = db.chats[index];
  db.chats.splice(index, 1);
  await writeDB(db);
  return deletedChat;
}

module.exports = {
  getAllChats,
  findChatByUserId,
  findChatById,
  addNewChat,
  deleteChat
};
