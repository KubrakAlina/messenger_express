const userService = require("../services/user.service");

async function getAllUsers(req, res) {
    const users = await userService.getAllUsers();
    res.json(users);
}

async function getUserByName(req, res) {
    const user = await userService.findUserByName(req.params.username);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
}

module.exports = {
    getAllUsers,
    getUserByName
};
