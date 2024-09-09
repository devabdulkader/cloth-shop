
import Link from 'next/link'
import React from 'react'
import { HiBars3BottomLeft } from "react-icons/hi2";
import { RiCalendarTodoFill } from "react-icons/ri";
import Demo from '@/public/fashion_statement/fashion_1.jpg'
import Image from 'next/image';
import SearchBlogs from '@/components/blogs/SearchBlogs';
import { getAllBlogs } from '@/lib/service/getAllBlogs';
interface Categories {
    id: number,
    title: string,
    path: string,
}
const BlogsCategoriesSiderbar =async () => {
    const blogs = await getAllBlogs();
    const categoryData: Categories[] = [
        {
            id: 1,
            title: "Mate Shoes",
            path: "/"
        },
        {
            id: 2,
            title: "T-Shirt",
            path: "/"
        },
        {
            id: 3,
            title: "Runing Shoes",
            path: "/"
        },
        {
            id: 4,
            title: "Sheakers",
            path: "/"
        },
        {
            id: 5,
            title: "Woman",
            path: "/"
        },
        {
            id: 6,
            title: "Summer Fashion",
            path: "/"
        },
    ]
    return (
        <>
            <div className='bg-[#132842] rounded-xl'>
                <div>
                    <div className='flex flex-row gap-4 px-10 py-4 text-white'><HiBars3BottomLeft size={28} /><span className='text-md font-bold'>CATEGORIES</span></div>
                </div>
                <div className='flex flex-col gap-4 px-10 py-8 bg-[#f2f2f2] text-sm text-black rounded-xl' >
                    {
                        categoryData.map((item, index) => (
                            <Link href={item.path} key={index} className=' flex flex-row gap-8 items-center group'> <span className=" border-2 border-gray-300 group-hover:border-gray-800 p-1 rounded-full"></span> <span>{item.title}</span></Link>
                        ))
                    }
                </div>
            </div>
            <SearchBlogs />
            <div className='flex flex-col gap-8  px-6 py-8 border rounded-xl'>
                <h1 className='pb-4 text-xl font-semibold border-b-2'>RECENT POST</h1>
                {
                    blogs?.slice(0,3)?.map((item,index)=>(
                        <Link key={index} href={`/blogs/${item.id}`} className='flex flex-row justify-between items-center' >
                            <div className=' flex flex-row gap-4'>
                    <Image src={item.image} width={100} height={100} alt={item.title} className=' w-28 h-24 bg-cover rounded-lg' />
                    <div>
                        <p className='flex gap-2 items-center text-sm font-normal text-gray-400 '><RiCalendarTodoFill />{item.date}</p>
                        <p className=' text-sm font-semibold'>{item.title}</p>
                    </div>
                </div>
                        </Link>
                    ))
                }
            </div>
            <div className='flex flex-col gap-8  px-6 py-8 border rounded-xl'>
                <h1 className='pb-4 text-xl font-semibold border-b-2'>BLOG TAGS</h1>

                <div className=' flex flex-row flex-wrap gap-4'>
                    <Link href='/ ' className='bg-slate-100 hover:bg-[#132842] hover:text-white  text-[12px] font-semibold px-4 py-2 rounded-sm'> Cotton</Link>
                    <Link href='/ ' className='bg-slate-100 hover:bg-[#132842] hover:text-white  text-[12px] font-semibold px-4 py-2 rounded-sm'> Man</Link>
                    <Link href='/ ' className='bg-slate-100 hover:bg-[#132842] hover:text-white  text-[12px] font-semibold px-4 py-2 rounded-sm'> Shoes</Link>
                    <Link href='/ ' className='bg-slate-100 hover:bg-[#132842] hover:text-white  text-[12px] font-semibold px-4 py-2 rounded-sm'> Summer</Link>
                    <Link href='/ ' className='bg-slate-100 hover:bg-[#132842] hover:text-white  text-[12px] font-semibold px-4 py-2 rounded-sm'> T-shirt</Link>
                    <Link href='/ ' className='bg-slate-100 hover:bg-[#132842] hover:text-white  text-[12px] font-semibold px-4 py-2 rounded-sm'> Vintage</Link>
                    <Link href='/ ' className='bg-slate-100 hover:bg-[#132842] hover:text-white  text-[12px] font-semibold px-4 py-2 rounded-sm'> Women</Link>


                </div>
            </div>
            <div className='flex flex-col gap-8  px-6 py-8 border rounded-xl'>
                <h1 className='pb-4 text-xl font-semibold border-b-2'>BLOG BANNER</h1>

                <div className=' flex flex-row gap-4'>
                    <Image src={Demo} width={300} height={300} alt="" className=' w-full h-[300px] bg-cover rounded-lg' />
                </div>
            </div>
        </>
    )
}

export default BlogsCategoriesSiderbar
