import React, { useState } from "react";
import logo from "../images/Reel.svg";
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import DropDown from "./DropDown";
const Navbar = () => {
  const [currentIndex, setCurrentindex] = useState(0);
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <div
      className="NAVBAR w-full fixed z-10 top-0 left-0 bg-white"
      onMouseLeave={() => {
        setShowDropDown(false);
      }}
    >
      {/* DEALS--------------------------------------- */}
      <div className="deals w-full bg-[#7A1414] text-[0.9vw] text-white  py-[0.4vw] text-center">
        <p className="capitalize">
          5 days, 9 hours, 48 minutes, 3 seconds | July 4th Sale: Up to 30% off
          |{" "}
          <Link to="/details">
            <span className="underline">See Details</span>
          </Link>
        </p>
      </div>
      {/* NAVBAR---------------------------------------- */}
      <div className="navbar w-full flex items-center justify-between px-12 py-4 relative">
        <div className="nav-links flex list-none gap-5">
          {navLinks.map((item, index) => (
            <div className="flex flex-col relative cursor-pointer" key={index}>
              <Link to={item.url}>
                <li
                  onClick={() => {
                    setCurrentindex(index);
                  }}
                >
                  {item.id}
                </li>
              </Link>
              {index === currentIndex ? (
                <div className="line w-full h-[0.3vw] bg-blue-400  absolute top-[2.5vw] left-0"></div>
              ) : null}
            </div>
          ))}
        </div>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Reel" className="w-[100px] cursor-pointer" />
          </Link>
        </div>
        <div className="nav-icons flex gap-10 text-[1.5vw]">
          <Link to="/search">
            <CiSearch className="cursor-pointer" />
          </Link>
          <Link to="/account">
            <IoPersonOutline className="cursor-pointer" />
          </Link>
          <Link to="/cart">
            {" "}
            <div className="cart relative">
              <div className="no-of-items absolute top-0 right-[-0.7vw] bg-[#38B9C5] w-[1.2vw] h-[1.2vw] rounded-full flex items-center justify-center ">
                <p className="text-[0.8vw] text-white">0</p>
              </div>
              <IoBagOutline className="cursor-pointer" />
            </div>
          </Link>
        </div>
      </div>
      {/* OPTIONS------------------------------------------- */}
      <div className="options w-full flex items-center justify-center text-[0.8vw] py-2 list-none gap-5 border-t-[0.1vw] border-grey-100">
        <li
          onMouseEnter={() => {
            setShowDropDown(true);
          }}
        >
          Footwear
        </li>
        <li>Apprael</li>
        <li>Shop All</li>
        <li> | </li>
        <li>Summer Sandals 🔥</li>
        <li>New Arrivals</li>
        <li>Best Sellers</li>
        <li>Sale</li>
      </div>
      {showDropDown && <DropDown />}
    </div>
  );
};

export default Navbar;
