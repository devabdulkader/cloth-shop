"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface IconToolTipProps {
  children: ReactNode;
}

const IconToolTip: React.FC<IconToolTipProps> = ({ children }) => {
  return (
    <motion.div
      className="relative flex items-center group-hover:opacity-100"
      initial={{ x: -20, opacity: 0 }} // Start left and invisible
      whileHover={{ x: 0, opacity: 1 }} // Animate to its original position and visible on hover
      animate={{ opacity: 1 }} // Ensures opacity change when group-hover is applied
      transition={{ type: "spring", stiffness: 300, damping: 20 }} // Smooth spring transition
    >
      {children}
    </motion.div>
  );
};

export default IconToolTip;
