import Image from 'next/image'
import p1 from '@/public/policy/p-1.webp'
import p2 from '@/public/policy/p-2.webp'
import p3 from '@/public/policy/p-3.webp'
import p4 from '@/public/policy/p-4.webp'
import React from 'react'
import Link from 'next/link'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
interface policy {
    id: number,
    image: string,
    title: string,
    description: string,
    path_title: string,
    path_link: string,

}



const Policy: React.FC = () => {
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
    return (
        <div className=' container'>
            <div className=' text-center'>
                <p className='text-md font-medium text-gray-600'>Policy</p>
                <p className='text-2xl font-semibold'>Excellence and reliability</p>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 py-10'>
                {
                    policyData.map((item, index) => (
                        <div className=' bg-slate-200 p-4 rounded-md' key={index}>
                            <Image src={item.image} width={10} height={10} alt='' className=' w-10  bg-cover py-2' />
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
    )
}

export default Policy