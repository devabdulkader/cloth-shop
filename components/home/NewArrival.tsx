"use client";
import Image from "next/image";
import React from "react";
import fashion from "@/public/hero/nike-1.jpg"; // Replace with actual image paths
import { FaArrowRotateRight } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";

const NewArrival = () => {
  return (
    <section className="w-full py-10">
      <div className="grid grid-cols-5 gap-4 px-5 xl:px-10 2xl:px-20 ">
        {/* First Section (1 Card, 2 Columns Wide) */}
        <div className="col-span-5 xl:col-span-2">
          <div className="relative rounded-2xl overflow-hidden h-[40vh] xl:h-full">
            <Image
              src={fashion}
              alt="New Arrival 1"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
            <div className="absolute inset-0 flex flex-col items-center  p-4 bg-black bg-opacity-30 text-white gap-5 pt-10">
              <p className="text-base text-center uppercase">New Arrivals </p>
              <h2 className="text-xl  mb-2 text-center lg:text-4xl font-bold">
                The Best Products
              </h2>
            </div>
          </div>
        </div>

        {/* Second Section (2 Cards, 2 Columns Wide for small screens, 2 Rows for large screens) */}
        <div className="col-span-5 xl:col-span-2 grid sm:grid-cols-2 xl:grid-cols-1 xl:grid-rows-2 gap-4">
          {/* Top Card */}
          <div className="relative rounded-2xl overflow-hidden h-[40vh] xl:h-[40vh]">
            <Image
              src={fashion}
              alt="New Arrival 2"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
            <div className="absolute inset-0 flex   items-end p-4 bg-black bg-opacity-30 text-white">
              <div className="flex justify-between items-center w-full">
                <div>
                  <p className="text-base uppercase">super</p>
                  <h2 className="text-xl font-bold mb-2 lg:text-4xl">
                    Sale of 50%
                  </h2>
                </div>

                <button className="size-16 bg-white text-black rounded-full flex items-center justify-center">
                  <GoArrowRight className="text-2xl" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Card */}
          <div className="relative rounded-2xl overflow-hidden h-[40vh] xl:h-[40vh]">
            <div className="absolute inset-0 flex flex-col items-center justify-end p-4 bg-black bg-opacity-30 text-white px-10 gap-4 pb-5">
              <h2 className="text-xl font-bold mb-2 uppercase">story</h2>
              <p className="text-base text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                pariatur numquam consequuntur doloremque adipisci, optio commodi
                tempora qui officiis magnam.
              </p>
              <div>
                <button className="bg-white text-black py-3 px-5  rounded-full flex justify-between items-center uppercase   hover:bg-black hover:text-white transition-colors duration-200 ease-in-out">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Third Section (1 Card, 1 Column Wide) */}
        <div className="col-span-5 xl:col-span-1">
          <div className="relative rounded-2xl overflow-hidden h-[40vh] xl:h-full">
            <Image
              src={fashion}
              alt="New Arrival 4"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
