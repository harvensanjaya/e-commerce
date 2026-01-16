import type { Product } from "./product";

export interface CartItem {
  productId: Product;
  qty: number;
}

export interface Cart {
  _id: string;
  userId: string;
  items: CartItem[];
}
