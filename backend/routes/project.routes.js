import express from "express";
import {
  addProject,
  deleteProject,
  getProject,
} from "../controllers/projectController.js";
import { auth } from "../middleware/user.middleware.js";

const router = express.Router();

router.post("/", auth, addProject);
router.get("/", auth, getProject);
router.delete("/:id", auth, deleteProject);

export default router;
