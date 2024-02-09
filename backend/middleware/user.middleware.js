import { asyncHandler } from "../helper/asyncHandler.js";
import { verifyToken } from "../helper/jwtToken.js";
import User from "../models/user.model.js";
export const auth = asyncHandler(async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      res.status(401).json({ error: "Unauthorized" });
    }
    const decoded = verifyToken(token);
    const user = await User.findById(decoded?._id).select("-password");
    if (!user) {
      res.status(401, "Invalid access Token");
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ status: false, error: "Internal Error" });
  }
});
