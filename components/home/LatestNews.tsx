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
import ArrowButton from "../button/ArrowButton";
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
      title: "Unlocking New Levels of Speed and Endurance",
      date: "July 10, 2024",
      author: "Elsa Marine",
      link: "/",
      image: "/latest-news/slider01.webp",
    },
    {
      id: "2",
      title: "Breaking Boundaries in Athletic Performance",
      date: "August 15, 2024",
      author: "Samantha Khan",
      link: "/",
      image: "/latest-news/slider02.webp",
    },
    {
      id: "3",
      title: "Revolutionizing Sports Training Techniques",
      date: "September 5, 2024",
      author: "Michael Smith",
      link: "/",
      image: "/latest-news/slider03.webp",
    },
    {
      id: "4",
      title: "Advancements in Exercise Science and Wellness",
      date: "October 20, 2024",
      author: "Jessica Lee",
      link: "/",
      image: "/latest-news/slider04.webp",
    },
    {
      id: "5",
      title: "Transforming the Future of Fitness",
      date: "November 12, 2024",
      author: "Robert Brown",
      link: "/",
      image: "/latest-news/slider05.webp",
    },
    {
      id: "6",
      title: "Innovations in Sports Nutrition",
      date: "December 8, 2024",
      author: "Emily Johnson",
      link: "/",
      image: "/latest-news/slider06.webp",
    },
    {
      id: "7",
      title: "Enhancing Athletic Recovery and Performance",
      date: "January 15, 2025",
      author: "David Wilson",
      link: "/",
      image: "/latest-news/slider07.webp",
    },
    {
      id: "8",
      title: "Pushing the Limits of Endurance Training",
      date: "February 22, 2025",
      author: "Olivia Martinez",
      link: "/",
      image: "/latest-news/slider08.webp",
    },
  ];
  const swiperRef: React.MutableRefObject<SwiperType | null> =
    useRef<SwiperType | null>(null);
  return (
    <>
      <div className="w-full h-full flex flex-col lg:flex-row   gap-4">
        <div className=" w-full md:min-w-[25%] px-8 py-10 flex flex-col justify-between bg-[#132742] text-white rounded-xl">
          <div className="flex flex-col gap-5 mb-5">
            <p className="text-xl font-normal">LATEST NEWS</p>
            <h1 className="text-3xl font-bold ">From Our Blog</h1>
            <p className="text-md font-normal">
              Welcome to our blog, where we delve into the captivating world of
              fashion, lifestyle, and all things inspiring.
            </p>
          </div>
          <div className="swiper-nav-btns  flex gap-2 py-2">
            <div
              onClick={() => swiperRef.current?.slidePrev()}
              className=" flex justify-center items-center"
            >
              <ArrowButton direction="left" />
            </div>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="  flex justify-center items-center"
            >
              <ArrowButton direction="right" />
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
              <div className=" relative w-full h-[500px] sm:h-full overflow-hidden group rounded-xl">
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
