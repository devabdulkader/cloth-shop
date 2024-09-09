'use client'
import Form from '@/components/forms/Form';
import FormInput from '@/components/forms/FormInput';
import React from 'react'
import { IoSearch } from "react-icons/io5";

const SearchBlogs = () => {
    const submitHandler = async (data: any) => {
        console.log("hello")
    }
  return (
    <div className="bg-[#f2f2f2] rounded-xl  px-10 py-8">
    <Form className=" relative" submitHandler={submitHandler}>
        <FormInput name="" placeholder="Search" className=" rounded-full px-4 h-12 text-sm outline-none border-2 border-[#132842]" />
        <div className=" absolute top-[6px] right-[6px] bg-[#132842] hover:bg-[#263d5c] rounded-full p-2 flex justify-center items-center "><IoSearch size={20} className="text-white" /></div>
    </Form>

</div>
  )
}

export default SearchBlogs
