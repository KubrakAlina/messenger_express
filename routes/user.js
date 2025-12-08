const express = require("express");
const router = express.Router();
const fs = require("fs").promises;

const DB_PATH = "./data/db.json";

async function readDB() {
  const data = await fs.readFile(DB_PATH, "utf8");
  return JSON.parse(data);
}

//GET /user/getAll
router.get("/getAll", async (req, res) => {
  const db = await readDB();
  res.send(db.users);
});

//GET /user/:user_name
router.get("/:user_name", async (req, res) => {
  const db = await readDB();
  res.json(db.users.find((user) => user.username === req.params.user_name));
});

module.exports = router;

