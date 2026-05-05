import express from "express";

import {
  deletePostById,
  generateSinglePost,
  getAllPostsRouteHandler,
  getSinglePostById,
  UpdatePostById,
} from "../controllers/post.ts";

const router = express.Router();

// Get all posts routes
router.get("/posts", getAllPostsRouteHandler);
router.get("/posts/:id", getSinglePostById);

// Create a single post
router.post("/posts", generateSinglePost);

// Delete post routes
router.patch("/posts/:id", UpdatePostById);
router.delete("/posts/:id", deletePostById);

export default router;
