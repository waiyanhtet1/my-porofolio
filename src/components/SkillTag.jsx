import React from "react";

const SkillTag = ({ title, img }) => {
  return (
    <div className="skill_card">
      <img src={`/public/${img}.svg`} alt="" className="w-10 h-10" />
      <span>{title}</span>
    </div>
  );
};

export default SkillTag;
