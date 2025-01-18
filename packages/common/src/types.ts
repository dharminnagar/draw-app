import { z } from "zod";

export const CreateUserSchema = z.object({
  username: z
    .string()
    .min(1, "Username is required")
    .min(3, "Username should be between 3-10 lettters")
    .max(10, "Username should be between 3-10 lettters"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  name: z.string().min(1, "Name is required"),
});

export const SignInSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const CreateRoomSchema = z.object({
  name: z.string().min(3, "Room name is required").max(20),
});
