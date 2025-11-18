import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { getAllProducts} from '../services/product.service'
import type { Product } from '../types/product'

interface ProductState {
    items: Product[];
    loading: boolean;
    error: string | null;
    lastFetch: number | null;
  }

  const initialState: ProductState = {
    items: [],
    loading: false,
    error: null,
    lastFetch: null
  };

export const fetchProducts = createAsyncThunk(
  "product/fetchAll",
  async (_, { getState }) => {
    const state = getState() as { product: ProductState };

    // ⏳ CACHE (5 menit)
    const now = Date.now();
    if (state.product.lastFetch && now - state.product.lastFetch < 5 * 60 * 1000) {
      return state.product.items; // pakai cache
    }

    const response = await getAllProducts();
    return response;
  }
);

  export const productSlice = createSlice({
    name: 'product',
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
        state.error = action.error.message || 'Failed to fetch products';
      });
    },
  });

  export default productSlice.reducer