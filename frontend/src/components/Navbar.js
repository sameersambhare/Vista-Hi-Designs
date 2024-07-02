import React, { useRef } from "react";
import logo from "../images/Reel.svg";
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const Navbar = () => {
  const option = useRef("");
  const showFootwear = () => {
    return (
      <div className="detail-options w-full flex justify-between px-[5vw] bg-orange-50 py-10">
        <div className="categories list-none">
          <p className="text-[0.9vw]">Categories</p>
          {categories.map((item, index) => (
            <li className="text-[1.5vw] font-semibold" key={index}>
              {item}
            </li>
          ))}
        </div>
        <div className="shopByType list-none">
          <p className="text-[0.9vw]">Shop By Type</p>
          {shopByType.map((item, index) => (
            <li className="text-[1.5vw] font-semibold" key={index}>
              {item}
            </li>
          ))}
        </div>
        <div className="collections list-none">
          <p className="text-[0.9vw] ">Collections</p>
          {collections.map((item, index) => (
            <li className="text-[1.5vw] font-semibold" key={index}>
              {item}
            </li>
          ))}
        </div>
      </div>
    );
  };
  const shopByType = [
    "Flat Sandals",
    " Platform Sandals",
    " Water Friendly",
    " Leather Sandals",
    " Arch Support",
    "Sustainable Materials",
  ];
  const collections = [
    "Sunny Arrianah",
    "Cushion Cruz Collection",
    "Vista Sandals",
    " The Lay Day Sneaker",
    " Cushion Bondi Sandals",
    "Influencer's Top Picks",
    "Shop By Color",
  ];
  const categories = ["Sandals", "Slides", "Shoes", "Flip Flops", "Clogs"];
  return (
    <div className="NAVBAR w-full fixed z-10 top-0 left-0 bg-white">
      {/* DEALS--------------------------------------- */}
      <div className="deals w-full bg-red-900 text-[0.9vw] text-white  py-[0.4vw] text-center">
        <p className="capitalize">
          5 days, 9 hours, 48 minutes, 3 seconds | July 4th Sale: Up to 30% off
          | <Link to="/details">See Details</Link>
        </p>
      </div>
      {/* NAVBAR---------------------------------------- */}
      <div className="navbar w-full flex items-center justify-between px-12 py-4 relative">
        <div className="nav-links flex list-none gap-5">
          {["Women", "Men", "Kids", "About"].map((item, index) => (
            <li
              className="hover:underline-offset-3 decoration-orange-400"
              key={index}
            >
              {item}
            </li>
          ))}
        </div>
        <div className="logo">
          <img src={logo} alt="Reel" className="w-[100px]" />
        </div>
        <div className="nav-icons flex gap-10 text-[1.5vw]">
          <CiSearch />
          <IoPersonOutline />
          <IoBagOutline />
        </div>
      </div>
      {/* OPTIONS------------------------------------------- */}
      <div className="options w-full flex items-center justify-center text-[0.8vw] py-2 list-none gap-5 border-t-[0.1vw] border-grey-100">
        <li
          onClick={() => {
            showFootwear();
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
    </div>
  );
};

export default Navbar;
