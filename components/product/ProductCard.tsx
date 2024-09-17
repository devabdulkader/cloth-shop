"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FiEye } from "react-icons/fi";
import { motion } from "framer-motion";
import IconButton from "../common/IconButton";
import { IAddToItem, IProduct } from "@/types/product";
import Link from "next/link";
import { BiStar } from "react-icons/bi";
import QuickViewModal from "../card/QuickViewModel";
import { VscClose } from "react-icons/vsc";
// import { BUTTON_ANIMATION_CLASSES, ONHOVER_DARK_BG } from "@/lib/constant";
import CartModal from "../common/CartModal";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/lib/store/features/cart/cartSlice";
import { RootState } from "@/lib/store/store";
import {
  addToWishlist,
  removeFromWishlist,
  selectIsInWishlist,
} from "@/lib/store/features/wishlist/wishlistSlice";

interface ProductCardProps {
  product: IProduct;
  key: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, key }) => {
  const dispatch = useDispatch();

  const items = [
    {
      id: product._id,
      url: product.url,
      alt: product.alt,
      color: product.color,
    },
    ...product.productVariants.map((variant) => ({
      id: variant._id,
      url: variant.url,
      alt: variant.alt,
      color: variant.color,
    })),
  ];

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [selectedSize, setSelectedSize] = useState<string | null>(
    product.sizes.length > 0 ? product.sizes[0].size : null
  );
  const [selectedColor, setSelectedColor] = useState<string | null>(
    items[0].color
  );
  const [selectedImage, setSelectedImage] = useState<string | null>(
    items[0].url
  );
  const [selectedId, setSelectedId] = useState<string | null>(items[0].id);

  const [productItem, setProductItem] = useState<IAddToItem>({
    _id: product._id,
    title: product.title,
    description: product.description,
    url: product.url, // Assuming this is the general product image
    alt: product.alt,
    color: product.color,
    sku: product.sku,
    productCategory: product.productCategory,
    tags: product.tags,
    productBrand: product.productBrand,
    selectedProductId: selectedId || product._id,
    selectedProductUrl: selectedImage || product.url, // If selectedImage is the specific variant
    selectedProductColor: selectedColor || product.color, // Store selected color
    selectedProductSize: selectedSize || product.sizes[0].size, // Store selected size
    gender: product.gender,
    basePrice: product.basePrice,
    buyPrice: product.buyPrice,
    otherCost: product.otherCost, // Optional, can be undefined
    discountPrice: product.discountPrice, // Optional, can be undefined
    sizes: product.sizes, // Assuming this is an array of size options
    deliveryMethods: "", // Placeholder, can be updated with actual delivery methods
    sellingPrice: product.sellingPrice,
    productVariants: product.productVariants, // Assuming it's an array of variants
    quantity: 1, // Default to 1
  });

  useEffect(() => {
    const defaultSize = product.sizes?.[0]?.size || ""; // Safely access product.sizes[0].size

    setProductItem((prevProductItem) => ({
      ...prevProductItem,
      selectedProductUrl: selectedImage || product.url,
      selectedProductColor: selectedColor || product.color,
      selectedProductSize: selectedSize || defaultSize,
    }));
  }, [
    selectedSize,
    selectedColor,
    selectedImage,
    product.url,
    product.color,
    product.sizes,
  ]);

  const [showQuickView, setShowQuickView] = useState(false);
  const [showQuickAdd, setShowQuickAdd] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [hoveredProductkey, setHoveredProductkey] = useState<number | null>(
    null
  );
  const [blinkStartKey, setBlinkStartKey] = useState<number | null>(null);

  const Icons = [
    { icon: <FaHeart />, tooltip: "Add to Wishlist" },
    { icon: <MdOutlineShoppingBag />, tooltip: "Quick Add" },
    { icon: <FiEye />, tooltip: "Quick View" },
  ];

  const handleMouseEnter = (key: number) => {
    setHoveredProductkey(key);
    setBlinkStartKey(key);

    setTimeout(() => {
      setBlinkStartKey(null);
    }, 500);
  };

  const handleMouseLeave = () => {
    setHoveredProductkey(null);
    setBlinkStartKey(null);
  };

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

  const handleColorSelection = (color: string) => {
    setSelectedColor(color);
    const selectedItem = items.find((item) => item.color === color);
    if (selectedItem) {
      setSelectedImage(selectedItem.url);
      setSelectedId(selectedItem.id);
    }
  };
  const isInWishlist = useSelector((state: RootState) =>
    selectIsInWishlist(
      state,
      product._id,
      selectedColor || product.color,
      selectedSize || product.sizes[0]?.size || ""
    )
  );
  const handleWishlistToggle = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(productItem.selectedProductId || ""));
      console.log("product id", productItem.selectedProductId);
    } else {
      dispatch(addToWishlist(productItem));
    }
  };
  const openQuickView = () => setShowQuickView(true);
  const closeQuickView = () => setShowQuickView(false);
  const openQuickAdd = () => setShowQuickAdd(true);
  const closeQuickAdd = () => setShowQuickAdd(false);
  const handleModalClose = () => {
    setShowCartModal(false);
    setShowQuickAdd(false);
  };
  const handleAddToCart = () => {
    dispatch(addToCart(productItem));
    console.log(productItem);
    closeQuickAdd();
    setShowCartModal(true);
    toast.success("Product added to cart!");
  };

  return (
    <div
      className="relative w-full sm:w-[350px]"
      onMouseEnter={() => handleMouseEnter(key)}
      onMouseLeave={handleMouseLeave}
    >
      {showCartModal && <CartModal onClose={handleModalClose} />}

      <div className="relative overflow-hidden h-[420px] w-full">
        <Link
          href={`/products/${product._id}`}
          className="relative place-self-center"
        >
          <Image
            src={selectedImage || product.url}
            alt={product.alt}
            height={300}
            width={300}
            className="rounded-2xl transition-transform duration-300 h-full w-full object-cover"
          />

          <div
            className={`absolute inset-0 bg-white transition-opacity duration-300 ${
              blinkStartKey === key ? "opacity-30" : "opacity-0"
            }`}
          />
        </Link>
        {showQuickAdd && (
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="bg-black bg-opacity-50 backdrop-blur-md p-4 z-10 rounded-lg shadow-lg relative">
              <div className="flex justify-center items-center mb-4">
                <h3 className="text-lg font-bold text-white text-center">
                  Select Size
                </h3>
                <button
                  onClick={closeQuickAdd}
                  className="text-gray-300 absolute top-3 right-3"
                >
                  <VscClose className="text-2xl" />
                </button>
              </div>
              <div className="flex justify-center gap-2 mb-4">
                {product.sizes.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleSizeClick(item.size)}
                    className={`border border-gray-300 rounded-md px-4 py-2 transition-colors duration-300 ${
                      selectedSize === item.size
                        ? "bg-slate-800 text-white"
                        : "text-gray-400 hover:bg-gray-600 hover:text-white"
                    }`}
                  >
                    {item.size}
                  </button>
                ))}
              </div>
              <button
                className="bg-white text-black w-full py-2 rounded-md"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col justify-center items-center">
        <h2 className="text-lg font-bold mb-2">{product.title}</h2>

        <div className="flex items-center mb-2">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={`text-yellow-500`}>
              <BiStar className={`text-yellow-500 text-2xl`} />
            </span>
          ))}
        </div>
        <p className="text-xl font-semibold mb-2">$ {product.basePrice}</p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            hoveredProductkey === key
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex gap-2 mt-2"
        >
          {items.map((item, i) => (
            <div
              key={i}
              className={`relative hover:border-gray-400 hover:border hover:p-1 bg-white h-8 w-12 cursor-pointer rounded-md transition-all duration-100 ${
                selectedColor === item.color
                  ? "border border-gray-400 p-1"
                  : "border border-gray-400"
              }`}
              onClick={() => handleColorSelection(item.color)}
            >
              <div
                className="h-full w-full rounded-md"
                style={{ backgroundColor: item.color }}
              ></div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={
            hoveredProductkey === key
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: -20 }
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute top-3 right-3 flex flex-col gap-2"
        >
          <IconButton
            icon={<FaHeart />}
            tooltip={
              mounted
                ? isInWishlist
                  ? "Remove from Wishlist"
                  : "Add to Wishlist"
                : "Add to Wishlist"
            }
            onClick={handleWishlistToggle}
          />

          <IconButton
            icon={Icons[1].icon}
            tooltip={Icons[1].tooltip}
            onClick={openQuickAdd} // Open Quick Add modal on click
          />
          <IconButton
            className="hidden md:flex"
            icon={Icons[2].icon}
            tooltip={Icons[2].tooltip}
            onClick={openQuickView}
          />
        </motion.div>
      </div>
      {showQuickView && (
        <QuickViewModal product={productItem} onClose={closeQuickView} />
      )}
    </div>
  );
};

export default ProductCard;
