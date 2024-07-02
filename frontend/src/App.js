import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Marquee from "./components/Marquee";
import Coming from "./components/Coming";
import LocomotiveScroll from "locomotive-scroll";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <BrowserRouter>
      <div className="w-full relative box-border min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/details" />
        </Routes>
        <Landing />
        <Marquee />
        <Coming />
      </div>
    </BrowserRouter>
  );
};

export default App;
