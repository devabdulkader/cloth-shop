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
import { IProduct } from "@/types/product";
import useProductSelection from "@/hooks/useProductSelection";

interface Tag {
  title: string;
  href: string;
}

const tags: Tag[] = [
  { title: "Men", href: "/men" },
  { title: "Women", href: "/women" },
  { title: "Shoes", href: "/shoes" },
  { title: "Cloth", href: "/cloth" },
  // Add more tags as needed
];

const CartSideBar: React.FC = () => {
  const [cartData, setCartData] = useState<IProduct[]>([]);
  const { removeFromCart } = useProductSelection({ product: {} as any });

  // Fetch cart data from localStorage when component mounts
  useEffect(() => {
    const cartFromLocalStorage = localStorage.getItem("cart");
    if (cartFromLocalStorage) {
      const parsedCartData = JSON.parse(cartFromLocalStorage);

      // Log the cart data to verify the structure
      console.log("Cart Data from Local Storage:", parsedCartData);

      setCartData(parsedCartData);
    } else {
      console.log("No cart data found in localStorage.");
    }
  }, []);

  // Handle quantity change
  const handleQuantityChange = (id: string, newQuantity: number) => {
    const updatedCart = cartData.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartData(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Handle delete item
  const handleDeleteItem = (id: string) => {
    removeFromCart(id);
    console.log("id of the item", id);
    const updatedCart = cartData.filter((item) => item.id !== id);

    setCartData(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
  };

  const dispatch = useDispatch();
  const isCartSidebarOpen = useSelector(
    (state: RootState) => state.cartSidebar.isCartSidebarOpen
  );

  const handleCartClose = () => {
    dispatch(closeCartSidebar());
  };

  return (
    <>
      {/* Background Overlay */}
      {isCartSidebarOpen && <CustomBackDrop onClose={handleCartClose} />}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 z-layer-2 bg-white h-full w-96 px-8 shadow-lg transform transition-transform duration-500 ${
          isCartSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <main className="relative z-20 h-full">
          <div className="flex items-center space-x-5 py-5 border-b">
            <h3>My Cart</h3>
            <div className="flex relative bg-black text-white py-2 px-3 rounded-md">
              <span className="text-sm flex items-center justify-center ">
                {cartData.length} Items
              </span>
              <RiPlayLargeFill className="rotate-180 absolute -left-3 text-2xl text-black" />
            </div>

            <div onClick={handleCartClose} className="absolute right-0">
              <CustomCrossBar />
            </div>
          </div>

          {/* Sidebar Items */}
          {cartData.length === 0 ? (
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
                {cartData.map((item) => (
                  <div
                    key={item.id}
                    className="relative flex flex-col md:flex-row justify-between items-center border rounded-md shadow-xl px-2 md:px-6 py-2 md:py-4"
                  >
                    <button
                      onClick={() => handleDeleteItem(item.id)}
                      className="absolute top-1/2 left-0 bg-gray-400 rounded-full p-1"
                    >
                      <RiDeleteBin5Fill size={16} />
                    </button>
                    <div className="flex flex-row items-center gap-4">
                      <Image
                        src={item.selectedImage}
                        width={70}
                        height={50}
                        alt={item.title}
                        className="w-20 h-28 py-2"
                      />
                      <div className="flex flex-col text-sm font-semibold">
                        <div>
                          <span>{item.title}</span>
                        </div>
                        <div>
                          <span>{item.size}</span>
                        </div>
                        <span className="text-md font-semibold">
                          ${item.basePrice}
                        </span>
                        <div className="flex flex-row gap-4 md:gap-6 items-center">
                          <button
                            onClick={() =>
                              handleQuantityChange(
                                item.id,
                                Math.max(item.quantity - 1, 1)
                              )
                            }
                          >
                            -
                          </button>
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) =>
                              handleQuantityChange(
                                item.id,
                                parseInt(e.target.value) || 1
                              )
                            }
                            className="text-center w-8 outline-none"
                            min="1"
                          />
                          <button
                            onClick={() =>
                              handleQuantityChange(item.id, item.quantity + 1)
                            }
                          >
                            +
                          </button>
                        </div>
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
                    {cartData.reduce(
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
