import { Link } from "react-router-dom";
import type { Product } from "../../types/product";
import { CardProduct, CardProductEmpty } from "../Fragments/CardProduct";

interface SectionProductProps {
  readonly title: string;
  readonly products: Product[];
}

function SectionProduct({ title, products }: SectionProductProps) {
  const slug = title.toLowerCase().replace(/\s+/g, "-");
  const DEFAULT_IMAGE =
    "https://media.istockphoto.com/id/861576608/vector/empty-shopping-bag-icon-online-business-vector-icon-template.jpg?s=612x612&w=0&k=20&c=I7MbHHcjhRH4Dy0NVpf4ZN4gn8FVDnwn99YdRW2x5k0=";
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
            <CardProduct key={product._id}>
              <CardProduct.Header
                image={product.images[0] ?? DEFAULT_IMAGE}
                to={`/product/${product._id}`}
              />
              <CardProduct.Body
                title={product.product_name}
                to={`/product/${product._id}`}
              >
                {product.description.substring(0, 50)}...
              </CardProduct.Body>
              <CardProduct.Footer
                price={`$${product.price}`}
                product={product}
              />
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
