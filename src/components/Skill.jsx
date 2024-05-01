import React from "react";
import { skills } from "../utils/skills";
import Experience from "./Experience";
import SkillTag from "./SkillTag";

const Skill = () => {
  return (
    <div className="flex flex-col gap-20 lg:w-3/5">
      <div className="text-white">
        <h5 className="title">Skills</h5>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {skills.map((skill, i) => (
            <SkillTag
              key={`${skill.title}_${i}`}
              title={skill.title}
              img={skill.img}
            />
          ))}
        </div>
      </div>

      <Experience />

      <div className="border-b-2 w-full border-whitesmoke mt-[-50px]" />
    </div>
  );
};

export default Skill;
