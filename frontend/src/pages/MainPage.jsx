import React from "react";
import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";
import Blogs from "../components/Blogs/Blogs";
import Footer from "../components/Footer/Footer";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "../components/Loader/Loader";
import Error from "../components/Error/Error";
const MainPage = () => {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (username) {
          // Fetch data for the specified username
          const response = await fetch(
            `${import.meta.env.VITE_NODE_API}/users/${username}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const responseData = await response.json();
          setUserData(responseData);
        } else {
          const response = await fetch(
            `${import.meta.env.VITE_NODE_API}/users/sample`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch sample data");
          }
          const responseData = await response.json();
          setUserData(responseData);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }
  return (
    <main className="main">
      <Home user={userData?.user} />
      <Projects projects={userData?.projects} />
      <Blogs username={username} blogs={userData?.blogs} />
      <Footer />
    </main>
  );
};

export default MainPage;
