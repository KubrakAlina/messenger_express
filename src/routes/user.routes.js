const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");

router.get("/getAll", userController.getAllUsers);
router.get("/:username", userController.getUserByName);

module.exports = router;
