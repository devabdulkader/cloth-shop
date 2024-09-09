
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Banner_image from '@/public/blogs/Lobortis_mia_maximus.webp'
import { RiCalendarTodoFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa6";
import { IoMdShare, IoMdPrint } from "react-icons/io";
import BlogRelatedFashionSlider from '@/components/blogs/BlogRelatedFashionSlider'
import getSingleBlog from '@/lib/service/getSingleBlog';
import ShareAndPrint from '@/components/blogs/ShareAndPrint';
import { getAllBlogs } from '@/lib/service/getAllBlogs';
interface SingleBlogPageProps {
    params: { Id: number }
}
const SingleBlogPage: React.FC<SingleBlogPageProps> = async ({ params }) => {
    const { Id } = params;
    const blog = await getSingleBlog(Id);
    const blogs = await getAllBlogs();

    return (
        <div className='container pb-20'>
            <div className=' text-center py-16 md:py-40'>
                <h1 className=' text-2xl md:text-4xl font-semibold md:font-medium'>{blog?.title}</h1>
                <p className='text-sm font-normal py-2'><Link href="/" >Home</Link> &#x2022;<Link href="/" > Fashion</Link> &#x2022; <span>{blog?.title}</span></p>
            </div>
            <Image src={`${blog?.image}`} width={1000} height={500} alt={`${blog?.title}`} className=' w-full rounded-xl' />
            <div className=' flex flex-col  gap-5 py-10 text-sm font-normal'>
                <p className='text-xl font-semibold'>{blog?.title}</p>
             {
                blog?.description?.map((item,index)=>(
                    <p key={index} className='text-base font-normal'>{item.para}</p>
                ))
             }
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center md:border-y-2 text-[12px] font-semibold'>
                <div className=' w-full flex flex-row justify-center md:justify-start gap-0 md:gap-4 text-gray-400 border-y-2 md:border-none'>
                    <p className='flex gap-2 items-center px-2 md:px-8 py-4'><RiCalendarTodoFill />{blog?.date}</p>
                    <p className='flex gap-2 items-center px-2 md:px-8 py-4'><FaUser />VINOVA THEME</p>
                </div>
                <ShareAndPrint/>

            </div>
            {blogs && <BlogRelatedFashionSlider blogs={blogs} />}

        </div>

    )
}

export default SingleBlogPage
