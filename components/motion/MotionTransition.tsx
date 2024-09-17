"use client";
import React from "react";
import { motion, useInView } from "framer-motion";

interface MotionTransitionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  initialY?: number; // Prop for initial y position
  duration?: number; // Prop for duration
}

const MotionTransition: React.FC<MotionTransitionProps> = ({
  children,
  delay = 0,
  className = "",
  initialY = 20, // Default initial y position
  duration = 0.5, // Default animation duration
}) => {
  const ref = React.useRef<HTMLDivElement>(null); // Add typing for ref
  const isInView = useInView(ref, { once: true }); // Track if the element is in view

  return (
    <motion.div
      ref={ref} // Attach ref to the motion.div
      className={className}
      initial={{ opacity: 0, y: initialY }} // Start with opacity 0 and custom y position
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: initialY }} // Animate to full opacity and 0 y
      transition={{
        y: { duration: duration, ease: "easeOut" }, // Use provided duration and ease
        opacity: { duration: duration }, // Make sure opacity follows the same timing
        delay: delay, // Delay before the animation starts
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionTransition;
