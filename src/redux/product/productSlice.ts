// redux/product/productSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../types/product";
import {
  fetchProductById,
  fetchProducts,
  fetchProductsSort,
} from "./productThunks";

export interface ProductState {
  items: Product[];

  popular: Product[];
  newest: Product[];

  loadingCount: number;
  error: string | null;
  lastFetch: number | null;

  selectedProduct: Product | null;
  selectedProductLoading: boolean;
}

const initialState: ProductState = {
  items: [],

  popular: [],
  newest: [],

  loadingCount: 0,
  error: null,
  lastFetch: null,

  selectedProduct: null,
  selectedProductLoading: false,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    updateProductLike: (
      state,
      action: PayloadAction<{ productId: string; like: string[] }>
    ) => {
      const { productId, like } = action.payload;
      const product = state.items.find((p) => p._id === productId);
      if (product) {
        product.like = like;
      }
    },
  },
  extraReducers: (builder) => {
    // 🔥 Fetch all products
    builder.addCase(fetchProducts.pending, (state) => {
      state.loadingCount += 1;
      state.error = null;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loadingCount -= 1;
      state.items = action.payload;
      state.lastFetch = Date.now();
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loadingCount -= 1;
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

    // 🔥 Fetch product by Sort
    builder.addCase(fetchProductsSort.pending, (state) => {
      state.loadingCount += 1;
      state.error = null;
    });
    builder.addCase(fetchProductsSort.fulfilled, (state, action) => {
      state.loadingCount -= 1;

      const { type } = action.meta.arg;

      if (type === "like") {
        state.popular = action.payload;
      }

      if (type === "date") {
        state.newest = action.payload;
      }

      state.lastFetch = Date.now();
    });
    builder.addCase(fetchProductsSort.rejected, (state, action) => {
      state.loadingCount -= 1;
      state.error = action.error.message || "Failed to fetch sorted products";
    });
  },
});

export const { updateProductLike } = productSlice.actions;
export default productSlice.reducer;
