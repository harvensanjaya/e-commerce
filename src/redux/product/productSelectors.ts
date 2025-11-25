import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export const selectAllProducts = (state: RootState) => state.product.items;

export const selectProductsByBrand = (brand: string) =>
  createSelector(
    [selectAllProducts],
    (products) => products.filter((p) => p.brand === brand)
  );
