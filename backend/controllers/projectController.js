import { ApiResponse } from "../helper/ApiResponse.js";
import { asyncHandler } from "../helper/asyncHandler.js";
import Project from "../models/project.model.js";

export const addProject = asyncHandler(async (req, res) => {
  try {
    const { title, desc, liveLink, github } = req.body;
    if (!title || !desc || !github) {
      res.status(400).json({ status: false, error: "All fields Required" });
    }
    const exist = await Project.findOne({ title, user: req.user._id });
    if (exist) {
      return res.status(404).json({
        status: false,
        error: "Project with Same Title already exists",
      });
    }
    const project = await Project.create({
      title,
      desc,
      user: req.user._id,
      liveLink,
      github,
    });
    if (!project) {
      return res
        .status(400)
        .json({ status: false, error: "Error Uploading Project" });
    }
    return res
      .status(201)
      .json(new ApiResponse(201, { project }, "Project Created  Successfully"));
  } catch (error) {
    res.status(500).json({ status: false, error: "Internal Server Error" });
  }
});
export const getProject = asyncHandler(async (req, res) => {
  try {
    const projects = await Project.find({ user: req.user.id });
    if (!projects) {
      return res
        .status(400)
        .json({ status: false, error: "No Projects Foudnd" });
    }
    return res
      .status(201)
      .json(new ApiResponse(201, { projects }, "Project fetched"));
  } catch (error) {
    res.status(500).json({ status: false, error: "Internal Server Error" });
  }
});
export const deleteProject = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findOneAndDelete({ _id: id }); // Corrected: added await and wrapped id in an object
    if (!project) {
      return res
        .status(404)
        .json({ success: false, error: "No Project Found" }); // Corrected: status code should be 404 for not found
    }
    return res
      .status(200)
      .json({ success: true, data: project, message: "Project Deleted" }); // Corrected: status should be 200 for successful deletion
  } catch (error) {
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});
