"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeCartSidebar } from "@/lib/store/features/cartSidebar/cartSidebarSlice";
import { RootState } from "@/lib/store/store";
import CustomCrossBar from "@/components/custom/CustomCrossBar";
import CustomBackDrop from "@/components/custom/CustomBackDrop";
import Image from "next/image";
import Link from "next/link";
import { RiDeleteBin5Fill, RiPlayLargeFill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "@/lib/store/features/cart/cartSlice";
import { IStoreItem } from "@/types/product";

interface Tag {
  title: string;
  href: string;
}
// Example of updated IProduct type

const tags: Tag[] = [
  { title: "Men", href: "/men" },
  { title: "Women", href: "/women" },
  { title: "Shoes", href: "/shoes" },
  { title: "Cloth", href: "/cloth" },
  // Add more tags as needed
];

const CartSideBar: React.FC = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state: RootState) => state.cart.cartItems
  ) as IStoreItem[];
  // Handle quantity change

  const isCartSidebarOpen = useSelector(
    (state: RootState) => state.cartSidebar.isCartSidebarOpen
  );

  const handleIncreaseQuantity = (id: string) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecreaseQuantity = (id: string) => {
    dispatch(decrementQuantity(id));
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleCartClose = () => {
    dispatch(closeCartSidebar());
  };

  return (
    <>
      {/* Background Overlay */}
      {isCartSidebarOpen && <CustomBackDrop onClose={handleCartClose} />}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 z-layer-5 bg-white h-full w-[80%] sm:w-96 px-8 shadow-lg transform transition-transform duration-500 ${
          isCartSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          onClick={handleCartClose}
          className="absolute top-3 sm:right-5 right-0 z-50"
        >
          <CustomCrossBar />
        </div>
        <main className="relative z-20 h-full">
          <div className="flex items-center space-x-5 py-5 border-b">
            <h3>My Cart</h3>
            <div className="flex relative bg-black text-white py-2 px-3 rounded-md">
              <span className="text-sm flex items-center justify-center ">
                {cartItems.length} Items
              </span>
              <RiPlayLargeFill className="rotate-180 absolute -left-3 text-2xl text-black" />
            </div>
          </div>

          {/* Sidebar Items */}
          {cartItems?.length === 0 ? (
            <>
              <div className="grid place-items-center pt-10">
                <Image
                  src="/common/cart-empty.webp"
                  alt="Empty Cart"
                  width={300}
                  height={300}
                  className="size-54"
                />
              </div>

              <div className="py-8 flex flex-col items-center gap-4">
                {tags.map((tag, index) => (
                  <Link
                    key={index}
                    href={tag.href}
                    className="block rounded-full w-48 bg-gray-200 text-gray-800 px-4 py-3 text-center transition-colors duration-300 ease-in-out hover:bg-gray-800 hover:text-white"
                  >
                    {tag.title}
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <div>
              <div className="flex flex-col gap-4 w-full h-[500px] overflow-auto py-4">
                {cartItems?.map((item) => (
                  <div
                    key={item._id}
                    className="relative flex   items-center border rounded-md shadow-xl gap-3 "
                  >
                    <div className="flex  items-center gap-4">
                      <Image
                        src={item.selectedProductUrl}
                        width={70}
                        height={50}
                        alt={item.title}
                        className="w-full h-full "
                      />
                    </div>
                    <div className="flex flex-col h-full p-2 gap-4  items-center">
                      <div className="flex flex-col justify-start">
                        <span>{item.title}</span>
                        <span>{item.selectedProductSize}</span>
                        <span className="text-md font-semibold">
                          ${item.basePrice}
                        </span>
                      </div>
                      {/* Quantity Selection */}
                      <div className="flex items-center">
                        <button
                          onClick={() => handleDecreaseQuantity(item.uuid)}
                          className=" px-3 py-1 "
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          min="1"
                          readOnly
                          className="w-12 text-center mx-2 "
                        />
                        <button
                          onClick={() => handleIncreaseQuantity(item.uuid)}
                          className=" px-3 py-1 "
                        >
                          +
                        </button>
                        <button
                          onClick={() => handleRemoveItem(item.uuid)}
                          className=" bg-gray-200 rounded-full p-1"
                        >
                          <RiDeleteBin5Fill
                            size={16}
                            className="text-gray-600"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2 w-full md:min-w-[30%]">
                <div className="flex flex-row justify-between items-center text-[12px] pt-5 ">
                  <span className="font-semibold">TOTAL:</span>
                  <span className="font-bold">
                    ${" "}
                    {cartItems?.reduce(
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
                  onClick={handleCartClose}
                  className="bg-gray-300 border-2 flex justify-center w-full py-3 text-black shadow-gl rounded-3xl text-sm"
                >
                  PROCEED TO CHECKOUT
                </Link>
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default CartSideBar;
