"use client"
import Link from 'next/link'
import React, {  useEffect } from 'react'
import OrderList from '@/components/account/OrderList';
import AccountInfo from '@/components/account/AccountInfo';
import AccountGroupButton from '@/components/account/AccountGroupButton';
import {  useRouter } from 'next/navigation';
import Cookies from "js-cookie";
const AccountPage: React.FC = () => {

    const router = useRouter();
    const token = Cookies.get("accessKey") ;

    useEffect(() => {
        if (!token) {
            router.push("/login");
        }
      }, [token,router]);

    return (
        <div className='container'>
            <div className=' text-center py-20 md:py-40'>
                <h1 className=' text-2xl md:text-4xl font-semibold md:font-medium'>Account</h1>
                <p className='text-sm font-normal py-2'><Link href="/" >Home</Link> &#x2022; <span>Account</span></p>
            </div>
            <AccountInfo />
            <AccountGroupButton />
            <OrderList />


        </div>
    )
}

export default AccountPage