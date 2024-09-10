'use client'
import React, { useEffect, useState } from 'react'
import Img from "@/public/instagram/insta01.jpeg"
import Image from 'next/image';
import axios from 'axios';
import Cookies from "js-cookie";
import { AxiosResponse } from 'axios';
import urls from '@/urls/urls';
import { instance } from '@/axios/axiosInstance';
// interface GetOrdersId {
//     id: string,
// }
// interface Orders {
//     id: string,
//     title: string,
//     code: string,
//     discount: number,
//     startsAt: string,
//     endsAt: string,
//     status: string,
//     createdAt: string,
//     updatedAt: string,
// }

const ORDER_QUERY = `
  query Orders {
    orders {
      id
      user{
        email
      }
      trackingNumber
      createdAt
      status
    }
  }
`;



const OrderList = () => {

    const [order, setOrders] = useState([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        userOrders();

    }, [])

    const userOrders = async () => {

        try {

            const response = await instance.post("/", {
                query: ORDER_QUERY,
              });
                setOrders(response.data.data.orders)




        } catch (error) {
            console.log(error, "error");
            setError("Something went wrong");
        } finally {
            setLoading(false);
        }

    }


    return (
        <div className='py-4'>
            <div>
                <h2 className='text-4xl font-semibold'>Order History</h2>
                <p className='text-sm font-normal'>You haven&lsquo;t placed any orders yet.</p>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-4 py-4 '>
                {/* {orders?.map((item, index) => (
                    <div key={index}>{item.}</div>
                    <div key={index} className=' flex flex-row justify-between items-center rounded-xl border p-4 hover:shadow-xl duration-300'>
                        <div className=' flex flex-row justify-between gap-8'>
                            <div className=' flex flex-col gap-1 text-gray-700'>
                                <p className=' text-lg font-bold'>{item?.user.email}</p>
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
