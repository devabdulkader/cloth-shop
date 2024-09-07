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
    selectedImage,
    selectedColor,
    selectedSize,
    handleSizeChange,
    addToCart,
    handleImageChange,
    handleColorChange,
  } = useProductSelection({
    product,
  });

  const [showQuickView, setShowQuickView] = useState(false);
  const [showQuickAdd, setShowQuickAdd] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [hoveredProductkey, setHoveredProductkey] = useState<number | null>(
    null
  );

  // Combine main image with variants
  const images = [
    {
      id: product._id, // Add main product ID here
      url: product.url,
      alt: product.alt,
    },
    ...product.productVariants.map((variant) => ({
      id: variant.id, // Add variant ID here
      url: variant.url,
      alt: variant.alt,
    })),
  ];

  // Combine main image with variants
  const colors = [
    {
      color: product.color,
    },
    ...product.productVariants.map((variant) => ({
      color: variant.color,
    })),
  ];

  const Icons = [
    { icon: <FaHeart />, tooltip: "Add to Wishlist" },
    { icon: <MdOutlineShoppingBag />, tooltip: "Quick Add" },
    { icon: <FiEye />, tooltip: "Quick View" },
  ];

  const [blinkStartkey, setBlinkStartkey] = useState<number | null>(null);
  const [activeColor, setActiveColor] = useState<string>(colors[0].color);
  const [activeImage, setActiveImage] = useState<string>(images[0].url);
  const [activeVariantId, setActiveVariantId] = useState<string>(images[0].id); // Added state for active variant ID

  // Update the image and variant ID when color changes
  useEffect(() => {
    const matchingVariant = product.productVariants.find(
      (variant) => variant.color === activeColor
    );

    if (matchingVariant) {
      setActiveImage(matchingVariant.url);
      setActiveVariantId(matchingVariant.id); // Set the active variant ID
      handleImageChange(matchingVariant.url);
    } else {
      setActiveImage(product.url);
      setActiveVariantId(product._id); // Revert to main product ID
      handleImageChange(product.url);
    }

    handleColorChange(activeColor);
  }, [
    activeColor,
    product.productVariants,
    product.url,
    product._id, // Ensure product ID is considered
    handleImageChange,
    handleColorChange,
  ]);

  const handleColorSelection = (color: string) => {
    setActiveColor(color);
    handleColorChange(color);
  };

  const handleMouseEnter = (key: number) => {
    setHoveredProductkey(key);
  };

  const handleMouseLeave = () => {
    setHoveredProductkey(null);
  };

  const handleAddToCart = () => {
    // Find the image object that matches the activeImage URL
    const imageObject = images.find((image) => image.url === activeImage);

    // Determine the ID to use based on the found image object
    const idToAdd = imageObject ? imageObject.id : product._id; // Use the found image ID or the main product ID

    addToCart(idToAdd); // Pass the ID to the addToCart function
    toast.success("Item added to cart!");
    setShowCartModal(true); // Show the cart modal after adding the item
  };

  const openQuickView = () => setShowQuickView(true);
  const closeQuickView = () => setShowQuickView(false);
  const openQuickAdd = () => setShowQuickAdd(true);
  const closeQuickAdd = () => setShowQuickAdd(false);
  const handleModalClose = () => {
    setShowCartModal(false);
    setShowQuickAdd(false);
  };
  const handleSizeClick = (size: string) => {
    handleSizeChange(size);
  };

  return (
    <div
      className="relative  w-full sm:w-[350px]"
      onMouseEnter={() => handleMouseEnter(key)}
      onMouseLeave={handleMouseLeave}
    >
      {showCartModal && <CartModal onClose={handleModalClose} />}

      <div className="relative overflow-hidden h-[430px] w-full">
        <Link
          href={`/products/${product._id}`}
          className="relative place-self-center"
        >
          <Image
            src={activeImage}
            alt={product.alt}
            height={300}
            width={300}
            className="rounded-2xl transition-transform duration-300 h-full w-full object-cover"
          />
        </Link>
        {/* White opacity blink effect */}
        <div
          className={`absolute inset-0 bg-white transition-opacity duration-300 ${
            blinkStartkey === key ? "opacity-30" : "opacity-0"
          }`}
        />
        {showQuickAdd && (
          <div className="absolute bottom-0 left-0 right-0 p-5">
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
                {product.sizes.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleSizeClick(item.size)}
                    className={`border border-gray-300 rounded-md px-4 py-2 transition-colors duration-300 
          ${
            selectedSize === item.size
              ? "bg-slate-800 text-white"
              : "text-gray-400 hover:bg-gray-600 hover:text-white"
          }`}
                  >
                    {item.size}
                  </button>
                ))}
              </div>
              {/* Add to Cart Button */}
              <button
                className="bg-white text-black  w-full py-2 rounded-md "
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

        {/* Color variants */}
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
          {colors.map((c, i) => (
            <div
              key={i}
              className={`relative h-8 w-12 border cursor-pointer`}
              style={{ backgroundColor: c.color }}
              onClick={() => handleColorSelection(c.color)}
            >
              {activeColor === c.color && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Icon tooltip */}
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
          {Icons.map((icon, index) => (
            <IconButton
              key={index}
              icon={icon.icon}
              tooltip={icon.tooltip}
              onClick={() => {
                if (icon.tooltip === "Quick Add") {
                  openQuickAdd();
                } else if (icon.tooltip === "Quick View") {
                  openQuickView();
                }
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Quick View Modal */}
      {showQuickView && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 h-screen w-screen">
          <div className="bg-white p-6 rounded-lg  w-full sm:w-[80%] relative">
            <QuickViewModal
              product={product}
              onClose={closeQuickView}
              activeImage={activeImage}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
