import React from "react";

const Project = ({ project }) => {
  return (
    <div className="projects__content">
      <h3 className="projects__title">{project.title}</h3>
      <div className="projects__box">
        <p>{project.desc}</p>
        <div className="projects__ref">
          {project?.github && (
            <a href={project?.github} target="_blank">
              <i className="bx bxl-github"></i>
            </a>
          )}
          {project?.liveLink && (
            <a href={project?.liveLink} target="_blank">
              <i className="bx bx-link-alt"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
