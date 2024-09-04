"use client";
import React, { useState } from "react";
import Img from "@/public/instagram/insta01.jpeg";
import { Description, Field, Label, Select } from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";
import clsx from "clsx";
import Image from "next/image";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import Link from "next/link";
interface Order {
  id: number;
  title: string;
  date: string;
  quantity: number;
  price: number;
  image: string;
  category: string[];
  sku: string;
  size: string;
  status: string;
}

const CheckoutPage = () => {

  const [selectedCountry, setSelectedCountry] = useState<string>('Bangaldesh');
  const [selectedDeliveryLocaiton, setSelectedDeliveryLocaiton] = useState<string>('insite-dhaka');
  const [selectedPayment, setSelectedPayment] = useState<string>('cash-on-delivery');
  const OrderData: Order[] = [
    {
      id: 1,
      title: "Cropped Blazer",
      date: "SEP 02, 2024",
      quantity: 2,
      price: 350,
      image: Img.src,
      category: ["T-Shirt", "Shoes"],
      sku: "s-10",
      size: "XL",
      status: "Pending"
    },
    {
      id: 2,
      title: "Cropped Blazer",
      date: "SEP 02, 2024",
      quantity: 5,
      price: 500,
      image: Img.src,
      category: ["T-Shirt", "Shoes"],
      sku: "s-10",
      size: "S",
      status: "Packaging"
    }
  ]



  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };
  const submitHandler = async (data: any) => {
    console.log("hello");
  };
  return (
    <div className=' container grid grid-cols-1 md:grid-cols-2 gap-10 py-10'>
        <Form submitHandler={submitHandler} className=' min-w-full flex flex-col gap-4'>
          <Field>
            <Label className="text-sm/6 font-medium text-black">Country</Label>
            <p className="mt-4 text-sm">Selected Country: {selectedCountry}</p>
            <div className="relative">
              <Select
                value={selectedCountry}
                onChange={handleChange}
                className={clsx(
                  'mt-3 block w-full appearance-none rounded-lg border py-3 px-3 text-sm/6 text-black',
                  'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
                  // Make the text of each option black on Windows
                  '*:text-black'
                )}
              >
                <option>Bangaldesh</option>
                <option>Canada</option>
                <option>Mexico</option>
                <option>United States</option>
              </Select>
              <IoIosArrowDown
                className="group pointer-events-none absolute top-4 right-2.5 size-4 fill-black"
                aria-hidden="true"
              />
            </div>
          </Field>
          {
            selectedCountry === "Bangaldesh" && (
              <div className=' flex flex-row gap-4 text-center'>
                <button onClick={() => setSelectedDeliveryLocaiton("insite-dhaka")} className={` py-4 w-48  px-2 ${selectedDeliveryLocaiton === 'insite-dhaka' ? 'bg-[#132842] text-white' : 'bg-slate-200'} `}>Inside dhaka 70 tk,</button>
                <button onClick={() => setSelectedDeliveryLocaiton("outsite-dhaka")} className={` py-4 w-48  px-2 ${selectedDeliveryLocaiton === 'outsite-dhaka' ? 'bg-[#132842] text-white' : 'bg-slate-200'} `}>Onside dhaka 130 tk</button>
              </div>
            )
          }

          <FormInput name='name' id='name' placeholder='FULL NAME' type='text' className='min-w-full border hover:border-black rounded-md px-4 py-3 text-sm outline-none' />
          <FormInput name='email' id='email' placeholder='ENTER YOUR EMAIL' type='email' className='min-w-full border hover:border-black rounded-md px-4 py-3 text-sm outline-none' />
          <FormInput name='phone' id='phone' placeholder='ENTER YOUR PHONE' type='text' className='min-w-full border hover:border-black rounded-md px-4 py-3 text-sm outline-none' />
          <FormInput name='address' id='address' placeholder='FULL ADDRESS' type='text' className='min-w-full border hover:border-black rounded-md px-4 py-3 text-sm outline-none' />
          {
            selectedCountry === "Bangaldesh" && (
              <div className=' flex flex-row gap-4 text-center'>
                <button onClick={() => setSelectedPayment("cash-on-delivery")} className={` py-8 w-48  px-2 ${selectedPayment === 'cash-on-delivery' ? 'bg-[#132842] text-white' : 'bg-slate-200'} `}>Cash On Delivery</button>
                <button onClick={() => setSelectedPayment("bkash")} disabled className={` py-8 w-48  px-2 ${selectedPayment === 'bkash' ? 'bg-[#132842] text-white' : 'bg-slate-200'} `}>Bkash</button>
              </div>
            )}
          <Link href="/confirmation" >
            <button className='  min-w-full bg-[#132842]  py-4 text-white rounded-full text-base'>
              Pay Now
            </button>
          </Link>

        </Form>
        <div className="flex flex-col gap-4">
          {OrderData.map((item, index) => (
            <div key={index} className=" flex flex-row justify-between">
              <div className="flex flex-row items-center gap-4">
                <div className=" relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                    className=" rounded-md"
                  />
                  <span className=" absolute -top-1 -right-1 z-20 bg-gray-300 rounded-full flex justify-center  text-[14px] w-6 h-6">
                    {item.quantity}
                  </span>
                </div>

                <div className="text-sm font-normal">
                  <p>{item.title}</p>
                  <p>{item.size}</p>
                </div>
              </div>
              <div className="text-sm font-normal">${item.price}</div>
            </div>
          ))}
          <div className="flex flex-row justify-between items-center text-sm font-normal">
            <span>Sub-total</span>
            <span>
              ${830 + selectedDeliveryLocaiton === "insite-dhaka" ? 70 : 130}
            </span>
          </div>
          <div className="flex flex-row justify-between items-center text-sm font-normal">
            <span>Shipping</span>
            <span>uttara-11, Dhaka</span>
          </div>
          {selectedCountry === "Bangaldesh" && (
            <div className="flex flex-row justify-between items-center text-sm font-normal">
              <span>Delivery Cost</span>
              <span>
                ${selectedDeliveryLocaiton === "insite-dhaka" ? 70 : 130}
              </span>
            </div>
          )}
          <div className="flex flex-row justify-between items-center text-2xl font-semibold">
            <span>Total</span>
            <span>
              ${830 + (selectedDeliveryLocaiton === "insite-dhaka" ? 70 : 130)}
            </span>
          </div>
        </div>
      </div>
  );
};

export default CheckoutPage;
