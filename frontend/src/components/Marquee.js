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
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".Marquee",
          start: "-15% top",
        },
      })
      .to(".overlay1", {
        y: "-23vw",
        duration: 1,
        ease: "power2.inOut",
      })
      .to(".overlay2", {
        y: "-27vw",
        duration: 1,
        ease: "power2.inOut",
      });
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
      className="Marquee w-full min-h-screen pt-10 items-center flex bg-zinc-800 overflow-hidden  justify-center flex-col relative"
    >
      <div className="w-full flex justify-end px-8">
        <div className="marquee-top-image w-[34vw] h-[23vw] relative overflow-hidden">
          <div className="overlay1 h-full w-full absolute top-0 left-0 bg-zinc-800 z-[8]"></div>
          <img src={MarqueeTop} alt="" className="w-full object-cover" />
        </div>
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
      <div className="w-full flex justify-start">
        <div className="marquee-bottom-image w-[22vw] h-[27vw] relative overflow-hidden mb-7 ml-[20vw]">
          <div className="overlay2 h-full w-full absolute top-0 left-0 z-[8] bg-zinc-800"></div>
          <img src={MarqueeBottom} alt="" className="w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Marquee;
