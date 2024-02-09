import "./App.css";
import AddBlog from "./pages/AddBlog";
import Blogs from "./pages/Blogs";
import EditProfile from "./pages/EditProfile";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import SignupPage from "./pages/SignupPage";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="font-customFont dark:bg-gray-900">
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Profile />} />
        <Route path="/dashboard/edit-profile" element={<EditProfile />} />
        <Route path="/dashboard/projects" element={<Projects />} />
        <Route path="/dashboard/blogs" element={<Blogs />} />
        <Route path="/dashboard/blogs/add-blog" element={<AddBlog />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
