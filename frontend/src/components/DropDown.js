import React from "react";
import { collections, shopByType, categories } from "../constants";
import { Link } from "react-router-dom";
const DropDown = () => {
  return (
    <div className="detail-options w-full flex justify-between px-[5vw] bg-white py-10">
      <div className="categories list-none flex flex-col gap-3">
        <p className="text-[0.9vw]">Categories</p>
        {categories.map((item, index) => (
          <div className="flex items-center gap-1 cursor-pointer" key={index}>
            <img src={item.iconimg} alt="" className="w-[2.8vw]" />
            <Link to={item.url}>
              <li className="text-[1.3vw] font-semibold">{item.id}</li>
            </Link>
          </div>
        ))}
      </div>
      <div className="shopByType list-none flex flex-col gap-3">
        <p className="text-[0.9vw]">Shop By Type</p>
        {shopByType.map((item, index) => (
          <div className="flex items-center gap-1" key={index}>
            <img src={item.img} alt="" className="w-[2.8vw]" />
            <Link to={item.url}>
              <li className="text-[1.3vw] font-semibold">{item.id}</li>
            </Link>
          </div>
        ))}
      </div>
      <div className="collections list-none flex flex-col gap-3">
        <p className="text-[0.9vw] ">Collections</p>
        {collections.map((item, index) => (
          <div className="flex items-center gap-1" key={index}>
            <img src={item.img} alt="" className="w-[2.8vw]" />
            <Link to={item.url}>
              <li className="text-[1.3vw] font-semibold">{item.id}</li>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropDown;
