import Link from 'next/link'
import React from 'react'
import Img from "@/public/instagram/insta01.jpeg"
import { RiCalendarTodoFill } from "react-icons/ri";
import Image from 'next/image';

interface Order {
    id: number,
    title: string,
    date: string,
    quantity: number,
    price: number,
    image: string,
    category: string[],
    sku:string,
    size:string,
    status:string,
}
const AccountPage:React.FC = () => {
    const OrderData:Order[] =[
        {
            id: 1,
            title: "Cropped Blazer",
            date: "SEP 02, 2024",
            quantity: 2,
            price: 350,
            image: Img.src,
            category:["T-Shirt","Shoes"],
            sku:"s-10",
            size: "XL",
            status:"Pending"
        },
        {
            id: 2,
            title: "Cropped Blazer",
            date: "SEP 02, 2024",
            quantity: 5,
            price: 500,
            image: Img.src,
            category:["T-Shirt","Shoes"],
            sku:"s-10",
            size: "S",
             status:"Packaging"
        }
    ]
    return (
        <div className='container'>
            <div className=' text-center py-20 md:py-40'>
                <h1 className=' text-2xl md:text-4xl font-semibold md:font-medium'>Account</h1>
                <p className='text-sm font-normal py-2'><Link href="/" >Home</Link> &#x2022; <span>Account</span></p>
            </div>
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
                <button className='w-52  py-4 hover:bg-opacity-95 bg-[#132842] text-white rounded-full text-sm font-semibold'>
                    Log Out
                </button>
            </div>
            <div className='py-4'>
                <div>
                    <h2 className='text-4xl font-semibold'>Order History</h2>
                    <p className='text-sm font-normal'>You haven't placed any orders yet.</p>
                </div>
                <div className=' grid grid-cols-1 md:grid-cols-2 gap-4 py-4 '>
                {OrderData.map((item, index) => (
                        <div key={index} className=' flex flex-row justify-between items-center rounded-xl border p-4 hover:shadow-xl duration-300'>
                            <div className=' flex flex-row justify-between gap-8'>
                                <Image src={item.image} alt={item.title} width={200} height={200} className=' rounded-md' />
                                <div className=' flex flex-col gap-1 text-gray-700'>
                                    <p className=' text-lg font-bold'>{item.title}</p>
                                    <p className='text-sm'><span className=' font-semibold'>Price:</span>${item.price}</p>
                                    <p className='text-sm'> <span className=' font-semibold'>Size:</span> {item.size}</p>
                                    <p className='text-sm'> <span className=' font-semibold'>Status:</span> {item.status}</p>
                            
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>


        </div>
    )
}

export default AccountPage