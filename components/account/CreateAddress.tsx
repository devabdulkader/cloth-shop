"use client"
import Link from 'next/link';
import React, { useContext, useState } from 'react'
import Form from '../forms/Form';
import FormInput from '../forms/FormInput';
import { instance } from '@/axios/axiosInstance';
import { AuthContext } from '@/app/authProvider';
const ADDRESS_CREATED_QUERY = `
mutation CreateAddress($input: CreateAddressInput!) {
    createAddress(input: $input) {
        id
    }
}
`;
const CreateAddress = () => {
    const { handleLogout,userId } = useContext(AuthContext);
    const [created, setCreated] = useState(true);
    const [loading, setLoading] = useState(true);
    // console.log(userId)

    const handleAddress = async (data: any) => {
        try {
            const response = await instance.post("/", {
                query: ADDRESS_CREATED_QUERY,
                variables: {
                    id:userId,
                    input: {
                        fullName: data.fullName,
                        addressEmail: data.addressEmail,
                        phoneNumber: data.phoneNumber,
                        fullAddress:data.fullAddress,
                        isDefault: data.isDefault,
                    }
                },
            });
            console.log(response)

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }

    }
    return (
        <>
    
            <div className='w-[50%]'>
                {
                    created &&
                    (

                        <Form submitHandler={handleAddress} className=' min-w-full flex flex-col gap-4'>
                            <FormInput name='fullName' id='fullName' label='Full Name' type='text' className='min-w-full border hover:border-black rounded-md px-4 py-3 text-sm' />

                            <FormInput name='addressEmail' id='addressEmail' label='Address Email' type='email' className='min-w-full border hover:border-black rounded-md px-4 py-3  text-sm' />
                            <FormInput name='fullAddress' id='fullAddress' label='Full Address' type='text' className='min-w-full border hover:border-black rounded-md px-4 py-3 text-sm' />

                            <FormInput name='phoneNumber' id='phoneNumber' label='Phone Number' type='text' className='min-w-full border hover:border-black rounded-md px-4 py-3  text-sm' />
                           
                            <div className=' flex flex-col gap-4 py-4 text-center'>
                                <div className='flex items-left gap-1 text-sm'> <FormInput id='isDefault' name="isDefault" type="checkbox" /><p> Set as default address</p></div>
                                <div className=' flex flex-row gap-4'>
                                <button className='w-52  py-4 hover:bg-opacity-95 bg-[#132842] text-white rounded-full text-sm font-semibold'>
                                    Add Address
                                </button>
                                <button onClick={()=>setCreated(false)}  className='w-52  py-4 hover:bg-opacity-95 bg-[#132842] text-white rounded-full text-sm font-semibold'>
                                    Cancel
                                </button>
                                </div>
                            </div>
                        </Form>
                    )
                }
            </div>
        </>
    )
}

export default CreateAddress