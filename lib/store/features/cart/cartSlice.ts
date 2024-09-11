import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

// Define the interface for an individual cart item
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  description?: string;
  url?: string;
  color?: string;
  size?: string;
}

// Define the CartState interface
export interface CartState {
  cartItems: CartItem[];
  cartCount: number; // Represents the number of distinct items
  promoCode: string; // New field for promo code
  comment: string; // New field for comment
}

// Function to load cart from local storage
const loadCartFromLocalStorage = (): CartState => {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    try {
      const parsedCart = JSON.parse(storedCart);
      return {
        cartItems: Array.isArray(parsedCart.cartItems)
          ? parsedCart.cartItems
          : [],
        cartCount: parsedCart.cartCount || 0,
        promoCode: parsedCart.promoCode || "", // Load promoCode
        comment: parsedCart.comment || "", // Load comment
      };
    } catch (error) {
      return { cartItems: [], cartCount: 0, promoCode: "", comment: "" };
    }
  }
  return { cartItems: [], cartCount: 0, promoCode: "", comment: "" };
};

// Initial state
const initialState: CartState = {
  ...loadCartFromLocalStorage(),
  promoCode: "",
  comment: "",
};

// Function to save cart to local storage
const saveCartToLocalStorage = (state: CartState) => {
  localStorage.setItem("cart", JSON.stringify(state));
};

// Create the cart slice
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<CartItem & { quantity: number }>
    ) => {
      const { url, color, size, quantity } = action.payload;

      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.color === color && item.size === size && item.url === url
      );

      if (existingItemIndex === -1) {
        state.cartItems.push({
          ...action.payload,
          id: uuidv4(),
        });
      } else {
        state.cartItems[existingItemIndex].quantity += quantity;
      }

      state.cartCount = state.cartItems.length;
      saveCartToLocalStorage(state);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.cartCount = state.cartItems.length;
      saveCartToLocalStorage(state);
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );

      if (itemIndex !== -1) {
        state.cartItems[itemIndex].quantity += 1;
        state.cartCount = state.cartItems.length;
        saveCartToLocalStorage(state);
      }
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );

      if (itemIndex !== -1) {
        if (state.cartItems[itemIndex].quantity > 1) {
          state.cartItems[itemIndex].quantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== action.payload
          );
        }
        state.cartCount = state.cartItems.length;
        saveCartToLocalStorage(state);
      }
    },
    // New action to update both the promo code and the comment
    addCommentAndPromoCode: (
      state,
      action: PayloadAction<{ promoCode: string; comment: string }>
    ) => {
      state.promoCode = action.payload.promoCode;
      state.comment = action.payload.comment;
      saveCartToLocalStorage(state);
    },
  },
});

// Export actions and reducer
export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  addCommentAndPromoCode, // Export the new action
} = cartSlice.actions;

export default cartSlice.reducer;
