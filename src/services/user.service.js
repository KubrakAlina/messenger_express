const { readDB } = require("../models/db.js");

async function getAllUsers() {
  const db = await readDB();
  return db.users;
}

async function findUserByName(name) {
  const db = await readDB();
  return db.users.find(u => u.username === name);
}

module.exports = {
  getAllUsers,
  findUserByName
};
