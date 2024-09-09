'use client'
import Link from 'next/link'
import React from 'react'
import { IoMdShare, IoMdPrint } from "react-icons/io";

const ShareAndPrint = () => {
    
    const handlePrint = async () => {
        window.print();
    };
  return (
    <div className=' w-full flex flex-row justify-center md:justify-end border-b-2 md:border-none'>
    <Link href="/" className='flex gap-2 items-center hover:bg-gray-200 px-8 py-4'><IoMdShare />SHARE</Link>
    <p onClick={()=>handlePrint} className='flex gap-2 items-center hover:bg-gray-200 px-8 py-4'><IoMdPrint />PRINT</p>
</div>
  )
}

export default ShareAndPrint
