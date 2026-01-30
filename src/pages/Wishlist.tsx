import { useEffect } from "react";
import { useNavbar } from "../context/NavbarContext";
import { useAppSelector } from "../hooks/reduxHooks";

import { CardProduct } from "../components/Fragments/CardProduct";
import Footer from "../components/Layouts/Footer";
import Navbar from "../components/Layouts/Navbar";

const Wishlist = () => {
  const { setIsShow } = useNavbar();
  const wishlistItems = useAppSelector((state) => state.wishlist.items);

  useEffect(() => {
    setIsShow(true);
  }, []);

  return (
    <div className="flex flex-col">
      <Navbar />

      <div className="flex w-4/5 self-center mt-20">
        <h1 className="text-3xl pb-5 pt-5 font-poppins font-semibold">
          Favorite Items
        </h1>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-6 gap-5 w-4/5 self-center">
        {wishlistItems.length === 0 && (
          <p className="text-gray-500 text-lg">
            You don’t have any wishlist yet.
          </p>
        )}

        {wishlistItems.map((product) => (
          <CardProduct key={product._id}>
            <CardProduct.Header
              image={product.images?.[0]}
              to={`/product/${product._id}`}
            />
            <CardProduct.Body
              title={product.product_name}
              to={`/product/${product._id}`}
            >
              {product.description
                ? `${product.description.substring(0, 50)}...`
                : ""}
            </CardProduct.Body>
            <CardProduct.Footer
              price={product.price}
              product={product}
              showLike={false}
            />
          </CardProduct>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Wishlist;
