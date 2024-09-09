import Link from 'next/link'
import React from 'react'
import OrderList from '@/components/account/OrderList';
import AccountInfo from '@/components/account/AccountInfo';

const AccountPage: React.FC = () => {

    return (
        <div className='container'>
            <div className=' text-center py-20 md:py-40'>
                <h1 className=' text-2xl md:text-4xl font-semibold md:font-medium'>Account</h1>
                <p className='text-sm font-normal py-2'><Link href="/" >Home</Link> &#x2022; <span>Account</span></p>
            </div>
           <AccountInfo/>

            <OrderList />


        </div>
    )
}

export default AccountPage