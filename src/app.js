const cors = require("cors");
const express = require("express");
const app = express();

const userRoutes = require("./routes/user.routes");
const chatRoutes = require("./routes/chat.routes");
const messageRoutes = require("./routes/message.routes");

app.use(express.json());
app.use(cors());
app.use("/user", userRoutes);
app.use("/chat", chatRoutes);
app.use("/message", messageRoutes);

module.exports = app;
