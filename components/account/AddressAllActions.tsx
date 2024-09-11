'use client'
import React, { useEffect, useState } from 'react'
import { instance } from '@/axios/axiosInstance';
import LoadingSpinner from '../common/LoadingSpinner';
import Link from 'next/link';
import Form from '../forms/Form';
import FormInput from '../forms/FormInput';
import EditAddress from './EditAddress';
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
const ADDRESS_DELETED_QUERY = `
mutation DeleteAddress($id: ID!) {
    deleteAddress(id: $id) {
    id
    }
}
`
const AddressAllActions = () => {
    const [edit, setEdit] = useState(false);
    const [address, setAddress] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        handleAddressData();

    }, [address])

    const handleAddressData = async () => {
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
    const handleDeleteAddress = async (id: any) => {
        try {
            const response = await instance.post("/", {
                query: ADDRESS_DELETED_QUERY,
                variables: {
                    id: id,
                }
            });
            console.log(response, "address deleted ")

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    const handleEditAddress = async (id: any) => {
        try {
            console.log(id)
            setEdit(true)
        } catch (error) {
            // setEdit(false)
        }
    }
    const handleAddress = async (data: any) => { }
    const isDefaultAddress = address?.filter((item) => item.isDefault === true);


    return (
        <>
            <div className=' flex flex-row gap-4 py-4 text-center'>

                <Link href="/account" className='w-52  py-4 hover:bg-opacity-95 bg-[#132842] text-white rounded-full text-sm font-semibold'>
                    Return To Account Details
                </Link>
                <button className='w-52  py-4 hover:bg-opacity-95 bg-[#132842] text-white rounded-full text-sm font-semibold'>
                    Add A New Address
                </button>
            </div>

            <div>
                {
                    isDefaultAddress?.map((item, index) => (


                        <div key={index}>
                            <div >
                                <h1 className=' text-4xl font-bold'>Default</h1>
                                <ul className=' py-4 text-sm font-normal'>
                                    <li className=' flex flex-row gap-10  py-4 border-b-2'><span className=' w-16 md:w-28 font-semibold'>My Name:</span> <span>{item.fullName}</span></li>
                                    <li className=' flex flex-row gap-10  py-4 border-b-2'><span className=' w-16 md:w-28 font-semibold'>Email:</span> <span>{item.addressEmail}</span></li>
                                    <li className=' flex flex-row gap-10  py-4 border-b-2'><span className=' w-16 md:w-28 font-semibold'>Full Address:</span> <span>{item.fullAddress}</span></li>
                                    <li className=' flex flex-row gap-10  py-4 border-b-2'><span className=' w-16 md:w-28 font-semibold'>Phone:</span> <span>{item.phoneNumber}</span></li>
                                </ul>
                                <div className=' flex flex-row gap-4 py-4 text-center'>

                                    <button onClick={() => handleEditAddress(item.id)} className='w-52  py-4 hover:bg-opacity-95 bg-[#132842] text-white rounded-full text-sm font-semibold'>
                                        Edit
                                    </button>
                                    <button onClick={() => handleDeleteAddress(item.id)} className='w-52  py-4 hover:bg-opacity-95 bg-[#132842] text-white rounded-full text-sm font-semibold'>
                                        Delete
                                    </button>
                                </div>
                            </div>
                            <div className='w-[50%]'>
                                {
                                    edit &&
                                    (

                                        <Form submitHandler={handleAddress} className=' min-w-full flex flex-col gap-4'>
                                            <FormInput name='fullName' id='fullName' value={item.fullName} placeholder='Full Name' label='Full Name' type='text' className='min-w-full border hover:border-black rounded-md px-4 py-3 text-sm' />

                                            <FormInput name='addressEmail' id='addressEmail' value={item.addressEmail} label='Address Email' type='email' className='min-w-full border hover:border-black rounded-md px-4 py-3  text-sm' />
                                            <FormInput name='fullAddress' id='fullAddress' value={item.fullAddress} label='Full Address' type='text' className='min-w-full border hover:border-black rounded-md px-4 py-3 text-sm' />

                                            <FormInput name='phoneNumber' id='phoneNumber' value={item.phoneNumber} label='Phone Number' type='text' className='min-w-full border hover:border-black rounded-md px-4 py-3  text-sm' />

                                            <div className=' flex flex-col gap-4 py-4 justify-center items-center text-center'>
                                                <div className='flex items-center gap-1 text-sm'> <FormInput id='isDefault' name="isDefault" type="checkbox" /><p> Set as default address</p></div>
                                                <button className='w-52  py-4 hover:bg-opacity-95 bg-[#132842] text-white rounded-full text-sm font-semibold'>
                                                    Updated
                                                </button>
                                                <button onClick={() => setEdit(false)} className='w-52  py-4 hover:bg-opacity-95 bg-[#132842] text-white rounded-full text-sm font-semibold'>
                                                    Cancel
                                                </button>
                                            </div>
                                        </Form>
                                    )
                                }
                            </div>
                        </div>
                    ))

                }
                {
                    address?.map((item, index) => (


                        <div key={index}>
                            <h1 className=' text-4xl font-bold'>{`Address ${index + 1}`}</h1>
                            <ul className=' py-4 text-sm font-normal'>
                                <li className=' flex flex-row gap-10  py-4 border-b-2'><span className=' w-16 md:w-28 font-semibold'>My Name:</span> <span>{item.fullName}</span></li>
                                <li className=' flex flex-row gap-10  py-4 border-b-2'><span className=' w-16 md:w-28 font-semibold'>Email:</span> <span>{item.addressEmail}</span></li>
                                <li className=' flex flex-row gap-10  py-4 border-b-2'><span className=' w-16 md:w-28 font-semibold'>Full Address:</span> <span>{item.fullAddress}</span></li>
                                <li className=' flex flex-row gap-10  py-4 border-b-2'><span className=' w-16 md:w-28 font-semibold'>Phone:</span> <span>{item.phoneNumber}</span></li>
                            </ul>
                            <div className=' flex flex-row gap-4 py-4 text-center'>

                                <button onClick={() => handleEditAddress(item.id)} className='w-52  py-4 hover:bg-opacity-95 bg-[#132842] text-white rounded-full text-sm font-semibold'>
                                    Edit
                                </button>
                                <button onClick={() => handleDeleteAddress(item.id)} className='w-52  py-4 hover:bg-opacity-95 bg-[#132842] text-white rounded-full text-sm font-semibold'>
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default AddressAllActions