'use client'
import React, { useContext, useEffect, useState } from 'react'
import { instance } from '@/axios/axiosInstance';
import LoadingSpinner from '../common/LoadingSpinner';
import Link from 'next/link';
import Form from '../forms/Form';
import FormInput from '../forms/FormInput';
import { AuthContext } from '@/app/authProvider';
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
const ADDRESS_CREATED_QUERY = `
mutation CreateAddress($input: CreateAddressInput!) {
    createAddress(input: $input) {
        id
    }
}
`;
const ADDRESS_UPDATED_QUERY = `
mutation UpdateAddress($id: ID!, $input: UpdateAddressInput!) {
    updateAddress(id: $id, input: $input) {
         id
    }
}
`;

const SINGLE_ADDRESS_QUERY = `
query($id: ID!){
    getAddress(id:$id){
       id
        fullName
        addressEmail
        phoneNumber
        fullAddress
        isDefault
        
    }
}
`;
const AddressAllActions = () => {
    const { userId } = useContext(AuthContext);
    const [edit, setEdit] = useState(false);
    const [defaultAddress, setDefautlAddress] = useState<any>(null);
    const [matchId, setMatchId] = useState<number | null>(null)
    const [created, setCreated] = useState(false)
    const [address, setAddress] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        handleGetAllAddress();
        
    }, [loading])

    // handle get all addresss actions
    const handleGetAllAddress = async () => {
        setLoading(true);
        setError(null);
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
    // handle deleted addresss actions
    const handleDeletedAddress = async (id: any,) => {
       
        try {
            setLoading(true);
            const response = await instance.post("/", {
                query: ADDRESS_DELETED_QUERY,
                variables: {
                    id: id,
                }
            });

        } catch (error) {
            console.log(error);
            setError("Something went wrong");
        } finally {
            setLoading(false);
        }
    }

    // handle updated fields address actions
    const handleUpdatedFieldsAddress = async (Id: any, index: number) => {
        setLoading(true);
        setError(null);
        try {
            setMatchId(index);
            setEdit(!edit)
            const response = await instance.post("/", {
                query: SINGLE_ADDRESS_QUERY,
                variables: { id: Id },
            });
            setDefautlAddress(response?.data?.data?.getAddress);
        } catch (error) {
            setEdit(false)
            setMatchId(null)
        }
    }
    // handle created addresss actions
    const handleCreatedAddress = async (data: any) => {
        setLoading(true);
        setError(null);
        try {
            const response = await instance.post("/", {
                query: ADDRESS_CREATED_QUERY,
                variables: {
                    id: userId,
                    input: {
                        fullName: data.fullName,
                        addressEmail: data.addressEmail,
                        phoneNumber: data.phoneNumber,
                        fullAddress: data.fullAddress,
                        isDefault: data.isDefault,
                    }
                },
            });
            setCreated(false)

        } catch (error) {
            console.log(error);
            setError("Something went wrong");
        } finally {
            setLoading(false);
            setCreated(false)
        }

    }
    // handle updated address
    const handleUpdatedAddress = async (data: any) => {
        setLoading(true);
        setError(null);
        try {
            const response = await instance.post("/", {
                query: ADDRESS_UPDATED_QUERY,
                variables: {
                    id: defaultAddress?.id,
                    input: {
                        fullName: data.fullName,
                        addressEmail: data.addressEmail,
                        phoneNumber: data.phoneNumber,
                        fullAddress: data.fullAddress,
                        isDefault: data.isDefault,
                    }
                },
            });
            // console.log(response, "..................")

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
            setEdit(false)
            setMatchId(null)

        }

    }

    // update default form inputs data
    const defaultValues = {
        fullName: defaultAddress?.fullName,
        addressEmail: defaultAddress?.addressEmail,
        phoneNumber: defaultAddress?.phoneNumber,
        fullAddress: defaultAddress?.fullAddress,
        isDefault: defaultAddress?.isDefault,
    };

    const reorderedAddresses = [...address].sort((a, b) => b.isDefault - a.isDefault);

    return (
        <>
            <div className=' flex flex-row gap-4 py-4 text-center'>

                <Link href="/account" className='w-52  py-4 hover:bg-opacity-95 bg-[#132842] text-white rounded-full text-sm font-semibold'>
                    Return To Account Details
                </Link>
                <button onClick={() => setCreated(!created)} className='w-52  py-4 hover:bg-opacity-95 bg-[#132842] text-white rounded-full text-sm font-semibold'>
                    Add A New Address
                </button>
            </div>
            {/* CREATE NEW ADDRESS */}
            <div className='w-[50%]'>
                {
                    created &&
                    (

                        <Form submitHandler={handleCreatedAddress} className=' min-w-full flex flex-col gap-4'>
                            <FormInput name='fullName' id='fullName' label='Full Name' type='text' className='min-w-full border hover:border-black rounded-md px-4 py-3 text-sm' />

                            <FormInput name='addressEmail' id='addressEmail' label='Address Email' type='email' className='min-w-full border hover:border-black rounded-md px-4 py-3  text-sm' />
                            <FormInput name='fullAddress' id='fullAddress' label='Full Address' type='text' className='min-w-full border hover:border-black rounded-md px-4 py-3 text-sm' />

                            <FormInput name='phoneNumber' id='phoneNumber' label='Phone Number' type='text' className='min-w-full border hover:border-black rounded-md px-4 py-3  text-sm' />

                            <div className=' flex flex-col gap-4 py-4 text-center'>
                                <div className='flex items-left gap-1 text-sm'> <FormInput id='isDefault' name="isDefault" type="checkbox" /><p> Set as default address</p></div>
                                <div className=' flex flex-row gap-4'>
                                    <button className='w-52  py-4 hover:bg-opacity-95 bg-[#132842] text-white rounded-full text-sm font-semibold'>
                                        {loading ? <LoadingSpinner /> : "Add Address"}
                                        {/* Add Address */}
                                    </button>
                                    <button onClick={() => setCreated(!created)} className='w-52  py-4 hover:bg-opacity-95 bg-[#132842] text-white rounded-full text-sm font-semibold'>
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </Form>
                    )
                }
            </div>
            {/* SHOW ALL ADDRESS (IS-DEFAULT TRUE/FLASE ) */}
            <div>
                {
                    reorderedAddresses?.map((item, index) => (
                        <div key={index}>

                            <div>
                                <h1 className='text-4xl font-bold'>{item.isDefault ? "Default" : `Address ${index + 1}`}</h1>
                                <ul className=' py-4 text-sm font-normal'>
                                    <li className=' flex flex-row gap-10  py-4 border-b-2'><span className=' w-16 md:w-28 font-semibold'>My Name:</span> <span>{item.fullName}</span></li>
                                    <li className=' flex flex-row gap-10  py-4 border-b-2'><span className=' w-16 md:w-28 font-semibold'>Email:</span> <span>{item.addressEmail}</span></li>
                                    <li className=' flex flex-row gap-10  py-4 border-b-2'><span className=' w-16 md:w-28 font-semibold'>Full Address:</span> <span>{item.fullAddress}</span></li>
                                    <li className=' flex flex-row gap-10  py-4 border-b-2'><span className=' w-16 md:w-28 font-semibold'>Phone:</span> <span>{item.phoneNumber}</span></li>
                                </ul>
                                <div className=' flex flex-row gap-4 py-4 text-center'>

                                    <button onClick={() => handleUpdatedFieldsAddress(item.id, index)} className='w-52  py-4 hover:bg-opacity-95 bg-[#132842] text-white rounded-full text-sm font-semibold'>
                                        Edit
                                    </button>
                                    <button onClick={() => handleDeletedAddress(item.id)} className='w-52  py-4 hover:bg-opacity-95 bg-[#132842] text-white rounded-full text-sm font-semibold'>
                                    {loading ? <LoadingSpinner /> : "Delete"}
                                    {/* Delete */}
                                    </button>
                                </div>
                            </div>
                            {/* SHOW UPDATED ADDRESS FIELDS */}
                            {
                                edit && matchId === index && (
                                    <Form submitHandler={()=>handleUpdatedAddress} defaultValues={defaultValues} className=' min-w-full flex flex-col gap-4'>
                                        <FormInput name='fullName' id='fullName' label='Full Name' type='text' className='min-w-full border hover:border-black rounded-md px-4 py-3 text-sm' />

                                        <FormInput name='addressEmail' id='addressEmail' label='Address Email' type='email' className='min-w-full border hover:border-black rounded-md px-4 py-3  text-sm' />
                                        <FormInput name='fullAddress' id='fullAddress' label='Full Address' type='text' className='min-w-full border hover:border-black rounded-md px-4 py-3 text-sm' />

                                        <FormInput name='phoneNumber' id='phoneNumber' label='Phone Number' type='text' className='min-w-full border hover:border-black rounded-md px-4 py-3  text-sm' />

                                        <div className=' flex flex-col gap-4 py-4 justify-center items-center text-center'>
                                            <div className='flex items-center gap-1 text-sm'> <FormInput id='isDefault' name="isDefault" type="checkbox" /><p> Set as default address</p></div>
                                            <button className='w-52  py-4 hover:bg-opacity-95 bg-[#132842] text-white rounded-full text-sm font-semibold'>
                                                {loading ? <LoadingSpinner /> : "Updated"}
                                                {/* Updated */}
                                            </button>
                                            <button className='w-52  py-4 hover:bg-opacity-95 bg-[#132842] text-white rounded-full text-sm font-semibold'>
                                                Cancel
                                            </button>
                                        </div>
                                    </Form>
                                )
                            }
                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default AddressAllActions