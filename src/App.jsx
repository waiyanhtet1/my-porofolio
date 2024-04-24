import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="font-poppins h-screen">
      <Navbar />
      <Hero />
      <Profile />
    </div>
  );
};

export default App;
