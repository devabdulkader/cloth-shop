"use client";
import React from "react";
import { motion, useInView } from "framer-motion";

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
  const ref = React.useRef(null); // Create a ref to attach to the motion.div
  const isInView = useInView(ref, { once: true }); // Use the useInView hook with once set to true

  return (
    <motion.div
      ref={ref} // Attach the ref to the motion.div
      className={className}
      initial={{ opacity: 0, y: initialY }} // Use initialY prop for initial y position
      animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate to full opacity and original position if in view
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
