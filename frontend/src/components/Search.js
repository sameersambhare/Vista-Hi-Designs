import { motion } from "framer-motion";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
const Search = ({ hidecart }) => {
  const [searchField, setsearchField] = useState("");
  return (
    <motion.div
      initial={{ x: "100%" }} // Start off-screen to the right
      animate={{ x: 0 }} // Animate to x: 0 to bring it into view
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className={` top-0 right-0 z-[11] w-1/3 h-screen px-[3vw] py-[1.3vw] bg-white fixed`}
    >
      <div className="flex justify-between items-center">
        <p className="font-semibold text-[1.6vw] tracking-tighter">Search</p>
        <p onClick={hidecart} className="text-[1.5vw] cursor-pointer">
          <AiOutlineClose />
        </p>
      </div>
      <div className="flex w-full items-center gap-2 my-[2vw] border-gray-300 border-[0.15vw] px-[1vw] rounded-lg py-[0.6vw]">
        <BsSearch className=" cursor-pointer" />
        <input
          value={searchField}
          onChange={(e) => {
            setsearchField(e.target.value);
          }}
          type="text"
          placeholder="What are you looking for?"
          className="w-full outline-none text-[1.1vw]"
        />
      </div>
    </motion.div>
  );
};

export default Search;
