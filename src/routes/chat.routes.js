const express = require("express");
const router = express.Router();

const chatController = require("../controllers/chat.controller");

/**
 * @swagger
 * /chat/getAll:
 *   get:
 *     summary: Retrieve a list of chats
 *     responses:
 *       200:
 *         description: A list of chats
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: 1
 *
 */

/**
 * @swagger
 * /chat/user/:user_id:
 *   get:
 *     summary: Retrieve a list of chats by user ID
 *     responses:
 *       200:
 *         description: A list of chats
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: 1
 *
 */
/**
 * @swagger
 * /chat/:chat_id:
 *   get:
 *     summary: Retrieve a chat by ID
 *     responses:
 *       200:
 *         description: A chat
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: 1
 *
 */
router.get("/getAll", chatController.getAllChats);
router.get("/user/:user_id", chatController.getChatByUserId);
router.get("/:chat_id", chatController.getChatById);

module.exports = router;
