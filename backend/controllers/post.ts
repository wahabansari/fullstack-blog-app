import { json, type Request, type Response } from "express";
import { db } from "../db.ts";

// Get All Posts
export const getAllPostsRouteHandler = async (_: Request, res: Response) => {
  const result = await db.query(`SELECT * FROM posts`);
  const rows = result.rows;
  return res.json(rows);
};

// Get Single Post By ID
export const getSinglePostById = async (req: Request, res: Response) => {
  const postId = Number(req.params.id);
  const row = await db.query(`SELECT * FROM posts WHERE id=$1`, [postId]);
  const result = row.rows;
  return res.json(result);
};

// Create Single Post By ID
export const generateSinglePost = async (req: Request, res: Response) => {
  const { title, description, tags } = req.body;

  try {
    const result = await db.query(
      `INSERT INTO posts (title,description,tags) VALUES ($1,$2,$3)`,
      [title, description, tags],
    );
    if (result.rowCount === 0) {
      console.log("Record Added Successfully");
    }
    res
      .status(201)
      .json({ messge: "User Created Successfully!", data: req.body });
  } catch (error) {
    res
      .status(500)
      .json({ messge: new Error("Something strange is happening!") });
  }
};

// Delete User By ID
export const deletePostById = async (req: Request, res: Response) => {
  try {
    const postId = Number(req.params.id);
    await db.query(`DELETE FROM posts WHERE id=$1`, [postId]);

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

// Update post by ID
export const UpdatePostById = async (req: Request, res: Response) => {
  const { title, description, tags } = req.body; // Getting data from request body send by user
  const parsedTags = JSON.parse(tags);

  try {
    const postId = Number(req.params.id);
    if (!postId) {
      res.json({ message: "Invalud ID!", id: postId });
    }

    const result = await db.query(
      `UPDATE posts SET title=$1, description=$2, tags=$3 WHERE id=$4`,
      [title, description, parsedTags, postId],
    );

    if (result.rowCount === 0) {
      res.status(500).json({ message: "Something Error Occured!" });
    }

    return res.json({
      message: "Post Updated Successfully!",
      id: postId,
      data: result.rows,
    });
  } catch (error) {
    res.status(500).json({ message: "Something Wrong!" });
  }
};
