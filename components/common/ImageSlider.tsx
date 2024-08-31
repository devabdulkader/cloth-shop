"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs, A11y } from "swiper/modules";
import ZoomedImage from "./ZoomedImage";
import { FaTimes } from "react-icons/fa";
import SwiperNavButtons from "./SwiperNavButtons";

// Sample product data
const product = {
  imageVariants: [
    "/products/product-1-varient-1.webp",
    "/products/product-1-varient-2.webp",
    "/products/product-1-varient-3.webp",
    // Add more image URLs here
  ],
};

const ImageSlider: React.FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [height, setHeight] = useState<number>(200); // Initial height in pixels
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false); // State to handle fullscreen mode

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 1280) {
        const newHeight = 200 + (screenWidth / 768) * 450; // Increase from 275px to 500px between 0 and 767px
        setHeight(newHeight);
      } else {
        setHeight(1000); // Fixed height after 767px
      }
    };

    // Set the initial height
    handleResize();

    // Update height on window resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openFullscreen = () => {
    setIsFullscreen(true);
  };

  // Function to close fullscreen mode
  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  return (
    <div
      className={`w-full md:w-w-full 
         ${isFullscreen ? "bg-white left-0 h-screen z-10 fixed top-0" : ""}`}
    >
      <div className="relative group">
        {/* Main Swiper */}
        <Swiper
          loop={true}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs, A11y]}
          className={`mySwiper2 relative w-full ${
            isFullscreen ? "fixed inset-0 z-50 bg-white" : ""
          }`} // Apply fullscreen styles if isFullscreen is true
          style={{
            height: isFullscreen ? "100vh" : `${height}px`,
            width: isFullscreen ? "50vw" : "100%",
          }} // Adjust height and width in fullscreen mode
          onClick={openFullscreen} // Trigger fullscreen on click
        >
          {product.imageVariants.map((image, index) => (
            <SwiperSlide key={index}>
              {isFullscreen ? (
                <Image
                  src={image}
                  alt={`Variant Thumbnail ${index}`}
                  height={300}
                  width={300}
                  className="object-cover w-full h-full"
                />
              ) : (
                <ZoomedImage src={image} />
              )}
            </SwiperSlide>
          ))}
          {/* Navigation Buttons */}
          <div className="swiper-nav-btns hidden group-hover:block ">
            <SwiperNavButtons />
          </div>
        </Swiper>

        {/* Fullscreen Close Button */}
        {isFullscreen && (
          <button
            className="absolute top-1/2 left-1/2 z-50 size-20 bg-white rounded-full flex justify-center items-center transform -translate-x-1/2 -translate-y-1/2"
            onClick={closeFullscreen}
          >
            <FaTimes className="text-2xl" />
          </button>
        )}
      </div>

      {/* Thumbnails Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={2}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper h-32 sm:h-60 mt-2 w-full relative group"
      >
        {product.imageVariants.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              alt={`Variant Thumbnail ${index}`}
              height={300}
              width={300}
              className="object-cover w-full h-full"
            />
          </SwiperSlide>
        ))}
        {/* Navigation Buttons */}
        <div className="swiper-nav-btns hidden group-hover:block  ">
          <SwiperNavButtons />
        </div>
      </Swiper>
    </div>
  );
};

export default ImageSlider;
