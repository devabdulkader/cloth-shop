"use client"
import Form from '@/components/forms/Form';
import FormInput from '@/components/forms/FormInput';
import Link from 'next/link'
import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
const LoginPage = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);

    const submitHandler = async (data: any) => {
        console.log("hello");
    };
    return (
        <div className='container'>
            <div className=' text-center py-20 md:py-40'>
                <h1 className=' text-2xl md:text-4xl font-semibold md:font-medium'>ACCOUNT</h1>
                <p className='text-sm font-normal py-2'><Link href="/" >Home</Link> &#x2022; <span>Account</span></p>
            </div>
            <div className=' flex  justify-center pb-10 md:pb-20'>
                <div className=' min-w-full md:min-w-[50%]'>
                    <div className='flex flex-col gap-2 py-4'>
                        <h1 className=' text-2xl font-bold uppercase'>Sign In</h1>
                        <p className=' text-sm font-normal'>Insert your account information:</p>
                    </div>

                    <Form submitHandler={submitHandler} className=' min-w-full flex flex-col gap-4'>
                        <FormInput name='email' id='email' placeholder='ENTER YOUR EMAIL' type='email' className='min-w-full border hover:border-black rounded-full px-4 py-4 text-sm' />
                   
                            <FormInput name='password' id='password' placeholder='PASSWORD' type={isPasswordVisible ? "password" : "text"} className='  min-w-full border hover:border-black rounded-full px-4 py-4 text-sm' />
                      <div className='flex items-center gap-1 text-sm'> <MdEmail size={16}/> <p className=' font-semibold'>Forgot your Password?</p></div>
                      <p className=' text-sm font-normal'>If you don't have an account, please<Link href="/register" className=' font-semibold text-blue-500'> Register Here</Link></p>
                        <button className='  min-w-full bg-[#132842]  py-4 text-white rounded-full text-base'>
                           Submit
                        </button>
                    </Form>
                </div>
            </div>
        </div>

    )
}

export default LoginPage