// In cartSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  items: string[];
  cartCount: number;
}

const loadCartFromLocalStorage = (): CartState => {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    const parsedCart = JSON.parse(storedCart);
    return {
      items: parsedCart.items || [],
      cartCount: parsedCart.items ? parsedCart.items.length : 0,
    };
  }
  return { items: [], cartCount: 0 }; // Default state
};

const initialState: CartState = loadCartFromLocalStorage();

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    reduxAddCart: (state, action: PayloadAction<string>) => {
      state.items.push(action.payload);
      state.cartCount = state.items.length;
      localStorage.setItem("cart", JSON.stringify(state)); // Save to localStorage
    },
    reduxRemoveCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item !== action.payload);
      state.cartCount = state.items.length;
      localStorage.setItem("cart", JSON.stringify(state)); // Save to localStorage
    },
  },
});

export const { reduxAddCart, reduxRemoveCart } = cartSlice.actions;

export default cartSlice.reducer;
