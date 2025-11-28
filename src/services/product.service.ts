import axios from "axios";
import type { Product } from "../types/product";

const API = import.meta.env.VITE_API_URL;

export const getAllProducts = async (): Promise<Product[]> => {
  const response = await axios.get(`${API}/product`);
  return response.data.data;
};

export const fetchProductByIdServices = async (id: string) => {
  const response = await axios.get(`${API}/product/${id}`);
  return response.data;
};
