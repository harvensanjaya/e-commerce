// services/product.service.ts
import api from "./api";

type SortType = "like" | "date";
type OrderBy = "ascending" | "descending";

interface PriceFilter {
  lowest: number;
  highest: number;
}

const DEFAULT_PRICE_FILTER: PriceFilter = {
  lowest: 0,
  highest: 0,
};

export const productService = {
  getAllProducts: async () => {
    const res = await api.get("/product");
    return res.data.data;
  },

  getProductsSort: async (
    type: SortType,
    orderBy: OrderBy,
    price: PriceFilter = DEFAULT_PRICE_FILTER
  ) => {
    const res = await api.post(`/product/filter/${type}/${orderBy}`, price);
    return res.data.data;
  },

  getProductById: async (id: string) => {
    const res = await api.get(`/product/${id}`);
    return res.data.data;
  },
};
