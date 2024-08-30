import React from "react";
import { FaVideo } from "react-icons/fa6";
import { MdPlayArrow } from "react-icons/md";

const AnimatedCircleText = () => {
  const text = "Making A Statement Fashion ";

  return (
    <div className="relative w-[100px] h-[100px] rounded-full flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
      <div className="absolute w-[60px] h-[60px] flex items-center justify-center bg-white rounded-full">
        <MdPlayArrow className="text-5xl" />
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
