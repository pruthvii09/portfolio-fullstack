import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: null,
};

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setAllBlogs: (state, action) => {
      state.blogs = action.payload;
    },
    addBlog: (state, action) => {
      const newBlog = action.payload;
      if (!state.blogs) {
        state.blogs = [];
      }
      state.blogs.push(newBlog);
    },
    removeAllBlogs: (state, action) => {
      state.blogs = null;
    },
    deleteBlog: (state, action) => {
      const blogId = action.payload;
      state.blogs = state.blogs.filter((blog) => blog._id !== blogId);
    },
  },
});
export const { setAllBlogs, addBlog, deleteBlog, removeAllBlogs } =
  blogSlice.actions;
export default blogSlice.reducer;
