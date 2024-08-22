// 'use client'

// import Link from 'next/link';
// import React, { useState } from 'react'
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";

// const navigationData = [
//     {
//       title: "Services01",
//       path: "#",
//       dropdown: true,
//       items: [
//         { title: "UI/UX Design", path: "/services/ui-ux-design" },
//         {
//           title: "Web Design & Development",
//           path: "/services/web-design-development",
//         },
//         {
//           title: "Graphics & Motion Design",
//           path: "/services/graphics-motion-design",
//         },
//         { title: "Video Editing", path: "/services/video-editing" },
//         {
//           title: "Digital Marketing",
//           path: "/services/digital-marketing",
//         },
//         { title: "Content Writing", path: "/services/content-writing" },
//       ],

//     },
//     {
//         title: "Services02",
//         path: "#",
//         dropdown: true,
//         items: [
//           { title: "UI/UX Design", path: "/services/ui-ux-design" },
//           {
//             title: "Web Design & Development",
//             path: "/services/web-design-development",
//           },
//           {
//             title: "Graphics & Motion Design",
//             path: "/services/graphics-motion-design",
//           },
//           { title: "Video Editing", path: "/services/video-editing" },
//           {
//             title: "Digital Marketing",
//             path: "/services/digital-marketing",
//           },
//           { title: "Content Writing", path: "/services/content-writing" },
//         ],
//       },

//   ];

// const MobileFooter = () => {
//     const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
//     const [openSubDropdownIndex, setOpenSubDropdownIndex] = useState(null);

//     const handleMouseEnter = (index:any) => {
//       setOpenDropdownIndex(index);
//     };

//     const handleMouseLeave = () => {
//       setOpenDropdownIndex(null);
//       setOpenSubDropdownIndex(null);
//     };

//       const [openDropdowns, setOpenDropdowns] = useState([]);
//   const [openSubDropdowns, setOpenSubDropdowns] = useState([]);

//   const toggleDropdown = (index:any) => {
//     setOpenDropdowns((prevState:any) => {
//       const isOpen = prevState.includes(index);
//       if (isOpen) {
//         return prevState.filter((i:any) => i !== index);
//       } else {
//         return [...prevState, index];
//       }
//     });
//   };

//   const toggleSubDropdown = (mainIndex:any, subIndex:any) => {
//     const key = `${mainIndex}-${subIndex}`;
//     setOpenSubDropdowns((prevState:any) => {
//       const isOpen = prevState.includes(key);
//       if (isOpen) {
//         return prevState.filter((i:any) => i !== key);
//       } else {
//         return [...prevState, key];
//       }
//     });
//   };
//   return (
//     <div>
//           <ul className=" grid grid-cols-1 justify-center items-center w-full">
//         {navigationData.map((navItem, index) => (
//           <li
//             key={index}
//             className="relative h-full flex items-center justify-center cursor-pointer "
//             onMouseEnter={() => handleMouseEnter(index)}
//             onMouseLeave={handleMouseLeave}
//           >
//             {navItem.dropdown ? (
//               <div className="flex items-center justify-center h-full text-md px-2 cursor-pointer">
//                 <Link href={navItem.path}>{navItem.title}</Link>
//                 <MdOutlineKeyboardArrowDown size={30} />
//               </div>
//             ) : (
//               <Link href={navItem.path}>{navItem.title}</Link>
//             )}
//             {navItem.dropdown && openDropdownIndex === index && (
//               <ul className=" top-0 bg-white shadow-lg rounded-lg w-80 gap-3 py-3 px-2 min-w-72 transform scale-95 transition-transform duration-300 ease-in-out origin-top">
//                 {navItem.items?.map((subItem, subIndex) => (
//                   <li
//                     key={subIndex}
//                     className="relative px-5 py-2 transition-colors duration-200 group"
//                     onMouseEnter={() => {
//                       if (subItem.dropdown) {
//                         setOpenSubDropdownIndex(subIndex); // Open sub-dropdown if item has dropdown
//                       }
//                     }}
//                     onMouseLeave={() => setOpenSubDropdownIndex(null)} // Close sub-dropdown
//                   >
//                     <div className="flex justify-between h-full text-md cursor-pointer text-black">
//                       <Link href={subItem.path}>
//                         {subItem.title}
//                       </Link>
//                       {subItem.dropdown && (
//                         <MdOutlineKeyboardArrowDown size={30} />
//                       )}

//                     </div>


//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default MobileFooter

'use client'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import Link from 'next/link';
import { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa6";
import Image from "next/image";

import Logo2 from '@/public/common/Logo_2.webp'
import Form from '@/components/forms/Form';
import FormInput from '@/components/forms/FormInput';

const linkItems = [
  {
    id: "1",
    title: "Let us help",
    dropdown: true,
    items: [
      {
        tilte: "Help Center",
        path: "/"
      },
      {
        tilte: "Track My Order",
        path: "/"
      },
      {
        tilte: " Cancel My Order",
        path: "/"
      },
      {
        tilte: "Return My Order",
        path: "/"
      },
    ]
  },
  {
    id: "2",
    title: "Categories",
    dropdown: true,
    items: [
      {
        tilte: "Jacket",
        path: "/"
      },
      {
        tilte: "Pants",
        path: "/"
      },
      {
        tilte: "T-Shirt",
        path: "/"
      },
      {
        tilte: "Bag & Shoes",
        path: "/"
      },
    ]
  }
  ,
  {
    id: "3",
    title: "Our policies",
    dropdown: true,
    items: [
      {
        tilte: "Shipping & Delivery",
        path: "/"
      },
      {
        tilte: "Returns, Refunds & Cancellations",
        path: "/"
      },
      {
        tilte: "Terms & Conditions",
        path: "/"
      },
      {
        tilte: "Privacy Policy",
        path: "/"
      },
    ]
  }
]


const MobileFooter = () => {
  const [openDropdowns, setOpenDropdowns] = useState([]);



  const toggleDropdown = (index: any) => {
    setOpenDropdowns((prevState: any) => {
      const isOpen = prevState.includes(index);
      if (isOpen) {
        return prevState.filter((i: any) => i !== index);
      } else {
        return [...prevState, index];
      }
    });
  };
  return (

    <div className=' w-full flex flex-col gap-4 py-10'>
       <Image src={Logo2} className=" w-44" alt="Logo 2" />
      <Disclosure>
      <DisclosureButton className=" w-full flex flex-row justify-between items-center text-md font-semibold">
      <div data-open>Contact us</div>
      <div data-open> <FaPlus /></div>
      </DisclosureButton>
      <DisclosurePanel as="ul" className="text-gray-500">
      <Form className=" relative ">
                <FormInput name="" placeholder="Enter your email" className=" rounded-full px-4 h-14 text-sm" />
                <div className=" absolute top-1 right-1 bg-[#132842] hover:bg-[#263d5c] rounded-full h-12 w-40 flex justify-center items-center ">Submit</div>
              </Form>
      </DisclosurePanel>
    </Disclosure>

      {
        linkItems.map((item, index) => (
          <Disclosure key={index}>
            <DisclosureButton className=" w-full flex flex-row justify-between items-center text-md font-semibold" onClick={() => toggleDropdown(index)}>
              <div data-open>{item.title}</div>
              <div data-open>{openDropdowns.includes(index) ? <FaMinus /> : <FaPlus />}</div>
            </DisclosureButton>


                <DisclosurePanel as="ul"  className="flex flex-col gap-4 text-sm font-normal">
                { item?.items && item?.items?.map((subItem, subIndex) => (
                  <li key={subIndex}><Link href={subItem.path}>{subItem.tilte}</Link></li>

                ))
              }
                </DisclosurePanel>
            

       



           
          </Disclosure>
        ))
      }

    </div>

  )
}
export default MobileFooter



// subItem.dropdown &&
//                     openSubDropdowns.includes(`${idx}-${subIndex}`) && (









