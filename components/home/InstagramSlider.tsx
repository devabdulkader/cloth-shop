"use client";
import React, { useState } from "react";
import person1 from "@/public/instagram/insta01.jpeg";
import person2 from "@/public/instagram/insta02jpg.jpg";
import Marquee from "react-fast-marquee";
import Image from "next/image";

import { FaInstagram } from "react-icons/fa6";
interface Review {
  image: string;
  id: number;
}

const InstagramSlider: React.FC = () => {
  const [pause, setPause] = useState(0);

  const reviews: Review[] = [
    {
      id: 1,
      image: "/latest-news/slider01.webp",
    },
    {
      id: 2,
      image: "/latest-news/slider02.webp",
    },
    {
      id: 3,
      image: "/latest-news/slider03.webp",
    },
    {
      id: 4,
      image: "/latest-news/slider04.webp",
    },
    {
      id: 5,
      image: "/latest-news/slider05.webp",
    },
    {
      id: 6,
      image: "/latest-news/slider06.webp",
    },
    {
      id: 7,
      image: "/latest-news/slider07.webp",
    },
    {
      id: 8,
      image: "/latest-news/slider08.webp",
    },
    {
      id: 9,
      image: "/latest-news/slider04.webp",
    },
    {
      id: 10,
      image: "/latest-news/slider05.webp",
    },
  ];

  return (
    <>
      <div className=" relative w-full">
        <Marquee pauseOnHover={true} speed={50}>
          {reviews.map((review, index) => (
            <div
              key={index}
              className="slide relative group "
              onMouseEnter={() => setPause(review.id)}
              onMouseLeave={() => setPause(0)}
            >
              <Image
                src={review.image}
                width={800}
                height={800}
                alt="our client"
                className="h-[350px] sm:h-[400px] w-[300px] bg-contain "
              />
              {pause === review.id && (
                <div className=" w-full h-full">
                  <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-black opacity-60 text-white min-w-full min-h-full flex justify-center items-center ">
                    <FaInstagram size={40} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </Marquee>
        <div className=" hidden md:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 ">
          <div className="   bg-white text-black text-center content-center flex flex-col justify-center items-center gap-3 text-lg font-semibold w-52 h-52 rounded-full">
            <span>Instagram</span>
            <FaInstagram size={24} />
            <span className="text-md font-normal">#MinaStore</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstagramSlider;
