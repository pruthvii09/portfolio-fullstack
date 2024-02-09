import User from "../models/user.model.js";
import Project from "../models/project.model.js";
import Blog from "../models/blog.model.js";
import { createToken } from "../helper/jwtToken.js";
import bcrypt from "bcrypt";
import { asyncHandler } from "../helper/asyncHandler.js";
import { ApiResponse } from "../helper/ApiResponse.js";

export const signup = asyncHandler(async (req, res) => {
  try {
    const { email, name, username, password, desc, title, github } = req.body;
    if (!email || !password) {
      res.status(400).json({ status: false, error: "All fields Required" });
    }
    const exist = await User.findOne({ email });
    if (exist) {
      res.status(404).json({ status: false, error: "Already Registered" });
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await User.create({
      email,
      name,
      username,
      desc,
      title,
      social: {
        github: github,
      },
      password: hash,
    });
    const token = createToken(user._id);
    return res
      .status(201)
      .json(
        new ApiResponse(
          201,
          { email, username, token },
          "User Created  Successfully"
        )
      );
  } catch (error) {
    res.status(500).json({ status: false, error: "Internal Server Error" });
  }
});

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({
      username,
    });
    if (!user) {
      return res.status(400).json({ error: "No Such User Found!" });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ error: "Password Does Not Match!" });
    }
    const token = createToken(user._id);
    return res
      .status(201)
      .json(
        new ApiResponse(
          201,
          { email: user.email, username: user.username, token },
          "User Logged  Successfully"
        )
      );
  } catch (error) {
    res.status(500).json({ error: error.message || "An error occurred" });
  }
};
export const getProfile = asyncHandler(async (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    res.status(500).json({ error: error.message || "An error occurred" });
  }
});
export const updateProfile = asyncHandler(async (req, res) => {
  try {
    const { name, email, username, title, github, linkedin, img, desc, pdf } =
      req.body;
    const updateFields = {
      name,
      email,
      username,
      title,
      "social.github": github,
      "social.linkedin": linkedin,
      img,
      desc,
      pdf,
    };
    await User.findOneAndUpdate(
      { _id: req.user._id }, // Filter by user ID
      updateFields, // Update with the fields provided in the updateFields object
      { new: true } // Return the updated document
    );
    res
      .status(200)
      .json({ status: true, message: "Profile updated successfully" });
  } catch (error) {
    // Handle errors
    console.error("Error updating profile:", error);
    res.status(500).json({ status: false, error: error });
  }
});
export const getUserData = asyncHandler(async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username: username });
    // Check if user exists
    if (!user) {
      return res.status(404).json({ status: false, error: "No User Found" });
    }
    // Retrieve projects and blogs asynchronously
    const projects = await Project.find({ user: user._id });
    const blogs = await Blog.find({ user: user._id });

    console.log({ user, projects, blogs });

    // Respond with user data, projects, and blogs
    res.status(200).json({ user, projects, blogs });
  } catch (error) {
    // Handle errors
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: error.message || "An error occurred" });
  }
});
