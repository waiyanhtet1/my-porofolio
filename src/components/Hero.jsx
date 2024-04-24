import Lottie from "lottie-react";
import AnimationData from "../assets/Animation.json";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse justify-around items-center px-5 md:flex-row h-screen">
      {/* content info */}
      <div className="text-white md:hidden flex flex-col items-center gap-3 pb-3">
        <p className="flex items-center gap-2">
          <ion-icon name="mail-outline"></ion-icon>
          <span>waiyanhtet1661390@gmail.com</span>
        </p>
        <p className="flex items-center gap-2">
          <ion-icon name="call-outline"></ion-icon>
          <span>09 787 575 012, 09 420 156 224</span>
        </p>
        <a
          href="https://github.com/waiyanhtet1"
          className="cursor-pointer hover:opacity-30"
        >
          <ion-icon name="logo-github" size="large"></ion-icon>
        </a>
      </div>

      {/* welcome section */}
      <div className=" text-white flex-1 flex flex-col justify-start items-center gap-4 md:justify-center">
        <p className="text-5xl md:text-7xl">Hello!</p>
        <p className="text-sm md:text-lg">Welcome from my portfolio!</p>
        <a
          href="/public/WYH_CV.pdf"
          download="Wai Yan Htet's CV.pdf"
          className="btn btn-primary"
        >
          Download CV
        </a>
      </div>

      {/* animatin section */}
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
