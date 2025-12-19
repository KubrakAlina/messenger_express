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

async function sendMessage(req, res) {
  try {
    const { from, to, text, chatId } = req.body;
    const newMessage = await messageService.sendNewMessage({
      from,
      to,
      text,
      chatId
    });
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function deleteMessage(req, res) {
  try {
    const message_id = req.body.id;
    const deletedMessage = await messageService.deleteMessage(message_id);
    res.status(201).json(deletedMessage);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  getAllMessages,
  getMessageForChat,
  sendMessage,
  deleteMessage
};
