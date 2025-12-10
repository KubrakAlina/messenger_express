const express = require("express");
const router = express.Router();

const chatController = require("../controllers/chat.controller");

router.get("/getAll", chatController.getAllChats);
router.get("/user/:user_id", chatController.getChatByUserId);
router.get("/:chat_id", chatController.getChatById);

module.exports = router;
