import { createSlice } from "@reduxjs/toolkit";

// Define the initial state interface for the user sidebar
interface UserSidebarState {
  isUserSidebarOpen: boolean;
}

// Set the initial state for the user sidebar
const initialState: UserSidebarState = {
  isUserSidebarOpen: false,
};

// Create the userSidebar slice with actions to manage the state
const userSidebarSlice = createSlice({
  name: "userSidebar",
  initialState,
  reducers: {
    // Toggle the user sidebar state
    toggleUserSidebar(state) {
      state.isUserSidebarOpen = !state.isUserSidebarOpen;
    },
    // Set the user sidebar state to open
    openUserSidebar(state) {
      state.isUserSidebarOpen = true;
    },
    // Set the user sidebar state to closed
    closeUserSidebar(state) {
      state.isUserSidebarOpen = false;
    },
  },
});

// Export actions
export const { toggleUserSidebar, openUserSidebar, closeUserSidebar } =
  userSidebarSlice.actions;

// Export reducer
export default userSidebarSlice.reducer;
