// services/authService.ts
import axios from "axios";

export const authService = {
  login: async (identifier: string, password: string) => {
    const response = await axios.post(
      "https://back-end-vintage.vercel.app/api/auth/login",
      {
        identifier,
        password,
      }
    );
    return response.data;
  },

  getUser: async (token: string) => {
    try {
      const response = await axios.get(
        "https://back-end-vintage.vercel.app/api/auth/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // console.log(response.data);
      return response.data.data;
    } catch (err) {
      console.log("Get User Failed", err);
      return null;
    }
  },
};
