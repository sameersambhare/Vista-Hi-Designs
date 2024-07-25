import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Banner from "../images/banner-slider.jpg";

const Slider = () => {
  // useGSAP(() => {
  //     gsap.registerPlugin(ScrollTrigger);
  //     gsap.timeline({
  //         scrollTrigger: {
  //             trigger: ".slider",
  //             // markers: true,
  //             start: "top top",
  //             pin: true,
  //             scrub: 1,
  //         }
  //     }).to(".left", {
  //         translateX: -600,
  //         duration: 0.4,
  //     }, "same")
  //         .to(".right", {
  //             translateX: 600,
  //             duration: 0.4,
  //         }, "same")
  //         .to(".center", {
  //             scale: 30,
  //             duration: 0.4,
  //         }, "same");
  // }, []);

  return (
    <div className="slider w-full h-screen relative overflow-hidden">
      {/* Background Image */}
      <img
        src={Banner}
        alt=""
        className="absolute inset-0 object-cover w-full h-full"
      />

      {/* Box with Clip Path */}
      <div className="box w-full h-screen bg-zinc-200  flex items-center justify-center absolute top-0 left-0">
      </div>
    </div>
  );
};

export default Slider;
