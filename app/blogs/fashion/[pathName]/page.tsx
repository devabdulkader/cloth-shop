'use client'
import Link from 'next/link'
import React from 'react'

import { IoMdShare, IoMdPrint } from "react-icons/io";
import { RiCalendarTodoFill } from "react-icons/ri";
import Demo from '@/public/fashion_statement/fashion_1.jpg'
import { FaUser } from "react-icons/fa6";
import Banner_image from '@/public/blogs/Lobortis_mia_maximus.webp'
import Image from 'next/image';
import BlogRelatedFashionSlider from '@/components/blogs/BlogRelatedFashionSlider';
import BlogsCategoriesSiderbar from '@/components/blogs/BlogsCategoriesSiderbar';
import getSingleBlog from '@/lib/service/getSingleBlog';


interface FashionSinglePageProps {
    params: {
        pathName: string;
    };
}

const FashionSinglePage: React.FC < FashionSinglePageProps>= async({params}) => {
    const { pathName } = params;
    // console.log(Id,"pathname .....");
    const blog = await getSingleBlog(pathName);
    // console.log(postData,"postdata.......");



    const handlePrint = async (data: any) => {
        window.print();
    };
    return (
        <div className='container'>
            <div className=' text-center py-20 md:py-40'>
                <h1 className=' text-2xl md:text-4xl font-semibold  uppercase'>{blog?.title}</h1>
                <p className='text-sm font-medium py-2'><Link href="/" >Home</Link> &#x2022; <span>Fashion</span> &#x2022; <span>{blog?.title}</span></p>
            </div>
            <div className=' w-full flex flex-col-reverse md:flex-row gap-4 md:gap-12 py-10'>
                {/* CATEGORIES */}
                <div className='w-full md:min-w-[25%] flex flex-col gap-8 '>
      
                    <BlogsCategoriesSiderbar/>

                </div>
                <div className='w-full md:min-w-[75%] flex flex-col '>
                <Image src={`${blog?.image}`} alt='AboutUs_Fashion' width={1000} height={500} className=' rounded-xl' />
                    <div className=' flex flex-col  gap-5 py-10 text-sm font-normal'>
                        <p className='text-xl font-semibold'>{blog?.title}</p>
                      {
                        blog?.description && blog?.description?.map((item,index)=>(
                            <p key={index}>{item?.para}</p>
                        ))
                      }
                    </div>
                    <div className='flex flex-col md:flex-row justify-between items-center md:border-y-2 text-[12px] font-semibold'>
                        <div className=' w-full flex flex-row justify-center md:justify-start gap-0 md:gap-4 text-gray-400 border-y-2 md:border-none'>
                            <p className='flex gap-2 items-center px-2 md:px-8 py-4'><RiCalendarTodoFill />{blog?.date}</p>
                            <p className='flex gap-2 items-center px-2 md:px-8 py-4'><FaUser />VINOVA THEME</p>
                        </div>
                        <div className=' w-full flex flex-row justify-center md:justify-end border-b-2 md:border-none'>
                            <Link href="/" className='flex gap-2 items-center hover:bg-gray-200 px-8 py-4'><IoMdShare />SHARE</Link>
                            <p onClick={handlePrint} className='flex gap-2 items-center hover:bg-gray-200 px-8 py-4'><IoMdPrint />PRINT</p>
                        </div>

                    </div>
                    <BlogRelatedFashionSlider />

                </div>
            </div>
        </div>
    )
}

export default FashionSinglePage