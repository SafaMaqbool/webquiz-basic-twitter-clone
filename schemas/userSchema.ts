import { z } from "zod";

const userSchema = z.object({
  username: z.string().min(2, "Username must be at least 2 characters long").max(50, "Username must be at most 50 characters long"),
  gender: z.string().max(1, "Gender must be a single character"),
  age: z.number().nonnegative("Age must be a positive number"),
});

export default userSchema;
