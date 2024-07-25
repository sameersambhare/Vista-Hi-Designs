import React from "react";
import { AboutUs, Information, CustomerCare } from "../constants";
import footerVid from '../videos/footerVid.mp4'
import { Locations } from "../constants";
const Footer = () => {
    return <div className="footer w-full min-h-screen bg-zinc-500 relative">
        <video autoPlay muted style={{ width: "100%", height: "auto" }} loop>
            <source src={footerVid} type="video/mp4" />
        </video>
        <div className="footer-box flex bg-[#ECECED] py-[3.2vw] px-[2vw] justify-evenly absolute top-8 left-8 right-8 z-[2] rounded-tl-[2.5vw] rounded-tr-[2.5vw]">
            {/*---------- StayUKnow--------------- */}
            <div className="stay-u-know w-[27vw]">
                <h3 className="text-[0.85vw] font-bold text-[#71717A] pb-[1.5vw] ">Stay in the Know</h3>
                <p>Subscribe to learn about the latest product drops, and keep up with stories on surf, travel and beach culture around the world.</p>
                <div className="flex items-center mt-[2vw] gap-[1vw]">
                    <input type="text" placeholder="Enter email" className="px-[1vw] py-[0.6vw] rounded-md border-zinc-800 border-[0.1vw] bg-[#ECECED] w-[20vw] text-[1.1vw]" />
                    <button className="px-[0.8vw] py-[0.6vw] border-[0.1vw] border-zinc-800 rounded-full bg-zinc-800 text-white font-bold">Sign Up</button>
                </div>
            </div>
            {/*---------- About--------------- */}
            <div className="about">
                <h3 className="text-[0.85vw] font-bold text-[#71717A] pb-[1.5vw] ">About</h3>
                {AboutUs.map((item, index) => (
                    <a href={item.link} key={index} target="main">
                        <li className="text-[1.1vw] list-none my-[0.4vw]">{item.id}</li>
                    </a>
                ))}
            </div>
            {/*---------- customer care--------------- */}
            <div className="customer-care">
                <h3 className="text-[0.85vw] font-bold text-[#71717A] pb-[1.5vw] ">Customer Care</h3>
                {CustomerCare.map((item, index) => (
                    <a href={item.link} key={index} target="main">
                        <li className="text-[1.1vw] list-none my-[0.4vw]">{item.id}</li>
                    </a>
                ))}
            </div>
            {/*---------- Information--------------- */}
            <div className="information">
                <h3 className="text-[0.85vw] font-bold text-[#71717A] pb-[1.5vw] ">Information</h3>
                {Information.map((item, index) => (
                    <a href={item.link} key={index} target="main">
                        <li className="text-[1.1vw] list-none my-[0.4vw]">{item.id}</li>
                    </a>
                ))}
            </div>
        </div>
        <div className="footer-bottom absolute bottom-8 left-8 right-8">
            <div className="footer-items w-full flex gap-[1.5vw] uppercase text-[0.7vw] font-semibold text-white pb-[1vw] border-b-[0.1vw] border-white">
                <h4>Privacy policy</h4>
                <h4>|</h4>
                <h4>terms of use</h4>
                <h4>|</h4>
                <h4>CA TRANSPARENCY IN SUPPLY CHAIN ACT</h4>
            </div>
            <div className="flex text-white justify-evenly pt-[1vw] items-baseline">
                <h2 className="text-[3vw] font-bold leading-none">It’s Sunny<br/> Somewhere.</h2>
                {Locations.map((item, index) => (
                    <div className="locations">
                        <div className="flex items-baseline gap-[0.5vw] font-semibold">
                            <h2 className="text-[1.9vw]">{item.temp}</h2>
                            <h3 className="text-[0.9vw]">{item.time}</h3>
                        </div>
                        <h3 className="font-semibold text-[1.2vw]">{item.location}</h3>
                    </div>
                ))}

            </div>
        </div>
    </div>;
};

export default Footer;
