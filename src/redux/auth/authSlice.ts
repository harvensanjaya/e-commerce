import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import { fetchUserThunk, loginThunk } from "./authThunks";

interface AuthState {
  token: string | null;
  user: any | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  justLoggedIn: boolean;
}

const tokenFromStorage = localStorage.getItem("token");

const initialState: AuthState = {
  token: tokenFromStorage,
  user: tokenFromStorage ? jwtDecode(tokenFromStorage) : null,
  loading: false,
  error: null,
  isAuthenticated: !!tokenFromStorage,
  justLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
    },
    clearLoginState: (state) => {
      state.justLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        const token = action.payload.token;

        state.loading = false;
        state.token = token;
        state.user = jwtDecode(token);
        state.isAuthenticated = true;
        state.justLoggedIn = true;

        localStorage.setItem("token", token);
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.isAuthenticated = false;
      });

    builder
      .addCase(fetchUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(fetchUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.user = null;
        state.isAuthenticated = false;
      });
  },
});

export const { logout, clearLoginState } = authSlice.actions;
export default authSlice.reducer;
