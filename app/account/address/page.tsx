'use client'
import AddressAllActions from '@/components/account/AddressAllActions'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import Cookies from "js-cookie";
const AddressPage = () => {

  const router = useRouter();
  const token = Cookies.get("accessKey");

  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [token, router]);

  return (
    <>
      <div className='container'>
        <div className=' text-center py-20 md:py-40'>
          <h1 className=' text-2xl md:text-4xl font-semibold md:font-medium'>Address</h1>
          <p className='text-sm font-normal py-2'><Link href="/" >Home</Link> &#x2022; <span>Address</span></p>
        </div>
        <h1 className=' text-left text-2xl md:text-5xl font-semibold py-2'>Your Address</h1>

        <AddressAllActions />
      </div>

    </>
  )
}

export default AddressPage