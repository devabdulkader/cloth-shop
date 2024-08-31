import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
interface ButtonToggleState {
  isButtonClicked: boolean;
}

const initialState: ButtonToggleState = {
  isButtonClicked: false,
};

// Create the slice
const buttonToggleSlice = createSlice({
  name: "buttonToggle",
  initialState,
  reducers: {
    // Toggle the button clicked state
    toggleButtonClick(state) {
      state.isButtonClicked = !state.isButtonClicked;
    },
    // Set the button clicked state to true
    openButton(state) {
      state.isButtonClicked = true;
    },
    // Set the button clicked state to false
    closeButton(state) {
      state.isButtonClicked = false;
    },
  },
});

// Export actions
export const { toggleButtonClick, openButton, closeButton } =
  buttonToggleSlice.actions;

// Export reducer
export default buttonToggleSlice.reducer;
