// redux/product/productThunks.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProducts } from "../../services/product.service";
import type { ProductState } from "./productSlice";

// 🔥 Fetch semua produk (dengan caching 5 menit)
export const fetchProducts = createAsyncThunk(
  "product/fetchAll",
  async (_, { getState }) => {
    const state = getState() as { product: ProductState };

    const now = Date.now();
    const CACHE_DURATION = 5 * 60 * 1000;

    if (
      state.product.lastFetch &&
      now - state.product.lastFetch < CACHE_DURATION
    ) {
      return state.product.items;
    }

    const response = await getAllProducts();
    return response;
  }
);

// 🔥 Fetch detail produk berdasarkan ID
export const fetchProductById = createAsyncThunk(
  "product/fetchById",
  async (id: number | string, { getState }) => {
    const state = getState() as { product: ProductState };

    const cached = state.product.items.find((p) => p._id === Number(id));
    if (cached) return cached;

    const response = await getAllProducts();
    return response.find((p) => p._id === Number(id));
  }
);
