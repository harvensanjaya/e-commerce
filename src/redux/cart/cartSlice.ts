import { createSlice } from "@reduxjs/toolkit";
import type { Cart } from "../../types/cart";
import { addProductCart, fetchUserCart, removeProductCart } from "./cartThunks";

interface CartState {
  items: Cart[];
  loading: boolean;
  error: string | null;
}

const initialState: CartState = {
  items: [],
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    // Fetch cart user
    builder.addCase(fetchUserCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUserCart.fulfilled, (state, action) => {
      state.loading = false;
      state.items = Array.isArray(action.payload) ? action.payload : [];
    });
    builder.addCase(fetchUserCart.rejected, (state) => {
      state.loading = false;
      state.error = "Failed to load wishlist";
    });

    // Add wishlist
    builder.addCase(addProductCart.fulfilled, (state, action) => {
      state.items = Array.isArray(action.payload)
        ? action.payload
        : state.items;
    });

    // Remove wishlist
    builder.addCase(removeProductCart.fulfilled, (state, action) => {
      state.items = Array.isArray(action.payload)
        ? action.payload
        : state.items;
    });
  },
});

export default cartSlice.reducer;
