import React from "react";
import Navbar from "./components/Navbar";
import LocomotiveScroll from "locomotive-scroll";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Account from "./components/Account";
import Home from "./components/Home";
const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <BrowserRouter>
      <div className="w-full relative box-border min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
