import React, { useEffect, useRef, useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MotionHeightProps {
  children: ReactNode;
  isVisible: boolean; // Pass a prop to control visibility
  className?:string;
}

const MotionHeight: React.FC<MotionHeightProps> = ({
  children,
  isVisible,
  className,
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [contentHeight, setContentHeight] = useState<number | null>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [children, isVisible]); // Update height when children or visibility changes

  return (
    <AnimatePresence initial={false}>
      {isVisible && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: contentHeight ?? "auto" }} // Use "auto" if contentHeight is null
          exit={{ height: 0 }}
          transition={{ duration: 0.3 }}
          style={{ overflow: "hidden" }}
          className={`${className}`}
        >
          <div ref={contentRef}>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MotionHeight;
