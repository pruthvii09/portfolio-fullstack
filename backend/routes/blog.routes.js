import express from "express";
import {
  addBlog,
  deleteBlog,
  getBlog,
  getBlogbyId,
} from "../controllers/blogController.js";
import { auth } from "../middleware/user.middleware.js";

const router = express.Router();

router.post("/", auth, addBlog);
router.get("/:id", getBlogbyId);
router.get("/", auth, getBlog);
router.delete("/:id", auth, deleteBlog);

export default router;
