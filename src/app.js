const express = require("express");
const app = express();

const userRoutes = require("./routes/user.routes");
const chatRoutes = require("./routes/chat.routes");

app.use(express.json());

app.use("/user", userRoutes);
app.use("/chat", chatRoutes);

module.exports = app;
