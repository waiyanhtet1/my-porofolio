import React from "react";

const Profile = () => {
  return (
    <div className=" flex flex-col lg:flex-row justify-around gap-3 text-white mx-5 md:mx-20 mt-5">
      {/* profile */}
      <div className="flex flex-col items-center gap-3 ">
        {/* user image */}
        <div className="relative">
          <img
            src="/profile.jpg"
            alt="profile"
            className="w-40 h-40 md:w-64 md:h-64 rounded-full border border-whitesmoke"
          />
          <span className="absolute right-5 bottom-3 p-2 bg-primary border border-whitesmoke rounded-full flex items-center justify-center">
            <ion-icon
              name="happy-outline"
              className="text-white"
              size="small"
            ></ion-icon>
          </span>
        </div>

        {/* user info name and email */}
        <div>
          <h1 className="text-xl md:text-3xl">Wai Yan Htet</h1>
          <h4 className="md:text-lg text-whitesmoke">waiyanhtet1</h4>
        </div>
      </div>

      {/* skills */}
      <div className="text-white">
        <h5 className="text-lg mb-3">Skills</h5>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
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
            <img src="/public/api.svg" alt="" className="w-10 h-10" />
            <span>Rest API</span>
          </div>
          <div className="skill_card">
            <img src="/public/tailwind.svg" alt="" className="w-10 h-10" />
            <span>Tailwind</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
