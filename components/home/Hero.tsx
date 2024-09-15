"use client";
import React, { useEffect, useState } from "react";
import hero_1 from "@/public/hero/hero-1.webp";
import hero_2 from "@/public/hero/hero-2.webp";
import hero_3 from "@/public/hero/hero-3.webp";

import { IoIosArrowRoundForward } from "react-icons/io";
import AnimatedCircleText from "../common/AnimatedCircleText";
import AnimatedSection from "../motion/AnimatedSection";
import CustomImage from "../custom/CustomImage";
import MotionTransition from "../motion/MotionTransition";
import CustomBackDrop from "../custom/CustomBackDrop";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const [height, setHeight] = useState<any>("auto"); // Initial height in pixels
  const [showVideo, setShowVideo] = useState(false); // State to show or hide the video
  const handleClose = () => {
    setShowVideo(false);
  };
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 768 && screenWidth <= 1024) {
        const newHeight =
          500 + ((screenWidth - 768) / (1280 - 768)) * (1000 - 200);
        setHeight(newHeight);
      } else if (screenWidth >= 1024) {
        setHeight(820);
      } else {
        setHeight("auto");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleVideoClick = () => {
    setShowVideo(true); // Show video when AnimatedCircleText is clicked
  };

  const closeVideo = () => {
    setShowVideo(false); // Hide video when clicking the close button
  };

  return (
    <MotionTransition initialY={50} duration={2}>
      <div
        className="md:grid md:grid-cols-2 gap-5"
        style={{ height: height === "auto" ? "auto" : `${height}px` }}
      >
        {/* First Section (3 Cards) */}
        <section className="md:flex flex-col w-full h-full">
          <div className="lg:pb-5 md:h-3/5">
            <AnimatedSection
              title="Making a Statement Through Fashion"
              description="Curating a shoe wardrobe for an active lifestyle"
              buttonText="Shop The Collection"
              alt="First Card"
              containerClassName="relative rounded-2xl overflow-hidden h-[350px] md:h-[500px] md:h-full w-full md:col-span-3 my-5 md:my-0 bg-[#F4F7FD]"
              titleClassName="text-slate-800 text-3xl sm:text-4xl sm:max-w-sm md:max-w-full md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 2xl:max-w-full font-bold"
              descriptionClassName="text-black lg:mb-4"
              buttonClassName="bg-black text-white text-sm font-semibold py-2 md:py-3 lg:py-4 px-4 md:px-6 md:px-8 rounded-full transition-colors duration-300 hover:bg-white hover:text-black"
              href="/products"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-5 md:h-2/5">
            <div className="relative rounded-2xl overflow-hidden h-[400px] md:h-full group">
              <CustomImage src={hero_2} alt="Bottom Left Card" />

              <div className="absolute inset-0 flex justify-center items-center">
                {/* Trigger video display on click */}
                <div onClick={handleVideoClick}>
                  <AnimatedCircleText />
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-[400px] md:h-full group">
              <CustomImage src={hero_3} alt="Second Card" />

              <div className="absolute inset-0 flex flex-col gap-2 px-5 py-10">
                <h2
                  className="text-xl font-medium"
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
              <Link href="/products">
                <button className="py-1 sm:py-2 md:py-3.5 px-8 tracking-wider sm:tracking-[.6rem] font-semibold text-xl bg-white sm:text-2xl lg:text-4xl xl:text-5xl rounded-full uppercase text-[#bfa489]">
                  collection
                </button>
              </Link>
            </div>
            <p className="text-lg mb-6">Where style meets fashion</p>
          </div>
        </section>
      </div>

      {/* Fullscreen YouTube Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-layer-2  flex items-center justify-center">
          <CustomBackDrop onClose={handleClose} zIndex="z-40" />
          <motion.div
            className={`relative w-[90%] h-[300px] sm:h-[400px] md:h-[500px] xl:h-[80%] z-layer-1 xl:w-[80%] mx-auto `}
            initial={{ y: "-100%" }} // Initial position (off-screen)
            animate={{ y: 0 }} // Final position (on-screen)
            exit={{ y: "-100%" }} // Position when exiting
            transition={{ duration: 0.5, ease: "easeInOut" }} // Duration and easing
          >
            {" "}
            <iframe
              className="w-full h-full object-cover"
              src="https://www.youtube.com/embed/yycVNcishrE?autoplay=1"
              title="YouTube video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-4xl"
              onClick={closeVideo}
            >
              &times;
            </button>
          </motion.div>
        </div>
      )}
    </MotionTransition>
  );
};

export default Hero;
