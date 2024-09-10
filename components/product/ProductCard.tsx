// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { FaHeart, FaShoppingCart } from "react-icons/fa";
// import { MdOutlineShoppingBag } from "react-icons/md";
// import { FiEye } from "react-icons/fi";
// import { motion } from "framer-motion";
// import IconButton from "../common/IconButton";
// import { IProduct } from "@/types/product";
// import Link from "next/link";
// import { BiStar } from "react-icons/bi";
// import QuickViewModal from "../card/QuickViewModel";
// import { VscClose } from "react-icons/vsc";
// import useProductSelection from "@/hooks/useProductSelection";
// import { BUTTON_ANIMATION_CLASSES, ONHOVER_DARK_BG } from "@/lib/constant";
// import CartModal from "../common/CartModal";
// import { toast, ToastContainer } from "react-toastify";

// interface ProductCardProps {
//   product: IProduct;
//   key: number;
// }

// const ProductCard: React.FC<ProductCardProps> = ({ product, key }) => {
//   const {
//     selectedImage,
//     selectedColor,
//     selectedSize,
//     handleSizeChange,
//     addToCart,
//     handleImageChange,
//     handleColorChange,
//     addToWishlist,
//     removeFromWishlist,
//     isProductInWishlist,
//     cartUpdated,
//     wishlistUpdated,
//   } = useProductSelection({
//     product,
//   });

//   const [showQuickView, setShowQuickView] = useState(false);
//   const [showQuickAdd, setShowQuickAdd] = useState(false);
//   const [showCartModal, setShowCartModal] = useState(false);
//   const [hoveredProductkey, setHoveredProductkey] = useState<number | null>(
//     null
//   );
//   const [blinkStartKey, setBlinkStartKey] = useState<number | null>(null); // State to manage blinking

//   // Combine main image with variants
//   const images = [
//     {
//       id: product._id, // Add main product ID here
//       url: product.url,
//       alt: product.alt,
//     },
//     ...product.productVariants.map((variant) => ({
//       id: variant._id, // Add variant ID here
//       url: variant.url,
//       alt: variant.alt,
//     })),
//   ];

//   // Combine main image with variants
//   const colors = [
//     {
//       color: product.color,
//     },
//     ...product.productVariants.map((variant) => ({
//       color: variant.color,
//     })),
//   ];

//   const Icons = [
//     { icon: <FaHeart />, tooltip: "Add to Wishlist" },
//     { icon: <MdOutlineShoppingBag />, tooltip: "Quick Add" },
//     { icon: <FiEye />, tooltip: "Quick View" },
//   ];

//   const [activeColor, setActiveColor] = useState<string>(colors[0].color);
//   const [activeImage, setActiveImage] = useState<string>(images[0].url);
//   const [activeVariantId, setActiveVariantId] = useState<string>(images[0].id);

//   // Update the image and variant ID when color changes
//   useEffect(() => {
//     const matchingVariant = product.productVariants.find(
//       (variant) => variant.color === activeColor
//     );

//     if (matchingVariant) {
//       setActiveImage(matchingVariant.url);
//       setActiveVariantId(matchingVariant._id);
//       handleImageChange(matchingVariant.url);
//     } else {
//       setActiveImage(product.url);
//       setActiveVariantId(product._id);
//       handleImageChange(product.url);
//     }

//     handleColorChange(activeColor);
//   }, [
//     activeColor,
//     product.productVariants,
//     product.url,
//     product._id,
//     handleImageChange,
//     handleColorChange,
//   ]);

//   const handleColorSelection = (color: string) => {
//     setActiveColor(color);
//     handleColorChange(color);
//   };

//   const handleMouseEnter = (key: number) => {
//     setHoveredProductkey(key);
//     // Start blink effect when hovered
//     setBlinkStartKey(key);

//     // Stop blink effect after 2 seconds
//     setTimeout(() => {
//       setBlinkStartKey(null);
//     }, 500);
//   };

//   useEffect(() => {
//     // Any logic you want to run on re-render can be placed here
//     console.log("Cart or wishlist updated");
//   }, [cartUpdated, wishlistUpdated]);

//   const handleMouseLeave = () => {
//     setHoveredProductkey(null);
//     setBlinkStartKey(null); // Ensure blink effect is stopped when mouse leaves
//   };

//   useEffect(() => {
//     const matchingVariant = product.productVariants.find(
//       (variant) => variant.color === activeColor
//     );

//     if (matchingVariant) {
//       setActiveImage(matchingVariant.url);
//       setActiveVariantId(matchingVariant._id);
//       handleImageChange(matchingVariant.url);
//     } else {
//       setActiveImage(product.url);
//       setActiveVariantId(product._id);
//       handleImageChange(product.url);
//     }

//     handleColorChange(activeColor);
//   }, [
//     activeColor,
//     product.productVariants,
//     product.url,
//     product._id,
//     handleImageChange,
//     handleColorChange,
//   ]);

//   const handleAddToCart = () => {
//     const imageObject = images.find((image) => image.url === activeImage);
//     const idToAdd = imageObject ? imageObject.id : product._id;
//     console.log("id  from add to cart", idToAdd);
//     addToCart(idToAdd);
//     setShowCartModal(true);
//   };
//   const [isInWishlist, setIsInWishlist] = useState<boolean>(false); // State for wishlist status

//   useEffect(() => {
//     const checkWishlistStatus = async () => {
//       const status = await isProductInWishlist(activeImage, activeColor);
//       setIsInWishlist(status);
//     };
//     checkWishlistStatus();
//   }, [activeImage, activeColor, isProductInWishlist]);

//   const handleAddToWishList = () => {
//     const imageObject = images.find((image) => image.url === activeImage);
//     const idToAdd = imageObject ? imageObject.id : product._id;
//     console.log("add wishlist id", idToAdd);
//     setIsInWishlist(true); // Update wishlist status

//     // Add to wishlist if it doesn't exist
//     addToWishlist(idToAdd);
//   };
//   const handleRemoveFromWishList = () => {
//     const imageObject = images.find((image) => image.url === activeImage);
//     const idToAdd = imageObject ? imageObject.id : product._id;
//     console.log("remove wishlist id", idToAdd);
//     // Add to wishlist if it doesn't exist
//     setIsInWishlist(false); // Update wishlist status

//     removeFromWishlist(idToAdd);
//   };

//   const openQuickView = () => setShowQuickView(true);
//   const closeQuickView = () => setShowQuickView(false);
//   const openQuickAdd = () => setShowQuickAdd(true);
//   const closeQuickAdd = () => setShowQuickAdd(false);
//   const handleModalClose = () => {
//     setShowCartModal(false);
//     setShowQuickAdd(false);
//   };
//   const handleSizeClick = (size: string) => {
//     handleSizeChange(size);
//   };

//   return (
//     <div
//       className="relative w-full sm:w-[350px]"
//       onMouseEnter={() => handleMouseEnter(key)}
//       onMouseLeave={handleMouseLeave}
//     >
//       {showCartModal && <CartModal onClose={handleModalClose} />}

//       <div className="relative overflow-hidden h-[420px] w-full">
//         <Link
//           href={`/products/${product._id}`}
//           className="relative place-self-center"
//         >
//           <Image
//             src={activeImage}
//             alt={product.alt}
//             height={300}
//             width={300}
//             className="rounded-2xl transition-transform duration-300 h-full w-full object-cover"
//           />

//           {/* White opacity blink effect */}
//           <div
//             className={`absolute inset-0 bg-white transition-opacity duration-300 ${
//               blinkStartKey === key ? "opacity-30" : "opacity-0"
//             }`}
//           />
//         </Link>
//         {showQuickAdd && (
//           <div className="absolute bottom-0 left-0 right-0 p-5">
//             <div className="bg-black bg-opacity-50 backdrop-blur-md p-4 z-10 rounded-lg shadow-lg relative">
//               <div className="flex justify-center items-center mb-4 ">
//                 <h3 className="text-lg font-bold text-white text-center">
//                   Select Size
//                 </h3>
//                 <button
//                   onClick={closeQuickAdd}
//                   className="text-gray-300 absolute top-3 right-3"
//                 >
//                   <VscClose className="text-2xl" />
//                 </button>
//               </div>
//               <div className="flex justify-center gap-2 mb-4">
//                 {/* Sizes buttons */}
//                 {product.sizes.map((item, index) => (
//                   <button
//                     key={index}
//                     onClick={() => handleSizeClick(item.size)}
//                     className={`border border-gray-300 rounded-md px-4 py-2 transition-colors duration-300
//           ${
//             selectedSize === item.size
//               ? "bg-slate-800 text-white"
//               : "text-gray-400 hover:bg-gray-600 hover:text-white"
//           }`}
//                   >
//                     {item.size}
//                   </button>
//                 ))}
//               </div>
//               {/* Add to Cart Button */}
//               <button
//                 className="bg-white text-black  w-full py-2 rounded-md "
//                 onClick={handleAddToCart}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         )}
//       </div>

//       <div className="p-4 flex flex-col justify-center items-center">
//         <h2 className="text-lg font-bold mb-2">{product.title}</h2>

//         <div className="flex items-center mb-2">
//           {Array.from({ length: 5 }, (_, i) => (
//             <span key={i} className={`text-yellow-500`}>
//               <BiStar className={`text-yellow-500 text-2xl`} />
//             </span>
//           ))}
//         </div>
//         <p className="text-xl font-semibold mb-2">$ {product.basePrice}</p>

//         {/* Color variants */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={
//             hoveredProductkey === key
//               ? { opacity: 1, y: 0 }
//               : { opacity: 0, y: 20 }
//           }
//           transition={{ duration: 0.3, ease: "easeInOut" }}
//           className="flex gap-2 mt-2"
//         >
//           {colors.map((c, i) => (
//             <div
//               key={i}
//               className={`relative hover:border-gray-400 hover:border hover:p-1 bg-white h-8 w-12 cursor-pointer rounded-md transition-all duration-100
//         ${
//           activeColor === c.color
//             ? "border border-gray-400 p-1" // Active state (clicked) with white border and padding
//             : "border border-gray-400"
//         }
//         `} // Hover state with larger padding and black border
//               // style={{ backgroundColor: c.color }}
//               onClick={() => handleColorSelection(c.color)}
//             >
//               <div
//                 className="h-full w-full rounded-md "
//                 style={{ backgroundColor: c.color }}
//               ></div>
//             </div>
//           ))}
//         </motion.div>

//         {/* Icon tooltip */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={
//             hoveredProductkey === key
//               ? { opacity: 1, y: 0 }
//               : { opacity: 0, y: -20 }
//           }
//           transition={{ duration: 0.3, ease: "easeInOut" }}
//           className="absolute top-3 right-3 flex flex-col gap-2"
//         >
//           {/* Add to wishlist tooltip */}
//           <IconButton
//             icon={<FaHeart />}
//             tooltip={isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
//             onClick={
//               isInWishlist ? handleRemoveFromWishList : handleAddToWishList
//             }
//           />
//           <IconButton
//             icon={Icons[1].icon}
//             tooltip={Icons[1].tooltip}
//             onClick={openQuickAdd} // Open Quick Add modal on click
//           />
//           <IconButton
//             className="hidden md:flex"
//             icon={Icons[2].icon}
//             tooltip={Icons[2].tooltip}
//             onClick={openQuickView}
//           />
//         </motion.div>
//       </div>

//       {/* Quick View Modal */}
//       {showQuickView && (
//         <QuickViewModal
//           product={product}
//           onClose={closeQuickView}
//           activeImage={activeImage}
//           activeColor={activeColor}
//         />
//       )}
//     </div>
//   );
// };

// export default ProductCard;

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
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/store/features/cart/cartSlice";

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

  const [productItem, setProductItem] = useState<IProduct>({
    _id: product._id,
    selectedProductId: selectedId || "",
    title: product.title,
    description: product.description,
    gender: product.gender,
    basePrice: product.basePrice,
    buyPrice: product.buyPrice,
    otherCost: product.otherCost,
    discountPrice: product.discountPrice,
    url: selectedImage || product.url,
    color: selectedColor || product.color,
    deliveryMethods: "",
    size: selectedSize || "",
    sellingPrice: product.sellingPrice,
    productVariants: product.productVariants,
    availableSizes: product.sizes,
    quantity: 1,
  });

  useEffect(() => {
    setProductItem((prevProductItem) => ({
      ...prevProductItem,
      url: selectedImage || product.url,
      color: selectedColor || product.color,
      size: selectedSize || "",
    }));
  }, [selectedSize, selectedColor, selectedImage]);

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
            src={selectedImage}
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
          <IconButton icon={<FaHeart />} tooltip={Icons[0].tooltip} />
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
