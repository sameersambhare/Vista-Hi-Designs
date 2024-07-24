import React, { useEffect, useState } from "react";
import { imageMenu } from "../constants";
import gsap from 'gsap'
const Landing = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    gsap.timeline().fromTo('.heading h1', {
      y: 200,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 0.7,
      delay: 0.2,
    }).to('.overlay0', {
      y: '-94.5vw',
      duration: 1.7,
      delay:0.2,
      ease: "power2.inOut"
    })
  }, [])
  return (
    <div className="w-full min-h-screen bg-zinc-800 text-white mt-[116px]">
      {/* HEADING---------------------- */}
      <div className="heading w-full text-center pt-10">
        <div className="overflow-hidden">
          <h1 className="font-bold text-['Inter'] text-[12.8vw] leading-none tracking-tight">
            OLIVIA PONTON
          </h1>
        </div>
        <div className="sub-heading flex justify-between text-[1.5vw] font-bold px-8">
          <h3 className="font-['Inter']">REEF X OLIVIA PONTON</h3>
          <h3 className="font-['Playfair_Display'] font-light">Vista Hi-Energy </h3>
        </div>
      </div>
      {/* BANNER----------------------------- */}
      <div className="banner-image px-8 overflow-hidden py-10">
        <div className="w-[94.5vw] h-[31.6vw] relative overflow-hidden ">
          <div className="overlay0 w-full h-full bg-zinc-800 z-[8] absolute top-0 left-0"></div>
          <img
            src={imageMenu[currentImageIndex].url}
            alt="Banner"
            className="object-cover rounded-lg border-[0.1vw] border-[transparent]"
          />
        </div>

        <div className="options-size w-full flex px-8 mt-10 justify-between items-center">
          <div className="options flex">
            {imageMenu.map((item, index) => (
              <div className="flex flex-col" key={index}>
                <img
                  src={item.photo}
                  alt=""
                  onClick={() => {
                    setCurrentImageIndex(index);
                  }}
                  className="w-[85px] cursor-pointer"
                />
                {index === currentImageIndex ? (
                  <div className="line w-full h-[0.3vw] bg-blue-400 mt-[0.5vw] ml-[0.6vw]"></div>
                ) : null}
              </div>
            ))}
          </div>
          <div className="selection-btn">
            <p className="capitalize py-[0.6vw] px-[4.5vw] text-[0.8vw] bg-white text-black rounded-full hover:bg-[#d2d1cf] ">
              select your size
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
