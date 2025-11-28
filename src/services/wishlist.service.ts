// services/wishlist.service.ts
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const wishlistService = {
  // POST /wishlist/{userId}/{productId}
  addWishlist: async (userId: string, productId: string) => {
    const res = await axios.post(`${API}/wishlist/${userId}/${productId}`);
    return res.data.data;
  },

  // DELETE /wishlist/{userId}/{productId}
  removeWishlist: async (userId: string, productId: string) => {
    const res = await axios.delete(`${API}/wishlist/${userId}/${productId}`);
    return res.data.data;
  },

  // GET /wishlist
  getAllWishlists: async () => {
    const res = await axios.get(`${API}/wishlist`);
    return res.data.data;
  },

  // GET /wishlist/{userId}
  getUserWishlist: async (userId: string) => {
    const res = await axios.get(`${API}/wishlist/${userId}`);
    return res.data.data.products;
  },
};
