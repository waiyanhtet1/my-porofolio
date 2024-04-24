import React from "react";

const Profile = () => {
  return (
    <div className="flex gap-3 text-white mx-20 ">
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
    </div>
  );
};

export default Profile;
