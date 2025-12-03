import axios from "axios";
import { logout } from "../redux/auth/authSlice";
import { store } from "../redux/store";

const API = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      return Promise.reject(error);
    }

    const status = error.response.status;
    const message = error.response.data?.message;

    const isJwtExpired =
      message?.toLowerCase().includes("jwt") ||
      message?.toLowerCase().includes("expired");

    if (status === 500 || isJwtExpired) {
      localStorage.removeItem("token");

      store.dispatch(logout());
    }

    return Promise.reject(error);
  }
);

export default api;
