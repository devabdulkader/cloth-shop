import React from "react";

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

const  ArrowButton: React.FC<ArrowButtonProps> = ({ direction }) => {
  const rotationClass = directionToRotationClass[direction];

  return (
    <div
      className={`flex justify-center items-center w-14 h-14 bg-white rounded-full shadow-md group cursor-pointer transition-colors duration-300 hover:bg-slate-800 ${rotationClass}`}
    >
      <div className="relative  w-10 h-10   cursor-pointer overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1.7,0.35,1.5)] hover:duration-100">
        <span
          className="absolute z-10 bg-transparent w-5 h-px block transform rotate-[-45deg]"
          style={{ top: "19px", left: "3px" }}
        >
          <span
            className="block bg-gray-600 group-hover:bg-white w-5 h-px rounded transition-transform duration-500 ease-[cubic-bezier(0.25,1.7,0.35,1.5)] group-hover:rotate-[-10deg]"
            style={{
              transformOrigin: "right center",
            }}
          ></span>
        </span>
        <span
          className="absolute z-10 bg-transparent w-5 h-px block transform rotate-45"
          style={{ top: "19px", left: "17px" }}
        >
          <span
            className="block bg-gray-600 group-hover:bg-white w-5 h-px rounded transition-transform duration-500 ease-[cubic-bezier(0.25,1.7,0.35,1.5)] group-hover:rotate-[10deg]"
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
