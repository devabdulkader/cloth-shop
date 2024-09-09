'use client'
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import { getAllBlogs } from '@/lib/service/getAllBlogs';
import Link from 'next/link';
import { IBlog } from '@/types/blog';
interface BlogsProps{
    blogs:IBlog[]
}

const BlogRelatedFashionSlider:React.FC < BlogsProps> =  ({blogs}) => {
    // const blogs = await getAllBlogs();

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
                    blogs?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Link href={`/blogs/${item.id}`} >
                                <Image src={item.image} alt={item.title} width={300} height={200} />
                                <p className='text-md font-semibold py-3'>{item.title}</p>
                                <p className=' text-base font-normal'>{item.description.map((item, index) => (<span key={index}>{item.para.slice(0, 25)}</span>))}...</p>
                            </Link>
                        </SwiperSlide>
                    ))

                }

            </Swiper>
        </div>
    )
}

export default BlogRelatedFashionSlider


