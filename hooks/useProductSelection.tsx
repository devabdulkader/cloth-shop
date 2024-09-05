"use client";
import { useState } from "react";
import { IProduct } from "@/types/product";

interface UseProductSelectionProps {
  product: IProduct;
}

interface SelectionState {
  selectedSize: string;
  selectedColor: string;
  quantity: number | "";
  selectedImage: string;
}

const useProductSelection = ({ product }: UseProductSelectionProps) => {
  // Initialize state
  const [selectedSize, setSelectedSize] = useState<string>(
    product.sizes?.[0].size || "" // Initialize with the first size if available
  );
  const [selectedColor, setSelectedColor] = useState<string>(
    product.productVariants?.[0]?.color || "" // Initialize with the first color if available
  );
  const [quantity, setQuantity] = useState<number | "">(1); // Initialize with a default quantity
  const [selectedImage, setSelectedImage] = useState<string>(
    product.productVariants?.find((img) => img.color === selectedColor)?.url ||
      ""
  );

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
    }
  };

  // Handle quantity change
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numericValue = Number(value);
    if (value === "" || (!isNaN(numericValue) && numericValue > 0)) {
      setQuantity(value === "" ? "" : numericValue);
    }
  };

  // Decrease quantity
  const decreaseQuantity = () => {
    if (quantity !== "" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Increase quantity
  const increaseQuantity = () => {
    if (quantity === "" || quantity > 0) {
      setQuantity((quantity === "" ? 0 : quantity) + 1);
    }
  };

  const addToCart = () => {
    // Retrieve the current cart from local storage or initialize as an empty array
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    // Find the selected variant
    const variant = product.productVariants.find(
      (v) => v.color === selectedColor
    );

    if (!variant) {
      console.error("Selected variant not found.");
      return;
    }

    // Create a new cart item with the variant details
    const newProduct = {
      variantId: variant._id, // Use the variant ID as the unique identifier
      title: product.title,
      size: selectedSize,
      color: selectedColor,
      quantity,
      selectedImage: variant.url, // Use the URL of the selected variant
    };

    // Check if the item with the same variantId already exists in the cart
    const existingItemIndex = cart.findIndex(
      (item: any) => item.variantId === newProduct.variantId
    );

    if (existingItemIndex > -1) {
      // Update the quantity of the existing item
      cart[existingItemIndex].quantity += quantity;
    } else {
      // Add the new product to the cart
      cart.push(newProduct);
    }

    // Save the updated cart back to local storage
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  // Add to wishlist
  const addToWishlist = () => {
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
  };

  // Remove from cart
  const removeFromCart = (variantId: string) => {
    console.log("VariantId", variantId);
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = cart.filter(
      (item: any) => item.variantId !== variantId
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Remove from wishlist
  const removeFromWishlist = (productId: string) => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const updatedWishlist = wishlist.filter(
      (item: IProduct) => item._id !== productId
    );
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  // Get selection state
  const getSelectionState = (): SelectionState => ({
    selectedSize,
    selectedColor,
    quantity,
    selectedImage,
  });

  return {
    selectedSize,
    selectedColor,
    quantity,
    selectedImage,
    handleSizeChange,
    handleColorChange,
    handleQuantityChange,
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
