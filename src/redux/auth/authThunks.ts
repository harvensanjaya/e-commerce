// redux/auth/authThunks.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "../../services/auth.service";

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (data: { username: string; password: string }, thunkAPI) => {
    try {
      const result = await authService.login(data.username, data.password);
      return { token: result.data };
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

// Register thunk function will be added later
// export const registerThunk = createAsyncThunk(
//   'auth/register',
//   async (
//     data: {
//       email: string,
//       username: string,
//       password: string,
//       confirmPassword: string
//     },
//     thunkAPI
//   ) => (
//     try {
//       // ⭐ FakeStoreAPI doesn't allow register new user,
//       // but let's assume your backend accepts this
//       const res = await axios.post("https://fakestoreapi.com/users", data);

//       return res.data;
//     } catch (err: any) {
//       const message =
//         err?.response?.data?.message || "Registration failed, try again.";

//       return thunkAPI.rejectWithValue(message);
//     }
//   )
// )
