// redux/product/productSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "../../types/product";
import { fetchProductById, fetchProducts } from "./productThunks";

export interface ProductState {
  items: Product[];
  loading: boolean;
  error: string | null;
  lastFetch: number | null;

  selectedProduct: Product | null;
  selectedProductLoading: boolean;
}

const initialState: ProductState = {
  items: [],
  loading: false,
  error: null,
  lastFetch: null,

  selectedProduct: null,
  selectedProductLoading: false,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // 🔥 Fetch all products
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
      state.lastFetch = Date.now();
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to fetch products";
    });

    // 🔥 Fetch product by ID
    builder.addCase(fetchProductById.pending, (state) => {
      state.selectedProductLoading = true;
      state.error = null;
    });
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.selectedProductLoading = false;
      state.selectedProduct = action.payload || null;
    });
    builder.addCase(fetchProductById.rejected, (state, action) => {
      state.selectedProductLoading = false;
      state.error = action.error.message || "Failed to fetch product";
    });
  },
});

export default productSlice.reducer;
