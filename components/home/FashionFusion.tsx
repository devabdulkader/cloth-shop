"use client";
import React, { useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import MotionTransition from "../motion/MotionTransition";

const FashionFusion: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  // Ensure the video component only renders on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <MotionTransition initialY={50} duration={3}>
      <div className="flex flex-col sm:flex-row gap-5">
        {/* First Div - 2/5 Width */}
        <div className="w-full h-[400px] sm:h-auto sm:w-2/5 o-6 sm:p-10 bg-gray-100 rounded-2xl flex flex-col justify-center">
          <p className="text-lg">Fashion Fusion</p>
          <h2 className="text-3xl xl:text-4xl font-bold max-w-80 capitalize leading-normal xl:leading-relaxed">
            Where creativity meets style
          </h2>

          <div>
            <button className="py-2 rounded-md flex items-center">
              <span>Explore Now</span>
              <GoArrowUpRight className="text-2xl ml-2" />
            </button>
          </div>
        </div>

        {/* Second Div - 3/5 Width */}
        <div className="w-full sm:h-auto sm:w-3/5 relative rounded-2xl overflow-hidden group h-[300px]">
          {isClient && (
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline // Updated from camel-case
            >
              <source src="/fashion-fusion/fashion.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          <div className="absolute inset-0 text-center p-4 text-white flex flex-col justify-center items-center">
            <p className="text-lg">Pro Style</p>
            <h2 className="text-2xl font-bold">Super Modern Fashion</h2>
          </div>
        </div>
      </div>
    </MotionTransition>
  );
};

export default FashionFusion;
