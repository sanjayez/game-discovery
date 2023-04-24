import { createSlice } from "@reduxjs/toolkit";

export interface ThemeState {
  dark: boolean;
}

const initialState: ThemeState = {
  dark: true,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggle: (state) => {
      state.dark = !state.dark;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle } = themeSlice.actions;

export default themeSlice.reducer;
