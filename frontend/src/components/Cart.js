import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
const Cart = ({ hidecart }) => {
  return (
    <motion.div
      initial={{ x: "100%" }} // Start off-screen to the right
      animate={{ x: 0 }} // Animate to x: 0 to bring it into view
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className={` top-0 right-0 z-[11] w-1/3 h-screen px-[3vw] py-[1.3vw] bg-white fixed`}
    >
      <div className="flex justify-between items-center">
        <p className="font-semibold text-[1.08vw]">Shopping Bag (0)</p>
        <p onClick={hidecart} className="text-[1.5vw] cursor-pointer">
          <AiOutlineClose />
        </p>
      </div>
      <div className="flex flex-col bg-[#F9F9F9] gap-4 w-full items-center justify-center px-[1vw] rounded-lg py-[1.5vw] my-[2vw]">
        <p>Your are $60 away from FREE shipping</p>
        <div className="line h-[0.6vw] rounded-full w-full bg-[#D6D6D6]"></div>
      </div>
      <p className="text-[1.1vw]">There are no items in your bag.</p>
      <Link to="/">
        <p onClick={hidecart} className="mt-[1vw] underline text-[1vw]">
          Continue Shopping
        </p>
      </Link>
    </motion.div>
  );
};

export default Cart;
