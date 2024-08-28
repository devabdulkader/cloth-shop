import { createSlice } from "@reduxjs/toolkit";

interface NavState {
  isOpen: boolean;
}

const initialState: NavState = {
  isOpen: false,
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    // Toggle the navigation state
    toggleNav(state) {
      state.isOpen = !state.isOpen;
    },
    // Set the navigation state to open
    openNav(state) {
      state.isOpen = true;
    },
    // Set the navigation state to closed
    closeNav(state) {
      state.isOpen = false;
    },
  },
});

// Export actions
export const { toggleNav, openNav, closeNav } = navSlice.actions;

// Export reducer
export default navSlice.reducer;
