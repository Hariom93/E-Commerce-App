import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/CartSlices";
import SearchSlice from "./Slices/SearchSlice";

export const Store = configureStore({
    reducer: {
        cart: CartSlice.reducer,
        search: SearchSlice,
    }
});