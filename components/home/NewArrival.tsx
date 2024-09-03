"use client";
import React from "react";
import CustomImage from "../custom/CustomImage";
import new_arrival_1 from "@/public/new-arrival/new-arrival-1.webp";
import new_arrival_2 from "@/public/new-arrival/new-arrival-2.webp";
import new_arrival_3 from "@/public/new-arrival/new-arrival-3.webp";
import { GoArrowRight } from "react-icons/go";
import ResponsiveHeightWrapper from "../common/ResponsiveHeightWrapper";
import MotionTransition from "../motion/MotionTransition";
import ArrowRight from "../custom/ArrowRight";

const NewArrival = () => {
  // Example Heights Object
  const heights = {
    heightMediumStart: 500, // Starting height for medium screens
    heightMediumEnd: 700, // Ending height for medium screens
    heightLargeStart: 600, // Starting height for large screens
    heightLargeEnd: 800, // Ending height for large screens
  };

  // Example Breakpoints Object
  const breakpoints = {
    minWidthMedium: 768, // Minimum width for medium screens
    maxWidthMedium: 1024, // Maximum width for medium screens
    minWidthLarge: 1024, // Minimum width for large screens
    maxWidthLarge: 1440, // Maximum width for large screens
  };

  return (
    <MotionTransition initialY={50} duration={3}>
      <ResponsiveHeightWrapper heights={heights} breakpoints={breakpoints}>
        <div className="flex flex-col md:flex-row gap-5 h-auto md:h-full">
          {/* First Section (1 Card, 2 Columns Wide) */}
          <div className="md:w-2/5 group h-[500px] md:h-full">
            <div className="relative rounded-2xl overflow-hidden h-full">
              <CustomImage src={new_arrival_1} alt="New Arrival 1" />
              <div className="absolute inset-0 flex flex-col items-center pt-10 px-4 pb-2 text-white gap-3 ">
                <p className="text-sm font-medium text-center uppercase">
                  New Arrivals
                </p>
                <h2 className="text-xl md:text-2xl  mb-2 text-center lg:text-4xl font-bold">
                  The Best Products
                </h2>
              </div>
              <div className="absolute bottom-5 right-4">
                <ArrowRight />
              </div>
            </div>
          </div>

          {/* Second Section (2 Cards, 2 Columns Wide for small screens, 2 Rows for large screens) */}
          <div className="md:w-2/5 h-full md:flex md:flex-col gap-5 space-y-5 md:space-y-0">
            {/* Top Card */}
            <div className="relative rounded-2xl overflow-hidden h-[500px] md:h-[60%] group">
              <CustomImage src={new_arrival_2} alt="New Arrival 2" />
              <div className="absolute inset-0 flex items-end p-4 text-white">
                <div className="flex justify-between items-center w-full">
                  <div>
                    <p className="text-base uppercase">super</p>
                    <h2 className="text-xl font-bold mb-2 lg:text-4xl">
                      Sale of 50%
                    </h2>
                  </div>
                  <ArrowRight />
                </div>
              </div>
            </div>

            {/* Bottom Card */}
            <div className="relative rounded-2xl overflow-hidden h-[500px] md:h-[40%] bg-gray-200">
              <div className="absolute inset-0 flex flex-col items-center justify-start px-4 py-5 text-black  gap-4 md:pb-2 lg:pb-0 ">
                <h2 className="text-xl lg:text-xl font-bold mb-2 md:mb-0 uppercase md:text-xs">
                  story
                </h2>
                <p className="text-base md:text-xs text-center lg:text-base ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  pariatur numquam consequuntur doloremque adipisci, optio
                  commodi tempora qui officiis magnam.
                </p>
                <div>
                  <button className="bg-slate-800 md:text-xs lg:text-base text-white hover:opacity-90 py-3 lg:py-3 md:py-1 px-10 lg:px-10 rounded-full flex justify-between items-center text-sm   transition-colors duration-200 ease-in-out">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Third Section (1 Card, 1 Column Wide) */}
          <div className="md:w-1/5 group h-[600px] md:h-full">
            <div className="relative rounded-2xl overflow-hidden h-full">
              <CustomImage src={new_arrival_3} alt="New Arrival 3" />
            </div>
            <div className="absolute bottom-5 right-4">
              <ArrowRight />
            </div>
          </div>
        </div>
      </ResponsiveHeightWrapper>
    </MotionTransition>
  );
};

export default NewArrival;
