"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Field, Label, Select } from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";
import clsx from "clsx";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import { useRouter } from "next/navigation";
import { RootState } from "@/lib/store/store";
import { useSelector } from "react-redux";
import { instance } from "@/axios/axiosInstance";
import { IStoreItem } from "@/types/product";

interface CartItem {
  id: number;
  title: string;
  quantity: number;
  buyPrice: number;
  url: string;
  size: string;
}

interface CreateOrderInput {
  trackingNumber?: string;
  note?: string;
  shippingMethodId: string;
  shippingAddress: {
    fullName: string;
    addressEmail: string;
    phoneNumber: string;
    fullAddress: string;
    save?: boolean;
  };
  orderedItems: {
    productName: string;
    productPrice: string;
    quantity: string;
  }[];
  payment: {
    method: string;
    transactionId?: string;
  };
  couponCode?: string;
}

const CheckoutPage = () => {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState<string>("Bangladesh");
  const [selectedDeliveryLocation, setSelectedDeliveryLocation] =
    useState<string>("insite-dhaka");
  const [selectedPayment, setSelectedPayment] = useState({
    title: "Cash On Delivery",
    value: "COD",
  });

  const cartItems = useSelector(
    (state: RootState) => state.cart.cartItems as IStoreItem[]
  );
  const couponCode = useSelector((state: RootState) => state.cart.couponCode);
  const comment = useSelector((state: RootState) => state.cart.comment);

  console.log({ comment });

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };

  const submitHandler = async (data: any) => {
    try {
      const orderInput: CreateOrderInput = {
        shippingMethodId:
          selectedDeliveryLocation === "insite-dhaka"
            ? "19e8b3dc-d4b0-46f0-a22f-f52e09718400"
            : "9a6cbf57-b55f-430d-aca6-7f4fc08d1b36",
        shippingAddress: {
          fullName: data.name,
          addressEmail: data.email,
          phoneNumber: data.phone,
          fullAddress: data.address,
        },
        orderedItems: cartItems.map((item) => ({
          productName: item.title,
          productPrice: item.buyPrice.toString(),
          quantity: item.quantity.toString(),
        })),
        payment: {
          method: selectedPayment.value,
        },
        couponCode: couponCode,
        note: comment,
      };

      const response = await instance.post("/", {
        query: `
            mutation CreateOrder($input: CreateOrderInput!) {
              createOrder(input: $input) {
                id
                trackingNumber
                status
                total
              }
            }
          `,
        variables: {
          input: orderInput,
        },
      });

      const createdOrder = response.data.data.createOrder;
      console.log("Order created:", createdOrder?.trackingNumber);

      // Clear the cart after successful order creation
      // You might want to dispatch an action to clear the Redux store as well
      localStorage.removeItem("cart");

      // Redirect to order confirmation page
      router.push(`/confirmation`);
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  console.log("cartItems", cartItems);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.buyPrice * item.quantity,
    0
  );
  const deliveryCost = selectedDeliveryLocation === "insite-dhaka" ? 70 : 130;
  const total = subtotal + deliveryCost;

  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
      <Form
        submitHandler={submitHandler}
        className="min-w-full flex flex-col gap-4"
      >
        <Field>
          <Label className="text-sm/6 font-medium text-black">Country</Label>
          <p className="mt-4 text-sm">Selected Country: {selectedCountry}</p>
          <div className="relative">
            <Select
              value={selectedCountry}
              onChange={handleChange}
              className={clsx(
                "mt-3 block w-full appearance-none rounded-lg border py-3 px-3 text-sm/6 text-black",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
                "*:text-black"
              )}
            >
              <option>Bangladesh</option>
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
        {selectedCountry === "Bangladesh" && (
          <div className="flex flex-row gap-4 text-center">
            <button
              type="button"
              onClick={() => setSelectedDeliveryLocation("insite-dhaka")}
              className={`py-4 w-48 px-2 ${
                selectedDeliveryLocation === "insite-dhaka"
                  ? "bg-[#132842] text-white"
                  : "bg-slate-200"
              } `}
            >
              Inside Dhaka 70 tk
            </button>
            <button
              type="button"
              onClick={() => setSelectedDeliveryLocation("outsite-dhaka")}
              className={`py-4 w-48 px-2 ${
                selectedDeliveryLocation === "outsite-dhaka"
                  ? "bg-[#132842] text-white"
                  : "bg-slate-200"
              } `}
            >
              Outside Dhaka 130 tk
            </button>
          </div>
        )}
        <FormInput
          name="name"
          id="name"
          placeholder="FULL NAME"
          type="text"
          className="min-w-full border hover:border-black rounded-md px-4 py-3 text-sm outline-none"
        />
        <FormInput
          name="email"
          id="email"
          placeholder="ENTER YOUR EMAIL"
          type="email"
          className="min-w-full border hover:border-black rounded-md px-4 py-3 text-sm outline-none"
        />
        <FormInput
          name="phone"
          id="phone"
          placeholder="ENTER YOUR PHONE"
          type="text"
          className="min-w-full border hover:border-black rounded-md px-4 py-3 text-sm outline-none"
        />
        <FormInput
          name="address"
          id="address"
          placeholder="FULL ADDRESS"
          type="text"
          className="min-w-full border hover:border-black rounded-md px-4 py-3 text-sm outline-none"
        />
        {selectedCountry === "Bangladesh" && (
          <div className="flex flex-row gap-4 text-center">
            <button
              type="button"
              onClick={() =>
                setSelectedPayment({
                  title: "Cash On Delivery",
                  value: "COD",
                })
              }
              className={`py-8 w-48 px-2 ${
                selectedPayment.value === "COD"
                  ? "bg-[#132842] text-white"
                  : "bg-slate-200"
              } `}
            >
              Cash On Delivery
            </button>
            <button
              type="button"
              onClick={() =>
                setSelectedPayment({
                  title: "Bkash",
                  value: "BKASH",
                })
              }
              disabled
              className={`py-8 w-48 px-2 ${
                selectedPayment.value === "BKASH"
                  ? "bg-[#132842] text-white"
                  : "bg-slate-200"
              } `}
            >
              Bkash
            </button>
          </div>
        )}
        <button
          type="submit"
          className="min-w-full bg-[#132842] py-4 text-white rounded-full text-base"
        >
          Pay Now
        </button>
      </Form>
      <div className="flex flex-col gap-4">
        {cartItems?.map((item, index) => (
          <div key={index} className="flex flex-row justify-between">
            <div className="flex flex-row items-center gap-4">
              <div className="relative">
                <Image
                  src={item.url}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="rounded-md"
                />
                <span className="absolute -top-1 -right-1 z-20 bg-gray-300 rounded-full flex justify-center text-[14px] w-6 h-6">
                  {item.quantity}
                </span>
              </div>
              <div className="text-sm font-normal">
                <p>{item.title}</p>
                <p>{item.selectedProductSize}</p>
              </div>
            </div>
            <div className="text-sm font-normal">${item.buyPrice}</div>
          </div>
        ))}
        <div className="flex flex-row justify-between items-center text-sm font-normal">
          <span>Sub-total</span>
          <span>${subtotal}</span>
        </div>
        <div className="flex flex-row justify-between items-center text-sm font-normal">
          <span>Shipping</span>
          <span>uttara-11, Dhaka</span>
        </div>
        {selectedCountry === "Bangladesh" && (
          <div className="flex flex-row justify-between items-center text-sm font-normal">
            <span>Delivery Cost</span>
            <span>${deliveryCost}</span>
          </div>
        )}
        <div className="flex flex-row justify-between items-center text-2xl font-semibold">
          <span>Total</span>
          <span>${total}</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
