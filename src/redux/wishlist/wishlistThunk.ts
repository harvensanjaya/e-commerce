// redux/wishlist/wishlistThunks.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { wishlistService } from "../../services/wishlist.service";

// Ambil wishlist user
export const fetchUserWishlist = createAsyncThunk(
  "wishlist/fetchUserWishlist",
  async (userId: string) => {
    const products = await wishlistService.getUserWishlist(userId);
    return products; 
  }
);

// Tambah wishlist
export const addWishlistItem = createAsyncThunk(
  "wishlist/addWishlistItem",
  async (
    { userId, productId }: { userId: string; productId: string},
    { rejectWithValue }
  ) => {
    try {
      const data = await wishlistService.addWishlist(userId, productId);
      return data.products;
    } catch (err) {
      return rejectWithValue("Failed to add wishlist");
    }
  }
);

// Hapus wishlist
export const removeWishlistItem = createAsyncThunk(
  "wishlist/removeWishlistItem",
  async (
    { userId, productId }: { userId: string; productId: string },
    { rejectWithValue }
  ) => {
    try {
      const data = await wishlistService.removeWishlist(userId, productId);
      return data.products;
    } catch (err) {
      return rejectWithValue("Failed to remove wishlist");
    }
  }
);
