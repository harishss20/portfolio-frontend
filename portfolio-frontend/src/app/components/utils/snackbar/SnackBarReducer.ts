
import { createSlice } from "@reduxjs/toolkit";
import { SNACKBAR_STATUS, SNACKBAR_TYPE, snackBarPropType, SnackbarStateProps } from "./SnackBarInterface";


const initialSnackBar: snackBarPropType = {
    show: false,
    message: "",
    status: SNACKBAR_STATUS.ERROR,
    showClose: false,
    snackbarType: SNACKBAR_TYPE.DEFAULT
};

const initialState: SnackbarStateProps = {
    snackBar: initialSnackBar
};

const SnackbarSlice = createSlice({
    name: "SnackBarReducer",
    initialState,
    reducers: {
        showSnackBar: (state, action: { payload: Partial<snackBarPropType> }) => {
            return Object.assign({}, state, {
                snackBar: {
                    show: true,
                    message: action.payload.message,
                    status: action.payload.status ? action.payload.status : initialSnackBar.status,
                    snackbarType: action.payload.snackbarType ?? initialSnackBar.snackbarType,
                    showClose: (typeof action.payload.showClose !== "undefined") ?
                        action.payload.showClose
                        : initialSnackBar.showClose,
                }
            });
        },
        hideSnackBar: (state) => {
            return Object.assign({}, state, {
                snackBar: Object.assign({}, state.snackBar, {
                    show: false
                })
            });
        },
    }
});

export const { showSnackBar, hideSnackBar } = SnackbarSlice.actions;

export const useSnackbar = (state: { SnackbarReducer: SnackbarStateProps }) => {
    return state.SnackbarReducer.snackBar;

};

export default SnackbarSlice.reducer;
