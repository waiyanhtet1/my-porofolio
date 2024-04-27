import Lottie from "lottie-react";
import React from "react";
import projectAnimation from "../assets/projectAnimation.json";
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

        <div className="flex flex-col">
          <Lottie animationData={projectAnimation} />
          <p className="text-center mt-[-60px] text-lg text-white">
            More working on projects!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
