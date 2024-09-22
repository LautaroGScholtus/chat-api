import express, { Request, Response } from "express";
import messageController from "./controllers/messageController";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/messages", messageController);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
