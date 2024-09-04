// 'use client';
// import React, { useRef } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Swiper as SwiperType } from 'swiper';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// // import required modules
// import { Pagination } from 'swiper/modules';
// import Image from 'next/image';
// import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
// import { BiShoppingBag } from "react-icons/bi";
// import Banner_image from '@/public/blogs/banner_image.webp'
// interface Fashion {
//     id: number,
//     title: string,
//     pirce: number,
//     image: string,
// }
// const CartModalSlider:React.FC = () => {

//     const fashionData: Fashion[] = [
//         {
//             id: 1,
//             title: "Labortis mia maximus",
//            pirce:453,
//             image: Banner_image.src
//         },
//         {
//             id: 2,
//             title: "Labortis mia maximus",
//            pirce:453,
//             image: Banner_image.src
//         },
//         {
//             id: 3,
//             title: "Labortis mia maximus",
//            pirce:453,
//             image: Banner_image.src
//         },
//         {
//             id: 4,
//             title: "Labortis mia maximus",
//            pirce:453,
//             image: Banner_image.src
//         },
//         {
//             id: 6,
//             title: "Labortis mia maximus",
//            pirce:453,
//             image: Banner_image.src
//         },
//         {
//             id: 7,
//             title: "Labortis mia maximus",
//            pirce:453,
//             image: Banner_image.src
//         },
//     ]
//     return (
//         <div className=''>
//             <h1 className=' text-4xl font-semibold py-6'>Releted Fashion</h1>
//             <Swiper
//                 slidesPerView={1}
//                 spaceBetween={10}
//                 pagination={{
//                     clickable: true,
//                   }}
//                 breakpoints={{
//                     '@0.00': {
//                         slidesPerView: 1,
//                         spaceBetween: 10,
//                     },
//                     '@0.75': {
//                         slidesPerView: 2,
//                         spaceBetween: 20,
//                     },
//                     '@1.00': {
//                         slidesPerView: 3,
//                         spaceBetween: 10,
//                     }
//                 }}
//                 modules={[Pagination]}
//                 className="mySwiper  "

//             >
//                 {
//                     fashionData.map((item, index) => (
//                         <SwiperSlide key={index}  className=' border rounded-md shadow-lg p-2 bg-white'>
//                            <div className=' flex flex-row justify-around items-center gap-2'>
//                            <Image src={Banner_image} alt={item.title} width={100} height={100} className=' w-20 h-24 bg-cover' />
//                             <div  className='text-[12px] font-medium text-gray-600'>
//                             <p>{item.title}</p>
//                             <p>${item.pirce}</p>
//                             </div>
//                             <div className=' bg-gray-200 hover:bg-[#132842] hover:text-white p-3 rounded-full'>
//                             <BiShoppingBag size={16}/>
//                             </div>
                           
//                            </div>

//                         </SwiperSlide>
//                     ))
//                 }

//             </Swiper>
//             <div className="swiper-pagination"></div>
//         </div>
//     )
// }

// export default CartModalSlider




import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import { BiShoppingBag } from 'react-icons/bi';
import Banner_image from '@/public/blogs/banner_image.webp';
import Link from 'next/link';

interface Fashion {
  id: number;
  title: string;
  pirce: number;
  image: string;
}

const CartModalSlider: React.FC = () => {
  const fashionData: Fashion[] = [
    { id: 1, title: "Labortis mia maximus", pirce: 453, image: Banner_image.src },
    { id: 2, title: "Labortis mia maximus", pirce: 453, image: Banner_image.src },
    { id: 3, title: "Labortis mia maximus", pirce: 453, image: Banner_image.src },
    { id: 4, title: "Labortis mia maximus", pirce: 453, image: Banner_image.src },
    { id: 6, title: "Labortis mia maximus", pirce: 453, image: Banner_image.src },
    { id: 7, title: "Labortis mia maximus", pirce: 453, image: Banner_image.src },
  ];

  return (
    <div className=''>
      <h1 className='text-sm font-semibold py-2'>You may also like these products</h1>
      <div className=' bg-stone-100 px-2 py-1 rounded-md'>
      <Swiper
        // slidesPerView={1}
        // spaceBetween={10}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
        }}
        // breakpoints={{
        //   '@0.00': {
        //     slidesPerView: 1,
        //     spaceBetween: 0,
        //   },
        //   '@0.75': {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        //   },
        //   '@1.00': {
        //     slidesPerView: 3,
        //     spaceBetween: 10,
        //   },
        // }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        {fashionData.map((item, index) => (
            <SwiperSlide key={index} className='border rounded-md shadow-lg p-2 bg-white'>
            <div className='flex flex-row justify-around items-center gap-2'>
              <Image src={Banner_image} alt={item.title} width={100} height={100} className='w-20 h-24 bg-cover' />
              <div className='text-[12px] font-medium text-gray-600'>
                <p>{item.title}</p>
                <p>${item.pirce}</p>
              </div>
              <Link href="/" className='bg-gray-200 hover:bg-[#132842] hover:text-white p-3  rounded-full'>
                <BiShoppingBag size={16} />
              </Link>
            </div>
          </SwiperSlide>
          
        ))}
       
      </Swiper>
      </div>
      <div className=' flex justify-center items-center pt-2'>
      <div className='swiper-pagination flex justify-center items-center gap-2' />
      </div>

    </div>
  );
};

export default CartModalSlider;
