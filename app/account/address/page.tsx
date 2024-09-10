import Link from 'next/link'
import React from 'react'

const AddressPage = () => {
  return (
    <div className='container'>
    <div className=' text-center py-20 md:py-40'>
        <h1 className=' text-2xl md:text-4xl font-semibold md:font-medium'>Address</h1>
        <p className='text-sm font-normal py-2'><Link href="/" >Home</Link> &#x2022; <span>Address</span></p>
    </div>
    <h1 className=' text-left text-2xl md:text-5xl font-semibold py-2'>Your Address</h1>
    <div className=' flex flex-row gap-4 py-4 text-center'>
  
                <Link href="/account" className='w-52  py-4 hover:bg-opacity-95 bg-[#132842] text-white rounded-full text-sm font-semibold'>
                    Return To Account Details
                </Link>
                <button  className='w-52  py-4 hover:bg-opacity-95 bg-[#132842] text-white rounded-full text-sm font-semibold'>
                    Add A New Address
                </button>
            </div>
    </div>
  )
}

export default AddressPage