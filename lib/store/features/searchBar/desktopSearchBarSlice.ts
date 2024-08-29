import { createSlice } from "@reduxjs/toolkit";

// Define the interface for the search bar state
interface DesktopSearchBarState {
  isDesktopSearchBarOpen: boolean; // Use consistent naming
}

// Set the initial state for the search bar
const initialState: DesktopSearchBarState = {
  isDesktopSearchBarOpen: false,
};

// Create the search bar slice with reducers
const desktopSearchBarSlice = createSlice({
  name: "desktopSearchBar",
  initialState,
  reducers: {
    // Toggle the search bar state
    toggleDesktopSearchBar(state) {
      state.isDesktopSearchBarOpen = !state.isDesktopSearchBarOpen;
    },
    // Set the search bar state to open
    openDesktopSearchBar(state) {
      state.isDesktopSearchBarOpen = true;
    },
    // Set the search bar state to closed
    closeDesktopSearchBar(state) {
      state.isDesktopSearchBarOpen = false;
    },
  },
});

// Export actions
export const {
  toggleDesktopSearchBar,
  openDesktopSearchBar,
  closeDesktopSearchBar,
} = desktopSearchBarSlice.actions;

// Export reducer
export default desktopSearchBarSlice.reducer;
