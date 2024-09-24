import { Server } from "socket.io";
import { createServer } from "http";
import express, { Request, Response } from "express";
import messageController from "./controllers/messageController";
import cors from "cors";
import messagesService from "./services/messagesService";
import { Message } from "./types/Message";

// HTTP Server
const app = express();
const PORT = process.env.PORT || 3000;
const WS_PORT = process.env.WS_PORT || 12345;

app.use(express.json());
app.use(cors({ origin: "*" }));

app.get("/ping", (req: Request, res: Response) => {
  return res.status(200).json({ message: "Pong" });
});

app.use("/api/messages", messageController);

// Socket Server
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // Allow all origins or specify a list
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  //When connectin to the socket return all messages
  // * For this pagination would be needed for optimal performance
  socket.emit("previousMessages", messagesService.getSocketMessages());

  socket.on("message", (messageData) => {
    // Listen to message events and store them.
    const { message, username } = messageData;

    if (!message || !username) return;
    const newMessage: Message = {
      message,
      timestamp: new Date(),
      username,
    };

    messagesService.createSocketMessage(newMessage);

    // Emit it to be received by clients.
    io.emit("newMessage", newMessage);
  });
});

server.listen(12345, () => {
  console.log(`WS Server listening on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
