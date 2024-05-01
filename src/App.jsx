import ContactUs from "./components/ContactUs";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="font-poppins h-screen">
      <Navbar />
      <Hero />
      <Profile />
      <Projects />
      <ContactUs />
    </div>
  );
};

export default App;
