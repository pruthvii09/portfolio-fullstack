import React, { useEffect, useState } from "react";
import "../style/blogpage.css";
import { useParams } from "react-router-dom";
import { format, parseISO } from "date-fns";
import Error from "../components/Error/Error";
import Loader from "../components/Loader/Loader";
const BlogPage = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data for the specified username
        const response = await fetch(
          `${import.meta.env.VITE_NODE_API}/blogs/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        if (!response.ok) {
          throw new Error("Failed to fetch sample data");
        }
        const responseData = await response.json();
        setBlogData(responseData?.blog);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }
  return (
    <div className="blog__container">
      <div>
        <h1>{blogData?.title}</h1>
        <p> {format(parseISO(blogData?.createdAt), "MMMM dd, yyyy")}</p>
      </div>
      <div
        className="blog__desc"
        dangerouslySetInnerHTML={{ __html: blogData?.desc }}
      />
    </div>
  );
};

export default BlogPage;
