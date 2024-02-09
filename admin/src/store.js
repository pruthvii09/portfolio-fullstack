import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./redux/userSclice.js";
import projectReducer from "./redux/productSclice.js";
import blogReducer from "./redux/blogSlice.js";

export const store = configureStore({
  reducer: {
    user: userReducer,
    projects: projectReducer,
    blogs: blogReducer,
  },
});
