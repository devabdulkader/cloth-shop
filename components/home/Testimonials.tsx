"use client";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Review01 from "@/public/testimonials/testi01jpg.jpg";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
interface Testimonial {
  id: string;
  title: string;
  description: string;
  name: string;
  position: string;
  image: string;
}

const Testimonials: React.FC = () => {
  const testimonialData: Testimonial[] = [
    {
      id: "1",
      title: "Unlocking NEw Levels of Speed and Endurance",
      description:
        "Our Product Return Policy Exclusively Designed to Exceed Your Expectations.",
      name: "Abdur Rouf Jibon",
      position: "Managing Director",
      image: Review01.src,
    },
    {
      id: "2",
      title: "Unlocking NEw Levels of Speed and Endurance",
      description:
        "Our Product Return Policy Exclusively Designed to Exceed Your Expectations and Ensure Your Utmost Satisfaction",
      name: "Abdur Rouf Jibon",
      position: "Managing Director",
      image: Review01.src,
    },
    {
      id: "3",
      title: "Unlocking NEw Levels of Speed and Endurance",
      description:
        "Exclusively Designed to Exceed Your Expectations and Ensure ",
      name: "Abdur Rouf Jibon",
      position: "Managing Director",
      image: Review01.src,
    },
    {
      id: "4",
      title: "Unlocking NEw Levels of Speed and Endurance",
      description:
        "Our Product Return Policy Exclusively Designed to Exceed Your Expectations and Ensure Your Utmost Satisfaction",
      name: "Abdur Rouf Jibon",
      position: "Managing Director",
      image: Review01.src,
    },
  ];

  const swiperRef: React.MutableRefObject<SwiperType | null> =
    useRef<SwiperType | null>(null);
  return (
    <>
      <div className="">
        <div className=" flex flex-row justify-between items-center">
          <div className="py-4">
            <p className=" text-[10px] font-normal">TESTIMONIALS</p>
            <p className="text-md font-semibold">Customers Reviews</p>
          </div>
          <div className="swiper-nav-btns  flex gap-2">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className=" bg-slate-50 shadow-lg h-8 w-8 rounded-full flex justify-center items-center"
            >
              <MdArrowBackIosNew size={15} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className=" bg-slate-50 shadow-lg h-8 w-8 rounded-full flex justify-center items-center"
            >
              <MdArrowForwardIos size={15} />
            </button>
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {testimonialData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className=" bg-slate-50 px-6 md:px-8 py-6 md:py-8 rounded-xl">
                <h2 className="text-base font-semibold">
                  &quot;{item.title}&quot;
                </h2>
                <p className="text-[14px] font-normal py-2">
                  {item.description}
                </p>
                <div className="flex justify-start items-center gap-4 py-4">
                  <Image
                    src={item.image}
                    width={40}
                    height={40}
                    alt=""
                    className=" w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="text-base font-semibold ">{item.name}</p>
                    <p className="text-[10px] font-normal">{item.position}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Testimonials;
