// 'use client'
// import Image from 'next/image'
// import Link from 'next/link'
// import React, { useState } from 'react'
// import Img from "@/public/instagram/insta01.jpeg"
// import { RiDeleteBin5Line } from "react-icons/ri";
// interface Cart {
//     id:number,
//     title:string,
//     size:string,
//     quantity:number,
//     price:number,
//     image:string,
// }
// const CartPage:React.FC = () => {
//     const cartData:Cart[] = [
//         {
//             id:1,
//             title:"Cropped Blazer",
//             size:"S",
//             quantity:2,
//             price:350,
//             image:Img.src
//         },
//         {
//             id:2,
//             title:"Cropped Blazer",
//             size:"L",
//             quantity:5,
//             price:500,
//             image:Img.src
//         }
//     ]
//     const [quantity, setQuantity] = useState<number | "">(cartData[0].quantity); // Manage quantity state, allowing for empty string
//     const [totalPrice, setTotalPrice] = useState<number>(cartData[0].price);
//     // Function to handle quantity change
//     const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const value = e.target.value;
//         const numericValue = Number(value);
//         if (value === "" || (!isNaN(numericValue) && numericValue > 0)) {
//             setQuantity(value === "" ? "" : numericValue);
//         }
//     };
//     // Function to decrease quantity
//     const decreaseQuantity = () => {
//         if (quantity !== "" && quantity > 1) {
//             setQuantity(quantity - 1);
//             setTotalPrice(totalPrice - cartData[0].price)
//         }
//     };
//     // Function to increase quantity
//     const increaseQuantity = () => {
//         if (quantity === "" || quantity > 0) {
//             setQuantity((quantity === "" ? 0 : quantity) + 1);
//             setTotalPrice(cartData[0].price * (Number(quantity) + 1))
//         }
//     };
//     return (
//         <div className='container'>
//             <div className=' text-center py-20 md:py-40'>
//                 <h1 className=' text-2xl md:text-4xl font-semibold md:font-medium uppercase'>Your Shopping Cart</h1>
//                 <p className='text-sm font-normal py-2'><Link href="/" >Home</Link> &#x2022; <span>Your Shopping Cart</span></p>
//             </div>
//             <div className=' flex flex-col md:flex-row gap-8 py-4'>
//                 <div className='min-w-full md:min-w-[60%] border'>
//                     <div className=' min-w-full hidden md:flex flex-col md:flex-row justify-between items-center bg-slate-100  px-6 py-3'>
//                         <div className=' w-full'>
//                             <span className=' pl-12 text-[12px] font-semibold'>PRODUCTS</span>
//                         </div>
//                         <div className=' w-full flex justify-between items-center text-[12px] font-semibold'>
//                             <p>PRICE</p>
//                             <p>QTY</p>
//                             <p>TOTAL</p>
//                         </div>
//                     </div>
//                     <div className=' flex flex-col'>
//                         {
//                             cartData.map((item,index)=>(
//                                 <div className='flex flex-col md:flex-row justify-between items-center border gap-8 md:gap-0 p-6'>
//                             <div className=' max-w-full md:w-full flex flex-row gap-4 md:gap-2 items-center'>
//                                 <div className='px-4'>
//                                     <RiDeleteBin5Line size={18} className=' cursor-pointer' />
//                                 </div>

//                                 <Image src={item.image} alt={item.title} width={100} height={100} className=' bg-cover ' />
//                                 <div className='text-[12px]'>
//                                     <p className=' font-semibold'>{item.title}</p>
//                                     <p className='font-medium'>Size: {item.size}</p>
//                                 </div>
//                             </div>
//                             <div className=' w-full flex justify-between items-center text-sm'>
//                                 <p> €{item.price}</p>
//                                 <div className="flex border quantity">
//                                     {/* Minus button */}
//                                     <button onClick={decreaseQuantity} className="p-2 text-xl text-gray-500">
//                                         -
//                                     </button>

//                                     {/* Quantity input */}
//                                     <input
//                                         type="number"
//                                         value={item.quantity}
//                                         onChange={handleQuantityChange}
//                                         className="text-center w-20 outline-none bg-slate-100"
//                                         min="1"
//                                         step="1" // Step size for increment/decrement
//                                     />

//                                     {/* Plus button */}
//                                     <button onClick={increaseQuantity} className="p-2 text-xl text-gray-500">
//                                         +
//                                     </button>
//                                 </div>
//                                 <p>€{totalPrice}</p>
//                             </div>
//                         </div>
//                             ))
//                         }
//                     </div>
//                     {/* <table className="table-auto w-full">
//         <thead className="bg-gray-300 text-black text-lg font-semibold">
//           <tr>
//             <th className="py-2 px-4 text-start">PRODCUTS</th>
//             <th className="py-2 px-4 text-start">PRICE</th>
//             <th className="py-2 px-4 text-start">QTY</th>
//             <th className="py-2 px-4 text-start">TOTAL</th>
//           </tr>
//         </thead>
//         <tbody>
//             <tr>
//                 <td>
//                     <span>delete</span>
//                     <Image src="" alt=""/>
//                 </td>
//                 <td>sdfsd</td>
//                 <td>sdfsd</td>
//                 <td>sdfsd</td>
//             </tr>
//         </tbody>
//         </table> */}
//                 </div>
//                 <div className='min-w-full md:min-w-[40%]  border'>
//                     <p className='px-6 py-3 text-[12px] font-semibold uppercase'>There are 14 items in your cart</p>
//                     <div className='flex flex-col gap-2 bg-slate-100 px-6 py-4'>
//                         <p className=' flex flex-row justify-between items-center '><span className='text-lg font-semibold'>Total:</span><span className='text-xl font-bold'>€{totalPrice}</span></p>
//                         <p className=' flex flex-row justify-between items-center'><span className='text-lg font-semibold'>Shipping :</span><span>Shipping & taxes calculated at checkout</span></p>
//                         <p>Congratulations! You've got free shipping!</p>

//                         <p>Free shipping for any orders above €150,00</p>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default CartPage








'use client'
import { Description, Field, Label, Select } from '@headlessui/react'
import clsx from 'clsx'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Img from "@/public/instagram/insta01.jpeg"
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
interface Cart {
    id: number,
    title: string,
    size: string,
    quantity: number,
    price: number,
    image: string,
}

const CartPage: React.FC = () => {
    const [cartData, setCartData] = useState<Cart[]>([
        {
            id: 1,
            title: "Cropped Blazer",
            size: "S",
            quantity: 2,
            price: 350,
            image: Img.src
        },
        {
            id: 2,
            title: "Cropped Blazer",
            size: "L",
            quantity: 5,
            price: 500,
            image: Img.src
        }
    ]);

    // Function to handle quantity change for a specific item
    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
        const value = e.target.value;
        // Ensure the value is a valid number or empty string
        const numericValue = value === "" ? "" : Number(value);
        // Update the cart data
        setCartData(prevCartData =>
            prevCartData.map(item =>
                item.id === id
                    ? {
                        ...item,
                        quantity: numericValue === "" ? 0 : numericValue // Set quantity to 0 if the input is cleared
                    }
                    : item
            )
        );
    };


    // Function to decrease quantity for a specific item
    const decreaseQuantity = (id: number) => {
        setCartData(prevCartData =>
            prevCartData.map(item =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    // Function to increase quantity for a specific item
    const increaseQuantity = (id: number) => {
        setCartData(prevCartData =>
            prevCartData.map(item =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    // Calculate the total price for a specific item
    const calculateTotalPrice = (price: number, quantity: number) => {
        return price * quantity;
    };

    // Calculate the total price for all items in the cart
    const calculateCartTotal = () => {
        return cartData.reduce((acc, item) => acc + calculateTotalPrice(item.price, item.quantity), 0);
    };

    //
    const removeCartItem=(id:number)=>{

        setCartData(prevCartData =>
            prevCartData.map(item =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    }

    return (
        <div className='container'>
            <div className=' text-center py-20 md:py-40'>
                <h1 className=' text-2xl md:text-4xl font-semibold md:font-medium uppercase'>Your Shopping Cart</h1>
                <p className='text-sm font-normal py-2'><Link href="/" >Home</Link> &#x2022; <span>Your Shopping Cart</span></p>
            </div>

            <div className=' flex flex-col md:flex-row gap-8 py-4'>
                <div className='min-w-full md:min-w-[60%] '>
                    <div className='border'>
                        <div className=' min-w-full hidden md:flex flex-col md:flex-row justify-between items-center bg-slate-100  px-6 py-3'>
                            <div className=' w-full'>
                                <span className=' pl-12 text-[12px] font-semibold'>PRODUCTS</span>
                            </div>
                            <div className=' w-full flex justify-between items-center text-[12px] font-semibold'>
                                <p>PRICE</p>
                                <p>QTY</p>
                                <p>TOTAL</p>
                            </div>
                        </div>

                        <div className=' flex flex-col'>
                            {
                                cartData.map((item) => (
                                    <div key={item.id} className='flex flex-col md:flex-row justify-between items-center border gap-8 md:gap-0 p-6'>
                                        <div className=' max-w-full md:w-full flex flex-row gap-4 md:gap-2 items-center'>
                                            <div className='px-4'>
                                                <RiDeleteBin5Line size={18} className=' cursor-pointer' onClick={()=>removeCartItem(item.id)} />
                                            </div>

                                            <Image src={item.image} alt={item.title} width={100} height={100} className=' bg-cover ' />
                                            <div className='text-[12px]'>
                                                <p className=' font-semibold'>{item.title}</p>
                                                <p className='font-medium'>Size: {item.size}</p>
                                            </div>
                                        </div>

                                        <div className=' w-full flex justify-between items-center text-sm'>
                                            <p>€{item.price}</p>
                                            <div className="flex border quantity">
                                                {/* Minus button */}
                                                <button onClick={() => decreaseQuantity(item.id)} className="p-2 text-xl text-gray-500">
                                                    -
                                                </button>

                                                {/* Quantity input */}
                                                <input
                                                    type="number"
                                                    value={item.quantity}
                                                    onChange={(e) => handleQuantityChange(e, item.id)}
                                                    className="text-center w-20 outline-none bg-slate-100"
                                                    min="1"
                                                    step="1" // Step size for increment/decrement
                                                />

                                                {/* Plus button */}
                                                <button onClick={() => increaseQuantity(item.id)} className="p-2 text-xl text-gray-500">
                                                    +
                                                </button>
                                            </div>
                                            <p>€{calculateTotalPrice(item.price, item.quantity)}</p>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>

                    <div className=' w-full flex flex-row justify-center items-center text-center gap-4 md:gap-8  py-4'>
                        <button className='w-full py-4 bg-slate-200 hover:bg-[#132842] text-black hover:text-white rounded-full text-sm font-semibold'>
                            Proceed To Checkout
                        </button>
                        <Link href='/products' className='w-full  py-4 hover:bg-opacity-95 bg-[#132842] text-white rounded-full text-sm font-semibold'>
                            Continue Shopping
                        </Link>
                    </div>

                </div>

                <div className='min-w-full md:min-w-[40%] '>
                    <div className='border'>
                    <p className='px-6 py-3 text-[12px] font-semibold uppercase'>There are {cartData.length} items in your cart</p>
                    <div className='flex flex-col gap-2 bg-slate-100 px-6 py-4'>
                        <p className=' flex flex-row justify-between items-center '><span className='text-lg font-semibold'>Total:</span><span className='text-xl font-bold'>€{calculateCartTotal()}</span></p>
                        <p className=' flex flex-row justify-between items-center'><span className='text-lg font-semibold'>Shipping :</span><span>Shipping & taxes calculated at checkout</span></p>
                        <p>Congratulations! You've got free shipping!</p>

                        <p>Free shipping for any orders above €150,00</p>
                    </div>
                    </div>

                    <div className="">
                        <Select
                            className={clsx(
                                'mt-3 block w-full appearance-none border-none bg-slate-200 py-1.5 px-3 text-sm/6 text-black',
                                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black',
                               
                            )}
                        >
                            <option value="Bangladesh" >Bangladesh</option>
                            <option value="Uk">Uk</option>
                            <option value="Canada">Canada</option>
                            <option value="Rassia">Rassia</option>
                        </Select>
                        <IoIosArrowDown
                            className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-black"
                            aria-hidden="true"
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CartPage
