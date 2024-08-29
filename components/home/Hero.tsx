"use client";
import React from "react";
import Image from "next/image";
import fashion from "@/public/hero/nike-1.jpg";
import fashion_1 from "@/public/fashion_statement/fashion_1.jpg";
import fashion_2 from "@/public/fashion_statement/fashion_2.jpg";
import fashion_3 from "@/public/fashion_statement/fashion_3.jpg";

import { IoIosArrowRoundForward } from "react-icons/io";
import AnimatedCircleText from "../common/AnimatedCircleText";
import AnimatedSection from "../motion/AnimatedSection";
import CustomCrossBar from "../common/CustomCrossBar";
const Hero = () => {
  return (
    <section className="">
      <div className="w-full flex flex-col relative">
        <div className="grid xl:grid-cols-2 gap-4    ">
          {/* First Section (3 Cards) */}
          <section className="grid  lg:grid-rows-2 lg:h-[90vh] ">
            {/* Top Card (Full Width, Half Height) */}

            <div className="pb-5">
              <AnimatedSection
                title="Sports Shoes For An Active Lifestyle"
                description="Curating a shoe wardrobe for an active lifestyle"
                buttonText="Shop Now"
                alt="First Card"
                containerClassName="relative rounded-2xl overflow-hidden h-[350px] md:h-[500px] lg:h-full w-full lg:col-span-3 my-5 lg:my-0 bg-[#F4F7FD]" // Custom container class
                titleClassName="text-black" // Custom title class
                descriptionClassName="text-black" // Custom description class
                buttonClassName="bg-black text-white text-base lg:text-lg font-semibold py-2 lg:py-4 px-4 md:px-6 lg:px-10 rounded-full transition-colors duration-300 hover:bg-white hover:text-black" // Custom button class
              />
            </div>

            {/* Bottom Two Cards (Side by Side, Half Width and Half Height Each) */}
            <div className="grid lg:grid-cols-2 gap-5 xl:h-full">
              <div className="relative rounded-2xl overflow-hidden h-[400px]  lg:h-full">
                <Image
                  src={fashion_2}
                  alt="Bottom Left Card"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl "
                />

                <div className="absolute inset-0 flex justify-center items-center">
                  <AnimatedCircleText />
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden h-[400px]  lg:h-full">
                <Image
                  src={fashion_1}
                  alt="Second Card"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
                <div className="absolute inset-0 flex p-7  ">
                  <h2
                    className=" text-white text-2xl md:text-4xl 2xl:text-5xl font-bold lg:text-3xl"
                    style={{ lineHeight: "1.3" }}
                  >
                    Premium Sports Shoes
                  </h2>
                </div>
                <svg
                  className="absolute bottom-0 right-0"
                  width="104"
                  height="105"
                  viewBox="0 0 84 85"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M77 18C83.603 11.397 84 3 84 0V85H0C2.5 85 11.7833 84.2528 18 77C23.5714 70.5 24 63.5 24 62C24 60.5 23.5 48 33 37C40.4317 28.3948 52.5 25 58 25C62 25 70.5 24.5 77 18Z"
                    fill="white"
                  />
                </svg>
                <div className="absolute bottom-0 right-0 size-16 rounded-full bg-black flex justify-center items-center">
                  <IoIosArrowRoundForward className="text-white text-5xl" />
                </div>
              </div>
            </div>
          </section>

          {/* Second Section (Single Large Card) */}
          <section className="relative rounded-2xl overflow-hidden h-[500px] mt-5 xl:mt-0 xl:h-full">
            <Image
              src={fashion_3}
              alt="Large Card"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
            <div className="absolute inset-0 flex flex-col justify-center p-10 bg-black bg-opacity-30 text-white">
              <p className="text-lg  uppercase">New Design</p>
              <div className="my-3">
                <button className="px-5 py-3 bg-white text-2xl lg:text-4xl rounded-full uppercase text-orange-300 ">
                  collection
                </button>
              </div>
              <p className="text-lg mb-6">Where style meets fashion</p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Hero;
