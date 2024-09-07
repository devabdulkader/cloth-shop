"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FiEye } from "react-icons/fi";
import { motion } from "framer-motion";
import IconButton from "../common/IconButton";
import { IProduct } from "@/types/product";
import Link from "next/link";
import { BiStar } from "react-icons/bi";
import QuickViewModal from "../card/QuickViewModel";
import { VscClose } from "react-icons/vsc";
import useProductSelection from "@/hooks/useProductSelection";
import { BUTTON_ANIMATION_CLASSES, ONHOVER_DARK_BG } from "@/lib/constant";
import CartModal from "../common/CartModal";
import { toast, ToastContainer } from "react-toastify";

interface ProductCardProps {
  product: IProduct;
  key: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, key }) => {
  const {
    selectedSize,
    handleSizeChange,
    addToCart,
    setSelectedImage,
    selectedVariantId,
  } = useProductSelection({
    product,
  });
  const [showQuickView, setShowQuickView] = useState(false);
  const [showQuickAdd, setShowQuickAdd] = useState(false); // State to control the Quick Add modal
  const [showCartModal, setShowCartModal] = useState(false);
  const [hoveredProductkey, setHoveredProductkey] = useState<number | null>(
    null
  );
  const [blinkStartkey, setBlinkStartkey] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>(
    product.productVariants && product.productVariants.length > 0
      ? product.productVariants[0].color
      : ""
  );

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    let interval: NodeJS.Timeout | null = null;

    if (hoveredProductkey !== null) {
      setBlinkStartkey(hoveredProductkey);

      timer = setTimeout(() => {
        setBlinkStartkey(null);
      }, 500);

      interval = setInterval(() => {
        if (hoveredProductkey === null) {
          clearInterval(interval!);
        } else {
          setBlinkStartkey(null);
        }
      }, 500);
    }

    return () => {
      if (timer) clearTimeout(timer);
      if (interval) clearInterval(interval);
    };
  }, [hoveredProductkey]);

  const handleMouseEnter = (key: number) => {
    setHoveredProductkey(key);
  };

  const handleMouseLeave = () => {
    setHoveredProductkey(null);
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const handleAddToCart = () => {
    addToCart(selectedVariantId); // Pass selectedVariantId to addToCart
    toast.success("Item added to cart!");
  };

  const openQuickView = () => setShowQuickView(true);
  const closeQuickView = () => setShowQuickView(false);
  const openQuickAdd = () => setShowQuickAdd(true);
  const closeQuickAdd = () => setShowQuickAdd(false);
  const handleModalOpen = () => setShowCartModal(true);
  const handleModalClose = () => {
    setShowCartModal(false);
    setShowQuickAdd(false);
  };

  const Icons = [
    { icon: <FaHeart />, tooltip: "Add to Wishlist" },
    { icon: <MdOutlineShoppingBag />, tooltip: "Quick Add" },
    { icon: <FiEye />, tooltip: "Quick View" },
  ];

  const selectedImage =
    product.productVariants && product.productVariants.length > 0
      ? product.productVariants.find((img) => img.color === selectedColor) ||
        product.productVariants[0]
      : null;

  if (!selectedImage) {
    return <div>No image available</div>; // Handle the case where no image is available
  }

  return (
    <div
      className="relative place-self-center w-full sm:w-auto"
      onMouseEnter={() => handleMouseEnter(key)}
      onMouseLeave={handleMouseLeave}
    >
      {showCartModal && <CartModal onClose={handleModalClose} />}

      <Link
        href={`/products/${product._id}`}
        className="relative place-self-center"
      >
        <div className="relative overflow-hidden">
          {/* Quick Add Modal */}
          <Image
            src={selectedImage.url}
            alt={selectedImage.alt}
            height={300}
            width={300}
            className="rounded-2xl transition-transform duration-300 h-full w-full object-cover"
          />
          {/* White opacity blink effect */}
          <div
            className={`absolute inset-0 bg-white transition-opacity duration-300 ${
              blinkStartkey === key ? "opacity-30" : "opacity-0"
            }`}
          />
        </div>
      </Link>
      {showQuickAdd && (
        <div className="absolute top-[40%] left-0 right-0 p-5">
          <div className="bg-black bg-opacity-50 backdrop-blur-md p-4 z-10 rounded-lg shadow-lg relative">
            <div className="flex justify-center items-center mb-4 ">
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
              {/* Sizes buttons */}
              {product.sizes.map((size, index) => (
                <button
                  key={index}
                  onClick={() => handleSizeChange(size.size)}
                  className={`border rounded px-4 py-2 text-gray-700 ${
                    selectedSize === size.size
                      ? "bg-black text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {size.size}
                </button>
              ))}
            </div>
            {/* Add to Cart Button */}
            <button
              onClick={() => {
                setSelectedImage(selectedImage.url);
                handleAddToCart();
                handleModalOpen();
              }}
              className={`${BUTTON_ANIMATION_CLASSES} ${ONHOVER_DARK_BG} flex items-center justify-center w-full p-3 border rounded-sm bg-gray-100`}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
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

        {/* Color variants div */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            hoveredProductkey === key
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex gap-2"
        >
          {product.productVariants.map((variant, i) => (
            <div
              key={i}
              className={`relative h-8 w-12 border cursor-pointer`}
              style={{ backgroundColor: variant.color }}
              onClick={() => handleColorChange(variant.color)}
            >
              <div className="absolute inset-0 border-2 border-white p-1"></div>
            </div>
          ))}
        </motion.div>

        {/* Icon tooltip div */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={
            hoveredProductkey === key
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: -20 }
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute top-4 right-4 flex flex-col gap-2 z-10"
        >
          <IconButton icon={Icons[0].icon} tooltip={Icons[0].tooltip} />
          <IconButton
            icon={Icons[1].icon}
            tooltip={Icons[1].tooltip}
            onClick={openQuickAdd}
          />
          <IconButton
            icon={Icons[2].icon}
            tooltip={Icons[2].tooltip}
            onClick={openQuickView}
          />
        </motion.div>
      </div>
      {showQuickView && (
        <QuickViewModal product={product} onClose={closeQuickView} />
      )}
      <ToastContainer />
    </div>
  );
};

export default ProductCard;
