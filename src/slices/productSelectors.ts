import type { RootState } from "../store/store";

export const selectAllProducts = (state: RootState) => state.product.items;

export const selectProductsByCategory = (category: string) => (state: RootState) =>
  state.product.items.filter((p) => p.category === category);
