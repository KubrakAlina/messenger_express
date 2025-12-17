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

async function addUser(req, res) {
  try {
    const { name, password } = req.body;

    const newUser = await userService.addUser({
      name,
      password,
    });

    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  getAllUsers,
  getUserByName,
  addUser
};
