"use client";
import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

const transitionVariants: Variants = {
  hidden: {
    x: "-100%", // Off-screen to the left
    opacity: 0,
  },
  visible: {
    x: 0, // On-screen
    opacity: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

interface RightTransitionProps {
  children: React.ReactNode;
  isVisible?: boolean; // Add a prop to control visibility from parent
}

const RightTransition: React.FC<RightTransitionProps> = ({
  children,
  isVisible = true,
}) => {
  const [showComponent, setShowComponent] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setShowComponent(true);
    } else {
      // Trigger exit animation
      const timer = setTimeout(() => setShowComponent(false), 300); // Match the animation duration
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <>
      {showComponent && (
        <motion.div
          variants={transitionVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          exit="hidden"
          className="w-full h-full"
          // Ensure exit animation completes before removing from DOM
        >
          {children}
        </motion.div>
      )}
    </>
  );
};

export default RightTransition;
