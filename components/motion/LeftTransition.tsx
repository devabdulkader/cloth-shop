// LeftTransition.tsx
"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

interface LeftTransitionProps {
  children: React.ReactNode;
}

const variants: Variants = {
  initial: {
    x: "100%", // Start from off-screen to the right
    opacity: 0,
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    x: "-100%", // Slide out to the left
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const LeftTransition: React.FC<LeftTransitionProps> = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={variants}
      className="relative" // Optional: ensures that children are positioned correctly if needed
    >
      {children}
    </motion.div>
  );
};

export default LeftTransition;
