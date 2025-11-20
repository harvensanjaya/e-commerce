// services/authService.ts
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const authService = {
  login: async (username: string, password: string) => {
    const response = await axios.post("https://fakestoreapi.com/auth/login", {
      username,
      password,
    });
    return response.data;
  },

  getUser: async (token: string) => {
    try {
      return jwtDecode(token);
    } catch (err) {
      console.log("JWT decode failed:", err);
      return null;
    }
  },
};
