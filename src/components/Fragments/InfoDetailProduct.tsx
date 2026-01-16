import { useEffect } from "react";
import { Bs0CircleFill, BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useNavbar } from "../../context/NavbarContext";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { updateProductLike } from "../../redux/product/productSlice";
import {
  addWishlistItem,
  removeWishlistItem,
} from "../../redux/wishlist/wishlistThunk";
import type { Product } from "../../types/product";
import Button from "../Elements/Button";

interface InfoDetailProductProps {
  onConfirm: () => void;
  className?: string;
  product: Product;
}

function InfoDetailProduct({
  onConfirm,
  className,
  product,
}: Readonly<InfoDetailProductProps>) {
  const { setIsShow } = useNavbar();
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.auth.user?._id ?? "");
  const navigate = useNavigate();

  const exists = useAppSelector(
    (state) =>
      Array.isArray(state.wishlist.items) &&
      state.wishlist.items.some((i) => i._id === product?._id)
  );

  const handleToggleWishlist = () => {
    if (!userId) {
      navigate("/login");
    }

    if (exists) {
      dispatch(
        removeWishlistItem({
          userId,
          productId: product._id,
        })
      );
      dispatch(
        updateProductLike({
          productId: product._id,
          like: product.like.filter((id) => id !== userId),
        })
      );
    } else {
      dispatch(
        addWishlistItem({
          userId,
          productId: product._id,
        })
      );
      dispatch(
        updateProductLike({
          productId: product._id,
          like: [...product.like, userId],
        })
      );
    }
  };

  const formatRupiah = (value: number = 0) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  useEffect(() => {
    setIsShow(true);
  }, []);

  return (
    <div
      className={`flex flex-col p-5 rounded-md w-full border border-slate-400 flex-1 mt-10 lg:mt-0 font-poppins ${className}`}
    >
      <div className="flex flex-col w-full gap-2 mb-5">
        <div className="flex justify-between w-full items-center">
          <h1 className="sm:text-3xl xs:text-2xl text-xl font-bold transition-all">
            {formatRupiah(product?.price)}
          </h1>
          <button onClick={handleToggleWishlist} className="cursor-pointer">
            {exists ? (
              <BsSuitHeartFill
                color="red"
                className="sm:text-2xl text-xl transition-all"
              />
            ) : (
              <BsSuitHeart className="sm:text-2xl text-xl transition-all" />
            )}
          </button>
        </div>
        <p className="sm:text-xl text-base transition-all">
          {product?.product_name}
        </p>
        <div className="flex xs:gap-10 gap-5 items-center text-slate-500 flex-wrap">
          <p className="text-sm text-slate-500">{product?.size}</p>
          <Bs0CircleFill size={5} />
          <p className="text-sm text-slate-500">{product?.condition}</p>
          <Bs0CircleFill size={5} />
          <p className="text-sm text-slate-500">{product?.from}</p>
        </div>
      </div>
      <p className="text-gray-700 text-md mb-2">Item Description</p>
      <p className="text-sm">{product?.description}</p>
      <div className="flex flex-col w-full mt-5 gap-3">
        <div className="flex justify-between w-full">
          <h1 className="flex-1 font-semibold sm:text-lg text-sm">
            Store name
          </h1>
          <p className="flex-1 sm:text-lg text-sm">{product?.store_name}</p>
        </div>
        <div className="flex justify-between w-full">
          <h1 className="flex-1 font-semibold sm:text-lg text-sm">Category</h1>
          <p className="flex-1 sm:text-lg text-sm">{product?.category}</p>
        </div>
        <div className="flex justify-between w-full">
          <h1 className="flex-1 font-semibold sm:text-lg text-sm">Brand</h1>
          <p className="flex-1 sm:text-lg text-sm">{product?.brand}</p>
        </div>
        <div className="flex justify-between w-full">
          <h1 className="flex-1 font-semibold sm:text-lg text-sm">Condition</h1>
          <p className="flex-1 sm:text-lg text-sm">{product?.condition}</p>
        </div>
        <div className="flex justify-between w-full">
          <h1 className="flex-1 font-semibold sm:text-lg text-sm">Uploaded</h1>
          <p className="flex-1 sm:text-lg text-sm">Tue, Nov 28, 2023</p>
        </div>
        <div className="flex justify-between w-full">
          <h1 className="flex-1 font-semibold sm:text-lg text-sm">Shipping</h1>
          <p className="flex-1 sm:text-lg text-sm">
            {formatRupiah(product?.shipping)}
          </p>
        </div>
      </div>

      <div>
        <Button className="bg-slate-500 text-white w-full mt-5">Buy Now</Button>
        <Button
          className="bg-white text-slate-500 w-full mt-5 border border-slate-500"
          onClick={(e) => {
            e.preventDefault();
            onConfirm();
          }}
        >
          Add to Cart
        </Button>
      </div>

      <div className="flex items-center w-full mt-5 gap-5 border border-slate-500 rounded-xl p-5">
        <img
          src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000"
          alt=""
          className="rounded-full w-8 h-8 sm:w-10 sm:h-10 aspect-square object-cover"
        />
        <div className="flex-auto">
          <p className="sm:text-base text-sm font-semibold">Dudung Sarudung</p>
          <div className="flex gap-2">
            {/* <div className="flex gap-1">
              {renderStar(product?.rating?.rate)}
            </div>
            <p className="text-xs text-gray-500">({product?.rating.count})</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoDetailProduct;
