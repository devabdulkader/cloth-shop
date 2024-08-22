"use client";
import React from "react";
import { motion } from "framer-motion";

interface MotionTransitionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const MotionTransition: React.FC<MotionTransitionProps> = ({
  children,
  delay = 0,
  className = "",
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 10 }} // Start with opacity 0 and 50px below the position
      animate={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
      transition={{
        // opacity: { duration: 1, ease: "easeOut" }, // Opacity transition
        y: { duration: 0.5, ease: "easeOut" }, // Position transition
        delay: delay, // Delay before the animation starts
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionTransition;
