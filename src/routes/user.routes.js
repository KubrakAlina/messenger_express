const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");

router.get("/getAll", userController.getAllUsers);
router.get("/:username", userController.getUserByName);
router.post("/addUser", userController.addUser);
module.exports = router;
