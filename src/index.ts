import express, { Request, Response } from "express";
import messageController from "./controllers/messageController";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({ origin: "*" }));

app.get("/ping", (req: Request, res: Response) => {
  return res.status(200).json({ message: "Pong" });
});

app.use("/api/messages", messageController);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
