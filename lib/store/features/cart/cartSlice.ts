import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  items: string[];
  cartCount: number; // Add cartCount property to track the number of items
}

const initialState: CartState = {
  items: [],
  cartCount: 0, // Initialize cartCount to 0
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    reduxAddCart: (state, action: PayloadAction<string>) => {
      state.items.push(action.payload);
      state.cartCount = state.items.length; // Update cartCount when item is added
    },
    // You can also add a remove reducer for managing item removal and cart count updates
    reduxRemoveCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item !== action.payload);
      state.cartCount = state.items.length; // Update cartCount when item is removed
    },
  },
});

// Action creators are generated for each case reducer function
export const { reduxAddCart, reduxRemoveCart } = cartSlice.actions;

export default cartSlice.reducer;
