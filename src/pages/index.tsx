import { lazy, Suspense, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavbar } from "../context/NavbarContext";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { fetchProductsSort } from "../redux/product/productThunks";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import errorIcon from "../assets/404 error page with cat.lottie";
import loadingIcon from "../assets/Loader cat.lottie";

import Button from "../components/Elements/Button";
import { Input } from "../components/Elements/Input";
import Footer from "../components/Layouts/Footer";
import Navbar from "../components/Layouts/Navbar";

import { hideModal, showModal } from "../redux/modal/modalSlice";

/* ✅ LAZY LOAD SECTION */
const SectionProduct = lazy(
  () => import("../components/Layouts/SectionProduct")
);

const Home = () => {
  const dispatch = useAppDispatch();
  const { setIsShow } = useNavbar();

  const { user, justLoggedIn } = useAppSelector((state) => state.auth);
  const { popular, newest, loadingCount, error } = useAppSelector(
    (state) => state.product
  );
  const loading = loadingCount > 0;

  const goLogin = () => (window.location.href = "/login");

  useEffect(() => setIsShow(true), [setIsShow]);

  useEffect(() => {
    if (!justLoggedIn || !user) return;

    dispatch(showModal(`Authenticated as ${user.fullName}`));

    const timer = setTimeout(() => dispatch(hideModal()), 2500);

    dispatch({ type: "auth/clearLoginState" });

    return () => clearTimeout(timer);
  }, [justLoggedIn, user, dispatch]);

  useEffect(() => {
    dispatch(fetchProductsSort({ type: "like", orderBy: "descending" }));
    dispatch(fetchProductsSort({ type: "date", orderBy: "descending" }));
  }, [dispatch]);

  return (
    <div className="font-poppins">
      <Navbar />

      {/* MOBILE SEARCH */}
      <div className="flex lg:hidden flex-col gap-2 py-5 mt-20 items-center">
        <div className="flex w-4/5">
          <div className="flex bg-slate-100 rounded-xl border border-slate-400 items-center grow px-3 gap-3">
            <BsSearch />
            <Input
              type="text"
              placeholder="Search for items"
              className="border-0 sm:text-lg text-sm"
            />
          </div>
        </div>
      </div>

      {/* HERO */}
      <div className="relative lg:mt-20">
        <img
          src="https://images.pexels.com/photos/8311891/pexels-photo-8311891.jpeg"
          loading="lazy"
          decoding="async"
          className="w-full h-[40vh] md:h-[50vh] lg:h-[70vh] xl:h-[85vh] object-cover"
        />

        <div className="hidden md:flex absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 bg-white w-[40%] lg:w-[20%] p-5 rounded-xl flex-col">
          <h1 className="lg:text-4xl md:text-3xl mb-5 text-left">
            Ready to declutter your closet?
          </h1>
          <Button className="bg-slate-500 text-white w-full" onClick={goLogin}>
            Shop Now
          </Button>
        </div>
      </div>

      {/* LOADING */}
      {loading && (
        <div className="w-4/5 mx-auto relative text-center">
          <div className="p-4 bg-slate-900 text-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Products Loading...
          </div>
          <DotLottieReact src={loadingIcon} autoplay speed={0.75} />
        </div>
      )}

      {/* ERROR */}
      {!loading && error && (
        <div className="w-4/5 mx-auto relative text-center">
          <div className="p-4 bg-slate-900 text-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Products Not Found
          </div>
          <DotLottieReact src={errorIcon} autoplay speed={0.75} />
        </div>
      )}

      {/* PRODUCTS ✅ LAZY LOAD */}
      {!loading && !error && (
        <Suspense
          fallback={
            <div className="w-4/5 mx-auto relative text-center">
              <div className="p-4 bg-slate-900 text-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                Loading Data...
              </div>
              <DotLottieReact src={loadingIcon} autoplay speed={0.75} />
            </div>
          }
        >
          <SectionProduct title="Popular Items" products={popular} />

          {/* BRAND */}
          <div className="flex flex-col gap-2 py-5 items-center">
            <div className="flex w-4/5">
              <h1 className="text-3xl pt-10 pb-5 font-medium">Shop by Brand</h1>
            </div>

            <div className="flex gap-5 w-4/5 flex-wrap">
              {/* {brands.map((brand) => (
                <Link
                  key={brand}
                  to={`/products/${toSlug(brand)}`}
                  className="border border-black bg-white hover:bg-slate-700 hover:text-white transition px-3 py-2 rounded-md"
                >
                  {brand}
                </Link>
              ))} */}
            </div>
          </div>

          <SectionProduct title="New Product" products={newest} />
        </Suspense>
      )}

      <Footer />
    </div>
  );
};

export default Home;
