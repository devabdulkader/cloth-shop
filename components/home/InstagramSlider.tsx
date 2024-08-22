
// import Image from "next/image";

// import { FaInstagram } from "react-icons/fa6";
// const data = [
//   {
//     image: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"
//   },
//   {
//     image: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"
//   },
//   {
//     image: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"
//   },
//   {
//     image: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"
//   },
//   {
//     image: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"
//   },
//   {
//     image: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"
//   },
//   {
//     image: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"
//   },
//   {
//     image: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"
//   },
//   {
//     image: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"
//   },
//   {
//     image: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"
//   },
// ]

// const InstagramSlider = () => {
//   return (
//     <div className=" w-full text-white relative">
//       <div className="w-full ">
//         <div className="slider">
//           <div className="slide-track">
//             {data &&
//               data.map((item, index) => (
//                 <div key={index} className="slide relative ">
//                   <Image
//                     src={item.image}
//                     width={800}
//                     height={800}
//                     alt="our client"
//                     className=" "
//                   />
//                     <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
//                     <FaInstagram size={35} />

//                     </div>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </div>

//       <div className=" hidden md:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
//         <div className="   bg-white text-black text-center content-center flex flex-col justify-center items-center gap-3 text-lg font-semibold w-52 h-52 rounded-full">
//           <span>Instagram</span>
//           <FaInstagram size={24} />
//           <span className="text-md font-normal">#MinaStore</span>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default InstagramSlider;






"use client";
import React, { useState } from "react";
import person1 from "@/public/instagram/insta01.jpeg";
import person2 from "@/public/instagram/insta02jpg.jpg";
import Marquee from "react-fast-marquee";
import Image from "next/image";

import { FaInstagram } from "react-icons/fa6";
import { constants } from "buffer";
interface Review {
  image: string;
  id: number,
}

const InstagramSlider: React.FC = () => {
  const [pause, setPause] = useState(0);




  const reviews: Review[] = [
    {
      id: 1,
      image: person1.src
    },
    {
      id: 2,
      image: person2.src,
    },
    {
      id: 3,
      image: person1.src
    },
    {
      id: 4,
      image: person2.src,
    },
    {
      id: 5,
      image: person1.src
    },
    {
      id: 6,
      image: person2.src,
    },
    {
      id: 7,
      image: person1.src
    },
    {
      id: 8,
      image: person2.src,
    },
    {
      id: 9,
      image: person1.src,
    },
    {
      id: 10,
      image: person2.src,
    },

  ];

  return (
    <>
      <div className=" relative">
        <Marquee
          pauseOnHover={true}
          speed={100}

        >
          {reviews.map((review, index) => (
            <div key={index} className="slide relative group" onMouseEnter={() => setPause(review.id)} onMouseLeave={() => setPause(0)}>
              <Image
                src={review.image}
                width={800}
                height={800}
                alt="our client"
                className=" h-[300px] w-[280px] bg-contain "
              />
              {pause === review.id && (
                <div className=" w-full h-full">
                  <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-black opacity-60 text-white min-w-full min-h-full flex justify-center items-center ">
                    <FaInstagram size={40} />

                  </div>
                </div>
              )

              }
            </div>

          ))}
        </Marquee>
        <div className=" hidden md:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 ">
          <div className="   bg-white text-black text-center content-center flex flex-col justify-center items-center gap-3 text-lg font-semibold w-52 h-52 rounded-full">
            <span>Instagram</span>
            <FaInstagram size={24} />
            <span className="text-md font-normal">#MinaStore</span>
          </div>
        </div>
      </div>

    </>
  );
};

export default InstagramSlider;
