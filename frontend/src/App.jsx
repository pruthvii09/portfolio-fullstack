import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<MainPage />} path="/" />
        <Route element={<MainPage />} path="/:username" />
        <Route element={<BlogPage />} path="/:username/blog/:id" />
      </Routes>
    </>
  );
}

export default App;
