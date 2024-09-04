"use client";
import React, { useState } from "react";

type ArrowButtonProps = {
  direction: "right" | "left" | "top" | "bottom";
};

const directionToRotationClass: Record<ArrowButtonProps["direction"], string> =
  {
    right: "rotate-[90deg]",
    left: "rotate-[-90deg]",
    top: "rotate-0",
    bottom: "rotate-[180deg]",
  };

const ArrowButton: React.FC<ArrowButtonProps> = ({ direction }) => {
  const [isHovered, setIsHovered] = useState(false);

  const rotationClass = directionToRotationClass[direction];

  return (
    <div
      className={`flex justify-center items-center w-14 h-14 rounded-full shadow-md cursor-pointer transition-colors duration-300 ${
        isHovered ? "bg-slate-800" : "bg-white"
      } ${rotationClass}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-10 h-10 cursor-pointer overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1.7,0.35,1.5)]">
        <span
          className="absolute bg-transparent w-5 h-px block transform rotate-[-45deg]"
          style={{ top: "19px", left: "3px" }}
        >
          <span
            className={`block w-5 h-px rounded transition-transform duration-500 ease-[cubic-bezier(0.25,1.7,0.35,1.5)] ${
              isHovered ? "bg-white rotate-[-10deg]" : "bg-gray-600"
            }`}
            style={{
              transformOrigin: "right center",
            }}
          ></span>
        </span>
        <span
          className="absolute bg-transparent w-5 h-px block transform rotate-45"
          style={{ top: "19px", left: "17px" }}
        >
          <span
            className={`block w-5 h-px rounded transition-transform duration-500 ease-[cubic-bezier(0.25,1.7,0.35,1.5)] ${
              isHovered ? "bg-white rotate-[10deg]" : "bg-gray-600"
            }`}
            style={{
              transformOrigin: "left center",
            }}
          ></span>
        </span>
      </div>
    </div>
  );
};

export default ArrowButton;
