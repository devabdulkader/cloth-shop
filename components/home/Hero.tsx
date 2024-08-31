"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import hero_1 from "@/public/hero/hero-1.webp";
import hero_2 from "@/public/hero/hero-2.webp";
import hero_3 from "@/public/hero/hero-3.webp";

import { IoIosArrowRoundForward } from "react-icons/io";
import AnimatedCircleText from "../common/AnimatedCircleText";
import AnimatedSection from "../motion/AnimatedSection";
import CustomImage from "../custom/CustomImage";

const Hero = () => {
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
    <section className="">
      <div
        className="md:grid md:grid-cols-2  gap-5"
        style={{ height: height === "auto" ? "auto" : `${height}px` }} // Conditional height style
      >
        {/* First Section (3 Cards) */}
        <section className="md:flex flex-col  w-full h-full">
          {/* Top One Card */}
          <div className="pb-5 md:h-3/5">
            <AnimatedSection
              title="Making a Statement Through Fashion"
              description="Curating a shoe wardrobe for an active lifestyle"
              buttonText="Shop The Collection"
              alt="First Card"
              containerClassName="relative rounded-2xl overflow-hidden h-[350px] md:h-[500px] md:h-full w-full md:col-span-3 my-5 md:my-0 bg-[#F4F7FD]" // Custom container class
              titleClassName="text-black" // Custom title class
              descriptionClassName="text-black" // Custom description class
              buttonClassName="bg-black text-white text-sm font-semibold py-2 md:py-3 lg:py-4 px-4 md:px-6 md:px-8 rounded-full transition-colors duration-300 hover:bg-white hover:text-black" // Custom button class
            />
          </div>

          {/* Bottom Two Cards (Side by Side, Half Width and Half Height Each) */}
          <div className="grid md:grid-cols-2 gap-5 md:h-2/5">
            <div className="relative rounded-2xl overflow-hidden h-[400px]  md:h-full group">
              <CustomImage src={hero_2} alt="Bottom Left Card" />

              <div className="absolute inset-0 flex justify-center items-center">
                <AnimatedCircleText />
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-[400px]  md:h-full group">
              <CustomImage src={hero_3} alt="Second Card" />

              <div className="absolute inset-0 flex flex-col gap-2 px-5 py-10">
                <h2
                  className="  text-xl 
                   font-medium"
                  style={{ lineHeight: "1.3" }}
                >
                  Classic Charm
                </h2>
                <p className="text-base max-w-44">
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
        </section>

        {/* Second Section (Single Large Card) */}
        <section className="relative rounded-2xl overflow-hidden h-[500px] mt-5 md:mt-0 md:h-full group">
          <CustomImage src={hero_1} alt="Large Card" />

          <div className="absolute inset-0 flex flex-col justify-center p-10 text-white">
            <p className="text-lg uppercase">New Design</p>
            <div className="my-3">
              <button className="py-1 sm:py-2 md:py-4 px-8 tracking-widest text-lg bg-white sm:text-2xl lg:text-4xl rounded-full uppercase text-[#bfa489]">
                collection
              </button>
            </div>
            <p className="text-lg mb-6">Where style meets fashion</p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;
