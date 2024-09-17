import React from "react";
import { MdPlayArrow } from "react-icons/md";

const AnimatedCircleText = () => {
  const text = "Making A Statement Fashion ";

  return (
    <div className="relative w-[100px] hover:cursor-pointer h-[100px] rounded-full flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm group">
      {/* Inner group element */}
      <div className="absolute w-[60px] h-[60px] flex items-center justify-center bg-white group-hover:bg-black rounded-full transition-colors duration-500">
        <MdPlayArrow className="text-5xl group-hover:text-white transition-colors duration-500" />
      </div>
      <div className="absolute w-full h-full text-white text-[12px] flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center animate-textRotation">
          {text.split("").map((char, i) => (
            <span
              key={i}
              className="absolute"
              style={{
                transform: `rotate(${
                  i * (360 / text.length)
                }deg) translateY(-42px)`, // Adjusted for smaller radius
                transformOrigin: "center center",
              }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedCircleText;
