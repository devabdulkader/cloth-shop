


'use client'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import Link from 'next/link';
import { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa6";
import Image from "next/image";
import Logo2 from '@/public/common/Logo_2.webp';
import Form from '@/components/forms/Form';
import FormInput from '@/components/forms/FormInput';

interface SubItem {
  tilte: string; // Note: "tilte" should probably be "title". Adjust if necessary.
  path: string;
}

interface MainItem {
  id: number,
  title: string,
  items: SubItem[]
}

const MobileFooter: React.FC = () => {
  const [openDropdowns, setOpenDropdowns] = useState<number[]>([]);
  // console.log(openDropdowns)

  const linkItems: MainItem[] = [
    {
      id: 1,
      title: "Let us help",
      items: [
        { tilte: "Help Center", path: "/" },
        { tilte: "Track My Order", path: "/" },
        { tilte: "Cancel My Order", path: "/" },
        { tilte: "Return My Order", path: "/" },
      ]
    },
    {
      id: 2,
      title: "Categories",
      items: [
        { tilte: "Jacket", path: "/" },
        { tilte: "Pants", path: "/" },
        { tilte: "T-Shirt", path: "/" },
        { tilte: "Bag & Shoes", path: "/" },
      ]
    },
    {
      id: 3,
      title: "Our policies",
      items: [
        { tilte: "Shipping & Delivery", path: "/" },
        { tilte: "Returns, Refunds & Cancellations", path: "/" },
        { tilte: "Terms & Conditions", path: "/" },
        { tilte: "Privacy Policy", path: "/" },
      ]
    }
  ];


  const toggleDropdown = (index: number) => {
    setOpenDropdowns((prevState) => {
      return prevState.includes(index) ? prevState.filter(i => i !== index) : [index];
    });
  };



  return (
    <div className='w-full flex flex-col gap-4 py-10'>
      <Image src={Logo2} className="w-44" alt="Logo 2" />

      <Disclosure>
        {({ open }) => (
          <>
            <DisclosureButton className="w-full flex flex-row justify-between items-center text-md font-semibold">
              <div>Contact us</div>
              <div>{open ? <FaMinus /> : <FaPlus />}</div>
            </DisclosureButton>
            <DisclosurePanel as="ul" className="text-gray-500">
              <Form className="relative">
                <FormInput name="" placeholder="Enter your email" className="rounded-full px-4 h-14 text-sm outline-none" />
                <div className="absolute top-1 right-1 bg-[#132842] hover:bg-[#263d5c] rounded-full h-12 w-40 flex justify-center items-center">Submit</div>
              </Form>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>

      {linkItems.map((item, index) => (
        <Disclosure key={index} as="div">
          {({ open }) => (
            <>
              <DisclosureButton
                className="w-full flex flex-row justify-between items-center text-md font-semibold"
                onClick={() => toggleDropdown(index)}
              >
                <div>{item.title}</div>
                <div>{openDropdowns.includes(index) ? <FaMinus /> : <FaPlus />}</div>
              </DisclosureButton>

              <DisclosurePanel as="ul" className="flex flex-col gap-4 text-sm font-normal">
                {item?.items && item.items.map((subItem, subIndex) => (
                  <li key={subIndex}


                  >
                    <Link href={subItem.path}>{subItem.tilte}</Link>
                  </li>
                ))}
              </DisclosurePanel>

            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
}

export default MobileFooter;











