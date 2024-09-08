"use client";
import { useState } from "react";
import { IProduct } from "@/types/product";
import { v4 as uuidv4 } from "uuid"; // Import uuid for generating unique IDs

interface UseProductSelectionProps {
  product: IProduct;
}

interface CartItem {
  id: string; // Unique ID for each cart item
  productId: string;
  variantId?: string | null;
  title: string;
  size: string;
  color: string;
  quantity: number; // Should be a number instead of number | string
  selectedImage: string;
  basePrice: number;
  buyPrice: number;
  otherCost: number;
  discountPrice: number;
  sellingPrice: number;
}

interface SelectionState {
  selectedSize: string;
  selectedColor: string;
  quantity: number; // Keep this as number
  selectedImage: string;
  selectedVariantId: string;
}

const useProductSelection = ({ product }: UseProductSelectionProps) => {
  // Default values for state
  const defaultSize = product.sizes?.[0]?.size || "";
  const defaultColor = product.color || "";
  const defaultImage = product.url;
  const defaultVariantId =
    product.productVariants?.find((img) => img.color === defaultColor)?._id ||
    "";

  // Initialize state
  const [selectedSize, setSelectedSize] = useState<string>(defaultSize);
  const [selectedColor, setSelectedColor] = useState<string>(defaultColor);
  const [quantity, setQuantity] = useState<number>(1); // Initialize as a number
  const [selectedImage, setSelectedImage] = useState<string>(defaultImage);
  const [selectedVariantId, setSelectedVariantId] =
    useState<string>(defaultVariantId);

  // Handle size change
  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  // Handle color change
  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    const newImage = product.productVariants.find((img) => img.color === color);
    if (newImage) {
      setSelectedImage(newImage.url);
      setSelectedVariantId(newImage._id);
    }
  };

  // Handle image change
  const handleImageChange = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  // Handle quantity change
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = Number(e.target.value);
    if (!isNaN(numericValue) && numericValue > 0) {
      setQuantity(numericValue);
    }
  };

  // Decrease quantity
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Increase quantity
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Add to cart
  const addToCart = (itemId: string) => {
    try {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const variant = product.productVariants.find((v) => v._id === itemId);
      const isVariantId = !!variant;

      const newProduct: CartItem = {
        id: uuidv4(), // Generate a unique ID for each cart item
        productId: product._id,
        variantId: isVariantId ? itemId : null,
        title: product.title,
        size: selectedSize,
        color: isVariantId ? variant.color : selectedColor,
        quantity, // Ensure quantity is always valid
        selectedImage: isVariantId ? variant.url : selectedImage,
        basePrice: product.basePrice,
        buyPrice: product.buyPrice,
        otherCost: product.otherCost,
        discountPrice: product.discountPrice,
        sellingPrice: product.sellingPrice,
      };

      const existingItemIndex = cart.findIndex(
        (item: CartItem) =>
          item.productId === newProduct.productId &&
          item.variantId === newProduct.variantId &&
          item.size === newProduct.size &&
          item.color === newProduct.color
      );

      if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += quantity;
      } else {
        cart.push(newProduct);
      }

      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Failed to add item to cart", error);
    }
  };

  // Add to wishlist
  const addToWishlist = () => {
    try {
      const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
      const newProduct = {
        ...product,
        selectedSize,
        selectedColor,
        quantity,
        selectedImage,
      };
      if (!wishlist.some((item: IProduct) => item._id === product._id)) {
        wishlist.push(newProduct);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
      }
    } catch (error) {
      console.error("Failed to add item to wishlist", error);
    }
  };

  // Remove from cart
  const removeFromCart = (id: string) => {
    try {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const updatedCart = cart.filter((item: CartItem) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } catch (error) {
      console.error("Failed to remove item from cart", error);
    }
  };

  // Remove from wishlist
  const removeFromWishlist = (productId: string) => {
    try {
      const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
      const updatedWishlist = wishlist.filter(
        (item: IProduct) => item._id !== productId
      );
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    } catch (error) {
      console.error("Failed to remove item from wishlist", error);
    }
  };

  // Get selection state
  const getSelectionState = (): SelectionState => ({
    selectedSize,
    selectedColor,
    quantity,
    selectedImage,
    selectedVariantId,
  });

  return {
    selectedSize,
    selectedColor,
    quantity,
    selectedImage,
    handleSizeChange,
    handleColorChange,
    handleQuantityChange,
    handleImageChange,
    decreaseQuantity,
    increaseQuantity,
    addToCart,
    addToWishlist,
    removeFromCart,
    removeFromWishlist,
    getSelectionState,
  };
};

export default useProductSelection;
