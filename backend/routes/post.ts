import express from "express";

import {
  deletePostById,
  getAllPostsRouteHandler,
  getSinglePostById,
  UpdatePostById,
} from "../controllers/post.ts";

const router = express.Router();

// Get all posts routes
router.get("/posts", getAllPostsRouteHandler);
router.get("/posts/:id", getSinglePostById);

// Delete post routes
router.patch("/posts/:id", UpdatePostById);
router.delete("/posts/:id", deletePostById);

export default router;
