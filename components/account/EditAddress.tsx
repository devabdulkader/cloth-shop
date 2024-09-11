"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import Form from '../forms/Form';
import FormInput from '../forms/FormInput';
import { instance } from '@/axios/axiosInstance';
const ADDRESS_UPDATED_QUERY = `
mutation UpdateAddress($id: ID!, $input: UpdateAddressInput!) {
    updateAddress(id: $id, input: $input) {
        id
         fullName
        addressEmail
        phoneNumber
        fullAddress
        isDefault
    }
}
`;
interface Item {
    id: number;
    fullName: string;
  }
const EditAddress = (defaultData: any,onClose:any) => {

    const [edit, setEdit] = useState(false);
    const [loading, setLoading] = useState(true);

    const value = defaultData.map((item:Item) => {
        return item;
      });
      console.log(value,"vlaue")
      

    const handleAddress = async (data: any) => {
        try {
            const response = await instance.post("/", {
                query: ADDRESS_UPDATED_QUERY,
                variables: {
                    id: defaultData.id,
                    input: {
                        fullName: data.fullName,
                        addressEmail: data.addressEmail,
                        phoneNumber: data.phoneNumber,
                        fullAddress:data.fullAddress,
                        isDefault: data.isDefault,
                    }
                },
            });

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }

    }
    return (
        <>
       
                        <Form submitHandler={handleAddress} className=' min-w-full flex flex-col gap-4'>
                        <FormInput name='fullName' id='fullName' value={value.fullName} label='Full Name' type='text' className='min-w-full border hover:border-black rounded-md px-4 py-3 text-sm' />

                        <FormInput name='addressEmail' id='addressEmail' value={defaultData.addressEmail} label='Address Email' type='email' className='min-w-full border hover:border-black rounded-md px-4 py-3  text-sm' />
                        <FormInput name='fullAddress' id='fullAddress' value={defaultData.fullAddress} label='Full Address' type='text' className='min-w-full border hover:border-black rounded-md px-4 py-3 text-sm' />

                        <FormInput name='phoneNumber' id='phoneNumber' value={defaultData.phoneNumber} label='Phone Number' type='text' className='min-w-full border hover:border-black rounded-md px-4 py-3  text-sm' />

                        <div className=' flex flex-col gap-4 py-4 justify-center items-center text-center'>
                            <div className='flex items-center gap-1 text-sm'> <FormInput id='isDefault'  name="isDefault" type="checkbox" /><p> Set as default address</p></div>
                            <button className='w-52  py-4 hover:bg-opacity-95 bg-[#132842] text-white rounded-full text-sm font-semibold'>
                                Updated
                            </button>
                            <button onClick={onClose} className='w-52  py-4 hover:bg-opacity-95 bg-[#132842] text-white rounded-full text-sm font-semibold'>
                                Cancel
                            </button>
                        </div>
                    </Form>

                      
        </>
    )
}

export default EditAddress










  // <Form submitHandler={handleAddress} className=' min-w-full flex flex-col gap-4'>
                        //     <FormInput name='fullName' id='fullName' label='Full Name' type='text' className='min-w-full border hover:border-black rounded-md px-4 py-3 text-sm' />

                        //     <FormInput name='addressEmail' id='addressEmail' label='Address Email' type='email' className='min-w-full border hover:border-black rounded-md px-4 py-3  text-sm' />
                        //     <FormInput name='fullAddress' id='fullAddress' label='Full Address' type='text' className='min-w-full border hover:border-black rounded-md px-4 py-3 text-sm' />

                        //     <FormInput name='phoneNumber' id='phoneNumber' label='Phone Number' type='text' className='min-w-full border hover:border-black rounded-md px-4 py-3  text-sm' />
                           
                        //     <div className=' flex flex-col gap-4 py-4 justify-center items-center text-center'>
                        //         <div className='flex items-center gap-1 text-sm'> <FormInput id='isDefault' name="isDefault" type="checkbox" /><p> Set as default address</p></div>
                        //         <button className='w-52  py-4 hover:bg-opacity-95 bg-[#132842] text-white rounded-full text-sm font-semibold'>
                        //             Updated
                        //         </button>
                        //         <button className='w-52  py-4 hover:bg-opacity-95 bg-[#132842] text-white rounded-full text-sm font-semibold'>
                        //             Cancel
                        //         </button>
                        //     </div>
                        // </Form>