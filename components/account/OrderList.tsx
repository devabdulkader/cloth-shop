'use client'
import React, { useEffect, useState } from 'react'
import { instance } from '@/axios/axiosInstance';
import Table from '../table/Table';
import { formatDate } from '@/utils/formatDate';
import LoadingSpinner from '../common/LoadingSpinner';
const ORDER_QUERY = `
  query Orders {
    orders {
      shippingMethod {
        methodName
      }
      orderedItems {
        productName
        productPrice
      }
      trackingNumber
      createdAt
      status
    }
  }
`;
const OrderList = () => {

    const [orders, setOrders] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

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
            console.log(error);
        } finally {
            setLoading(false);
        }

    }

    const columns = [
        { key: "serialNo", label: "SL" },
        { key: "productName", label: "Product Name" },
        { key: "productPrice", label: "Product Price" },
        { key: "shippingMethod", label: "Shipping Method" },
        { key: "trackingNumber", label: "Tracking Number" },
        { key: "createdAt", label: "Ordered At" },
        { key: "status", label: "Status" },
    ]

    const ordersData = orders?.map((order, index) => ({
        id: order.id,
        serialNo: index + 1,
        productName: order.orderedItems[0].productName,
        productPrice: order.orderedItems[0].productPrice,
        shippingMethod: order.shippingMethod.methodName,
        trackingNumber: order.trackingNumber,
        createdAt: formatDate(order.createdAt),
        status: order.status,
    }))

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <div className='py-4'>
            <div className=' pb-4'>
                <h2 className='text-4xl font-semibold'>Order History</h2>
                <p className='text-sm font-normal'>You haven&lsquo;t placed any orders yet.</p>
            </div>
            {ordersData && columns && <Table columns={columns} data={ordersData} />}

        </div>

    )
}

export default OrderList
