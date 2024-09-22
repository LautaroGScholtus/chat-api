import { Request, Response } from "express";
import { Message } from "../types/Message";

// Almacenamiento estático
let messages: Message[] = [];

export default {
  createMessage: (req: Request, res: Response) => {
    // Destructuramos las dos propiedades del body de la solicitud
    const { message, username } = req.body;

    // Creamos un nuevo mensaje
    const newMessage: Message = { message, username, timestamp: new Date() };

    // Agregame el nuevo mensaje al array
    messages.push(newMessage);

    // Devolvemos una respuesta exitosa y el mensaje creado
    return res.status(201).send({ message, username });
  },

  getMessages: async (req: Request, res: Response) => {
    return res.status(200).json({
      messages,
      count: messages.length,
    });
  },
};
