import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";
import { useRef, useState } from "react";
import hireMe from "../assets/HireMe.json";
import Input from "./Input";
import Spinner from "./Spinner";

const ContactUs = () => {
  const form = useRef();

  const [userInput, setUserInput] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [sendMail, setSendMail] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      userInput.user_name.length === 0 ||
      userInput.user_email.length === 0 ||
      userInput.message.length === 0
    ) {
      setError("Fill all form");
      return;
    }

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

  const handleChange = (e) => {
    setUserInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  return (
    <div className="text-white m-5 md:mx-20">
      <div className="text-2xl mb-10 text-center">Contact Me</div>
      <div className="flex justify-center items-center">
        <div className="absolute md:static">
          <Lottie animationData={hireMe} />
        </div>
        <form
          action=""
          className="relative w-full md:w-2/4 flex flex-col gap-7 mb-10 opacity-80"
          ref={form}
          onSubmit={sendEmail}
        >
          <Input
            placeholder="Name"
            type="text"
            name="user_name"
            value={userInput.user_name}
            onChange={handleChange}
          />
          <Input
            placeholder="Email"
            type="email"
            name="user_email"
            value={userInput.user_email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            id=""
            rows="5"
            placeholder="Subject"
            onChange={handleChange}
            className="bg-primary px-4 py-3 border-2 border-whitesmoke rounded-md focus:outline-none focus:border-secondary"
          ></textarea>
          {error && <span className="text-red">{error}</span>}
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
