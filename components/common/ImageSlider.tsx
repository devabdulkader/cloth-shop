"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import ZoomedImage from "./ZoomedImage";
import { FaTimes } from "react-icons/fa";

// Sample product data
const product = {
  imageVariants: [
    "/products/product-1-varient-1.webp",
    "/products/product-1-varient-2.webp",
    "/products/product-1-varient-3.webp",
    // Add more image URLs here
  ],
};

export default function ImageSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [height, setHeight] = useState(200); // Initial height in pixels
  const [isFullscreen, setIsFullscreen] = useState(false); // State to handle fullscreen mode

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
    if (window.innerWidth >= 768) {
      setIsFullscreen(true);
    } else {
      return null;
    }
  };

  // Function to close fullscreen mode
  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  return (
    <div
      className={`w-full md:w-w-full 
         ${isFullscreen ? " bg-white  left-0 h-screen z-10 fixed top-0" : ""}`}
    >
      {/* Main Swiper */}
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={`mySwiper2 w-full ${
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
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            ) : (
              <ZoomedImage src={image} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails Swiper */}

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        navigation={true}
        spaceBetween={10}
        slidesPerView={2}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper h-32 sm:h-60 mt-2 w-full"
      >
        {product.imageVariants.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              alt={`Variant Thumbnail ${index}`}
              layout="fill"
              objectFit="cover"
              quality={100}
              className="w-full h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Close Button for Fullscreen Mode */}
      {isFullscreen && (
        <button
          className="absolute top-1/2 left-1/2  z-50 size-20 bg-white rounded-full flex justify-center items-center"
          onClick={closeFullscreen}
        >
          <FaTimes className="text-2xl" />
        </button>
      )}
    </div>
  );
}
