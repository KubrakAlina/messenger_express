const { readDB, writeDB } = require("../models/db.js");

async function getAllMessages() {
  const db = await readDB();
  return db.messages;
}

async function findMessagesForChat(chat_id) {
  const db = await readDB();
  return db.messages.filter(m => m.chatId === chat_id);
}

async function sendNewMessage({ from, to, text, chatId }) {
  const db = await readDB();
  const newMessage = {
    id: String(db.messages.length + 1),
    from,
    to,
    text,
    createdAt: Date.now(),
    chatId
  };
  db.users.push(newMessage);
  await writeDB(db);
  return newMessage;

}

module.exports = {
  getAllMessages,
  findMessagesForChat,
  sendNewMessage
};
