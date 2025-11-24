import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { fetchProductById } from "../redux/product/productSlice";

import { BsChevronLeft, BsChevronRight, BsSearch } from "react-icons/bs";
import { Input } from "../components/Elements/Input";
import CartAdded from "../components/Fragments/CartAdded";
import InfoDetailProduct from "../components/Fragments/InfoDetailProduct";
import Footer from "../components/Layouts/Footer";
import Navbar from "../components/Layouts/Navbar";

function DetailProduct() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [currentImage, setCurrentImage] = useState(0);
  const [showCart, setShowCart] = useState(false);

  const { selectedProduct: product, selectedProductLoading } = useAppSelector(
    (state) => state.product
  );

  const images = product?.images || [];

  const prevSlide = () => {
    const isFirstSlide = currentImage === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentImage - 1;
    setCurrentImage(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentImage === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentImage + 1;
    setCurrentImage(newIndex);
  };

  useEffect(() => {
    if (id) dispatch(fetchProductById(Number(id)));
  }, [id, dispatch]);

  if (selectedProductLoading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="">
      <Navbar />

      <div className="flex lg:hidden flex-col gap-2 py-5 items-center mt-20">
        <div className="flex w-4/5 self-center">
          {/* <h1 className='text-3xl pt-10 pb-5 font-medium'>Shop by Brand</h1> */}
          <div className="flex bg-slate-100 rounded-xl border border-slate-400 items-center grow px-3 gap-3 w-2/4">
            <BsSearch />
            <Input
              type="text"
              placeholder="Search for items"
              name="search"
              className="border-0 text-lg"
            />
          </div>
        </div>
      </div>

      <div className="flex lg:grid lg:grid-cols-10 flex-col py-5 items-center lg:mt-20 w-4/5 mx-auto ">
        <div className="lg:col-span-6 flex lg:flex-col md:flex-row-reverse flex-col lg:items-center md:items-start items-center justify-between w-full ">
          {/* Main Image Container */}
          <div className="relative xs:w-[400px] xs:h-[500px] sm:w-[450px] sm:h-[580px] flex justify-center items-center flex-auto">
            <img
              src={product.image}
              alt="Product"
              className="object-cover h-[400px] sm:w-[450px] sm:h-[580px] lg:w-full lg:h-full rounded-lg transition-all duration-300"
            />

            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-2 text-slate-600 hover:text-slate-800 bg-white/70 p-2 rounded-full"
            >
              <BsChevronLeft size={25} />
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-2 text-slate-600 hover:text-slate-800 bg-white/70 p-2 rounded-full"
            >
              <BsChevronRight size={25} />
            </button>
          </div>

          {/* Thumbnail List */}
          <div className="flex gap-3 lg:mt-4 lg:flex-row md:flex-col flex-row flex-1 md:mt-0 mt-4">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setCurrentImage(i)}
                className={`w-20 h-25sm:w-25 sm:h-30 object-cover rounded-md cursor-pointer border-2 opacity-50 transition-all ${
                  i === currentImage
                    ? "border-slate-700 opacity-100"
                    : "border-transparent hover:border-slate-400"
                }`}
              />
            ))}
          </div>
        </div>

        <InfoDetailProduct
          onConfirm={() => setShowCart(true)}
          className="col-span-4"
          product={product}
        />
      </div>

      {/* <SectionProduct title="Other Product" products={products} /> */}

      <Footer />
      <CartAdded isOpen={showCart} onConfirm={() => setShowCart(false)} />
    </div>
  );
}

export default DetailProduct;
