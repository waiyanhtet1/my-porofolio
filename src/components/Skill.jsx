import React from "react";
import Experience from "./Experience";

const Skill = () => {
  return (
    <div className="flex flex-col gap-20 lg:w-3/5">
      <div className="text-white">
        <h5 className="title">Skills</h5>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <div className="skill_card">
            <img src="/public/html.svg" alt="" className="w-10 h-10" />
            <span>HTML</span>
          </div>
          <div className="skill_card">
            <img src="/public/css.svg" alt="" className="w-10 h-10" />
            <span>CSS</span>
          </div>
          <div className="skill_card">
            <img src="/public/javascript.svg" alt="" className="w-10 h-10" />
            <span>Javascript</span>
          </div>
          <div className="skill_card">
            <img src="/public/typescript.svg" alt="" className="w-10 h-10" />
            <span>Typescript</span>
          </div>
          <div className="skill_card">
            <img src="/public/react.svg" alt="" className="w-10 h-10" />
            <span>React</span>
          </div>
          <div className="skill_card">
            <img src="/public/nodejs.svg" alt="" className="w-10 h-10" />
            <span>Node / Express</span>
          </div>

          <div className="skill_card">
            <img src="/public/mongodb.svg" alt="" className="w-10 h-10" />
            <span>MongoDB</span>
          </div>

          <div className="skill_card">
            <img src="/public/api.svg" alt="" className="w-10 h-10" />
            <span>Rest API</span>
          </div>
          <div className="skill_card">
            <img src="/public/tailwind.svg" alt="" className="w-10 h-10" />
            <span>Tailwind</span>
          </div>
        </div>
      </div>

      <Experience />

      <div className="border-b-2 w-full border-whitesmoke mt-[-50px]" />
    </div>
  );
};

export default Skill;
