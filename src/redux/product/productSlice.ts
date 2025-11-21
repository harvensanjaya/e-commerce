import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../../services/product.service";
import type { Product } from "../../types/product";

interface ProductState {
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

export const fetchProducts = createAsyncThunk(
  "product/fetchAll",
  async (_, { getState }) => {
    const state = getState() as { product: ProductState };

    // ⏳ CACHE (5 menit)
    const now = Date.now();
    const CACHE_DURATION = 5 * 60 * 1000;

    if (
      state.product.lastFetch &&
      now - state.product.lastFetch < CACHE_DURATION
    ) {
      return state.product.items; // pakai cache
    }

    const response = await getAllProducts();
    return response;
  }
);

export const fetchProductById = createAsyncThunk(
  "product/fetchById",
  async (id: number | string, { getState }) => {
    const state = getState() as { product: ProductState };

    const cached = state.product.items.find((p) => p.id === Number(id));
    if (cached) return cached;

    const response = await getAllProducts();
    return response.find((p) => p.id === Number(id));
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to fetch products";
    });

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
