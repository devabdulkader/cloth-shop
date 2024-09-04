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
import ArrowButton from "../button/ArrowButton";
import { IProduct } from "@/types/product";

// Sample product data

interface ImageSliderProps {
  products: IProduct[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ productImgs }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [mainSwiper, setMainSwiper] = useState<any>(null); // State to hold main Swiper instance
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
    <div className="flex w-full h-[700px] space-x-5 sticky top-0 ">
      <Swiper
        direction={"vertical"}
        spaceBetween={10} // Adjust the space between slides
        slidesPerView={6} // Adjust as needed
        pagination={{ clickable: true }}
        onSwiper={setThumbsSwiper}
        loop={true}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper w-full h-full relative"
      >
        {productImgs.map((image, index) => (
          <SwiperSlide
            key={index}
            className="border rounded-md overflow-hidden border-black cursor-pointer"
          >
            <Image
              src={image.url}
              alt={``}
              height={300}
              width={300}
              className="object-cover h-full w-full rounded-md"
            />
          </SwiperSlide>
        ))}
        <div
          className="absolute z-50 bottom-16 left-1/2 transform -translate-x-1/2"
          onClick={() => thumbsSwiper.slideNext()}
        >
          <ArrowButton direction="top" />
        </div>
        <div
          className="absolute z-50 bottom-0 left-1/2 transform -translate-x-1/2"
          onClick={() => thumbsSwiper.slidePrev()}
        >
          <ArrowButton direction="bottom" />
        </div>
      </Swiper>

      {/* Main Swiper */}
      <div
        className={` group w-4/5 ${
          isFullscreen
            ? "bg-white z-layer-1 left-0 z-10 fixed top-0 h-screen w-screen"
            : "relative"
        }`}
      >
        {thumbsSwiper && (
          <Swiper
            loop={true}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className={`mySwiper2  w-full h-full ${
              isFullscreen ? "fixed inset-0 z-50 bg-white" : "relative"
            }`}
            onSwiper={setMainSwiper}
            onClick={openFullscreen}
          >
            {productImgs.map((image, index) => (
              <SwiperSlide key={index} className="rounded-md overflow-hidden">
                {isFullscreen ? (
                  <Image
                    src={image.url}
                    alt={``}
                    className="object-cover w-full h-full rounded-md"
                    width={300}
                    height={300}
                  />
                ) : (
                  <ZoomedImage src={image.url} />
                )}
              </SwiperSlide>
            ))}
            <div
              className="absolute z-50 left-0 top-1/2 transform -translate-y-1/2"
              onClick={() => mainSwiper?.slidePrev()}
            >
              <ArrowButton direction="left" />
            </div>
            <div
              className="absolute z-50 right-0 top-1/2 transform -translate-y-1/2"
              onClick={() => mainSwiper.slideNext()}
            >
              <ArrowButton direction="right" />
            </div>
          </Swiper>
        )}

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
