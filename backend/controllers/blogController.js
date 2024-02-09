import { ApiResponse } from "../helper/ApiResponse.js";
import { asyncHandler } from "../helper/asyncHandler.js";
import Blog from "../models/blog.model.js";

export const addBlog = asyncHandler(async (req, res) => {
  try {
    const { title, desc, img } = req.body;
    if (!title || !desc) {
      res.status(400).json({ status: false, error: "All fields Required" });
    }
    const exist = await Blog.findOne({ title, user: req.user._id });
    if (exist) {
      return res.status(404).json({
        status: false,
        error: "Blog with Same Title already exists",
      });
    }
    const blog = await Blog.create({
      title,
      desc,
      user: req.user._id,
      img,
    });
    if (!blog) {
      return res
        .status(400)
        .json({ status: false, error: "Error Uploading Blog" });
    }
    return res
      .status(201)
      .json(new ApiResponse(201, { blog }, "Blog Created  Successfully"));
  } catch (error) {
    res.status(500).json({ status: false, error: "Internal Server Error" });
  }
});
export const getBlog = asyncHandler(async (req, res) => {
  try {
    const blogs = await Blog.find({ user: req.user.id });
    if (!blogs) {
      return res.status(400).json({ status: false, error: "No Blogs Foudnd" });
    }
    return res
      .status(201)
      .json(new ApiResponse(201, { blogs }, "Blogs fetched"));
  } catch (error) {
    res.status(500).json({ status: false, error: "Internal Server Error" });
  }
});
export const getBlogbyId = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ status: false, error: "Not Found" });
    }
    res.status(200).json({ status: true, blog });
  } catch (error) {
    res.status(500).json({ status: false, error: "Internal Server Error" });
  }
});

export const deleteBlog = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBlog = await Blog.findByIdAndDelete(id);
    if (!deleteBlog) {
      return res
        .status(404)
        .json({ status: false, error: "Could Not Find Blog" });
    }
    res
      .status(200)
      .json({ status: true, message: "Blog Deleted Successfully!!" });
  } catch (error) {
    res.status(500).json({ status: false, error: "Internal Server Error" });
  }
});
