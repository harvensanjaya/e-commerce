import api from "./api";

export const cartService = {
  getCart: async (userId: string) => {
    const res = await api.get(`/cart/${userId}`);
    return res.data.data;
  },

  addProductCart: async (userId: string, productId: string) => {
    const res = await api.put(`/cart/${userId}/${productId}`);
    return res.data.data;
  },

  decreaseProductCart: async (userId: string, productId: string) => {
    const res = await api.put(`/cart/${userId}/${productId}`);
    return res.data.data;
  },

  removeProductCart: async (userId: string, productId: string) => {
    const res = await api.delete(`/cart/${userId}/${productId}`);
    return res.data.data;
  },
};
