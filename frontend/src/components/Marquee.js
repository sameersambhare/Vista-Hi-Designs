import React, { useEffect, useRef } from "react";
import MarqueeTop from "../images/marquee_top.png";
import MarqueeBottom from "../images/marquee_bottom.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";
const Marquee = () => {
  const startTrigger = useRef(null);
  const startScroll = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(
      startScroll.current,
      {
        translateX: 0,
      },
      {
        translateX: -3000,
        ease: "none",
        duration: 0.8,
        scrollTrigger: {
          trigger: startTrigger.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      }
    );
  }, []);
  return (
    <div
      ref={startTrigger}
      style={{
        background: "rgb(39,39,42)",
        background:
          "linear-gradient(180deg, rgba(39,39,42,1) 0%, rgba(39,38,38,1) 45%, rgba(112,112,112,1) 100%)",
      }}
      className="Marquee w-full min-h-screen pt-10 items-center flex  overflow-hidden  justify-center flex-col relative"
    >
      <div className="marquee-top-image w-full text-right px-8 flex justify-end">
        <img src={MarqueeTop} alt="" />
      </div>
      <div className="scrolling whitespace-nowrap ">
        <motion.h2
          className=" text-white mt-3 font-['Playfair_Display'] text-[2.1vw] leading-none font-extralight"
          initial={{ x: 0 }}
          animate={{ x: 200 }}
          transition={{ ease: "linear", duration: 2.5, repeat: Infinity }}
        >
          Reef X Olivia Ponton Reef X Olivia Ponton Reef X Olivia PontonReef X
          Olivia PontonReef X Olivia Ponton Olivia PontonReef X Olivia Ponton
        </motion.h2>
      </div>
      <div className="scroller">
        <div className="outer">
          <div ref={startScroll} className="inner">
            <div className="items flex leading-none text-white text-[12vw] font-bold whitespace-nowrap gap-10 tracking-tight">
              <h1 className="font-['inter']">
                REEF <span className="font-['Playfair_Display']">X</span> OLIVIA
                PONTON
              </h1>
              <h1 className="font-['inter']">
                REEF <span className="font-['Playfair_Display']">X</span> OLIVIA
                PONTON
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="scrolling whitespace-nowrap ">
        <motion.h2
          className=" text-white mb-3 font-['Playfair_Display'] text-[2.1vw] leading-none font-extralight"
          initial={{ x: 0 }}
          animate={{ x: -200 }}
          transition={{ ease: "linear", duration: 2.5, repeat: Infinity }}
        >
          Reef X Olivia Ponton Reef X Olivia Ponton Reef X Olivia PontonReef X
          Olivia PontonReef X Olivia Ponton Olivia PontonReef X Olivia Ponton
        </motion.h2>
      </div>
      <div className="marquee-bottom-image px-8 w-full justify-start flex items-center pb-10">
        <img src={MarqueeBottom} alt="" />
      </div>
    </div>
  );
};

export default Marquee;
