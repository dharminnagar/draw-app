import express from "express";
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

  const encryptedPass = await bcrypt.hash(password, saltRounds);

  try {
    await prismaClient.user.create({
      data: {
        username: username,
        password: encryptedPass,
      },
    });

    res.status(200).json({
      message: "Signup Sucessful",
    });
  } catch (e) {
    res.status(500).json({
      message: "Server Error",
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
      const token = jwt.sign({ id: user.id }, JWT_SECRET);

      res.json({
        message: "Login Successful",
        token: token,

        // TODO: Update this to use the userId from the database
        userId: 1,
      });
    } else {
      res.status(403).json({
        message: "Incorrect Credentials",
      });
    }
  }
});

app.post("/room", authMiddleware, (req, res) => {
  const { name } = req.body;

  const data = CreateRoomSchema.safeParse(req.body);

  if (!data.success) {
    res.status(411).json({
      message: "Error in Inputs",
      errors: data.error.errors,
    });
    return;
  }

  // db call

  res.json({
    roomId: 1,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
