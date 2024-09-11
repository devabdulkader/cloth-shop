"use client"
import { AuthContext } from '@/app/authProvider';
import Link from 'next/link';
import React, { useContext } from 'react'
const AccountGroupButton = () => {
    const { handleLogout } = useContext(AuthContext);
  return (
    <div className=' flex flex-row gap-4 py-4 text-center'>
    <Link href="/account/address" className='w-52  py-4 hover:bg-opacity-95 bg-[#132842] text-white rounded-full text-sm font-semibold'>
        View Addresss(1)
    </Link>
    <button onClick={() => handleLogout()} className='w-52  py-4 hover:bg-opacity-95 bg-[#132842] text-white rounded-full text-sm font-semibold'>
        Log Out
    </button>
</div>
  )
}

export default AccountGroupButton