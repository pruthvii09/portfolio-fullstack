import React from "react";
import "./Projects.css";
import NotFoundImg from "../../assets/not-found.svg";
import Project from "./Project";
import { useSelector } from "react-redux";
const Skills = () => {
  const { user } = useSelector((store) => store.user);
  console.log(user);
  const projects = user?.projects;
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">My Projects</h2>
      <span className="section__subtitle">
        Take a looks at projects I have built
      </span>
      {projects?.length > 0 ? (
        <div className="projects__container container grid">
          {projects?.map((project) => (
            <Project project={project} key={project?.id} />
          ))}
        </div>
      ) : (
        <div className="not_found">
          <img src={NotFoundImg} alt="" />
          <p>No Blogs Found</p>
        </div>
      )}
      {/* {projects?.length > 0 && <a className="all_projects">View All</a>} */}
    </section>
  );
};

export default Skills;
