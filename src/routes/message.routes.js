const express = require("express");
const router = express.Router();

const messageController = require("../controllers/message.controller");

router.get("/getAll", messageController.getAllMessages);
router.get("/:chat_id", messageController.getMessageForChat);

module.exports = router;
