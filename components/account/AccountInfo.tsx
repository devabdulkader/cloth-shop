'use client'
import { AuthContext } from '@/app/authProvider';
import React, { useContext, useEffect, useState } from 'react'
import { instance } from '@/axios/axiosInstance';
import LoadingSpinner from '../common/LoadingSpinner';
import Link from 'next/link';
const ADDRESS_QUERY = `
query{
    getAddresses{
        id
       fullName
        addressEmail
        phoneNumber
        fullAddress
        isDefault
    }
}
`;
const AccountInfo = () => {
    const { handleLogout } = useContext(AuthContext);
    const [address, setAddress] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        userOrders();
    }, [])

    const userOrders = async () => {
        try {
            const response = await instance.post("/", {
                query: ADDRESS_QUERY,
            });
            setAddress(response.data.data.getAddresses);

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <LoadingSpinner/>;
    }
    return (
        <>
            <div>
                <h1 className=' text-4xl font-bold'>Account</h1>
                {
                    address?.map((item, index) => (

                       
                        <ul key={index} className=' py-4 text-sm font-normal'>
                            <li className=' flex flex-row gap-10  py-4 border-b-2'><span className=' w-16 md:w-28 font-semibold'>My Name:</span> <span>{item.fullName}</span></li>
                            <li className=' flex flex-row gap-10  py-4 border-b-2'><span className=' w-16 md:w-28 font-semibold'>Email:</span> <span>{item.addressEmail}</span></li>
                            <li className=' flex flex-row gap-10  py-4 border-b-2'><span className=' w-16 md:w-28 font-semibold'>Full Address:</span> <span>{item.fullAddress}</span></li>
                            <li className=' flex flex-row gap-10  py-4 border-b-2'><span className=' w-16 md:w-28 font-semibold'>Phone:</span> <span>{item.phoneNumber}</span></li>
                        </ul>
                    ))
                }
            </div>
            <div className=' flex flex-row gap-4 py-4 text-center'>
                <Link href="/account/address" className='w-52  py-4 hover:bg-opacity-95 bg-[#132842] text-white rounded-full text-sm font-semibold'>
                    View Addresss(1)
                </Link>
                <button onClick={() => handleLogout()} className='w-52  py-4 hover:bg-opacity-95 bg-[#132842] text-white rounded-full text-sm font-semibold'>
                    Log Out
                </button>
            </div>
        </>
    )
}

export default AccountInfo
