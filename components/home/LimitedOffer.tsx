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
    <section className="">
      <div
        className="flex flex-col md:flex-row  gap-5"
        style={{ height: height === "auto" ? "auto" : `${height}px` }} // Conditional height style
      >
        {/* Second Section (Single Large Card) */}
        <section className="relative rounded-2xl md:w-[40%] overflow-hidden h-[500px] md:h-full group">
          <div className="relative rounded-2xl w-full overflow-hidden h-full">
            <Image
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
              <Image
                src="/limited-offer/offer-2.webp"
                alt="Full Width Top Card"
                height={300}
                width={300}
                className="rounded-2xl object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex flex-col p-10  gap-2">
                <p className="text-lg uppercase">Limited Time Only</p>
                <h2 className="text-2xl font-bold mb-2">Sale Upto 40% Off</h2>
                <p className="text-lg max-w-80">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Fugit, consectetur.
                </p>
                <div>
                  <button className="bg-white text-black py-3 px-5 rounded-full flex justify-between items-center uppercase hover:bg-black hover:text-white transition-colors duration-200 ease-in-out">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-[400px]  md:h-full group">
              <Image
                src="/limited-offer/offer-3.webp"
                alt="Bottom Left Card"
                height={300}
                width={300}
                className="rounded-2xl object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex flex-col p-4  ">
                <h2 className="text-xl font-bold mb-2">
                  Personality Style Visit
                </h2>
                <p className="text-base max-w-60">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quam, aliquam.
                </p>
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
            <div className="absolute inset-0 flex flex-col p-4  text-white">
              <h2 className="text-xl font-bold mb-2">Modern Fashion</h2>
              <p className="text-base max-w-60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, ex?
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default LimitedOffer;
