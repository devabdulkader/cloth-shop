'use client';
import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import Banner_image from '@/public/blogs/banner_image.webp'
interface Fashion {
    id: number,
    title: string,
    desc: string,
    image: string,
}
const BlogRelatedFashionSlider:React.FC = () => {

    const fashionData: Fashion[] = [
        {
            id: 1,
            title: "Labortis mia maximus",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
            image: Banner_image.src
        },
        {
            id: 2,
            title: "Labortis mia maximus",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
            image: Banner_image.src
        },
        {
            id: 3,
            title: "Labortis mia maximus",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
            image: Banner_image.src
        },
        {
            id: 4,
            title: "Labortis mia maximus",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
            image: Banner_image.src
        },
        {
            id: 6,
            title: "Labortis mia maximus",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
            image: Banner_image.src
        },
        {
            id: 7,
            title: "Labortis mia maximus",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
            image: Banner_image.src
        },
    ]
    return (
        <div className=' py-10'>
            <h1 className=' text-4xl font-semibold py-6'>Releted Fashion</h1>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    }
                }}
                modules={[Pagination]}
                className="mySwiper"

            >
                {
                    fashionData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Image src={Banner_image} alt={item.title} />
                            <p className='text-md font-semibold py-3'>{item.title}</p>
                            <p className='text-sm font-normal'>{item.desc.slice(0, 100)}...</p>

                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    )
}

export default BlogRelatedFashionSlider


