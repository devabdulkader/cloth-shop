"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";
import axios from "axios";
import {
  addCommentAndCouponCode,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "@/lib/store/features/cart/cartSlice";
import { instance } from "@/axios/axiosInstance";
import { useRouter } from "next/navigation";
import { IAddToItem, IStoreItem } from "@/types/product";

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState<string>("");
  const [couponCode, setPromoCode] = useState<string>("");
  const router = useRouter();

  const cartItems = useSelector(
    (state: RootState) => state.cart.cartItems
  ) as IStoreItem[];
  console.log("cart page", cartItems);
  const handleIncreaseQuantity = (id: string) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecreaseQuantity = (id: string) => {
    dispatch(decrementQuantity(id));
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleApply = () => {
    // Dispatch comments and promo code to redux
    dispatch(addCommentAndCouponCode({ comment, couponCode }));
    // Add further actions as needed, like showing a success message
  };

  const handleCheckout = () => {
    // Navigate to the checkout page
    router.push("/checkout");
  };

  return (
    <div className="container">
      <div className="text-center py-20 md:py-40">
        <h1 className="text-2xl md:text-4xl font-semibold md:font-medium uppercase">
          Your Shopping Cart
        </h1>
        <p className="text-sm font-normal py-2">
          <Link href="/">Home</Link> &#x2022; <span>Your Shopping Cart</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 py-4">
        <div className="min-w-full md:min-w-[60%]">
          <div className="border">
            <div className="min-w-full hidden md:flex flex-col md:flex-row justify-between items-center bg-slate-100 px-4 py-3">
              <div className="w-full">
                <span className="pl-12 text-[12px] font-semibold">
                  PRODUCTS
                </span>
              </div>
              <div className="w-full flex justify-between items-center text-[12px] font-semibold">
                <p>PRICE</p>
                <p>QTY</p>
                <p>TOTAL</p>
              </div>
            </div>

            <div className="flex flex-col">
              {cartItems &&
                cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row justify-between items-center border gap-8 md:gap-0 p-6"
                  >
                    <div className="max-w-full md:w-full flex flex-row gap-4 md:gap-2 items-center">
                      <div className="px-4">
                        <RiDeleteBin5Line
                          size={18}
                          className="cursor-pointer"
                          onClick={() => handleRemoveItem(item.uuid)}
                        />
                      </div>

                      <Image
                        src={item.url}
                        alt={item.title}
                        width={100}
                        height={100}
                        className="bg-cover"
                      />
                      <div className="text-[12px]">
                        <p className="font-semibold">{item.title}</p>
                        <p className="font-medium">
                          Size: {item.selectedProductSize}
                        </p>
                      </div>
                    </div>

                    <div className="w-full flex justify-between items-center text-sm">
                      <p>€{item.basePrice}</p>
                      <div className="mb-4 flex items-center">
                        <button
                          onClick={() => handleDecreaseQuantity(item.uuid)}
                          className="bg-gray-300 px-3 py-1 rounded"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          min="1"
                          readOnly
                          className="w-12 text-center mx-2 border border-gray-300 rounded"
                        />
                        <button
                          onClick={() => handleIncreaseQuantity(item.uuid)}
                          className="bg-gray-300 px-3 py-1 rounded"
                        >
                          +
                        </button>
                      </div>
                      <p>€{(item.basePrice * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="w-full flex flex-row justify-center items-center text-center gap-4 md:gap-8 py-4">
            <button
              onClick={handleCheckout}
              className="w-full py-4 bg-slate-200 hover:bg-[#132842] text-black hover:text-white rounded-full text-sm font-semibold"
            >
              Proceed To Checkout
            </button>
            <Link
              href="/products"
              className="w-full py-4 hover:bg-opacity-95 bg-[#132842] text-white rounded-full text-sm font-semibold"
            >
              Continue Shopping
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 min-w-full md:min-w-[40%]">
          {/* Comment and Promo Code Section */}
          <label htmlFor="comments">Comments:</label>
          <textarea
            id="comments"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add your comments here"
            className="w-full text-sm outline-none text-black border p-2"
          />

          <label htmlFor="promoCode">Promo Code:</label>
          <input
            type="text"
            id="promoCode"
            value={couponCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Enter promo code"
            className="px-4 h-14 text-sm outline-none text-black border"
          />
          <button
            onClick={handleApply}
            className="bg-[#132842] text-white rounded-full h-12 w-40 flex justify-center items-center"
          >
            Apply
          </button>

          <div className="border">
            <p className="px-6 py-3 text-[12px] font-semibold uppercase">
              There are {cartItems.length} items in your cart
            </p>
            <div className="flex flex-col gap-2 bg-slate-100 px-6 py-4">
              <p className="flex flex-row justify-between items-center">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-xl font-bold">
                  €
                  {cartItems.reduce(
                    (acc, item) => acc + item.basePrice * item.quantity,
                    0
                  )}
                </span>
              </p>
            </div>
          </div>
          <button
            onClick={handleCheckout}
            className="w-full py-4 bg-[#132842] text-white rounded-full text-sm font-semibold"
          >
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
