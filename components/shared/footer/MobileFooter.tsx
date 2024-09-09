// "use client";

// import React, { useState } from "react";
// import { Disclosure } from "@headlessui/react";
// import Link from "next/link";
// import { FaPlus, FaMinus } from "react-icons/fa";
// import Image from "next/image";
// import Logo2 from "@/public/common/Logo_2.webp";
// import MotionHeight from "@/components/motion/MotionHeight";

// interface SubItem {
//   title: string; // Note: "title" should probably be "title". Adjust if necessary.
//   path: string;
// }

// interface MainItem {
//   id: number;
//   title: string;
//   items: SubItem[];
// }

// const MobileFooter: React.FC = () => {
//   const [openDropdown, setOpenDropdown] = useState<number | null>(null);

//   const linkItems: MainItem[] = [
//     {
//       id: 1,
//       title: "Let us help",
//       items: [
//         { title: "Help Center", path: "/" },
//         { title: "Track My Order", path: "/" },
//         { title: "Cancel My Order", path: "/" },
//         { title: "Return My Order", path: "/" },
//       ],
//     },
//     {
//       id: 2,
//       title: "Categories",
//       items: [
//         { title: "Jacket", path: "/" },
//         { title: "Pants", path: "/" },
//         { title: "T-Shirt", path: "/" },
//         { title: "Bag & Shoes", path: "/" },
//       ],
//     },
//     {
//       id: 3,
//       title: "Our policies",
//       items: [
//         { title: "Shipping & Delivery", path: "/" },
//         { title: "Returns, Refunds & Cancellations", path: "/" },
//         { title: "Terms & Conditions", path: "/" },
//         { title: "Privacy Policy", path: "/" },
//       ],
//     },
//   ];

//   const toggleDropdown = (index: number) => {
//     setOpenDropdown((prevState) => (prevState === index ? null : index));
//   };

//   return (
//     <div className="w-full flex flex-col gap-4 py-10">
//       <Image src={Logo2} className="w-44" alt="Logo 2" />

//       <Disclosure>
//         {({ open }) => (
//           <>
//             <Disclosure.Button className="w-full flex flex-row justify-between items-center text-md font-semibold">
//               <div>Contact us</div>
//               <div>{open ? <FaMinus /> : <FaPlus />}</div>
//             </Disclosure.Button>
//             <MotionHeight isVisible={open}>
//               <Disclosure.Panel as="ul" className="text-gray-500">
//                 {/* Form component can be added here if needed */}
//               </Disclosure.Panel>
//             </MotionHeight>
//           </>
//         )}
//       </Disclosure>

//       {linkItems.map((item, index) => (
//         <Disclosure key={index} as="div">
//           {({ open }) => (
//             <>
//               <Disclosure.Button
//                 className="w-full flex flex-row justify-between items-center text-md font-semibold"
//                 onClick={() => toggleDropdown(index)}
//               >
//                 <div>{item.title}</div>
//                 <div>{openDropdown === index ? <FaMinus /> : <FaPlus />}</div>
//               </Disclosure.Button>

//               <MotionHeight isVisible={openDropdown === index}>
//                 <Disclosure.Panel
//                   as="ul"
//                   className="flex flex-col gap-4 text-sm font-normal"
//                 >
//                   {item?.items &&
//                     item.items.map((subItem, subIndex) => (
//                       <li key={subIndex}>
//                         <Link href={subItem.path}>{subItem.title}</Link>
//                       </li>
//                     ))}
//                 </Disclosure.Panel>
//               </MotionHeight>
//             </>
//           )}
//         </Disclosure>
//       ))}
//     </div>
//   );
// };

// export default MobileFooter;

import Link from "next/link";
import { useState } from "react";

interface SubItem {
  title: string; // Assuming "title" is correct; adjust if necessary.
  path: string;
}

interface MainItem {
  id: number;
  title: string;
  items: SubItem[];
}

const MobileFooter = () => {
  const linkItems: MainItem[] = [
    {
      id: 1,
      title: "Let us help",
      items: [
        { title: "Help Center", path: "/" },
        { title: "Track My Order", path: "/" },
        { title: "Cancel My Order", path: "/" },
        { title: "Return My Order", path: "/" },
      ],
    },
    {
      id: 2,
      title: "Categories",
      items: [
        { title: "Jacket", path: "/" },
        { title: "Pants", path: "/" },
        { title: "T-Shirt", path: "/" },
        { title: "Bag & Shoes", path: "/" },
      ],
    },
    {
      id: 3,
      title: "Our policies",
      items: [
        { title: "Shipping & Delivery", path: "/" },
        { title: "Returns, Refunds & Cancellations", path: "/" },
        { title: "Terms & Conditions", path: "/" },
        { title: "Privacy Policy", path: "/" },
      ],
    },
  ];

  const [isOpen, setIsOpen] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  };

  return (
    <div className="w-full rounded-lg text-white p-3 mix-blend-difference">
      {linkItems.map((item, idx) => (
        <div key={item.id} className="py-3">
          <button
            onClick={() => toggle(idx)}
            className="flex h-full w-full items-center justify-between font-medium text-white outline-none"
          >
            <span>{item.title}</span>
            <span className="rounded-full p-2">
              <svg
                className="ml-8 size-3 shrink-0 fill-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="5"
                  width="12"
                  height="2"
                  rx="1"
                  className={`origin-center transform transition duration-200 ease-out ${
                    isOpen === idx && "!rotate-180"
                  }`}
                />
                <rect
                  y="5"
                  width="12"
                  height="2"
                  rx="1"
                  className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                    isOpen === idx && "!rotate-180"
                  }`}
                />
              </svg>
            </span>
          </button>
          <div
            className={`grid overflow-hidden text-zinc-400 transition-all duration-300 ease-in-out ${
              isOpen === idx
                ? "grid-rows-[1fr] pb-1 pt-3 opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden pr-4 text-sm">
              {item.items.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <Link href={subItem.path}>{subItem.title}</Link>
                </li>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileFooter;
