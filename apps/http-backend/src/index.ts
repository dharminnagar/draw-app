import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config";
import { z } from "zod";
import bcrypt from "bcrypt";

const app = express();

const saltRounds = 10;

app.get("/", (req, res) => {});

app.post("/signup", async (req, res) => {
  const schema = z.object({
    username: z
      .string()
      .min(1, "Username is required")
      .min(3, "Username should be between 3-10 lettters")
      .max(10, "Username should be between 3-10 lettters"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
  });

  const validation = schema.safeParse(req.body);

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
    await userModel.create({
      username: username,
      password: encryptedPass,
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

  const user = await userModel.findOne({
    username: username,
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
      const token = jwt.sign({ id: user._id }, JWT_SECRET);

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

app.post("/room", (req, res) => {
  // db call

  res.json({
    roomId: 1,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
