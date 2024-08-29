import { createSlice } from "@reduxjs/toolkit";

// Define the interface for the search bar state
interface MobileSearchBarState {
  isMobileSearchbarOpen: boolean; // Renamed to isSearchbarOpen
}

// Set the initial state for the search bar
const initialState: MobileSearchBarState = {
  isMobileSearchbarOpen: false,
};

// Create the search bar slice with reducers
const mobileSearchBarSlice = createSlice({
  name: "mobileSearchBar",
  initialState,
  reducers: {
    // Toggle the search bar state
    toggleMobileSearchBar(state) {
      state.isMobileSearchbarOpen = !state.isMobileSearchbarOpen;
    },
    // Set the search bar state to open
    openMobileSearchBar(state) {
      state.isMobileSearchbarOpen = true;
    },
    // Set the search bar state to closed
    closeMobileSearchBar(state) {
      state.isMobileSearchbarOpen = false;
    },
  },
});

// Export actions
export const {
  toggleMobileSearchBar,
  openMobileSearchBar,
  closeMobileSearchBar,
} = mobileSearchBarSlice.actions;

// Export reducer
export default mobileSearchBarSlice.reducer;
