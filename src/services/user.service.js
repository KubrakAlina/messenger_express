const { readDB, writeDB } = require("../models/db.js");

async function getAllUsers() {
  const db = await readDB();
  return db.users;
}

async function findUserByName(name) {
  const db = await readDB();
  return db.users.find(u => u.username === name);
}

async function addUser({ name, password }) {
  const db = await readDB();
  const username = name.toLowerCase().trim(" ");
  const newUser = {
    id: String(db.users.length + 1),
    username,
    password,
    name
  };
  db.users.push(newUser);
  await writeDB(db);
  return newUser;
}

async function deleteUser(user_id) {
  const db = await readDB();
  const index = db.users.findIndex(u => u.id === user_id)
  const deletedUser = db.users[index];
  db.users.splice(index, 1);
  await writeDB(db);
  return deletedUser;
}

module.exports = {
  getAllUsers,
  findUserByName,
  addUser,
  deleteUser
};
