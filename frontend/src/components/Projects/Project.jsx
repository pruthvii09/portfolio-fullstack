import React from "react";

const Project = ({ project }) => {
  return (
    <div className="projects__content">
      <h3 className="projects__title">{project.title}</h3>
      <div className="projects__box">
        <p>{project.desc}</p>
        <div className="projects__ref">
          <a href="">
            <i className="bx bxl-github"></i>
          </a>
          <a href="">
            <i className="bx bx-link-alt"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
