import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CardProduct } from "../components/Fragments/CardProduct";
import { useNavbar } from "../context/NavbarContext";
import { useAppSelector } from "../hooks/reduxHooks";

import Footer from "../components/Layouts/Footer";
import Navbar from "../components/Layouts/Navbar";

const Products = () => {
  const { title } = useParams();
  const { setIsShow } = useNavbar();
  const isAll = location.pathname.startsWith("/products/all/");
  const { items: products } = useAppSelector((state) => state.product);

  const toSlug = (str: string) =>
    str
      .toLowerCase()
      .replaceAll(/[^a-z0-9]+/g, "-") // convert spaces & symbols → "-"
      .replaceAll(/^-+|-+$/g, "");

  const fromSlug = (slug: string) => slug.replaceAll("-", " ");

  const filtered = isAll
    ? products
    : products.filter((p) => toSlug(p.category) === title);

  const readableTitle = fromSlug(title || "").replaceAll(/\b\w/g, (c) =>
    c.toUpperCase()
  );

  useEffect(() => {
    setIsShow(true);
  }, []);

  return (
    <div className="flex flex-col">
      <Navbar />

      <div className="flex w-4/5 self-center mt-20">
        <h1 className="text-3xl pb-5 pt-5 font-poppins font-semibold">
          {readableTitle}
        </h1>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-6 gap-5 w-4/5 self-center">
        {filtered.length > 0 &&
          filtered.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header
                image={product.image}
                to={`/product/${product.id}`}
              />
              <CardProduct.Body
                title={product.title}
                to={`/product/${product.id}`}
              >
                {product.description.substring(0, 50)}...
              </CardProduct.Body>
              <CardProduct.Footer
                price={`$${product.price}`}
                product={product}
              />
            </CardProduct>
          ))}
      </div>

      <Footer />
    </div>
  );
};

export default Products;
