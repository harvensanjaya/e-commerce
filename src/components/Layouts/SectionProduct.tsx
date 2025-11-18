import type { Product } from "../../types/product";
import { CardProduct, CardProductEmpty } from "../Fragments/CardProduct";
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { fetchProducts } from '../../store/productSlice'
import { useEffect } from "react";
import { selectAllProducts } from "../../slices/productSelectors";

interface SectionProductProps {
  readonly title: string;
  readonly products: Product[];
}

function SectionProduct({ title, products }: SectionProductProps) {
  return (
    <div className={`flex flex-col gap-2 py-5 items-center `}>
      <div className="flex w-4/5 mt-10 mb-5 self-center justify-between items-center">
        <h1 className="text-3xl font-medium">{title}</h1>

        <p className="text-slate-500 text-lg">See All</p>
      </div>

      <div className="xl:flex xl:gap-5 gap-5 w-4/5 grid lg:grid-cols-3 grid-cols-2 transition-all">
        {products.length > 0 &&
          products.slice(0, 5).map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body title="Linen T-Shirt">
                {product.description.substring(0, 50)}...
              </CardProduct.Body>
              <CardProduct.Footer price={`$${product.price}`} />
            </CardProduct>
          ))}
        <CardProductEmpty>See all Products</CardProductEmpty>
      </div>
    </div>
  );
}

export default SectionProduct;
