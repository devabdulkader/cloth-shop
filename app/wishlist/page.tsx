'use client'
import Link from 'next/link'
import Img from "@/public/instagram/insta01.jpeg"
import React, { useState } from 'react'
import { RiCalendarTodoFill } from "react-icons/ri";
import { RiDeleteBin5Line } from "react-icons/ri";
import Image from 'next/image';
import QuickViewWishlistModal from '@/components/common/QuickViewWishlistModal';
interface Wishlist {
    id: number,
    title: string,
    date: string,
    quantity: number,
    price: number,
    image: string,
    category: string[],
    sku:string,
    sizes:string[],
}


const WishlistPage = () => {
    const [showModal, setShowModal] = useState(true);
    const [wishlist, setWishlist] = useState<Wishlist[]>([
        {
            id: 1,
            title: "Cropped Blazer",
            date: "SEP 02, 2024",
            quantity: 2,
            price: 350,
            image: Img.src,
            category:["T-Shirt","Shoes"],
            sku:"s-10",
            sizes: ["S", "M", "L", "XL"],
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
            sizes: ["S", "M", "L", "XL"],
        }
    ]);
    const [wishlistModal, setWishlistModal] = useState<Wishlist | undefined>(undefined);


    //remove wishlist cart data
    const removeWishLIstItem = (id: number) => {
        setWishlist(prevWishlistData =>
            prevWishlistData.filter(item => item.id !== id)
        );
    };
    const handleModalOpen = (item: Wishlist) => {
        setWishlistModal(item);
        setShowModal(true);
    };
    const handleModalClose = () => {
        setShowModal(false);
        setWishlistModal(undefined)
    };
    return (
        <div className='container'>
            {showModal && wishlistModal && (
                <QuickViewWishlistModal
                    onClose={handleModalClose}
                    wishlistItem={wishlistModal} // Pass the selected wishlist item
                />
            )}

            <div className=' text-center py-20 md:py-40'>
                <h1 className=' text-2xl md:text-4xl font-semibold md:font-medium uppercase'>Page Wishlist</h1>
                <p className='text-sm font-normal py-2'><Link href="/" >Home</Link> &#x2022; <span>Page Wishlist</span></p>
            </div>
            <div className='flex flex-col gap-4 pb-10 md:pb-20'>
                {
                    wishlist.map((item, index) => (
                        <div key={index} className=' flex flex-row justify-between items-center rounded-xl border p-4 md:p-8 hover:shadow-xl duration-300'>
                            <div className=' flex flex-row items-center gap-4'>
                                <RiDeleteBin5Line size={18} className=' cursor-pointer' onClick={() => removeWishLIstItem(item.id)} />
                                <Image src={item.image} alt={item.title} width={100} height={100} className=' rounded-lg' />
                                <div className='text-[12px] text-gray-700'>
                                    <p className=' font-bold'>{item.title}</p>
                                    <p>${item.price}</p>
                                    <p className='flex gap-2 items-center'><RiCalendarTodoFill size={14} /><span >{item.date}</span></p>
                                </div>
                            </div>
                           <button onClick={() => handleModalOpen(item)} className='w-48  py-4 text-center hover:bg-opacity-95 bg-[#132842] text-white rounded-full text-sm font-semibold'>
                                Quick View
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default WishlistPage