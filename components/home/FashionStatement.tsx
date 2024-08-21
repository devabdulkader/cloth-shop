"use client";
import React from "react";
import Image from "next/image";
import fashion from "@/public/hero/nike-1.jpg";
const FashionStatement = () => {
  return (
    <section className="w-full flex 2xl:h-screen flex-col p-6 xl:p-32">
      <div className="grid 2xl:grid-cols-2 gap-4 2xl:w-full 2xl:h-full">
        {/* First Section (3 Cards) */}
        <section className="grid gap-5 2xl:grid-rows-2">
          {/* Top Card (Full Width, Half Height) */}
          <div className="relative rounded-2xl overflow-hidden h-80 2xl:h-auto">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black bg-opacity-30 text-white">
              <h2 className="text-2xl font-bold mb-2">Top Card Title</h2>
              <p className="text-lg">Top Card Description</p>
            </div>
          </div>

          {/* Bottom Two Cards (Side by Side, Half Width and Half Height Each) */}
          <div className="grid lg:grid-cols-2 gap-5 2xl:h-full">
            <div className="relative rounded-2xl overflow-hidden h-80 2xl:h-auto ">
              <Image
                src={fashion}
                alt="Bottom Left Card"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black bg-opacity-30 text-white">
                <h2 className="text-xl font-bold mb-2">Bottom Left Title</h2>
                <p className="text-base">Bottom Left Description</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-80 2xl:h-auto">
              <Image
                src={fashion}
                alt="Bottom Right Card"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black bg-opacity-30 text-white">
                <h2 className="text-xl font-bold mb-2">Bottom Right Title</h2>
                <p className="text-base">Bottom Right Description</p>
              </div>
            </div>
          </div>
        </section>

        {/* Second Section (Single Large Card) */}
        <section className="relative rounded-2xl overflow-hidden h-80 mt-5 2xl:mt-0 2xl:h-full">
          <Image
            src={fashion}
            alt="Large Card"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black bg-opacity-30 text-white">
            <h2 className="text-3xl font-bold mb-4">Large Card Title</h2>
            <p className="text-lg mb-6">Large Card Description</p>
            <button className="px-6 py-3 bg-white text-black rounded-full">
              Learn More
            </button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default FashionStatement;
