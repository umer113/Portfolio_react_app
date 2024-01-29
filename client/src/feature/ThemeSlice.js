// ThemeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkMode: false,
};

export const themeSlice = createSlice({
    name: "darkMode",
    initialState,
    reducers: {
        toggleMode: (state) => {
            state.darkMode = !state.darkMode;
        },
    },
});

export const { toggleMode } = themeSlice.actions;

export default themeSlice.reducer;
