const express = require("express");
const router = express.Router();
const fs = require("fs").promises;

const DB_PATH = "./data/db.json";

async function readDB() {
  const data = await fs.readFile(DB_PATH, "utf8");
  return JSON.parse(data);
}

router.get("/", async (req, res) => {
  const db = await readDB();
  res.render("index", {
    title: "Users list",
    users: db.users
  });
});

module.exports = router;
