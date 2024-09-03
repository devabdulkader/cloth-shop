import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const ArrowRight = () => {
  return (
    <div className="size-14 rounded-full bg-white group group-hover:bg-slate-800 flex justify-center items-center group cursor-pointer hover:opacity-80">
      <IoIosArrowRoundForward className="text-black group-hover:text-white text-4xl group-hover:-rotate-45 transition transform duration-300 ease-in-out" />
    </div>
  );
};

export default ArrowRight;
