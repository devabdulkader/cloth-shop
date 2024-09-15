"use client";

import React from "react";
import { motion } from "framer-motion";

const CustomCrossBar: React.FC = () => {
  return (
    <motion.div
      className="relative size-12   rounded-full cursor-pointer bg-white shadow-md flex items-center justify-center"
      whileHover="hovered"
    >
      {/* Top Line */}
      <motion.span
        className="absolute w-7 h-[1.3px] bg-black origin-center "
        initial={{ rotate: 45 }}
        variants={{
          hovered: { rotate: 0 }, // Define animation on hover
        }}
        transition={{ duration: 0.3 }}
      />
      {/* Bottom Line */}
      <motion.span
        className="absolute w-7 h-[1.3px] bg-black origin-center"
        initial={{ rotate: -45 }}
        variants={{
          hovered: { rotate: 0 }, // Define animation on hover
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default CustomCrossBar;
