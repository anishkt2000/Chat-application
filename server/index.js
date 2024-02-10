const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();
const userRoutes = require("./Routes/userRoutes");
const messages = require("./Routes/messages");
const connectDb = require("./utils/db");
var morgan = require("morgan");
app.use(cors());
app.use(express.json());
const socket = require("socket.io");

app.use(morgan("tiny"));
app.use("/api/auth", userRoutes);
app.use("/api/messages", messages);
app.use("/", (req, res) => {
  res.send([]);
});

connectDb();
const server = app.listen(process.env.PORT, () =>
  console.log(`Server started on ${process.env.PORT}`)
);

const io = socket(server, {
  cors: {
    origin: "http://localhost:5173",
    credential: true,
  },
});
global.onlineUsers = new Map();
io.on("connection", (socket) => {
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });
  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.from);

    if (sendUserSocket) {
      io.to(sendUserSocket).emit("msg-recieve", data.msg);
    }
  });
});
