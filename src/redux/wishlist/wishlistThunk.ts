// redux/wishlist/wishlistThunks.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { wishlistService } from "../../services/wishlist.service";
import type { Product } from "../../types/product";

// Ambil wishlist user
export const fetchUserWishlist = createAsyncThunk(
  "wishlist/fetchUserWishlist",
  async (userId: string) => {
    const response = await wishlistService.getUserWishlist(userId);
    return response.data; // pastikan backend kirim array product
  }
);

// Tambah wishlist
export const addWishlistItem = createAsyncThunk(
  "wishlist/addWishlistItem",
  async (
    { userId, product }: { userId: string; product: Product },
    { rejectWithValue }
  ) => {
    try {
      await wishlistService.addWishlist(userId, product._id);
      return product;
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
      await wishlistService.removeWishlist(userId, productId);
      return productId;
    } catch (err) {
      return rejectWithValue("Failed to remove wishlist");
    }
  }
);
