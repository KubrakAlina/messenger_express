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


module.exports = {
  getAllUsers,
  findUserByName,
  addUser
};
