// redux/product/productThunks.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { productService } from "../../services/product.service";
import type { ProductState } from "./productSlice";

interface FetchSortPayload {
  type: "like" | "date";
  orderBy: "ascending" | "descending";
}

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

    const data = await productService.getAllProducts();
    return data;
  }
);

// 🔥 Fetch produk berdasarkan sorting
export const fetchProductsSort = createAsyncThunk(
  "product/fetchSort",
  async ({ type, orderBy }: FetchSortPayload) => {
    const data = await productService.getProductsSort(type, orderBy);
    return data;
  }
);

// 🔥 Fetch detail produk berdasarkan ID
export const fetchProductById = createAsyncThunk(
  "product/fetchById",
  async (id: string) => {
    const data = await productService.getProductById(id);
    return data;
  }
);
