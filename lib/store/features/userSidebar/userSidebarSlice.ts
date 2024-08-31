import { createSlice } from "@reduxjs/toolkit";

// Define the initial state interface for the user sidebar
interface UserSidebarState {
  isSidebarOpen: boolean;
}

// Set the initial state for the user sidebar
const initialState: UserSidebarState = {
  isSidebarOpen: false,
};

// Create the userSidebar slice with actions to manage the state
const userSidebarSlice = createSlice({
  name: "userSidebar",
  initialState,
  reducers: {
    // Toggle the user sidebar state
    toggleSidebar(state) {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    // Set the user sidebar state to open
    openSidebar(state) {
      state.isSidebarOpen = true;
    },
    // Set the user sidebar state to closed
    closeSidebar(state) {
      state.isSidebarOpen = false;
    },
  },
});

// Export actions
export const { toggleSidebar, openSidebar, closeSidebar } =
  userSidebarSlice.actions;

// Export reducer
export default userSidebarSlice.reducer;
