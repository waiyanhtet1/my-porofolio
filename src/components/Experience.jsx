import React from "react";

const Experience = () => {
  return (
    <div>
      <h5 className="title">Experience</h5>

      <div className="border-b-2 w-full border-whitesmoke" />

      <ul className="mt-8">
        <li className="border-l-2 border-whitesmoke relative">
          <p className="flex items-center gap-3">
            <span className="absolute -left-4 bg-primary">
              <ion-icon
                name="checkmark-done-circle-outline"
                size="large"
              ></ion-icon>
            </span>
            <h3 className="ml-7 md:ml-10 text-sm md:text-base">
              Internship as Junior at{" "}
              <span className="text-tertiary">
                Lyrion Innovations, Mingalar Taung Nyunt, Yangon
              </span>
            </h3>
          </p>
          <h5 className="ml-7 md:ml-10 mt-3 text-xs md:text-sm text-whitesmoke ">
            March 2022 - May 2022
          </h5>
          <ul className=" text-sm md:text-base text-secondary ml-8 md:ml-14 mt-3 list-disc flex flex-col gap-3">
            <li>
              Worked alone as sample landing page website with animaton and some
              data handling.
            </li>
            <li>
              Team collaboration witth ecommerce webiste handled frontend and
              backed.
            </li>
          </ul>
        </li>

        <li className="border-l-2 border-whitesmoke pt-14 relative">
          <p className="flex items-center gap-3">
            <span className="absolute -left-4 bg-primary">
              <ion-icon
                name="checkmark-done-circle-outline"
                size="large"
              ></ion-icon>
            </span>
            <h3 className="ml-7 md:ml-10 text-sm md:text-base">
              Frontend Developer at{" "}
              <span className="text-tertiary">Anaget Company, Remote</span>
            </h3>
          </p>
          <h5 className="ml-7 md:ml-10 mt-3 text-xs md:text-sm text-whitesmoke">
            October 2022 - September 2023
          </h5>
          <ul className="text-sm md:text-base text-secondary ml-8 md:ml-14 mt-3 list-disc flex flex-col gap-3">
            <li>woked as frontend team leader for ui design and ux concept.</li>
            <li>
              collaboration with team members for better desgin principle and
              code concept.
            </li>
            <li>
              experienced as pure css and react not using package manager like
              npm, their concept is to write pure code without depending npm
              packages.
            </li>
            <li>
              communication skills and discussion with team members in metting.
            </li>
            <li>achieved time management and complete coding in due date.</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Experience;
