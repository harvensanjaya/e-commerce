import { createAsyncThunk } from "@reduxjs/toolkit";
import { cartService } from "../../services/cart.service";

export const fetchUserCart = createAsyncThunk(
  "cart/fetchUserCart",
  async (userId: string) => {
    const cartProducts = await cartService.getCart(userId);

    return cartProducts;
  }
);

export const addProductCart = createAsyncThunk(
  "cart/addCartProduct",
  async (
    { userId, productId }: { userId: string; productId: string },
    { rejectWithValue }
  ) => {
    try {
      const data = await cartService.addProductCart(userId, productId);

      return data.data;
    } catch (err) {
      return rejectWithValue("Failed to add Cart");
    }
  }
);

export const removeProductCart = createAsyncThunk(
  "cart/removeCartProduct",
  async (
    { userId, productId }: { userId: string; productId: string },
    { rejectWithValue }
  ) => {
    try {
      const data = await cartService.removeProductCart(userId, productId);

      return data.data;
    } catch (err) {
      return rejectWithValue("Failed to remove cart");
    }
  }
);
