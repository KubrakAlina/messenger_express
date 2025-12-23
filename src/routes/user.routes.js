const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");

router.get("/getAll", userController.getAllUsers);
router.get("/:username", userController.getUserByName);
router.post("/addUser", userController.addUser);
router.delete("/deleteUser", userController.deleteUser);
router.patch("/updateUser", userController.updateUser)
module.exports = router;
