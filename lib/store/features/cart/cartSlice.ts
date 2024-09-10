import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

// Define the interface for an individual cart item
interface CartItem {
  id: string; // Unique identifier for the item
  name: string; // Product name
  price: number; // Product price
  quantity: number;
  description?: string; // Optional fields based on your needs
  url?: string;
  color?: string;
  size?: string;
}

// Define the CartState interface
export interface CartState {
  cartItems: CartItem[];
  cartCount: number; // This should represent the number of distinct items
}

// Function to load cart from local storage
const loadCartFromLocalStorage = (): CartState => {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    try {
      const parsedCart = JSON.parse(storedCart);
      // Ensure cartItems is always an array
      return {
        cartItems: Array.isArray(parsedCart.cartItems)
          ? parsedCart.cartItems
          : [],
        cartCount: parsedCart.cartCount || 0,
      };
    } catch (error) {
      // Handle parsing error
      return { cartItems: [], cartCount: 0 };
    }
  }
  return { cartItems: [], cartCount: 0 }; // Default state
};

// Initial state
const initialState: CartState = loadCartFromLocalStorage();

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

      // Check if the item with the same color, size, and URL already exists
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.color === color && item.size === size && item.url === url
      );

      if (existingItemIndex === -1) {
        // Item not found, add it with a new unique ID and specified quantity
        state.cartItems.push({
          ...action.payload,
          id: uuidv4(), // Generate a unique ID for the new item
        });
      } else {
        // Item found, update quantity
        state.cartItems[existingItemIndex].quantity += quantity;
      }

      // Update cart count as the number of distinct items
      state.cartCount = state.cartItems.length;

      // Save updated cart to local storage
      saveCartToLocalStorage(state);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.cartCount = state.cartItems.length;
      saveCartToLocalStorage(state); // Save to local storage
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );

      if (itemIndex !== -1) {
        state.cartItems[itemIndex].quantity += 1;
        state.cartCount = state.cartItems.length;
        saveCartToLocalStorage(state); // Save to local storage
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
        saveCartToLocalStorage(state); // Save to local storage
      }
    },
  },
});

// Export actions and reducer
export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
