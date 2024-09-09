'use client'
import { AuthContext } from '@/app/authProvider';
import React, { useContext } from 'react'
import Cookies from 'js-cookie';
const AccountInfo = () => {
    const { isLoggedIn, handleLogout } = useContext(AuthContext);
    const user =    Cookies.get("user")
    console.log(JSON.stringify(user),"3333333333")
    return (
        <>
            <div>
                <h1 className=' text-4xl font-bold'>Account</h1>
                <ul className=' py-4'>
                    <li className=' flex flex-row gap-10 text-sm font-normal py-4 border-b-2'><span className=' font-semibold'>My Name:</span> <span>Sariot Hossain</span></li>
                    <li className=' flex flex-row gap-10 text-sm font-normal py-4 border-b-2'><span className=' font-semibold'>Company:</span> <span>Zorg IT Group</span></li>
                    <li className=' flex flex-row gap-10 text-sm font-normal py-4 border-b-2'><span className=' font-semibold'>Address1:</span> <span>Nikunjo-1</span></li>
                    <li className=' flex flex-row gap-10 text-sm font-normal py-4 border-b-2'><span className=' font-semibold'>Address1:</span> <span>Nikunjo-1</span></li>
                    <li className=' flex flex-row gap-10 text-sm font-normal py-4 border-b-2'><span className=' font-semibold'>City:</span> <span>Dhaka</span></li>
                    <li className=' flex flex-row gap-10 text-sm font-normal py-4 border-b-2'><span className=' font-semibold'>Postal/Zip Code::</span> <span>1203</span></li>
                    <li className=' flex flex-row gap-10 text-sm font-normal py-4 border-b-2'><span className=' font-semibold'>Phone:</span> <span>01881286284</span></li>
                    <li className=' flex flex-row gap-10 text-sm font-normal py-4 border-b-2'><span className=' font-semibold'>Country:</span> <span>Bangladesh</span></li>
                </ul>
            </div>
            <div className=' flex flex-row gap-4 py-4'>
                <button className='w-52  py-4 hover:bg-opacity-95 bg-[#132842] text-white rounded-full text-sm font-semibold'>
                    View Addresss(1)
                </button>
                <button onClick={()=>handleLogout()} className='w-52  py-4 hover:bg-opacity-95 bg-[#132842] text-white rounded-full text-sm font-semibold'>
                    Log Out
                </button>
            </div>
        </>
    )
}

export default AccountInfo
