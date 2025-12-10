const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");

/**
 * @swagger
 * /user/getAll:
 *   get:
 *     summary: Retrieve a list of users
 *     responses:
 *       200:
 *         description: A list of users
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
 *                   name:
 *                     type: string
 *                     example: John Doe
 */

/**
 * @swagger
 * /user/:username:
 *   get:
 *     summary: Retrieve a user by username
 *     responses:
 *       200:
 *         description: A user
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
 *                   name:
 *                     type: string
 *                     example: John Doe
 */

router.get("/getAll", userController.getAllUsers);
router.get("/:username", userController.getUserByName);

module.exports = router;
