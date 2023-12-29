import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slices/seacrhSlice";
import filterReducer from "./slices/filterSlice";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    filter: filterReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
