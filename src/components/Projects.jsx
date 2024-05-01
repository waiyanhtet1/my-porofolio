import Lottie from "lottie-react";
import React from "react";
import projectAnimation from "../assets/projectAnimation.json";
import { projectData } from "../utils/projectData";
import ComingSoon from "./ComingSoon";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="m-5 md:mx-20">
      <div className="title">Projects</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projectData.map((data) => (
          <ProjectCard key={data.id} data={data} />
        ))}

        {/* comming soon */}
        <ComingSoon />

        <div className="flex flex-col">
          <Lottie animationData={projectAnimation} />
          <p className="text-center mt-[-60px] text-lg text-white">
            Working on more projects!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
