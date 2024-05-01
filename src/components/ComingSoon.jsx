import React from "react";
import { commingProject as data } from "../utils/projectData";

const ComingSoon = () => {
  return (
    <div className="h-max md:h-full bg-primary  text-white border-2 border-whitesmoke rounded">
      <h1 className="text-xl p-3 h-1/2 flex items-center justify-center">
        Coming Soon...
      </h1>
      <div className="p-5 flex flex-col gap-5">
        <h1 className="text-xl">{data.title}</h1>
        <div className="flex items-center justify-around gap-3 w-8 md:w-10 h-8 md:h-10">
          {data.technology.map((tech) => (
            <img src={`/${tech}.svg`} alt="" key={tech} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
