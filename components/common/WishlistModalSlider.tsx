// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';


// // import required modules
// import { Pagination } from 'swiper/modules';
// const WishlistModalSlider = () => {
//     return (
//         <>
//           <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
//             <SwiperSlide>Slide 1</SwiperSlide>
//           </Swiper>
//         </>
//       );
// }

// export default WishlistModalSlider


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

const WishlistModalSlider: React.FC = () => {
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
            <div className="w-full h-full flex flex-col lg:flex-row relative group  gap-4">


                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    loop={true}
                    modules={[Pagination]}
                    className="mySwiper w-full md:min-w-[75%] "
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {testimonialData.map((item, index) => (
                        <>
                            <SwiperSlide key={index} className="">
                                <div className="  w-full h-full   rounded-xl">
                                    <Image
                                        className=" w-full h-full bg-cover"
                                        src={item.image}
                                        width={1000}
                                        height={1000}
                                        alt=""
                                    />
                                </div>

                            </SwiperSlide>

                        </>
                    ))}

                </Swiper>
                <div className=" absolute top-1/2  z-20  swiper-nav-btns min-w-full flex justify-between items-center  px-2">
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="hidden group-hover:flex bg-slate-50 hover:bg-[#132842] text-black hover:text-white shadow-lg p-4 rounded-full duration-300 ease-in-out"
                    >
                        <SlArrowLeft size={18} />
                    </button>
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="hidden group-hover:flex bg-slate-50 hover:bg-[#132842] text-black hover:text-white shadow-lg p-4 rounded-full duration-300 ease-in-out"
                        >
                        <SlArrowRight size={18} />
                    </button>
                </div>
            </div>
        </>
    );
};

export default WishlistModalSlider;
