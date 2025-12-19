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

async function postNewChat(req, res) {
  try {
    const { id, user1, user2 } = req.body;
    const newChat = await chatService.addNewChat({
      id,
      user1,
      user2
    });
    res.status(201).json(newChat);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function deleteChat(req, res) {
  try {
    const id = req.body.id;
    const deletedChat = await chatService.deleteChat(id);
    res.status(201).json(deletedChat);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  getAllChats,
  getChatByUserId,
  getChatById,
  postNewChat,
  deleteChat
};
