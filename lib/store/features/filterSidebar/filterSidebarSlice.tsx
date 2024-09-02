import { createSlice } from "@reduxjs/toolkit";

// Define the initial state interface for the user sidebar
interface FilterSidebarState {
  isFilterSidebarOpen: boolean;
}

// Set the initial state for the user sidebar
const initialState: FilterSidebarState = {
  isFilterSidebarOpen: false,
};

// Create the userSidebar slice with actions to manage the state
const filterSidebarSlice = createSlice({
  name: "filterSidebar",
  initialState,
  reducers: {
    // Toggle the user sidebar state
    toggleFilterSidebar(state) {
      state.isFilterSidebarOpen = !state.isFilterSidebarOpen;
    },
    // Set the user sidebar state to open
    openFilterSidebar(state) {
      state.isFilterSidebarOpen = true;
    },
    // Set the user sidebar state to closed
    closeFilterSidebar(state) {
      state.isFilterSidebarOpen = false;
    },
  },
});

// Export actions
export const { toggleFilterSidebar, openFilterSidebar, closeFilterSidebar } =
  filterSidebarSlice.actions;

// Export reducer
export default filterSidebarSlice.reducer;
