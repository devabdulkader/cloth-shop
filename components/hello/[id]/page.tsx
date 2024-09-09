'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Banner_image from '@/public/blogs/Lobortis_mia_maximus.webp'
import { RiCalendarTodoFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa6";
import { IoMdShare, IoMdPrint } from "react-icons/io";
import BlogRelatedFashionSlider from '@/components/blogs/BlogRelatedFashionSlider'

const BlogsPage: React.FC = () => {

    const handlePrint = async (data: any) => {
        window.print();
    };
    return (
        <div className='container pb-20'>
            <div className=' text-center py-16 md:py-40'>
                <h1 className=' text-2xl md:text-4xl font-semibold md:font-medium'>Lobortis mia maximus</h1>
                <p className='text-sm font-normal py-2'><Link href="/" >Home</Link> &#x2022;<Link href="/" > Fashion</Link> &#x2022; <span>Lobortis mia maximus </span></p>
            </div>
            <Image src={Banner_image} alt='AboutUs_Fashion' className=' rounded-xl' />
            <div className=' flex flex-col  gap-5 py-10 text-sm font-normal'>
                <p className='text-xl font-semibold'>Lobortis mia maximus</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus venenatis ex, et ultricies nunc molestie ut. Nullam accumsan id nisi vel convallis. Sed dui risus, ullamcorper vitae aliquet vitae, feugiat in neque. Praesent egestas ligula velit, sed malesuada erat interdum vitae. Aliquam pretium nisi sed turpis posuere pharetra. Suspendisse faucibus, sem at egestas viverra, erat velit luctus mi, placerat vulputate dui eros a diam. Aliquam facilisis ut massa et gravida. Morbi sed ipsum magna. Nulla elementum finibus dolor pretium condimentum.</p>
                <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc gravida diam ac convallis rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at eros diam. Vivamus a pretium orci. Ut sollicitudin posuere libero vitae rhoncus. Maecenas ultrices, purus ac fermentum tincidunt, nunc leo sagittis erat, vel volutpat dolor justo id lacus. Quisque feugiat imperdiet laoreet. Nunc eget dui ut metus rhoncus volutpat. Morbi luctus tristique lobortis. In mi erat, condimentum eu elementum sit amet, facilisis pellentesque velit. Aenean at est a mauris fermentum luctus. Aliquam erat volutpat. Aliquam eget vehicula purus. Integer pretium egestas metus sed rutrum.</p>
                <p>Nullam quis felis ultricies, vehicula magna ac, sodales elit. Suspendisse mi massa, porttitor at pharetra sit amet, faucibus eget diam. Ut nec erat tellus. Vestibulum lobortis mi a dui maximus, et eleifend augue volutpat. In tincidunt nisl a interdum facilisis. Vivamus nec tempus turpis. Nullam volutpat massa sed neque cursus porta. Integer non metus consequat, dignissim justo iaculis, venenatis sem. Phasellus imperdiet facilisis felis a fermentum.</p>
                <p>Suspendisse sit amet ex eu dui pretium laoreet sit amet sit amet nulla. Morbi ut leo ac nibh cursus cursus. In in elit urna. Quisque commodo vestibulum purus sed volutpat. Praesent quis tellus ac nulla rutrum sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean eget volutpat justo. Quisque nec ex tortor. Integer a felis aliquet, mollis orci id, porttitor sapien. Nulla arcu ipsum, sollicitudin et faucibus eu, efficitur in metus. Nunc pharetra arcu arcu, et porttitor massa varius eget. Morbi nisi turpis, gravida a ligula id, volutpat placerat nulla. Sed ut mi at odio commodo rhoncus et id arcu. Ut ultrices lacinia neque ac feugiat. Suspendisse elementum non nibh in tempor. Vivamus convallis augue a malesuada ullamcorper.</p>

            </div>
            <div className='flex flex-col md:flex-row justify-between items-center md:border-y-2 text-[12px] font-semibold'>
                <div className=' w-full flex flex-row justify-center md:justify-start gap-0 md:gap-4 text-gray-400 border-y-2 md:border-none'>
                    <p className='flex gap-2 items-center px-2 md:px-8 py-4'><RiCalendarTodoFill />JULY 10 2024</p>
                    <p className='flex gap-2 items-center px-2 md:px-8 py-4'><FaUser />VINOVA THEME</p>
                </div>
                <div className=' w-full flex flex-row justify-center md:justify-end border-b-2 md:border-none'>
                    <Link href="/" className='flex gap-2 items-center hover:bg-gray-200 px-8 py-4'><IoMdShare />SHARE</Link>
                    <p onClick={handlePrint} className='flex gap-2 items-center hover:bg-gray-200 px-8 py-4'><IoMdPrint />PRINT</p>
                </div>

            </div>
            <BlogRelatedFashionSlider/>
        </div>

    )
}

export default BlogsPage