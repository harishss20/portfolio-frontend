import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { persistStore } from "redux-persist";

import SnackBarReducer from "../components/utils/snackbar/SnackBarReducer";
import ThemeReducer from "../theme/ThemeReducer";


const combinedReducer = combineReducers({
    SnackBarReducer,
    ThemeReducer
});

const rootReducer = (state: any, action: { type: string }) => {
    return combinedReducer(state, action);
};

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false,
        });
    },
});

export const persistor = persistStore(store);

export default store;
