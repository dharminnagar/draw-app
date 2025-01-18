import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "./config";

interface IJwtPayload extends JwtPayload {
  userId?: number;
}

export function authMiddleware(
  req: Request & { userId?: number },
  res: Response,
  next: NextFunction
) {
  const token = req.headers["authorization"] ?? "";

  const decoded = jwt.verify(token, JWT_SECRET) as IJwtPayload;

  if (decoded) {
    req.userId = decoded.userId;

    next();
  } else {
    res.status(403).json({
      message: "Unauthorized",
    });
  }
}
