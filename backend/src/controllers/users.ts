import bcrypt from "bcryptjs";
import type { Request, Response } from "express";
import db from "../db.ts";
import { usersTable } from "../../drizzle/schema.ts";
import { eq, or } from "drizzle-orm";

export const createUserSignUp = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  // Password Hasing
  const saltPassword = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, saltPassword);

  if (!username || !password || !email) {
    res.status(400).json({ mesage: "All fields are required!" });
  }

  // Insering into Database
  const [newUser] = await db
    .insert(usersTable)
    .values({ username, email, password: hashedPassword })
    .returning({ id: usersTable.userId }); // Returns only the ID

  res.status(201).json({ newUser, message: "User Created SUccessfully" });
};

export const userSignInHandler = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  const [user] = await db
    .select()
    .from(usersTable)
    .where(or(eq(usersTable.email, email), eq(usersTable.username, username)));

  //  Check password
  const matchedPassword =
    user && (await bcrypt.compare(password, user?.password));

  if (!matchedPassword) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  return res
    .status(200)
    .json({ message: "User LoggedIn Successfully.", data: user });
};
