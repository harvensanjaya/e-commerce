export interface Product {
  _id: number;
  brand: string;
  category: string;
  condition: string;
  description: string;
  from: string;
  images: string[];
  price: number;
  product_name: string;
  shipping: number;
  size: string;
  rating: { rate: number; count: number };
}
