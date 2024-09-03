import Image from "next/image";
import p1 from "@/public/policy/p-1.webp";
import p2 from "@/public/policy/p-2.webp";
import p3 from "@/public/policy/p-3.webp";
import p4 from "@/public/policy/p-4.webp";
import React from "react";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import CartModalSlider from "../common/CartModalSlider";
import { RiDeleteBin5Line } from "react-icons/ri";
interface policy {
  id: number;
  image: string;
  title: string;
  description: string;
  path_title: string;
  path_link: string;
}

const Policy: React.FC = () => {
  const policyData: policy[] = [
    {
      id: 1,
      image: p1.src,
      title: "Free shipping on orders $50 or more",
      description:
        "Elevate Your Shopping Experience with Free Shipping on Orders of $50 or More, Bringing Fashion to Your Doorstep.",
      path_title: "Experience free shipping service now",
      path_link: "/",
    },

    {
      id: 2,
      image: p2.src,
      title: "Return policy is for you",
      description:
        "Our Product Return Policy Exclusively Designed to Exceed Your Expectations and Ensure Your Utmost Satisfaction",
      path_title: "See more about the service",
      path_link: "/",
    },
    {
      id: 3,
      image: p3.src,
      title: "Save money when shopping with offers",
      description:
        "Discover a World of Savings with Our Irresistible Offers and Deals, Making Every Purchase Worthwhile.",
      path_title: "See offers now",
      path_link: "/",
    },
    {
      id: 4,
      image: p4.src,
      title: "We always listen and support you",
      description:
        "A Commitment to Genuine Engagem, Dedicate Support and Empowering Collaboration for Meaningful Impact.",
      path_title: "Contact now",
      path_link: "/",
    },
  ];
  return (
    <div className="">
      <div className=" text-center">
        <p className="text-md font-medium md:text-xl uppercase text-gray-600 lg:mb-3">
          Policy
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          Excellence and reliability
        </h2>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 py-10 ">
        {policyData.map((item, index) => (
          <div
            className=" bg-slate-100 grid  xl:gap-5 px-6 py-10 xl:px-10 rounded-md"
            key={index}
          >
            <Image
              src={item.image}
              width={50}
              height={50}
              alt=""
              className=" py-2"
            />
            <p className=" text-sm font-semibold py-1 sm:text-2xl text-slate-900">
              {item.title}
            </p>
            <p className=" text-sm font-normal py-1 sm:text-md">
              {item.description}
            </p>
            <Link
              className=" text-sm py-1 sm:text-md flex gap-2 items-center font-semibold"
              href={item.path_link}
            >
              <span>{item.path_title}</span>
              <MdOutlineKeyboardArrowRight size={16} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Policy;
