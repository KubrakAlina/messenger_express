const chatService = require("../services/chat.service");

async function getAllChats(req, res) {
  const chats = await chatService.getAllChats();
  res.json(chats);
}

async function getChatByUserId(req, res) {
  const chats = await chatService.findChatByUserId(req.params.user_id);
  if (!chats) return res.status(404).json({ message: "Chats not found" });
  res.json(chats);
}

async function getChatById(req, res) {
  const chat = await chatService.findChatById(req.params.chat_id);
  if (!chat) return res.status(404).json({ message: "Chat not found" });
  res.json(chat);
}

module.exports = {
  getAllChats,
  getChatByUserId,
  getChatById
};
