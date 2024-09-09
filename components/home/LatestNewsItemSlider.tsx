
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";
import { getAllBlogs } from '@/lib/service/getAllBlogs'
import React from 'react'
import { SwiperSlide } from "swiper/react";
const LatestNewsItemSlider = async () => {
    const blogs = await getAllBlogs();
    console.log(blogs,'>......')
    return (
        <div className=" w-full h-full">
            {/* {
                blogs && blogs?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className=" relative w-full h-[100px]  overflow-hidden group rounded-xl">
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
                                            href={`/blogs/fashion/${item.pathName}`}
                                            className=" flex justify-center items-center w-10 h-10 text-center rounded-full  bg-white hover:bg-[#132742] text-black hover:text-white"
                                        >
                                            <GoArrowRight size={24} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            } */}
            {
                blogs?.map((item,index)=>(
                  <SwiperSlide key={index}>
                      <div>{item.title}</div>
                  </SwiperSlide>
                ))
            }
        </div>
    )
}

export default LatestNewsItemSlider
