"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const CustomFabars = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col items-start space-y-[5px] w-12 p-2 relative cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Line Container */}
      <div className="relative flex flex-col items-start w-7 h-0.5 overflow-hidden group">
        {/* Top Line */}
        <span className="block w-full h-0.5 bg-black absolute top-0"></span>
        {/* Bottom Line with translateX animation */}
        <motion.span
          className="block w-full h-0.5 bg-white absolute bottom-0 left-0"
          initial={{ x: "-100%" }} // Start from outside the left edge
          animate={{ x: isHovered ? "100%" : "-100%" }} // Move to outside the right edge
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0 }} // No delay for the first line
        />
      </div>

      {/* Middle Line Container */}
      <div className="relative flex flex-col items-start w-7 h-0.5 overflow-hidden">
        {/* Top Line */}
        <span className="block w-5 h-0.5 bg-black absolute top-0 group-hover:w-full"></span>
        {/* Bottom Line with translateX animation */}
        <motion.span
          className="block w-full h-0.5 bg-white absolute bottom-0 left-0"
          initial={{ x: "-100%" }} // Start from outside the left edge
          animate={{ x: isHovered ? "100%" : "-100%" }} // Move to outside the right edge
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }} // Delay of 0.1s for the second line
        />
      </div>

      {/* Bottom Line Container */}
      <div className="relative flex flex-col items-start w-7 h-0.5 overflow-hidden">
        {/* Top Line */}
        <span className="block w-full h-0.5 bg-black absolute top-0"></span>
        {/* Bottom Line with translateX animation */}
        <motion.span
          className="block w-full h-0.5 bg-white absolute bottom-0 left-0"
          initial={{ x: "-100%" }} // Start from outside the left edge
          animate={{ x: isHovered ? "100%" : "-100%" }} // Move to outside the right edge
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }} // Delay of 0.2s for the third line
        />
      </div>
    </div>
  );
};

export default CustomFabars;
