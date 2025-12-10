const fs = require("fs").promises;
const { DB_PATH } = require("../config/config");

async function readDB() {
    const data = await fs.readFile(DB_PATH, "utf8");
    return JSON.parse(data);
}

async function writeDB(data) {
    await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2));
}

module.exports = { readDB, writeDB };
