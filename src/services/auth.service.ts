// services/authService.ts
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const authService = {
  login: async (identifier: string, password: string) => {
    const response = await axios.post(`${API}/auth/login`, {
      identifier,
      password,
    });
    return response.data;
  },

  getUser: async (token: string) => {
    try {
      const response = await axios.get(`${API}/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data.data;
    } catch (err) {
      console.log("Get User Failed", err);
      return null;
    }
  },

  register: async (
    fullName: string,
    email: string,
    username: string,
    password: string,
    confirmPassword: string
  ) => {
    const response = await axios.post(`${API}/auth/register`, {
      fullName,
      username,
      email,
      password,
      confirmPassword,
    });

    return response.data;
  },
};
