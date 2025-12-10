const express = require("express");
const router = express.Router();

const messageController = require("../controllers/message.controller");

/**
 * @swagger
 * /message/getAll:
 *   get:
 *     summary: Retrieve a list of messages
 *     responses:
 *       200:
 *         description: A messages
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
 *                   text:
 *                     type: string
 *                     example: Hello
 */

/**
 * @swagger
 * /message/:chat_id:
 *   get:
 *     summary: Retrieve a list of messages bu chat ID
 *     responses:
 *       200:
 *         description: A messages
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
 *                   text:
 *                     type: string
 *                     example: Hello
 */
router.get("/getAll", messageController.getAllMessages);
router.get("/:chat_id", messageController.getMessageForChat);

module.exports = router;
