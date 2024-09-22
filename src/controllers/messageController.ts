import { Router } from "express";

const messageController = Router();

messageController.post("/", (req, res) => {
  console.log("post message");
});

messageController.get("/", (req, res) => {
  console.log("get messages");
});

export default messageController;
