
import { createSlice } from "@reduxjs/toolkit";
import { THEME, ThemeConfigProps } from "./ThemeInterfaces";


const initialState = {
    theme: THEME.DARK
};

const ThemeSlice = createSlice({
    name: "ThemeReducer",
    initialState,
    reducers: {
        updateTheme: (state, action) => {
            return Object.assign({}, state, { theme: action.payload });
        },
    }
});

export const { updateTheme } = ThemeSlice.actions;

export const useConfigTheme = (state: { ThemeReducer: ThemeConfigProps }) => {
    return state.ThemeReducer.theme;
};

export default ThemeSlice.reducer;
