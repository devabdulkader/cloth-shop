"use client";
import React from "react";
import { motion } from "framer-motion";

interface MotionTransitionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  initialY?: number; // New prop for initial y position
  duration?: number; // New prop for duration
}

const MotionTransition: React.FC<MotionTransitionProps> = ({
  children,
  delay = 0,
  className = "",
  initialY = 20, // Default value for initial y position
  duration = 0.5, // Default value for duration
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: initialY }} // Use initialY prop for initial y position
      animate={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
      transition={{
        y: { duration: duration, ease: "easeOut" }, // Use duration prop for transition duration
        delay: delay, // Delay before the animation starts
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionTransition;
