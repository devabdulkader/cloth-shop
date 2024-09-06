import Image from "next/image";
import React from "react";
import shoe_2 from "@/public/hero/shoe-2.jpg";
import AnimatedSection from "../motion/AnimatedSection";
import { IoIosArrowRoundForward } from "react-icons/io";

const FashionStatement = () => {
  return (
    <section className="">
      <div className="w-full lg:h-[70vh] xl:h-[90vh]">
        <div className="lg:grid lg:grid-cols-4 lg:grid-rows-1 lg:h-full px-5 xl:px-10 2xl:px-20 lg:gap-5">
          {/* First Section */}
          <AnimatedSection
            title="Sports Shoes For An Active Lifestyle"
            description="Curating a shoe wardrobe for an active lifestyle"
            buttonText="Shop Now"
            imageSrc={shoe_2.src}
            alt="First Card"
            containerClassName="relative rounded-2xl overflow-hidden h-[350px] md:h-[500px] lg:h-full w-full lg:col-span-3 my-5 lg:my-0 bg-[#F4F7FD]" // Custom container class
            titleClassName="text-white" // Custom title class
            descriptionClassName="text-gray-200" // Custom description class
            buttonClassName="bg-white text-black text-base lg:text-lg font-semibold py-2 lg:py-4 px-4 md:px-6 lg:px-10 rounded-full transition-colors duration-300 hover:bg-black hover:text-white" // Custom button class
          />

          {/* Second Section */}
          <section className="grid relative grid-cols-1 gap-5 sm:grid-cols-2 w-full lg:grid-rows-2 lg:grid-cols-1 lg:col-span-1 lg:h-full">
            {/* First Card in Second Section */}
            <div className="relative rounded-2xl overflow-hidden h-[500px] sm:h-96 lg:h-full">
              <Image
                src={shoe_2}
                alt="Second Card"
                width={300}
                height={300}
                className="rounded-2xl object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex p-7">
                <h2
                  className="text-white text-2xl md:text-4xl 2xl:text-5xl font-bold lg:text-3xl"
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

            {/* Second Card in Second Section */}
            <div className="relative rounded-2xl overflow-hidden bg-[rgb(254,249,224)] h-[500px] sm:h-96 lg:h-full">
              <div className="w-full h-full">
                <div className="p-7 w-full sm:max-w-sm md:max-w-lg">
                  <h2
                    className="text-2xl md:text-4xl 2xl:text-5xl font-bold mb-2 lg:text-3xl"
                    style={{ lineHeight: "1.3" }}
                  >
                    New & Exclusive Collections
                  </h2>
                  <p className="text-sm md:text-base lg:text-xl lg:leading-relaxed py-3 max-w-sm">
                    Exclusive Preview of the Breakthrough Products Transforming
                    Active Lifestyles
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default FashionStatement;
