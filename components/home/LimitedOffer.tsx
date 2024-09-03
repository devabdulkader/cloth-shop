"use client";
import Image from "next/image";
import fashion from "@/public/hero/nike-1.jpg";
import React, { useEffect, useState } from "react";
import fashion_1 from "@/public/fashion_statement/fashion_1.jpg";
import fashion_2 from "@/public/fashion_statement/fashion_2.jpg";
import fashion_3 from "@/public/fashion_statement/fashion_3.jpg";

import { IoIosArrowRoundForward } from "react-icons/io";
import AnimatedCircleText from "../common/AnimatedCircleText";
import AnimatedSection from "../motion/AnimatedSection";
import CustomImage from "../custom/CustomImage";
import MotionTransition from "../motion/MotionTransition";

const LimitedOffer = () => {
  const [height, setHeight] = useState<any>("auto"); // Initial height in pixels

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 768 && screenWidth <= 1024) {
        // Apply dynamic height calculation for screens wider than 768px
        const newHeight =
          500 + ((screenWidth - 768) / (1280 - 768)) * (1000 - 200); // Adjust height dynamically from 200px to 1000px between 768px and 1280px
        setHeight(newHeight);
      } else if (screenWidth >= 1024) {
        setHeight(820);
      } else {
        // Set fixed height for screens smaller than 768px
        setHeight("auto");
      }
    };

    // Set the initial height
    handleResize();

    // Update height on window resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MotionTransition initialY={50} duration={3}>
      <div
        className="flex flex-col md:flex-row  gap-5"
        style={{ height: height === "auto" ? "auto" : `${height}px` }} // Conditional height style
      >
        {/* Second Section (Single Large Card) */}
        <section className="relative rounded-2xl md:w-[40%] overflow-hidden h-[500px] md:h-full group">
          <div className="relative rounded-2xl w-full overflow-hidden h-full">
            <CustomImage
              src="/limited-offer/offer-1.webp"
              alt="Large Card"
              height={300}
              width={300}
              className="rounded-2xl h-full w-full object-cover"
            />
          </div>
        </section>
        {/* First Section (3 Cards) */}
        <section className="flex flex-col  md:w-[60%] h-full gap-5">
          {/* Bottom Two Cards (Side by Side, Half Width and Half Height Each) */}
          <div className="grid md:grid-cols-2 gap-5 md:h-[55%]">
            <div className="relative rounded-2xl overflow-hidden h-[400px]  md:h-full group">
              <CustomImage
                src="/limited-offer/offer-2.webp"
                alt="Full Width Top Card"
                height={300}
                width={300}
                className="rounded-2xl object-cover w-full h-full"
              />

              <div className="absolute inset-0 flex flex-col p-4 ">
                <h2 className="text-xl sm:text-lg font-bold mb-2">
                  Personality Style
                </h2>
                <p className="text-sm max-w-36 leading-normal">
                  A Testament to Enduring Fashion
                </p>
              </div>
              <svg
                className="absolute bottom-0 right-0"
                width="95"
                height="94"
                viewBox="0 0 84 85"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M77 18C83.603 11.397 84 3 84 0V85H0C2.5 85 11.7833 84.2528 18 77C23.5714 70.5 24 63.5 24 62C24 60.5 23.5 48 33 37C40.4317 28.3948 52.5 25 58 25C62 25 70.5 24.5 77 18Z"
                  fill="white"
                />
              </svg>
              <div className="absolute bottom-0 right-0 size-14 rounded-full bg-black flex justify-center items-center group cursor-pointer hover:opacity-80">
                <IoIosArrowRoundForward className="text-white text-4xl group-hover:-rotate-45 transition transform duration-300 ease-in-out" />
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-[400px]  md:h-full group">
              <CustomImage
                src="/limited-offer/offer-3.webp"
                alt="Bottom Left Card"
                height={300}
                width={300}
                className="rounded-2xl object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex flex-col p-4  ">
                <h2 className="text-xl sm:text-lg font-bold mb-2">
                  Model Fashion
                </h2>
                <p className="text-sm max-w-36 leading-normal">
                  A Testament to Enduring Fashion
                </p>
              </div>
              <svg
                className="absolute bottom-0 right-0"
                width="95"
                height="94"
                viewBox="0 0 84 85"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M77 18C83.603 11.397 84 3 84 0V85H0C2.5 85 11.7833 84.2528 18 77C23.5714 70.5 24 63.5 24 62C24 60.5 23.5 48 33 37C40.4317 28.3948 52.5 25 58 25C62 25 70.5 24.5 77 18Z"
                  fill="white"
                />
              </svg>
              <div className="absolute bottom-0 right-0 size-14 rounded-full bg-black flex justify-center items-center group cursor-pointer hover:opacity-80">
                <IoIosArrowRoundForward className="text-white text-4xl group-hover:-rotate-45 transition transform duration-300 ease-in-out" />
              </div>
            </div>
          </div>
          {/* Top One Card */}
          <div className="md:h-[45%] relative rounded-2xl overflow-hidden">
            <Image
              src="/limited-offer/offer-4.webp"
              alt="Bottom Right Card"
              height={300}
              width={300}
              className="object-cover w-full h-full"
            />

            <div className="absolute inset-0 flex flex-col p-10  gap-2 text-white">
              <p className="text-sm uppercase">Limited Time Only</p>
              <h2 className="text-sm sm:text-xl font-bold mb-2 md:text-2xl">
                Sale Upto 40% Off
              </h2>
              <p className="text-sm max-w-80 mb-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit,
                consectetur.
              </p>
              <div>
                <button className="bg-white text-black py-2.5 text-sm font-medium px-8 rounded-full flex justify-between items-center hover:bg-slate-800 hover:text-white transition-colors duration-200 ease-in-out">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MotionTransition>
  );
};

export default LimitedOffer;
