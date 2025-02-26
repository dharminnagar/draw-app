import express, { Request } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import {
  CreateRoomSchema,
  CreateUserSchema,
  SignInSchema,
} from "@repo/common/types";
import { prismaClient } from "@repo/db/client";
import bcrypt from "bcrypt";
import { authMiddleware } from "./middlewares";

const app = express();
app.use(express.json());

const saltRounds = 10;

app.get("/", (req, res) => {});

app.post("/signup", async (req, res) => {
  const validation = CreateUserSchema.safeParse(req.body);

  if (!validation.success) {
    res.status(411).json({
      message: "Error in Inputs",
      errors: validation.error.errors,
    });
    return;
  }

  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name || undefined;

  const encryptedPass = await bcrypt.hash(password, saltRounds);

  try {
    const user = await prismaClient.user.create({
      data: {
        username: username,
        password: encryptedPass,
        name: name,
      },
    });

    res.status(200).json({
      userId: user.id,
      message: "Signup Sucessful",
    });
  } catch (e) {
    res.status(500).json({
      message: "User already exists with this username",
      error: e,
    });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const data = SignInSchema.safeParse(req.body);

  if (!data.success) {
    res.status(411).json({
      message: "Error in Inputs",
      errors: data.error.errors,
    });
    return;
  }

  const user = await prismaClient.user.findFirst({
    where: {
      username: username,
    },
  });

  if (!user) {
    res.status(403).json({
      message: "User does not exist",
    });
  } else {
    const result = user.password
      ? await bcrypt.compare(password, user.password)
      : false;
    if (result) {
      const token = jwt.sign(
        {
          userId: user?.id,
        },
        JWT_SECRET
      );

      res.json({
        message: "Login Successful",
        token: token,
        userId: user.id,
      });
    } else {
      res.status(403).json({
        message: "Incorrect Credentials",
      });
    }
  }
});

app.post(
  "/room",
  authMiddleware,
  async (req: Request & { userId?: string }, res) => {
    const parsedData = CreateRoomSchema.safeParse(req.body);

    if (!parsedData.success) {
      res.status(411).json({
        message: "Error in Inputs",
        errors: parsedData.error.errors,
      });
      return;
    }

    // db call
    const userId = req.userId || "";
    console.log(userId);

    try {
      const room = await prismaClient.room.create({
        data: {
          slug: parsedData.data.name,
          adminId: userId,
        },
      });

      res.json({
        roomId: room.id,
      });
    } catch (e) {
      res.status(500).json({
        message: "Server Error",
        error: e,
      });
    }
  }
);

app.get("/chats/:roomId", async (req, res) => {
  const roomId = req.params.roomId;

  const messages = await prismaClient.chat.findMany({
    where: {
      id: parseInt(roomId),
    },
    orderBy: {
      id: "desc",
    },
    take: 50,
  });

  res.json({
    messages,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
