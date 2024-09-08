"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import ArrowButton from "../button/ArrowButton";
import { IProduct } from "@/types/product";

interface QuickViewModelProps {
  product: IProduct;
}

const QuickViewModel: React.FC<QuickViewModelProps> = ({ product }) => {
  console.log("quick view product", product);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [mainSwiper, setMainSwiper] = useState<any>(null);

  // Combine main image with variants
  const items = [
    {
      id: product._id,
      url: product.url,
      color: product.color,
      alt: product.alt,
    },
    ...(product.productVariants.map((variant) => ({
      id: variant._id,
      url: variant.url,
      color: variant.color,
      alt: variant.alt,
    })) || []),
  ];
  console.log("items", items);

  const handleColorClick = (index: number) => {
    if (mainSwiper) {
      mainSwiper.slideTo(index);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white max-w-7xl mx-auto w-full h-[500px] rounded-lg flex">
        {/* Left Side: Main Image */}
        <div className="h-full w-1/2 relative">
          <Swiper
            direction={"horizontal"}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={setMainSwiper}
            loop={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper w-full h-full"
          >
            {items.map((item, index) => (
              <SwiperSlide key={index} className="rounded-md overflow-hidden">
                <Image
                  src={item.url}
                  alt={item.alt}
                  layout="fill"
                  objectFit="cover"
                  className="object-cover h-full w-full rounded-md"
                />
              </SwiperSlide>
            ))}
            <div
              className="absolute z-50 left-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => mainSwiper?.slideNext()}
            >
              <ArrowButton direction="left" />
            </div>
            <div
              className="absolute z-50 right-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => mainSwiper?.slidePrev()}
            >
              <ArrowButton direction="right" />
            </div>
          </Swiper>
        </div>

        {/* Right Side: Color Boxes */}
        <div className="w-1/2 h-40 border  p-4">
          <div></div>
          <Swiper
            loop={true}
            direction={"horizontal"}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            slidesPerView={items.length}
            className="mySwiper2 w-full h-full"
          >
            {items.map((item, index) => (
              <SwiperSlide
                key={index}
                className="rounded-md cursor-pointer"
                onClick={() => handleColorClick(index)}
              >
                <div
                  className="h-20 w-20 rounded-full border"
                  style={{ backgroundColor: item.color }} // Dynamically setting the background color
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModel;
