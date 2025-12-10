const messageService = require("../services/message.service");

async function getAllMessages(req, res) {
  const users = await messageService.getAllMessages();
  res.json(users);
}

async function getMessageForChat(req, res) {
  const user = await messageService.findMessagesForChat(req.params.chat_id);
  if (!user) return res.status(404).json({ message: "Messages not found" });
  res.json(user);
}

module.exports = {
  getAllMessages,
  getMessageForChat
};
