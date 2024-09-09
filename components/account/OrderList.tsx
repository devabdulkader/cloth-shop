'use client'
import React, { useEffect, useState } from 'react'
import Img from "@/public/instagram/insta01.jpeg"
import Image from 'next/image';
import axios from 'axios';
import Cookies from "js-cookie";
import { AxiosResponse } from 'axios';
interface GetOrdersId {
    id: string,
}
interface Orders {
    id: string,
    title: string,
    code: string,
    discount: number,
    startsAt: string,
    endsAt: string,
    status: string,
    createdAt: string,
    updatedAt: string,
}

const ORDERS_MUTATION = `
query{
    orders{
        id
    }
}
`;



const OrderList = () => {

    const [orders, setOrders] = useState<GetOrdersId[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    // console.log(orders,'.......')

    useEffect(() => {
        userOrders();

    }, [])

    const userOrders = async () => {

        try {
            const token = Cookies.get("accessKey");

            if (token) {
                const response = await axios.post("https://chokro-ecommerce.vercel.app/graphql", {
                    query: ORDERS_MUTATION,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },

                });
                console.log(token, "1111")
                console.log(response?.data, "22222")
            }



        } catch (error) {
            console.log(error, "error");
            setError("Something went wrong");
        } finally {
            setLoading(false);
        }

    }







    // const OrderData: Order[] = [
    //     {
    //         id: 1,
    //         title: "Cropped Blazer",
    //         date: "SEP 02, 2024",
    //         quantity: 2,
    //         price: 350,
    //         image: Img.src,
    //         category: ["T-Shirt", "Shoes"],
    //         sku: "s-10",
    //         size: "XL",
    //         status: "Pending"
    //     },
    //     {
    //         id: 2,
    //         title: "Cropped Blazer",
    //         date: "SEP 02, 2024",
    //         quantity: 5,
    //         price: 500,
    //         image: Img.src,
    //         category: ["T-Shirt", "Shoes"],
    //         sku: "s-10",
    //         size: "S",
    //         status: "Packaging"
    //     }
    // ]
    return (
        <div className='py-4'>
            <div>
                <h2 className='text-4xl font-semibold'>Order History</h2>
                <p className='text-sm font-normal'>You haven&lsquo;t placed any orders yet.</p>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-4 py-4 '>
                {/* {OrderData.map((item, index) => (
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
                } */}
            </div>
        </div>
    )
}

export default OrderList
