import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";
import { useRef, useState } from "react";
import hireMe from "../assets/HireMe.json";
import Input from "./Input";
import Spinner from "./Spinner";

const ContactUs = () => {
  const form = useRef();
  const [sendMail, setSendMail] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm("service_g2syvmn", "template_2p83qld", form.current, {
        publicKey: "EWCuvZZRqVnNa6-pX",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSendMail(true);
          setLoading(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSendMail(false);
          setLoading(false);
        }
      );
  };

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
          ref={form}
          onSubmit={sendEmail}
        >
          <Input placeholder="Name" type="text" name="user_name" />
          <Input placeholder="Email" type="email" name="user_email" />
          <textarea
            name="message"
            id=""
            rows="5"
            placeholder="Subject"
            className="bg-primary px-4 py-3 border-2 border-whitesmoke rounded-md focus:outline-none focus:border-secondary"
          ></textarea>
          {sendMail ? (
            "Email Sent! Thanks for contacting me."
          ) : isLoading ? (
            <Spinner />
          ) : (
            <button className="btn btn-primary w-32 self-end">Send</button>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
