// redux/wishlist/wishlistSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "../../types/product";
import {
  addWishlistItem,
  fetchUserWishlist,
  removeWishlistItem,
} from "./wishlistThunk";

interface WishlistState {
  items: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: WishlistState = {
  items: [],
  loading: false,
  error: null,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    // Fetch wishlist user
    builder.addCase(fetchUserWishlist.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUserWishlist.fulfilled, (state, action) => {
      state.loading = false;
      state.items = Array.isArray(action.payload) ? action.payload : [];
    });
    builder.addCase(fetchUserWishlist.rejected, (state) => {
      state.loading = false;
      state.error = "Failed to load wishlist";
    });

    // Add wishlist
    builder.addCase(addWishlistItem.fulfilled, (state, action) => {
      state.items = Array.isArray(action.payload)
        ? action.payload
        : state.items;
    });

    // Remove wishlist
    builder.addCase(removeWishlistItem.fulfilled, (state, action) => {
      state.items = Array.isArray(action.payload)
        ? action.payload
        : state.items;
    });
  },
});

export default wishlistSlice.reducer;
