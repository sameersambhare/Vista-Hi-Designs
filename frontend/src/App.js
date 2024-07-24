import React from "react";
import Navbar from "./components/Navbar";
import LocomotiveScroll from "locomotive-scroll";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Account from "./components/Account";
import Home from "./components/Home";
import Cart from "./components/Cart";
import CreateAccount from "./components/CreateAccount";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <BrowserRouter>
      <div className="w-full relative box-border min-h-screen overflow-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" />
          <Route path="/account" element={<Account />} />
          <Route path="/createaccount" element={<CreateAccount />} />
        </Routes>
        <ToastContainer theme="dark" />
      </div>
    </BrowserRouter>
  );
};

export default App;
