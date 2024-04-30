import React from "react";

const ProjectCard = ({ data }) => {
  return (
    <div className="h-max bg-primary  text-white border-2 border-whitesmoke rounded">
      <img
        src={`/projectImg/${data.img}`}
        alt=""
        className="w-full h-1/2 object-contain"
      />
      <div className="p-5 flex flex-col gap-5">
        <h1 className="text-xl">{data.title}</h1>
        <div className="flex items-center justify-around gap-3 w-8 md:w-10 h-8 md:h-10">
          {data.technology.map((tech) => (
            <img src={`/${tech}.svg`} alt="" key={tech} />
          ))}
        </div>
        <div className="flex">
          {data.githubBackend ? (
            <>
              <a
                href={data.github}
                className="btn btn-secondary"
                target="_blank"
              >
                Frontend
              </a>
              <a
                href={data?.githubBackend}
                className="btn btn-secondary ml-3"
                target="_blank"
              >
                Backend
              </a>
            </>
          ) : (
            <>
              <a href={data.demo} target="_blank" className="btn btn-secondary">
                Demo
              </a>
              <a
                href={data.github}
                className="cursor-pointer hover:opacity-30 ml-5"
                target="_blank"
              >
                <ion-icon name="logo-github" size="large"></ion-icon>
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
