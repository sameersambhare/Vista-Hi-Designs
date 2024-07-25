import React from "react";
import Landing from "./Landing";
import Marquee from "./Marquee";
import Coming from "./Coming";
import Slider from "./Slider";
import Footer from "./Footer";
const Home = () => {
  return (
    <div className="w-full relative box-border min-h-screen">
      <Landing />
      <Marquee />
      <Footer />
    </div>
  );
};

export default Home;
