"use client";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Slider01 from "@/public/latest-news/slider01.webp";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Link from "next/link";
interface Testimonial {
  id: string;
  title: string;
  date: string;
  author: string;
  link: string;
  image: string;
}

const LatestNews: React.FC = () => {
  const testimonialData: Testimonial[] = [
    {
      id: "1",
      title: "Unlocking NEw Levels of Speed and Endurance",
      date: "July 10,2024",
      author: "Abdur Rouf Jibon",
      link: "/",
      image: Slider01.src,
    },
    {
      id: "2",
      title: "Unlocking NEw Levels of Speed and Endurance",
      date: "July 10,2024",
      author: "Abdur Rouf Jibon",
      link: "/",
      image: Slider01.src,
    },
    {
      id: "3",
      title: "Unlocking NEw Levels of Speed and Endurance",
      date: "July 10,2024",
      author: "Abdur Rouf Jibon",
      link: "/",
      image: Slider01.src,
    },
    {
      id: "4",
      title: "Unlocking NEw Levels of Speed and Endurance",
      date: "July 10,2024",
      author: "Abdur Rouf Jibon",
      link: "/",
      image: Slider01.src,
    },
    {
      id: "5",
      title: "Unlocking NEw Levels of Speed and Endurance",
      date: "July 10,2024",
      author: "Abdur Rouf Jibon",
      link: "/",
      image: Slider01.src,
    },
    {
      id: "6",
      title: "Unlocking NEw Levels of Speed and Endurance",
      date: "July 10,2024",
      author: "Abdur Rouf Jibon",
      link: "/",
      image: Slider01.src,
    },
  ];

  const swiperRef: React.MutableRefObject<SwiperType | null> =
    useRef<SwiperType | null>(null);
  return (
    <>
      <div className="w-full h-full flex flex-col lg:flex-row   gap-4">
        <div className=" w-full md:min-w-[25%] px-8 py-8 flex flex-col justify-between bg-[#132742] text-white rounded-xl">
          <div className="flex flex-col gap-2">
            <p className="text-[12px] font-normal">LATEST NEWS</p>
            <h1 className="text-xl font-bold ">From Our Blog</h1>
            <p className="text-[12px] font-normal">
              Welcome to our blog, where we delve into the captivating world of
              fashion, lifestyle, and all things inspiring.
            </p>
          </div>
          <div className="swiper-nav-btns  flex gap-2 py-2">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className=" bg-slate-50 shadow-lg h-8 w-8 rounded-full flex justify-center items-center"
            >
              <SlArrowLeft size={14} className=" text-black" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className=" bg-slate-50 shadow-lg h-8 w-8 rounded-full flex justify-center items-center"
            >
              <SlArrowRight size={14} className=" text-black" />
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
          className="mySwiper w-full md:min-w-[75%]"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {testimonialData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className=" relative w-full h-full overflow-hidden group rounded-xl">
                <div className=" w-full h-full relative group-hover:scale-105 duration-500">
                  <Image
                    className=" w-full h-full bg-cover"
                    src={item.image}
                    width={1000}
                    height={1000}
                    alt=""
                  />
                </div>
                <div className=" absolute top-0  w-full h-full">
                  <div className=" bottom-6 w-full absolute ">
                    <div className="flex  rounded-full py-2 px-3  bg-black blur-0 opacity-50 mx-4 text-white  flex-row justify-between items-center">
                      <div className="flex flex-col">
                        <span className="text-[12px]">
                          {item.date} - {item.author}
                        </span>
                        <span className="text-[12px]">
                          {item.title.slice(0, 25)} ...
                        </span>
                      </div>
                      <Link
                        href={item.link}
                        className=" flex justify-center items-center w-10 h-10 text-center rounded-full  bg-white hover:bg-[#132742] text-black hover:text-white"
                      >
                        <GoArrowRight size={24} />
                      </Link>
                    </div>
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

export default LatestNews;
