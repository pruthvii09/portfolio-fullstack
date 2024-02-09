import express from "express";
import {
  signup,
  login,
  getProfile,
  updateProfile,
  getUserData,
} from "../controllers/userController.js";
import { auth } from "../middleware/user.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/:username", getUserData);
router.get("/", auth, getProfile);
router.patch("/", auth, updateProfile);

export default router;
