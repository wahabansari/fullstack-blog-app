import { type Request, type Response } from "express";
import db from "../db.ts";
import { postsTable } from "../drizzle/schema.ts";
import { eq } from "drizzle-orm";

// Get All Posts
export const getAllPostsRouteHandler = async (_: Request, res: Response) => {
  const result = await db.select().from(postsTable);
  return res.json(result);
};

/*
 * Get Single Post By ID
 */
export const getSinglePostById = async (req: Request, res: Response) => {
  const postId = Number(req.params.id);
  const result = await db
    .select()
    .from(postsTable)
    .where(eq(postsTable.id, postId));
  return res.status(200).json(result);
};

/*
 * Create Single Post By ID
 */
export const generateSinglePost = async (req: Request, res: Response) => {
  const { title, description, tags } = req.body;

  try {
    const result = await db
      .insert(postsTable)
      .values({ title, description, tags });

    if (result.rowCount === 1 && result.command === "INSERT") {
      res.status(201).json({ messge: "User Created Successfully!" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ messge: new Error("Something strange is happening!") });
  }
};

/*
 * Delete User By ID
 */
export const deletePostById = async (req: Request, res: Response) => {
  try {
    const postId = Number(req.params.id);
    await db.delete(postsTable).where(eq(postsTable.id, postId)).returning();

    if (!postId) {
      res.json({ message: "Invalud ID!", id: postId });
    }

    return res.json({
      message: "Post Deleted Successfully!",
      id: postId,
    });
  } catch (error) {
    res.status(500).json({ message: "Error Deleting in post", error });
  }
};

/*
 * Update post by ID
 */
export const UpdatePostById = async (req: Request, res: Response) => {
  try {
    const { title, description, tags } = req.body; // Getting data from request body send by user
    const postId = Number(req.params.id);
    const result = await db
      .update(postsTable)
      .set({ title, description, tags })
      .where(eq(postsTable.id, postId))
      .returning();

    if (!postId) {
      res.json({ message: "Invalud ID!", id: postId });
    }

    return res.json({
      message: "Post Updated Successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ message: "Something Wrong!" });
  }
};
