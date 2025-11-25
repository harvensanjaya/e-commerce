import axios from "axios";
import type { Product } from "../types/product";

export const getAllProducts = async (): Promise<Product[]> => {
  const response = await axios.get(
    "https://back-end-vintage.vercel.app/api/product"
  );
  return response.data.data;
};

export const fetchProductByIdServices = async (id: string) => {
  const response = await axios.get(
    `https://back-end-vintage.vercel.app/api/product/${id}`
  )
  return response.data;
}