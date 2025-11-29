// services/authService.ts
import api from "./api";

export const authService = {
  login: async (identifier: string, password: string) => {
    const response = await api.post(`/auth/login`, {
      identifier,
      password,
    });
    return response.data;
  },

  getUser: async (token: string) => {
    try {
      const response = await api.get(`/auth/me`, {
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
    const response = await api.post(`/auth/register`, {
      fullName,
      username,
      email,
      password,
      confirmPassword,
    });

    return response.data;
  },
};
