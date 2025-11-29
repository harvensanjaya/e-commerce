import api from "./api";
import type { Product } from "../types/product";

export const getAllProducts = async (): Promise<Product[]> => {
  const response = await api.get(`/product`);
  return response.data.data;
};

export const fetchProductByIdServices = async (id: string) => {
  const response = await api.get(`/product/${id}`);
  return response.data;
};
