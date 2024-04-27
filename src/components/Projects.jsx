import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="m-5">
      <div className="title">Projects</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
