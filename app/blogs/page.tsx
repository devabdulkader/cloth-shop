
import Link from 'next/link'
import React from 'react'
import { RiCalendarTodoFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa6";
import Image from 'next/image';
import { getAllBlogs } from '@/lib/service/getAllBlogs';
import BlogsCategoriesSiderbar from '@/components/blogs/BlogsCategoriesSiderbar';

const FashionPage: React.FC = async () => {
    const blogsData = await getAllBlogs();

    return (
        <div className='container'>
            <div className=' text-center py-20 md:py-40'>
                <h1 className=' text-2xl md:text-4xl font-semibold md:font-medium'>FASHION</h1>
                <p className='text-sm font-normal py-2'><Link href="/" >Home</Link> &#x2022; <span>Fashion</span></p>
            </div>
            <div className=' w-full flex flex-col-reverse md:flex-row gap-4 md:gap-12 py-10'>
                {/* CATEGORIES */}
                <div className='w-full md:min-w-[25%] flex flex-col gap-8 '>
                    <BlogsCategoriesSiderbar />

                </div>
                <div className='w-full md:min-w-[75%] flex flex-col gap-8'>

                    {
                        blogsData && blogsData.slice(0, 2).map((item, index) => (
                            <div key={index} className='flex flex-col gap-4'>
                                <Image src={item.image} alt='AboutUs_Fashion' width={1000} height={500} className=' rounded-xl' />
                                <h1 className=' text-2xl font-semibold md:font-medium'>{item.title}</h1>
                                <div className=' w-full flex flex-row justify-center md:justify-start gap-4 text-sm text-gray-400 pb-4 border-b-2'>
                                    <p className='flex gap-2 items-center px-2'><RiCalendarTodoFill />{item.date}</p>
                                    <p className='flex gap-2 items-center px-2 '><FaUser />VINOVA THEME</p>
                                </div>
                                <p className=' text-base font-normal'>{item.description.map((item, index) => (<span key={index}>{item.para.slice(0, 100)}</span>))}...</p>
                                <Link href={`/blogs/${item.id}`} className='flex justify-center items-center  bg-[#132842] w-48 h-14 text-white rounded-full text-sm'>
                                    Read More
                                </Link>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default FashionPage