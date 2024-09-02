"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs, A11y, Pagination } from "swiper/modules";
import ZoomedImage from "./ZoomedImage";
import { FaTimes } from "react-icons/fa";
import SwiperNavButtons from "./SwiperNavButtons";

// Sample product data
const product = {
  imageVariants: [
    "/products/product-1-varient-1.webp",
    "/products/product-1-varient-2.webp",
    "/products/product-1-varient-3.webp",
    "/products/product-1-varient-1.webp",
    "/products/product-1-varient-2.webp",
    "/products/product-1-varient-3.webp",
    "/products/product-1-varient-1.webp",
    "/products/product-1-varient-2.webp",
    "/products/product-1-varient-3.webp",
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

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  return (
    <div className="flex w-full h-[700px] space-x-5 sticky top-0">
      <Swiper
        direction={"vertical"}
        spaceBetween={5}
        slidesPerView={6} // Adjust as needed
        pagination={{
          clickable: true,
        }}
        onSwiper={setThumbsSwiper}
        loop={true}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper w-full h-full"
      >
        {product.imageVariants.map((image, index) => (
          <SwiperSlide key={index} className="grid">
            <Image
              src={image}
              alt={`Variant Thumbnail ${index}`}
              className="object-cover w-full rounded-md"
              height={300}
              width={300}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Main Swiper */}
      <div
        className={`relative group w-4/5 ${
          isFullscreen ? "bg-white left-0  z-10 fixed top-0" : ""
        }`}
      >
        <Swiper
          loop={true}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs, A11y]}
          className={`mySwiper2 relative w-full h-full ${
            isFullscreen ? "fixed inset-0 z-50 bg-white" : ""
          }`} // Apply fullscreen styles if isFullscreen is true
          onClick={openFullscreen}
        >
          {product.imageVariants.map((image, index) => (
            <SwiperSlide key={index} className="">
              {isFullscreen ? (
                <Image
                  src={image}
                  alt={`Variant Thumbnail ${index}`}
                  className="object-cover w-full h-full rounded-md"
                  width={300}
                  height={300}
                />
              ) : (
                <ZoomedImage src={image} />
              )}
            </SwiperSlide>
          ))}
          {/* Navigation Buttons */}
          <SwiperNavButtons className="flex items-center justify-between px-4" />
        </Swiper>

        {/* Fullscreen Close Button */}
        {isFullscreen && (
          <button
            className="absolute top-4 right-4 z-50 p-2 bg-white rounded-full flex justify-center items-center"
            onClick={closeFullscreen}
          >
            <FaTimes className="text-2xl" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageSlider;
