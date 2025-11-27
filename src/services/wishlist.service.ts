// services/wishlist.service.ts
import axios from "axios";

const API = "https://back-end-vintage.vercel.app/api";

export const wishlistService = {
  // POST /wishlist/{userId}/{productId}
  addWishlist: async (userId: string, productId: string) => {
    const res = await axios.post(`${API}/wishlist/${userId}/${productId}`);
    return res.data;
  },

  // DELETE /wishlist/{userId}/{productId}
  removeWishlist: async (userId: string, productId: string) => {
    const res = await axios.delete(`${API}/wishlist/${userId}/${productId}`);
    return res.data;
  },

  // GET /wishlist
  getAllWishlists: async () => {
    const res = await axios.get(`${API}/wishlist`);
    return res.data;
  },

  // GET /wishlist/{userId}
  getUserWishlist: async (userId: string) => {
    const res = await axios.get(`${API}/wishlist/${userId}`);
    return res.data;
  },
};
