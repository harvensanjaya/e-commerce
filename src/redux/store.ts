import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import cartReducer from "./cart/cartSlice";
import modalReducer from "./modal/modalSlice";
import productReducer from "./product/productSlice";
import wishlistReducer from "./wishlist/wishlistSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
    modal: modalReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
