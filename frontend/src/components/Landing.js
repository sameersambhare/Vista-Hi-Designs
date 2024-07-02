import React, { useState } from "react";
import OrangeAdd from "../images/orange_2.png";
import BlackAdd from "../images/black-add.png";
import PinkAdd from "../images/pink-add.png";
import WhiteAdd from "../images/white-add.png";
import BlueAdd from "../images/blue-add.png";
import GreenAdd from "../images/green-add.png";
import Black from "../images/black.png";
import Orange from "../images/orange.png";
import Pink from "../images/Pink.png";
import Green from "../images/green.png";
import Blue from "../images/blue.png";
import White from "../images/white.png";
const Landing = () => {
  const imageMenu = [
    { photo: Orange, url: OrangeAdd },
    { photo: Pink, url: PinkAdd },
    { photo: Green, url: GreenAdd },
    { photo: Blue, url: BlueAdd },
    { photo: Black, url: BlackAdd },
    { photo: White, url: WhiteAdd },
  ];
  const [photo,setPhoto]=useState(OrangeAdd)
  return (
    <div className="w-full min-h-screen bg-zinc-800 text-white mt-[116px]">
      {/* HEADING---------------------- */}
      <div className="heading w-full text-center pt-10">
        <h1 className="font-bold text-['Inter'] text-[12.8vw] leading-none  tracking-tight">
          OLIVIA PONTON
        </h1>
        <div className="sub-heading flex justify-between text-[1.5vw] font-bold px-8">
          <h3 className="font-['Inter']">REEF X OLIVIA PONTON</h3>
          <h3 className="font-['Playfair_Display'] font-light">
            Vista Hi-Energy
          </h3>
        </div>
      </div>
      {/* BANNER----------------------------- */}
      <div className="banner-image px-8  overflow-hidden py-10">
        <img
          src={photo}
          alt="Banner"
          className="object-cover rounded-lg border-[0.1vw] border-[transparent]"
        />
        <div className="options-size w-full flex px-8 mt-10 justify-between items-center">
          <div className="options flex">
            {imageMenu.map((item, index) => (
              <img key={index} src={item.photo} alt="" onClick={()=>{setPhoto(item.url)}} className="w-[85px] cursor-pointer" />
            ))}
          </div>
          <div className="selection-btn">
            <p className=" capitalize py-[0.6vw] px-[4.5vw] text-[0.8vw] bg-white text-black rounded-full ">
              select your size
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
