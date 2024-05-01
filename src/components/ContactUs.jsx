import Lottie from "lottie-react";
import hireMe from "../assets/HireMe.json";
import Input from "./Input";

const ContactUs = () => {
  return (
    <div className="text-white m-5 md:mx-20">
      <div className="text-2xl mb-10 text-center">Contact Me</div>
      <div className="flex justify-center items-center">
        <div className="absolute md:static">
          <Lottie
            animationData={hireMe}
            rendererSettings={{ className: "opacti" }}
          />
        </div>
        <form
          action=""
          className="relative w-full md:w-2/4 flex flex-col gap-7 mb-10 opacity-80"
        >
          <Input placeholder="Name" type="text" />
          <Input placeholder="Email" type="email" />
          <textarea
            name=""
            id=""
            rows="5"
            placeholder="Subject"
            className="bg-primary px-4 py-3 border-2 border-whitesmoke rounded-md focus:outline-none focus:border-secondary"
          ></textarea>
          <button className="btn btn-primary w-32 self-end">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
