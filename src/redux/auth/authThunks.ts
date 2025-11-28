// redux/auth/authThunks.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "../../services/auth.service";
import { fetchUserWishlist } from "../wishlist/wishlistThunk";

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (
    data: { username: string; password: string },
    { dispatch, rejectWithValue }
  ) => {
    try {
      // 1. Login → dapat token
      const result = await authService.login(data.username, data.password);
      const token = result.data;

      localStorage.setItem("token", token);

      // 2. Fetch data user
      const user = await authService.getUser(token);

      // 3. Otomatis fetch wishlist
      if (user?._id) {
        dispatch(fetchUserWishlist(user._id));
      }

      // 4. Return ke reducer
      return { token, user };
    } catch (err: any) {
      const message = err?.response?.data?.meta?.message || "Login failed.";
      return rejectWithValue(message);
    }
  }
);

export const fetchUserThunk = createAsyncThunk(
  "auth/me",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return rejectWithValue("No Token Found");

      // fetch user
      const user = await authService.getUser(token);

      // otomatis fetch wishlist (tanpa login)
      if (user?._id) {
        dispatch(fetchUserWishlist(user._id));
      }

      return user;
    } catch {
      return rejectWithValue("Failed to fetch user");
    }
  }
);

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (
    data: {
      fullName: string;
      email: string;
      username: string;
      password: string;
      confirmPassword: string;
    },
    thunkAPI
  ) => {
    try {
      const result = await authService.register(
        data.fullName,
        data.email,
        data.username,
        data.password,
        data.confirmPassword
      )

      return result
    } catch (err: any) {
      const message =
        err?.response?.data?.meta?.message || "Registration failed, try again.";

      return thunkAPI.rejectWithValue(message);
    }
  }
)

