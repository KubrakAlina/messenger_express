const messageService = require("../services/message.service");

async function getAllMessages(req, res) {
  const messages = await messageService.getAllMessages();
  res.json(messages);
}

async function getMessageForChat(req, res) {
  const message = await messageService.findMessagesForChat(req.params.chat_id);
  if (!message) return res.status(404).json({ message: "Messages not found" });
  res.json(message);
}

module.exports = {
  getAllMessages,
  getMessageForChat
};
