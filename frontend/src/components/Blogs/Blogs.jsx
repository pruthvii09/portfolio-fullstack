import React from "react";
import "./Blog.css";
import NotFoundImg from "../../assets/not-found.svg";
import Blog from "./Blog";
import { useSelector } from "react-redux";
const Skills = () => {
  const { user } = useSelector((store) => store.user);
  const blogs = user?.blogs;
  const username = user?.user?.username;
  return (
    <section className="blogs section" id="blogs">
      <h2 className="section__title">My blogs</h2>
      <span className="section__subtitle">
        Take a looks at my personal blogs
      </span>
      {blogs?.length > 0 ? (
        <div className="blogs__container container grid">
          {blogs?.map((blog) => (
            <Blog username={username} blog={blog} key={blog.id} />
          ))}
        </div>
      ) : (
        <div className="not_found">
          <img src={NotFoundImg} alt="" />
          <p>No Blogs Found</p>
        </div>
      )}
    </section>
  );
};

export default Skills;
