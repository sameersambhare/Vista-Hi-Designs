import React from "react";
import Landing from "./Landing";
import Marquee from "./Marquee";
import Coming from "./Coming";
import Slider from "./Slider";
const Home = () => {
  return (
    <div className="w-full relative box-border min-h-screen">
      <Landing />
      <Marquee />
      {/* <Slider /> */}
      <Coming />
    </div>
  );
};

export default Home;
