"use client";

import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { FaPlus, FaMinus } from "react-icons/fa";
import Image from "next/image";
import Logo2 from "@/public/common/Logo_2.webp";
import MotionHeight from "@/components/motion/MotionHeight";

interface SubItem {
  tilte: string; // Note: "tilte" should probably be "title". Adjust if necessary.
  path: string;
}

interface MainItem {
  id: number;
  title: string;
  items: SubItem[];
}

const MobileFooter: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const linkItems: MainItem[] = [
    {
      id: 1,
      title: "Let us help",
      items: [
        { tilte: "Help Center", path: "/" },
        { tilte: "Track My Order", path: "/" },
        { tilte: "Cancel My Order", path: "/" },
        { tilte: "Return My Order", path: "/" },
      ],
    },
    {
      id: 2,
      title: "Categories",
      items: [
        { tilte: "Jacket", path: "/" },
        { tilte: "Pants", path: "/" },
        { tilte: "T-Shirt", path: "/" },
        { tilte: "Bag & Shoes", path: "/" },
      ],
    },
    {
      id: 3,
      title: "Our policies",
      items: [
        { tilte: "Shipping & Delivery", path: "/" },
        { tilte: "Returns, Refunds & Cancellations", path: "/" },
        { tilte: "Terms & Conditions", path: "/" },
        { tilte: "Privacy Policy", path: "/" },
      ],
    },
  ];

  const toggleDropdown = (index: number) => {
    setOpenDropdown((prevState) => (prevState === index ? null : index));
  };

  return (
    <div className="w-full flex flex-col gap-4 py-10">
      <Image src={Logo2} className="w-44" alt="Logo 2" />

      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full flex flex-row justify-between items-center text-md font-semibold">
              <div>Contact us</div>
              <div>{open ? <FaMinus /> : <FaPlus />}</div>
            </Disclosure.Button>
            <MotionHeight isVisible={open}>
              <Disclosure.Panel as="ul" className="text-gray-500">
                {/* Form component can be added here if needed */}
              </Disclosure.Panel>
            </MotionHeight>
          </>
        )}
      </Disclosure>

      {linkItems.map((item, index) => (
        <Disclosure key={index} as="div">
          {({ open }) => (
            <>
              <Disclosure.Button
                className="w-full flex flex-row justify-between items-center text-md font-semibold"
                onClick={() => toggleDropdown(index)}
              >
                <div>{item.title}</div>
                <div>{openDropdown === index ? <FaMinus /> : <FaPlus />}</div>
              </Disclosure.Button>

              <MotionHeight isVisible={openDropdown === index}>
                <Disclosure.Panel
                  as="ul"
                  className="flex flex-col gap-4 text-sm font-normal"
                >
                  {item?.items &&
                    item.items.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link href={subItem.path}>{subItem.tilte}</Link>
                      </li>
                    ))}
                </Disclosure.Panel>
              </MotionHeight>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
};

export default MobileFooter;
