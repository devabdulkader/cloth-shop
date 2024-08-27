'use client'
import Form from '@/components/forms/Form';
import FormInput from '@/components/forms/FormInput';
import Link from 'next/link'
import React from 'react'
import { HiBars3BottomLeft } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";

import { RiCalendarTodoFill } from "react-icons/ri";
import Demo from '@/public/fashion_statement/fashion_1.jpg'
import { FaUser } from "react-icons/fa6";
import Banner_image from '@/public/blogs/banner_image.webp'
import Image from 'next/image';
interface Categories {
    id: number,
    title: string,
    path: string,
}


const FashionPage: React.FC = () => {
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

    const submitHandler = async (data: any) => {
        console.log("hello")
    }
    return (
        <div className='container'>
            <div className=' text-center py-20 md:py-40'>
                <h1 className=' text-2xl md:text-4xl font-semibold md:font-medium'>FASHION</h1>
                <p className='text-sm font-normal py-2'><Link href="/" >Home</Link> &#x2022; <span>Fashion</span></p>
            </div>
            <div className=' w-full flex flex-col-reverse md:flex-row gap-4 md:gap-12 py-10'>
                {/* CATEGORIES */}
                <div className='w-full md:min-w-[25%] flex flex-col gap-8 '>
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
                    <div className="bg-[#f2f2f2] rounded-xl  px-10 py-8">
                        <Form className=" relative" submitHandler={submitHandler}>
                            <FormInput name="" placeholder="Search" className=" rounded-full px-4 h-12 text-sm outline-none border-2 border-[#132842]" />
                            <div className=" absolute top-[6px] right-[6px] bg-[#132842] hover:bg-[#263d5c] rounded-full p-2 flex justify-center items-center "><IoSearch size={20} className="text-white" /></div>
                        </Form>

                    </div>
                    <div className='flex flex-col gap-8  px-6 py-8 border rounded-xl'>
                        <h1 className='pb-4 text-xl font-semibold border-b-2'>RECENT POST</h1>

                        <div className=' flex flex-row gap-4'>
                            <Image src={Demo} width={100} height={100} alt="" className=' w-24 h-28 bg-cover rounded-lg' />
                            <div>
                                <p className='flex gap-2 items-center text-sm font-normal text-gray-400 '><RiCalendarTodoFill />JULY 10 2024</p>
                                <p className=' text-sm font-semibold'>Lobortis mia maximus</p>
                            </div>
                        </div>
                        <div className=' flex flex-row gap-4'>
                            <Image src={Demo} width={100} height={100} alt="" className=' w-24 h-28 bg-cover rounded-lg' />
                            <div>
                                <p className='flex gap-2 items-center text-sm font-normal text-gray-400 '><RiCalendarTodoFill />JULY 10 2024</p>
                                <p className=' text-sm font-semibold'>Lobortis mia maximus</p>
                            </div>
                        </div>
                        <div className=' flex flex-row gap-4'>
                            <Image src={Demo} width={100} height={100} alt="" className=' w-24 h-28 bg-cover rounded-lg' />
                            <div>
                                <p className='flex gap-2 items-center text-sm font-normal text-gray-400 '><RiCalendarTodoFill />JULY 10 2024</p>
                                <p className=' text-sm font-semibold'>Lobortis mia maximus</p>
                            </div>
                        </div>
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

                </div>
                <div className='w-full md:min-w-[75%] flex flex-col gap-8'>

                    <div className='flex flex-col gap-4'>
                        <Image src={Banner_image} alt='AboutUs_Fashion' className=' rounded-xl' />
                        <h1 className=' text-2xl font-semibold md:font-medium'>Lobortis mia maximus</h1>
                        <div className=' w-full flex flex-row justify-center md:justify-start gap-4 text-sm text-gray-400 pb-4 border-b-2'>
                            <p className='flex gap-2 items-center px-2'><RiCalendarTodoFill />JULY 10 2024</p>
                            <p className='flex gap-2 items-center px-2 '><FaUser />VINOVA THEME</p>
                        </div>
                        <p className=' text-sm font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus venenatis ex, et ultricies nunc molestie ut. Nullam accumsan id nisi vel convallis. Sed dui risus, ullamcorper vitae aliquet vitae, feugiat in neque. Praesent egestas ligula velit, sed malesuada erat interdum vitae. Aliquam pretium nisi sed turpis posuere pharetra. Suspe...</p>
                        <Link href='/' className='flex justify-center items-center  bg-[#132842] w-48 h-14 text-white rounded-full text-sm'>
                            Read More
                        </Link>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <Image src={Banner_image} alt='AboutUs_Fashion' className=' rounded-xl' />
                        <h1 className=' text-2xl font-semibold md:font-medium'>Lobortis mia maximus</h1>
                        <div className=' w-full flex flex-row justify-center md:justify-start gap-4 text-sm text-gray-400 pb-4 border-b-2'>
                            <p className='flex gap-2 items-center px-2'><RiCalendarTodoFill />JULY 10 2024</p>
                            <p className='flex gap-2 items-center px-2 '><FaUser />VINOVA THEME</p>
                        </div>
                        <p className=' text-sm font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus venenatis ex, et ultricies nunc molestie ut. Nullam accumsan id nisi vel convallis. Sed dui risus, ullamcorper vitae aliquet vitae, feugiat in neque. Praesent egestas ligula velit, sed malesuada erat interdum vitae. Aliquam pretium nisi sed turpis posuere pharetra. Suspe...</p>
                        <Link href='/' className='flex justify-center items-center  bg-[#132842] w-48 h-14 text-white rounded-full text-sm'>
                            Read More
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default FashionPage