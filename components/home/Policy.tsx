'use client'
import Image from 'next/image'
import p1 from '@/public/policy/p-1.webp'
import p2 from '@/public/policy/p-2.webp'
import p3 from '@/public/policy/p-3.webp'
import p4 from '@/public/policy/p-4.webp'
import CartImg from '@/public/fashion_statement/fashion_2.jpg'
import React from 'react'
import Link from 'next/link'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";



import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import { IoClose } from "react-icons/io5";
import CartModalSlider from '../common/CartModalSlider'
import { RiDeleteBin5Line } from "react-icons/ri";
interface policy {
    id: number,
    image: string,
    title: string,
    description: string,
    path_title: string,
    path_link: string,

}



const Policy: React.FC = () => {
    let [isOpen, setIsOpen] = useState(true);
    let [pQuantity, setPQuantity] = useState<number | ''>(1);


    const policyData: policy[] = [
        {
            id: 1,
            image: p1.src,
            title: "Free shipping on orders $50 or more",
            description: "Elevate Your Shopping Experience with Free Shipping on Orders of $50 or More, Bringing Fashion to Your Doorstep.",
            path_title: "Experience free shipping service now",
            path_link: "/"

        },

        {
            id: 2,
            image: p2.src,
            title: "return policy is for you",
            description: "Our Product Return Policy Exclusively Designed to Exceed Your Expectations and Ensure Your Utmost Satisfaction",
            path_title: "See more about the service",
            path_link: "/"

        },
        {
            id: 3,
            image: p3.src,
            title: "Save money when shopping with offers",
            description: "Discover a World of Savings with Our Irresistible Offers and Deals, Making Every Purchase Worthwhile.",
            path_title: "See offers now",
            path_link: "/"

        },
        {
            id: 4,
            image: p4.src,
            title: "We always listen and support you",
            description: "A Commitment to Genuine Engagem, Dedicate Support and Empowering Collaboration for Meaningful Impact.",
            path_title: "Contact now",
            path_link: "/"

        }
    ]

    const decreaseQuantity = () => {
        if (pQuantity !== "" && pQuantity > 1) {
            setPQuantity(pQuantity - 1);
        }

    }
    const IncreaseQuantity = () => {
        if (pQuantity === "" || pQuantity > 0) {
            setPQuantity((pQuantity === "" ? 0 : pQuantity) + 1);
        }

    }



    function open() {
        setIsOpen(true)
    }

    function close() {
        setIsOpen(false)
    }
    return (
        <>
            <div className=' container'>
                <div className=' text-center'>
                    <Button
                        onClick={open}
                        className="rounded-md bg-black/20 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
                    >
                        Open dialog
                    </Button>

                    <p className='text-md font-medium text-gray-600'>Policy</p>
                    <p className='text-2xl font-semibold'>Excellence and reliability</p>
                </div>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 py-10'>
                    {
                        policyData.map((item, index) => (
                            <div className=' bg-slate-200 p-4 rounded-md' key={index}>
                                <Image src={item.image} width={50} height={50} alt='' className=' py-2' />
                                <p className=' text-sm font-semibold py-1'>{item.title}</p>
                                <p className=' text-[13px] font-normal py-1'>{item.description}</p>
                                <Link className=' text-[12px] font-normal py-2 flex items-center' href={item.path_link}>
                                    <span>{item.path_title}</span>
                                    <MdOutlineKeyboardArrowRight size={16} />
                                </Link>
                            </div>
                        ))
                    }

                </div>

            </div>
            <Dialog open={isOpen} as="div" className="relative  z-10 focus:outline-none" onClose={close}>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                            transition
                            className="w-full max-w-5xl rounded-xl bg-white shadow text-black p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                        >
                            <div className=' flex flex-row justify-between items-center'>
                                <div className=' flex flex-row items-center gap-4'>
                                    <p className='text-xl font-semibold'>YOUR ORDER</p>
                                    <p className='text-[12px] font-medium'>THERE ARE 6 ITEM(S) IN YOUR CART</p>
                                </div>
                                <div className=' bg-white text-black p-2 shadow-md rounded-full'>
                                    <IoClose onClick={close} size={25} />
                                </div>
                            </div>
                            <div className='w-full flex flex-col md:flex-row p-2 gap-4 md:gap-10'>
                                <div className='w-full md:min-w-[60%]    h-[200px] overflow-x-hidden '>
                                 
                                        <div className=' -z-20 relative flex flex-col md:flex-row justify-between items-center border rounded-md px-2 md:px-6 py-2 md:py-4'>
                                            <div className=' flex flex-row items-center gap-4'>
                                                <Image src={CartImg} width={70} height={50} alt='' className=' w-20 h-28 py-2' />
                                                <div className='flex flex-col text-sm font-semibold'><span>Cropped blazer</span><span>s</span></div>
                                            </div>
                                            <div className='flex flex-row gap-4 md:gap-8'>
                                                <span className='text-md font-semibold'>$40.00</span>
                                                <Button onClick={decreaseQuantity}>-</Button>
                                                <span>{pQuantity}</span>
                                                <Button onClick={IncreaseQuantity}>+</Button>
                                                <span className='text-md font-semibold'>${40 * pQuantity}.00</span>
                                            </div>
                                            <p className=' z-20 absolute -left-3 bg-gray-400 rounded-full p-1'>   <RiDeleteBin5Line size={16} /></p>
                                        </div>

                                    <div className=' w-full py-2'>
                                        <progress id="file" value="32" max="100" className=' min-w-full rounded-full '> 32% </progress>
                                    </div>


                                </div>
                                <div className=' flex flex-col gap-2 w-full md:min-w-[30%]'>
                                    <div className='flex flex-row justify-between items-center text-[12px] '>
                                        <span className=' font-semibold'>TOTAL:</span>
                                        <span className=' font-bold'>$433.00</span>
                                    </div>
                                    <button className='bg-white hover:bg-[#132842] border-2 w-full h-12 text-black hover:text-white shadow-gl rounded-3xl text-sm'>
                                        VIEW CART
                                    </button>
                                    <button disabled className='bg-white hover:bg-[#132842] border-2 w-full h-12 text-black hover:text-white shadow-gl rounded-3xl text-sm'>
                                        CONTINUE SHOPPING
                                    </button>
                                    <div className=' flex gap-2 items-center text-sm'><input className=' border-2' type='checkbox' />I agree with the Terms & conditions</div>
                                    <button className='bg-gray-300  border-2 w-full h-12 text-black shadow-gl rounded-3xl text-sm'>
                                        PROCEED TO CHECKOUT
                                    </button>
                                </div>
                            </div>
                            <CartModalSlider />

                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default Policy