import React from "react";
import { format, parseISO } from "date-fns";
const Blog = ({ blog, username }) => {
  const getDescriptionWithoutHTML = (htmlString) => {
    const temporaryElement = document.createElement("div");
    temporaryElement.innerHTML = htmlString;
    return temporaryElement.textContent || temporaryElement.innerText || "";
  };
  return (
    <div className="blogs__content">
      <h3 className="blogs__title">{blog?.title}</h3>
      <div className="blogs__box">
        <p>
          {getDescriptionWithoutHTML(blog?.desc).substring(0, 65)}.......{" "}
          <div className="blogs__readmore">
            <a href={`/${username}/blog/${blog?._id}`}>Read More</a>{" "}
            <i className="bx bx-right-arrow-alt"></i>
          </div>
        </p>
        <div className="blogs__date">
          {format(parseISO(blog?.createdAt), "MMMM dd, yyyy")}
        </div>
      </div>
    </div>
  );
};

export default Blog;
