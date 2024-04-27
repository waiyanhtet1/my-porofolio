import React from "react";

const ProjectCard = ({ cardNo }) => {
  return (
    <div className="bg-primary  text-white border-2 border-whitesmoke rounded">
      <img
        src="/projectImg/sushiman.png"
        alt="sushiman"
        className="w-100 h-100 object-contain"
      />
      <div className="p-5 flex flex-col gap-5">
        <h1 className="text-xl">SushiMan</h1>
        <div className="flex items-center justify-around gap-1 w-10 h-10">
          <img src="/html.svg" alt="html" />
          <img src="/css.svg" alt="html" />
        </div>
        <div className="flex">
          <button className="btn btn-secondary">Demo</button>
          <a
            href="https://github.com/waiyanhtet1"
            className="cursor-pointer hover:opacity-30 ml-5"
            target="_blank"
          >
            <ion-icon name="logo-github" size="large"></ion-icon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
