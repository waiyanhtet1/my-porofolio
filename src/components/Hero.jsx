import Lottie from "lottie-react";
import AnimationData from "../assets/Animation.json";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse justify-around px-5 md:flex-row">
      <div className=" text-white flex-1 flex flex-col justify-start items-center gap-4 md:justify-center">
        <p className="text-5xl md:text-7xl">Hello!</p>
        <p className="text-sm md:text-lg">Welcome from my portfolio!</p>
        <button className="bg-tertiary px-3 py-2 rounded hover:opacity-80">
          Download CV
        </button>
      </div>
      <div className="flex-1">
        <Lottie
          animationData={AnimationData}
          rendererSettings={{ className: "lottie-svg-class " }}
        />
      </div>
    </div>
  );
};

export default Hero;
