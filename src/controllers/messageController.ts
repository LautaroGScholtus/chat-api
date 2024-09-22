import { Router } from "express";
import { validationMiddleware } from "../middlewares/validation";
import MessageService from "../services/messagesService";

const messageController = Router();

messageController.post("/", validationMiddleware, MessageService.createMessage);

messageController.get("/", MessageService.getMessages);

export default messageController;
