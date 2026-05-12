import express from "express";
import { createUserSignUp, userSignInHandler } from "../controllers/users.ts";

const router = express.Router();

router.post("/auth/signup", createUserSignUp);
router.post("/auth/signin", userSignInHandler);

export default router;
