"use client";
import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import nike_1 from "@/public/hero/nike-1.jpg";
import nike_2 from "@/public/hero/nike-2.jpg";

const Hero = () => {
  return (
    <section className="w-full 2xl:h-screen">
      <div className="lg:grid lg:grid-cols-4 lg:grid-rows-1 lg:h-full lg:p-10 2xl:p-32 lg:gap-5">
        {/* First Section */}
        <div className="relative rounded-2xl overflow-hidden h-80 w-full lg:col-span-3 lg:h-full my-5 lg:my-0">
          <Image
            src={nike_1}
            alt="First Card"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
          <div className="absolute inset-0 flex flex-col p-6 md:p-10 lg:p-20 bg-black bg-opacity-30 text-white">
            <h2 className="text-xl md:text-2xl font-bold">
              Sports Shoes For An Active Lifestyle
            </h2>
            <p className="text-sm md:text-lg">
              Curating a shoe wardrobe for an active lifestyle
            </p>
            <div className="mt-4">
              <button className="bg-white text-black py-2 px-4 md:px-6 rounded-full">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 w-full lg:grid-rows-2 lg:grid-cols-1 lg:col-span-1 lg:h-full">
          {/* First Card in Second Section */}
          <div className="relative rounded-2xl overflow-hidden h-80 sm:h-full lg:h-full">
            <Image
              src={nike_2}
              alt="Second Card"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
              <h2>Premium Sports Shoes</h2>
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

          {/* Second Card in Second Section */}
          <div className="relative rounded-2xl overflow-hidden bg-[rgb(254,249,224)] h-80 sm:h-full lg:h-full">
            <div className="w-full h-full">
              <div className="p-6 md:p-10 max-w-sm">
                <h2 className="text-xl md:text-2xl font-bold mb-2">
                  New And Exclusive Collections
                </h2>
                <p className="text-sm md:text-base">
                  Discover the latest trends and exclusive items in our new
                  collection.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;
