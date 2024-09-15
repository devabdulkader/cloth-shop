import Image, { StaticImageData } from "next/image";
import React from "react";
import Logo2 from "@/public/common/Logo_2.webp";
import Amex from "@/public/common/amex.webp";
import Dinners from "@/public/common/dinners-club.png";
import Discover from "@/public/common/discover.png";
import Mastercard from "@/public/common/mastercardpng.png";
import Paypal from "@/public/common/paypal.png";
import Visa from "@/public/common/visa.png";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaTiktok,
} from "react-icons/fa6";
import MobileFooter from "./MobileFooter";
import MotionTransition from "@/components/motion/MotionTransition";
import SubscribeForm from "@/components/forms/SubscribeForm";

// Define the type for CardImage items
interface CardImageItem {
  image: StaticImageData;
  title: string;
}

// Define the type for Icon items
interface IconItem {
  icon: JSX.Element;
  link: string;
}

// PAYMENT CARD IMAGE
const CardImag: CardImageItem[] = [
  {
    image: Visa,
    title: "Visa",
  },
  {
    image: Mastercard,
    title: "Mastercard",
  },
  {
    image: Amex,
    title: "American Express",
  },
  {
    image: Paypal,
    title: "Paypal",
  },
  {
    image: Dinners,
    title: "Dinners card",
  },
  {
    image: Discover,
    title: "Discover",
  },
];

// SOCIAL MEDIA ICONS & LINK
const Icons: IconItem[] = [
  {
    icon: <FaFacebookF size={18} />,
    link: "",
  },
  {
    icon: <FaInstagram size={18} />,
    link: "",
  },
  {
    icon: <FaXTwitter size={18} />,
    link: "",
  },
  {
    icon: <FaTiktok size={18} />,
    link: "",
  },
];

const Footer = () => {


  return (
    <>
      <div className="bg-[#132842] text-white">
        <div className="container">
          <div className="hidden md:flex md:flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-between items-center pt-20">
            <MotionTransition initialY={50} duration={1}>
              <Link href="/"><Image src={Logo2} className="w-44" alt="Logo 2" /></Link>
              </MotionTransition>
              <p className="text-lg font-bold">
                Get exclusive our offers and updates
              </p>
              <SubscribeForm/>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10  justify-between text-sm md:text-base font-normal py-14">
              <ul >
                <li className="text-lg md:text-xl font-semibold py-4">Contact us</li>
                <MotionTransition initialY={50} duration={1} className="flex flex-col gap-5" >
                <li>2357 Gordon Street, CA</li>
                <li>+ (909) - 478-2742</li>
                <li>Minastore@Vinovathemes.com</li>
                <li className="flex flex-row gap-2">
                  {Icons.map((item, index) => (
                    <Link
                      href={item.link}
                      target="_blank"
                      key={index}
                      className="hover:bg-white hover:text-black rounded-full px-2 py-2 duration-300 ease-out"
                    >
                      {item.icon}
                    </Link>
                  ))}
                </li>
                </MotionTransition>
              </ul>
              <ul>
                <li className="text-lg md:text-xl font-semibold py-4">
                  <Link href="/">Let us help</Link>
                </li>
                <MotionTransition initialY={50} duration={1} className="flex flex-col gap-5" >
                <li>
                  <Link href="/">Help Center</Link>
                </li>
                <li>
                  <Link href="/">Track My Order</Link>
                </li>
                <li>
                  <Link href="/">Cancel My Order</Link>
                </li>
                <li>
                  <Link href="/">Return My Order</Link>
                </li>
                </MotionTransition>
              </ul>
              <ul>
                <li className="text-lg md:text-xl font-semibold py-4">
                  <Link href="/">Categories</Link>
                </li>
                <MotionTransition initialY={50} duration={1} className="flex flex-col gap-5" >
                <li>
                  <Link href="/">Jacket</Link>
                </li>
                <li>
                  <Link href="/">Pants</Link>
                </li>
                <li>
                  <Link href="/">T-Shirt</Link>
                </li>
                <li>
                  <Link href="/">Bag & Shoes</Link>
                </li>
                </MotionTransition>
              </ul>
              <ul >
                <li className="text-lg md:text-xl font-semibold py-4">
                  <Link href="/">Our policies</Link>
                </li>
                <MotionTransition initialY={50} duration={1} className="flex flex-col gap-5" >
                <li>
                  <Link href="/">Shipping & Delivery</Link>
                </li>
                <li>
                  <Link href="/">Returns, Refunds & Cancellations</Link>
                </li>
                <li>
                  <Link href="/terms-and-condition">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="/">Privacy Policy</Link>
                </li>
                </MotionTransition>
              </ul>
            </div>
          </div>

          <div className="w-full flex md:hidden">
            <MobileFooter />
          </div>

          <hr />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center md:justify-between items-center py-8">
            <p className="text-md font-medium text-center md:text-left">
              Copyright &copy; 2024 Zorg IT Group. All Rights Reserved.
            </p>
            <div className="flex flex-row gap-2 justify-center md:justify-end">
              {CardImag.map((item, index) => (
                <Image
                  src={item.image}
                  alt="Card Image"
                  title={item.title}
                  key={index}
                  className="h-6 w-10 bg-cover bg-current rounded-sm"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
