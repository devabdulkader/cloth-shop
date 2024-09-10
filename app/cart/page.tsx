// "use client";

// 'use client'
// import { Description, Field, Label, Select, Textarea } from '@headlessui/react'
// import clsx from 'clsx'

// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";
// import Img from "@/public/instagram/insta01.jpeg";

// import { RiDeleteBin5Line } from "react-icons/ri";
// import { IoIosArrowDown } from "react-icons/io";
// import Form from '@/components/forms/Form'
// import FormInput from '@/components/forms/FormInput'
// interface Cart {

//   id: number;
//   title: string;
//   size: string;
//   quantity: number;
//   price: number;
//   image: string;
//   sizes: string[];
// }

// const CartPage: React.FC = () => {
//   const [selectedCountry, setSelectedCountry] = useState<string>("Bangaldesh");
//   const [cartData, setCartData] = useState<Cart[]>([
//     {
//       id: 1,
//       title: "Cropped Blazer",
//       size: "S",
//       quantity: 2,
//       price: 350,
//       image: Img.src,
//       sizes: ["S", "M", "L", "XL"],
//     },
//     {
//       id: 2,
//       title: "Cropped Blazer",
//       size: "L",
//       quantity: 5,
//       price: 500,
//       image: Img.src,
//       sizes: ["S", "M", "L", "XL"],
//     },
//   ]);

//   // Function to handle quantity change for a specific item
//   const handleQuantityChange = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     id: number
//   ) => {
//     const value = e.target.value;
//     // Ensure the value is a valid number or empty string
//     const numericValue = value === "" ? "" : Number(value);
//     // Update the cart data
//     setCartData((prevCartData) =>
//       prevCartData.map((item) =>
//         item.id === id
//           ? {
//             ...item,
//             quantity: numericValue === "" ? 0 : numericValue, // Set quantity to 0 if the input is cleared
//           }
//           : item
//       )
//     );
//   };

//   // Function to decrease quantity for a specific item
//   const decreaseQuantity = (id: number) => {
//     setCartData((prevCartData) =>
//       prevCartData.map((item) =>
//         item.id === id && item.quantity > 1
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       )
//     );
//   };

//   // Function to increase quantity for a specific item
//   const increaseQuantity = (id: number) => {
//     setCartData((prevCartData) =>
//       prevCartData.map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   };

//   // Calculate the total price for a specific item
//   const calculateTotalPrice = (price: number, quantity: number) => {
//     return price * quantity;
//   };

//   // Calculate the total price for all items in the cart
//   const calculateCartTotal = () => {
//     return cartData.reduce(
//       (acc, item) => acc + calculateTotalPrice(item.price, item.quantity),
//       0
//     );
//   };

//   //remove Cart Item
//   const removeCartItem = (id: number) => {
//     setCartData((prevCartData) =>
//       prevCartData.filter((item) => item.id !== id)
//     );
//   };
//   const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedCountry(event.target.value);
//   };
//   const submitHandler = async (data: any) => {
//     console.log("hello");
//   };
//   return (
//     <div className="container">
//       <div className=" text-center py-20 md:py-40">
//         <h1 className=" text-2xl md:text-4xl font-semibold md:font-medium uppercase">
//           Your Shopping Cart
//         </h1>
//         <p className="text-sm font-normal py-2">
//           <Link href="/">Home</Link> &#x2022; <span>Your Shopping Cart</span>
//         </p>
//       </div>

//       <div className=' flex flex-col md:flex-row gap-8 py-4'>
//         <div className='min-w-full md:min-w-[60%] '>
//           <div className='border '>
//             <div className=' min-w-full hidden md:flex flex-col md:flex-row justify-between items-center bg-slate-100 px-4 py-3'>
//               <div className=' w-full'>
//                 <span className=' pl-12 text-[12px] font-semibold'>PRODUCTS</span>
//               </div>
//               <div className=' w-full flex justify-between items-center text-[12px] font-semibold'>
//                 <p>PRICE</p>
//                 <p>QTY</p>
//                 <p>TOTAL</p>
//               </div>
//             </div>

//             <div className=' flex flex-col'>
//               {
//                 cartData.map((item) => (
//                   <div key={item.id} className='flex flex-col md:flex-row justify-between items-center border gap-8 md:gap-0 p-6'>
//                     <div className=' max-w-full md:w-full flex flex-row gap-4 md:gap-2 items-center'>
//                       <div className='px-4'>
//                         <RiDeleteBin5Line size={18} className=' cursor-pointer' onClick={() => removeCartItem(item.id)} />
//                       </div>

//                       <Image src={item.image} alt={item.title} width={100} height={100} className=' bg-cover ' />
//                       <div className='text-[12px]'>
//                         <p className=' font-semibold'>{item.title}</p>
//                         <p className='font-medium'>Size: {item.size}</p>
//                       </div>
//                     </div>

//                     <div className=' w-full flex justify-between items-center text-sm'>
//                       <p>€{item.price}</p>
//                       <div className="flex border quantity">
//                         {/* Minus button */}
//                         <button onClick={() => decreaseQuantity(item.id)} className="p-2 text-xl text-gray-500">
//                           -
//                         </button>

//                         {/* Quantity input */}
//                         <input
//                           type="number"
//                           value={item.quantity}
//                           onChange={(e) => handleQuantityChange(e, item.id)}
//                           className="text-center w-20 outline-none bg-slate-100"
//                           min="1"
//                           step="1" // Step size for increment/decrement
//                         />

//                         {/* Plus button */}
//                         <button onClick={() => increaseQuantity(item.id)} className="p-2 text-xl text-gray-500">
//                           +
//                         </button>
//                       </div>
//                       <p>€{calculateTotalPrice(item.price, item.quantity)}</p>
//                     </div>
//                   </div>
//                 ))
//               }

//             </div>
//           </div>

//           <div className=' w-full flex flex-row justify-center items-center text-center gap-4 md:gap-8  py-4'>

//             <Link href='/checkouts' className='w-full'>
//               <button className='w-full py-4 bg-slate-200 hover:bg-[#132842] text-black hover:text-white rounded-full text-sm font-semibold'>
//                 Proceed To Checkout
//               </button>
//             </Link>
//             <Link href='/products' className='w-full  py-4 hover:bg-opacity-95 bg-[#132842] text-white rounded-full text-sm font-semibold'>
//               Continue Shopping
//             </Link>

//           </div>
//         </div>

//         <div className='flex flex-col gap-4 min-w-full md:min-w-[40%] '>
//           <Form submitHandler={submitHandler}>
//             <Textarea
//               name="promocode"
//               id="promocode"
//               placeholder="COMMANTS HERE..."
//               rows={6}

//               className="w-full text-sm outline-none text-black border p-2"
//             />
//             <div className="relative">
//               <FormInput
//                 name="promocode"
//                 id="promocode"
//                 placeholder="PROMO CODE"
//                 type="text"
//                 className=" px-4 h-14 text-sm outline-none text-black border"
//               />
//               <button className="absolute top-1 right-0 text-[#132842]  rounded-full h-12 w-40 flex justify-center items-center">
//                 Apply
//               </button>
//             </div>
//           </Form>
//           <div className='border'>

//             <p className='px-6 py-3 text-[12px] font-semibold uppercase'>There are {cartData.length} items in your cart</p>
//             <div className='flex flex-col gap-2 bg-slate-100 px-6 py-4'>
//               <p className=' flex flex-row justify-between items-center '><span className='text-lg font-semibold'>Total:</span><span className='text-xl font-bold'>€{calculateCartTotal()}</span></p>
//               {/* <p className=' flex flex-row justify-between items-center'><span className='text-lg font-semibold'>Shipping :</span><span>Shipping & taxes calculated at checkout</span></p>
//                             <p>Congratulations! You&apos;ve got free shipping!</p>

//                             <p>Free shipping for any orders above €150,00</p> */}
//             </div>
//           </div>

//         </div>

//       </div>
//     </div>

//   );
// };

// export default CartPage;

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiDeleteBin5Line } from "react-icons/ri";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import { Textarea } from "@headlessui/react";
import useProductSelection from "@/hooks/useProductSelection";

const CartPage: React.FC = () => {
  const [cartData, setCartData] = useState<any[]>([]);
  const { removeFromCart } = useProductSelection({ product: {} as any });

  // Retrieve cart data from local storage on component mount
  useEffect(() => {
    const cartFromLocalStorage = localStorage.getItem("cart");
    if (cartFromLocalStorage) {
      setCartData(JSON.parse(cartFromLocalStorage));
    }
  }, []);

  // Calculate the total price of items in the cart
  const calculateCartTotal = () => {
    return cartData
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  // Handle form submission (example placeholder function)
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic
  };
  // Handle delete item
  const handleDeleteItem = (item) => {
    // Check if variantId exists, if not, use productId
    const idToUse = item.variantId ? item.variantId : item.productId;

    // Remove from cart based on the id (variantId or productId)
    const updatedCart = cartData.filter((cartItem) => {
      if (cartItem.variantId) {
        return cartItem.variantId !== idToUse;
      } else {
        return cartItem.productId !== idToUse;
      }
    });

    // Set the updated cart data
    setCartData(updatedCart);

    // Save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
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
              {cartData.map((item) => (
                <div
                  key={item._id}
                  className="flex flex-col md:flex-row justify-between items-center border gap-8 md:gap-0 p-6"
                >
                  <div className="max-w-full md:w-full flex flex-row gap-4 md:gap-2 items-center">
                    <div className="px-4">
                      <RiDeleteBin5Line
                        size={18}
                        onClick={() => handleDeleteItem(item)}
                        className="cursor-pointer"
                      />
                    </div>

                    <Image
                      src={item.selectedImage}
                      alt={item.title}
                      width={100}
                      height={100}
                      className="bg-cover"
                    />
                    <div className="text-[12px]">
                      <p className="font-semibold">{item.title}</p>
                      <p className="font-medium">Size: {item.size}</p>
                    </div>
                  </div>

                  <div className="w-full flex justify-between items-center text-sm">
                    <p>€{item.price}</p>
                    <div className="flex border quantity">
                      <button className="p-2 text-xl text-gray-500">-</button>

                      <input
                        type="number"
                        value={item.quantity}
                        className="text-center w-20 outline-none bg-slate-100"
                        min="1"
                        step="1" // Step size for increment/decrement
                      />

                      <button className="p-2 text-xl text-gray-500">+</button>
                    </div>
                    <p>€{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full flex flex-row justify-center items-center text-center gap-4 md:gap-8 py-4">
            <Link href="/checkouts" className="w-full">
              <button className="w-full py-4 bg-slate-200 hover:bg-[#132842] text-black hover:text-white rounded-full text-sm font-semibold">
                Proceed To Checkout
              </button>
            </Link>
            <Link
              href="/products"
              className="w-full py-4 hover:bg-opacity-95 bg-[#132842] text-white rounded-full text-sm font-semibold"
            >
              Continue Shopping
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 min-w-full md:min-w-[40%]">
          <Form submitHandler={submitHandler}>
            <Textarea
              name="promocode"
              id="promocode"
              placeholder="COMMENTS HERE..."
              rows={6}
              className="w-full text-sm outline-none text-black border p-2"
            />
            <div className="relative">
              <FormInput
                name="promocode"
                id="promocode"
                placeholder="PROMO CODE"
                type="text"
                className="px-4 h-14 text-sm outline-none text-black border"
              />
              <button className="absolute top-1 right-0 text-[#132842] rounded-full h-12 w-40 flex justify-center items-center">
                Apply
              </button>
            </div>
          </Form>
          <div className="border">
            <p className="px-6 py-3 text-[12px] font-semibold uppercase">
              There are {cartData.length} items in your cart
            </p>
            <div className="flex flex-col gap-2 bg-slate-100 px-6 py-4">
              <p className="flex flex-row justify-between items-center ">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-xl font-bold">
                  €{calculateCartTotal()}
                </span>
              </p>
              {/* Optional: Additional details like shipping and offers */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
