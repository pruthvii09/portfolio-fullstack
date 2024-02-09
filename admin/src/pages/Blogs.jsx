import React from "react";
import Sidebar from "../components/SideBar";
import { Edit, MoveRight, Plus, Trash2 } from "lucide-react";
import ProjectCard from "../components/Skeleton/ProjectCard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import getAPIData from "../hooks/getApiData";
import { useEffect } from "react";
import { format, parseISO } from "date-fns";
import axios from "axios";
import { deleteBlog, setAllBlogs } from "../redux/blogSlice.js";
import toast from "react-hot-toast";

const Blogs = () => {
  const { blogs } = useSelector((store) => store.blogs);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_NODE_API}/blogs/${id}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      if (response) {
        dispatch(deleteBlog(id));
        toast.success("Blog Deleted Successfully");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const { data, getLoading, getError } = getAPIData(
    `${import.meta.env.VITE_NODE_API}/blogs`,
    {
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
    }
  );
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    if (!getError || !getLoading) {
      dispatch(setAllBlogs(data?.data?.blogs));
    }
  }, [data, getLoading, getError]);
  return (
    <Sidebar>
      <div>
        <div className="flex justify-between">
          <h1 className="sm:text-3xl text-2xl">Your Blogs</h1>
          <button
            onClick={() => navigate("/dashboard/blogs/add-blog")}
            className="flex gap-2 rounded-md hover:bg-blue-600 bg-blue-700 items-center px-2 py-1"
          >
            Add Blog
            <Plus size={18} />
          </button>
        </div>
        <div className="flex items-center justify-center sm:justify-start flex-wrap gap-4 mt-5">
          {getLoading ? (
            <ProjectCard />
          ) : (
            blogs &&
            blogs?.map((blog) => (
              <div
                key={blog?.id}
                className="block relative w-80 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <div className="absolute right-2 top-2 flex gap-2">
                  <Edit size={18} />
                  <Trash2
                    onClick={() => handleDelete(blog?._id)}
                    size={18}
                    color="red"
                  />
                </div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {blog.title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {format(parseISO(blog?.createdAt), "MMMM dd, yyyy")}
                </p>
                <div className="flex cursor-pointer font-bold text-blue-600 gap-1">
                  Read More <MoveRight />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Sidebar>
  );
};

export default Blogs;
