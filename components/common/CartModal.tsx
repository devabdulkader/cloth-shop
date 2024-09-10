"use client";
import React, { useState, useEffect } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import CustomCrossBar from "../custom/CustomCrossBar";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store/store";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "@/lib/store/features/cart/cartSlice";

interface CartItem {
  id: string; // Unique identifier for each cart item
  title: string;
  basePrice: number;
  quantity: number;
  size: string;
  selectedImage: string;
}

interface CartModalProps {
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ onClose }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  // Update local state when cartItems from Redux store change
  // useEffect(() => {
  //   setCartData(cartItems);
  // }, [cartItems]);

  const handleIncreaseQuantity = (id: string) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecreaseQuantity = (id: string) => {
    dispatch(decrementQuantity(id));
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/50 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 max-h-[90vh] overflow-auto">
        <div className="w-full flex flex-col justify-between gap-2 bg-white shadow-md rounded-md overflow-hidden relative p-4">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center gap-4">
              <p className="text-xl font-semibold">YOUR ORDER</p>
              <p className="text-[12px] font-medium">
                THERE ARE {cartItems.length} ITEM(S) IN YOUR CART
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-600 text-lg self-end"
            >
              <CustomCrossBar />
            </button>
          </div>

          <div className="flex flex-row">
            <div className="w-full flex flex-col lg:flex-row p-2 gap-4 md:gap-10">
              <div className="flex flex-col gap-4 w-full md:min-w-[60%] h-[200px] overflow-x-hidden p-4">
                {cartItems?.map((item) => (
                  <div
                    key={item.id}
                    className="relative flex flex-col md:flex-row justify-between items-center border rounded-md shadow-xl px-2 md:px-6 py-2 md:py-4"
                  >
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="absolute -top-2 md:top-1/2 md:-left-3 bg-gray-400 rounded-full p-1"
                    >
                      <RiDeleteBin5Fill size={16} />
                    </button>
                    <div className="flex flex-row items-center gap-4">
                      <Image
                        src={item.url}
                        width={70}
                        height={50}
                        alt={item.title}
                        className="w-20 h-28 py-2"
                      />
                      <div className="flex flex-col text-sm font-semibold">
                        <span>{item.title}</span>
                        <span>{item.size}</span>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4 md:gap-6 items-center">
                      <span className="text-md font-semibold">
                        ${item.basePrice}
                      </span>
                      {/* Quantity Selection */}
                      <div className="mb-4 flex items-center">
                        <strong className="text-gray-800 mr-4">
                          Quantity:
                        </strong>
                        <button
                          onClick={() => handleDecreaseQuantity(item.id)}
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
                          onClick={() => handleIncreaseQuantity(item.id)}
                          className="bg-gray-300 px-3 py-1 rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-2 w-full md:min-w-[30%]">
                <div className="flex flex-row justify-between items-center text-[12px] ">
                  <span className="font-semibold">TOTAL:</span>
                  <span className="font-bold">
                    ${" "}
                    {cartItems.reduce(
                      (acc, item) => acc + item.basePrice * item.quantity,
                      0
                    )}
                  </span>
                </div>
                <Link
                  href="/cart"
                  className="bg-white hover:bg-[#132842] border-2 flex justify-center w-full py-3 text-black hover:text-white shadow-gl rounded-3xl text-sm"
                >
                  VIEW CART
                </Link>
                <Link
                  href="/products"
                  className="bg-white hover:bg-[#132842] border-2 flex justify-center w-full py-3 text-black hover:text-white shadow-gl rounded-3xl text-sm"
                >
                  CONTINUE SHOPPING
                </Link>
                <div className="flex gap-2 items-center text-sm">
                  <input className="border-2" type="checkbox" />I agree with the
                  Terms & conditions
                </div>
                <Link
                  href="/checkouts"
                  className="bg-gray-300 border-2 flex justify-center w-full py-3 text-black shadow-gl rounded-3xl text-sm"
                >
                  PROCEED TO CHECKOUT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
