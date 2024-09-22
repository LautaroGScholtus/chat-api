import { NextFunction, Request, Response } from "express";

export const validationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Validaciones de campos
  if (!req.body.message) {
    return res
      .status(400)
      .json({ message: "Debes enviar el parametro 'message'" });
  }

  if (!req.body.username) {
    return res
      .status(400)
      .json({ message: "Debes enviar el parametro 'username" });
  }

  // Si todo esta bien, hacemos next() y pasamos a la capa de servicios
  next();
};
