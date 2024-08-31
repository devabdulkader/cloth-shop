import { createSlice } from "@reduxjs/toolkit";

// Define the initial state interface for the user sidebar
interface CartSidebarState {
  isCartSidebarOpen: boolean;
}

// Set the initial state for the user sidebar
const initialState: CartSidebarState = {
  isCartSidebarOpen: false,
};

// Create the userSidebar slice with actions to manage the state
const cartSidebarSlice = createSlice({
  name: "userSidebar",
  initialState,
  reducers: {
    // Toggle the user sidebar state
    toggleCartSidebar(state) {
      state.isCartSidebarOpen = !state.isCartSidebarOpen;
    },
    // Set the user sidebar state to open
    openCartSidebar(state) {
      state.isCartSidebarOpen = true;
    },
    // Set the user sidebar state to closed
    closeCartSidebar(state) {
      state.isCartSidebarOpen = false;
    },
  },
});

// Export actions
export const { toggleCartSidebar, openCartSidebar, closeCartSidebar } =
  cartSidebarSlice.actions;

// Export reducer
export default cartSidebarSlice.reducer;
