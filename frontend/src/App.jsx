import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import BlogPage from "./pages/BlogPage";
import AllBlogs from "./pages/AllBlogsPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<MainPage />} path="/" />
        <Route element={<MainPage />} path="/:username" />
        <Route element={<BlogPage />} path="/:username/blog/:id" />
        <Route element={<AllBlogs />} path="/:username/blog" />
      </Routes>
    </>
  );
}

export default App;
