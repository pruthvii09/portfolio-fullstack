import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: null,
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
    addProject: (state, action) => {
      const newProject = action.payload;
      if (!state.projects) {
        state.projects = [];
      }
      state.projects.push(newProject);
    },
    removeAllProjects: (state, action) => {
      state.projects = null;
    },
    deleteProject: (state, action) => {
      const projectIdToDelete = action.payload;
      state.projects = state.projects.filter(
        (project) => project._id !== projectIdToDelete
      );
    },
  },
});
export const { setProjects, addProject, deleteProject, removeAllProjects } =
  projectSlice.actions;
export default projectSlice.reducer;
