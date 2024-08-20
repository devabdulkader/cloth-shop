import React, { useState, useEffect, useRef, ReactNode } from "react";
import { motion } from "framer-motion";

interface MotionHeightProps {
  children: ReactNode;
}

const MotionHeight: React.FC<MotionHeightProps> = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [children]); // Update height if children change

  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: isMounted ? contentHeight : 0 }}
      transition={{ duration: 0.3 }}
      style={{ overflow: "hidden" }}
      ref={contentRef}
    >
      {children}
    </motion.div>
  );
};

export default MotionHeight;
