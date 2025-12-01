// services/wishlist.service.ts
import api from "./api";

export const wishlistService = {
  // POST /wishlist/{userId}/{productId}
  addWishlist: async (userId: string, productId: string) => {
    const res = await api.post(`/wishlist/${userId}/${productId}`);
    return res.data.data;
  },

  // DELETE /wishlist/{userId}/{productId}
  removeWishlist: async (userId: string, productId: string) => {
    const res = await api.delete(`/wishlist/${userId}/${productId}`);
    return res.data.data;
  },

  // GET /wishlist
  getAllWishlists: async () => {
    const res = await api.get(`/wishlist`);
    return res.data.data;
  },

  // GET /wishlist/{userId}
  getUserWishlist: async (userId: string) => {
    const res = await api.get(`/wishlist/${userId}`);
    return res.data.data.products;
  },
};
