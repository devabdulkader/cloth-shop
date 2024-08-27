'use client'
import Form from '@/components/forms/Form';
import FormInput from '@/components/forms/FormInput';
import Link from 'next/link'
import React from 'react'
import { HiBars3BottomLeft } from "react-icons/hi2";

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
            <div className=' w-full flex flex-col-reverse md:flex-row gap-8'>
                <div className='w-full md:min-w-[25%] flex flex-col gap-8 '>
                    {/* CATEGORIES */}
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
                    <div className="bg-[#f2f2f2] rounded-xl px-10 py-8">
                        <Form className=" relative " submitHandler={submitHandler}>
                            <FormInput name="" placeholder="Enter your email" className=" rounded-full px-4 h-14 text-sm outline-none" />
                            <div className=" absolute top-2 right-1 bg-[#132842] hover:bg-[#263d5c] rounded-full h-12 w-20 flex justify-center items-center ">Submit</div>
                        </Form>

                    </div>
                </div>
                <div className='w-full md:min-w-[75%] bg-red-500'>1</div>
            </div>
        </div>
    )
}

export default FashionPage