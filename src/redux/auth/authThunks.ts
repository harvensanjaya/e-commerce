// redux/auth/authThunks.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "../../services/auth.service";

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (data: { username: string; password: string }, thunkAPI) => {
    try {
      const result = await authService.login(data.username, data.password);
      const token = result.data

      localStorage.setItem("token", token)

      const user = await authService.getUser(token)

      return {token, user}
    } catch (err: any) {
      const message = err?.response?.data?.meta?.message || "Login failed.";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const fetchUserThunk = createAsyncThunk(
  "auth/me",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return thunkAPI.rejectWithValue("No Token Found");

      const user = await authService.getUser(token);
      return user;
    } catch (err: any) {
      return thunkAPI.rejectWithValue("Failed to fetch user");
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

