import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Carousel from "./components/Slider/Carousel";

const App = () => {
  return (
    <div className="font-poppins h-screen">
      <Navbar />
      <Hero />
      <Profile />
      <Carousel />
    </div>
  );
};

export default App;
