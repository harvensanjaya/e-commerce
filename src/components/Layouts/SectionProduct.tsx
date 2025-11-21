import type { Product } from "../../types/product";
import { CardProduct, CardProductEmpty } from "../Fragments/CardProduct";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";
import { useDispatch, useSelector } from "react-redux";

interface SectionProductProps {
  readonly title: string;
  readonly products: Product[];
}

function SectionProduct({ title, products }: SectionProductProps) {
  const slug = title.toLowerCase().replace(/\s+/g, "-");

  const dispatch = useDispatch();
  const wishlistItems = useAppSelector((state) => state.wishlist.items);
  const exists = wishlistItems.some((i) => i.id === product.id);

  return (
    <div className={`flex flex-col gap-2 py-5 items-center `}>
      <div className="flex w-4/5 mt-10 mb-5 self-center justify-between items-center">
        <h1 className="text-3xl font-medium">{title}</h1>

        <Link className="text-slate-500 text-lg" to={`/products/all/${slug}`}>
          See All
        </Link>
      </div>

      <div className="xl:flex xl:gap-5 gap-5 w-4/5 grid lg:grid-cols-3 grid-cols-2 transition-all">
        {products.length > 0 &&
          products.slice(0, 5).map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header
                image={product.image}
                to={`/product/${product.id}`}
              />
              <CardProduct.Body
                title="Linen T-Shirt"
                to={`/product/${product.id}`}
              >
                {product.description.substring(0, 50)}...
              </CardProduct.Body>
              <CardProduct.Footer price={`$${product.price}`} />
            </CardProduct>
          ))}
        <CardProductEmpty to={`/products/all/${slug}`}>
          See all Products
        </CardProductEmpty>
      </div>
    </div>
  );
}

export default SectionProduct;
