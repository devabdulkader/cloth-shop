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
import { IProduct, IStoreItem } from "@/types/product";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FaTrashAlt } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import { getAllProducts } from "@/lib/service/getAllProducts";
import { MdOutlineShoppingBag } from "react-icons/md";

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
  const cartItems = useSelector(
    (state: RootState) => state.cart.cartItems
  ) as IStoreItem[];

  const handleIncreaseQuantity = (id: string) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecreaseQuantity = (id: string) => {
    dispatch(decrementQuantity(id));
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const [products, setProducts] = useState<IProduct[]>([]); // State to hold products

  useEffect(() => {
    // Fetch products on component mount
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getAllProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array to ensure it runs once on mount

  return (
    <div className="fixed top-0 left-0 z-layer-5 w-screen h-screen z-50 bg-black/50 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl  max-h-[90vh] overflow-auto">
        <div className="w-full flex flex-col justify-between gap-2 bg-white shadow-md rounded-md overflow-hidden relative p-5">
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
            <div className="w-full flex flex-col lg:flex-row gap-4 md:gap-10">
              <div className="flex flex-col gap-4 w-full md:min-w-[60%] h-[200px] overflow-y-auto custom-scrollbar px-3">
                {cartItems?.map((item) => (
                  <div
                    key={item._id}
                    className="relative flex flex-col md:flex-row justify-between items-center border rounded-md shadow-xl px-2 md:px-6 py-2 md:py-4"
                  >
                    <button
                      onClick={() => handleRemoveItem(item.uuid)}
                      className="absolute top-1/2 -left-3 bg-gray-200 rounded-full p-1 transform -translate-y-1/2"
                      >
                      <RiDeleteBin5Fill size={16} className="text-gray-500" />
                    </button>
                    <div className="flex flex-row items-center gap-4">
                      <Image
                        src={item.selectedProductUrl}
                        width={70}
                        height={50}
                        alt={item.title}
                        className="w-20 h-28 py-2"
                      />
                      <div className="flex flex-col text-sm font-semibold">
                        <span>{item.title}</span>
                        <span>{item.selectedProductSize}</span>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4 md:gap-6 items-center">
                      <span className="text-md font-semibold">
                        ${item.basePrice}
                      </span>
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
                      </div>
                      <strong>$ {item.basePrice * item.quantity}</strong>
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

          <div>
            <div className="py-5">
              <h3 className="font-bold text-lg">
                You may also like these products
              </h3>
            </div>

            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              breakpoints={{
                // Tailwind sm: ≥ 640px
                640: {
                  slidesPerView: 2, // Show 2 slides on small screens
                },
                // Tailwind md: ≥ 768px
                768: {
                  slidesPerView: 3, // Show 3 slides on medium screens
                },
                // Tailwind lg: ≥ 1024px
              }}
              className="mySwiper px-2"
            >
              {products.map((product) => (
                <SwiperSlide key={product._id}>
                  <div className="flex items-center h-32  justify-between border border-gray-300 rounded-lg shadow-md">
                    {/* First Column: Product Image */}
                    <div className="w-1/3">
                      <Image
                        src={product.url}
                        alt={product.title}
                        height={300}
                        width={300}
                        className="w-full  h-auto object-cover"
                      />
                    </div>

                    {/* Second Column: Title and Price */}
                    <div className="w-auto flex flex-col justify-center items-start px-2">
                      <h4 className="text-sm font-semibold">{product.title}</h4>
                      <p className="text-sm text-gray-500">
                        {product.basePrice}
                      </p>
                    </div>

                    {/* Third Column: Delete Icon */}
                    <div className=" flex justify-end px-2">
                      <button className="bg-gray-200 rounded-full size-8 flex justify-center items-center p-1">
                        <MdOutlineShoppingBag
                          size={16}
                          className="text-gray-600"
                        />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
