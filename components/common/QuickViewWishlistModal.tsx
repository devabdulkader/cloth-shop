



'use client'
import React, { useState } from 'react'
import { MdOutlineClose } from "react-icons/md";
import WishlistModalSlider from './WishlistModalSlider';
import Link from 'next/link';

interface Wishlist {
  id: number,
  title: string,
  date: string,
  quantity: number,
  price: number,
  image: string,
  category: string[],
  sku: string,
  sizes: string[],
}

interface QuickViewWishlistModalProps {
  onClose: () => void;
  wishlistItem: Wishlist | undefined;
}

const QuickViewWishlistModal: React.FC<QuickViewWishlistModalProps> = ({ onClose, wishlistItem }) => {
  if (!wishlistItem) return null;
  const [selectedSize, setSelectedSize] = useState<string>(wishlistItem.sizes[0]);
  const [quantity, setQuantity] = useState<number>(wishlistItem.quantity);
  //increase quantity
  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };
  //decrease quantity
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };
  //handle quantity
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value >= 1) {
      setQuantity(value);
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/50 backdrop-blur-sm">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 max-h-[90vh] overflow-auto">
          <div className="w-full flex flex-col md:flex-row justify-between gap-2  bg-white shadow-md  rounded-md  overflow-hidden relative p-4">

            <div className='min-w-full md:min-w-[48%]'>
              <WishlistModalSlider/>
            </div>

            <div className='min-w-full flex flex-col gap-2 md:min-w-[48%] '>
              <p className='text-xl font-bold'>{wishlistItem.title}</p>
              <p className=' text-xl font-semibold'>${wishlistItem.price}</p>
              <p className='flex flex-row gap-8 text-sm font-normal'><span>SKU:</span> <span>{wishlistItem.sku}</span></p>
              <p className='flex flex-row gap-8 text-sm font-normal'><span>Category:</span> <span>{wishlistItem.category.join(" ")}</span></p>
          
              <div className="mb-4">
                <strong className="text-gray-800 text-md ">
                  Size: {selectedSize || "Select a size"}
                </strong>
                <div className="flex space-x-2 mt-5">
                  {wishlistItem.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`border border-gray-300 rounded text-sm px-4 py-2 text-gray-700 ${selectedSize === size ? "bg-black text-white" : "bg-gray-200"
                        }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div className=' flex flex-col  gap-2'>
                <p className='pb-2 text-sm font-medium'>Quantity:</p>
                <div className=' w-full flex flex-row gap-2'>
                <div className=' flex flex-row border rounded-full'>
                  <button onClick={decreaseQuantity} className="p-2 text-xl text-gray-500">
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="text-center w-10 outline-none  "
                    min="1"
                    step="1"
                  />
                  <button onClick={increaseQuantity} className="p-2 text-xl text-gray-500">
                    +
                  </button>
                </div>
                <button className='w-full py-4 bg-slate-200 border shadow hover:bg-[#132842] text-black hover:text-white rounded-full text-sm font-semibold'>
                 FRE-ORDER
                </button>
              </div>
                </div>
               
                <Link href="/checkouts">
              <button className='w-full py-4 border shadow hover:bg-[#132842] text-black hover:text-white rounded-full text-sm font-semibold'>
               BUY IT NOW
              </button>
              </Link>
            </div>

          </div>

          <div onClick={onClose} className='absolute top-4 right-4 text-black p-3 bg-slate-100 shadow-xl rounded-full cursor-pointer'>
            <MdOutlineClose size={25} />
          </div>
        </div>
      </div>
    </>
  )
}

export default QuickViewWishlistModal;


