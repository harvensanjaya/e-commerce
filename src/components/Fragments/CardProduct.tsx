import type React from "react";
import type { ReactNode } from "react";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";
import {
  addWishlistItem,
  removeWishlistItem,
} from "../../redux/wishlist/wishlistThunk";
import type { Product } from "../../types/product";

// interfaces
interface CardProductProps {
  children: ReactNode;
}

interface CardProductEmptyProps {
  children: ReactNode;
  to: string;
}

interface HeaderProps {
  image: string;
  to: string;
}

interface BodyProps {
  title: string;
  children: ReactNode;
  to: string;
}

interface FooterProps {
  price: string | number;
  product: Product;
}

const CardProduct: React.FC<CardProductProps> & {
  Header: React.FC<HeaderProps>;
  Body: React.FC<BodyProps>;
  Footer: React.FC<FooterProps>;
} = ({ children }) => {
  return (
    <div className="w-full rounded-lg shadow sm:p-4 p-2 flex flex-col gap-2 font-poppins">
      {children}
    </div>
  );
};

const CardProductEmpty: React.FC<CardProductEmptyProps> = ({
  children,
  to,
}) => {
  return (
    <Link
      to={to}
      className="max-w-sm rounded-md flex flex-col justify-center bg-slate-200"
    >
      <div className="px-5 py-5">
        <h5 className="text-2xl font-semibold tracking-tight text-black">
          {children}
        </h5>
      </div>
    </Link>
  );
};

const Header: React.FC<HeaderProps> = ({ image, to }) => {
  return (
    <Link to={to}>
      <img
        src={image}
        alt=""
        className="rounded-md object-cover object-center sm:h-60 h-40 aspect-square"
      />
    </Link>
  );
};

const Body: React.FC<BodyProps> = ({ title, children, to }) => {
  return (
    <Link className="" to={to}>
      <h5 className="text-xl font-semibold tracking-tight text-black">
        {title}
      </h5>
      <p className="text-xs text-black">{children}</p>
    </Link>
  );
};

const Footer: React.FC<FooterProps> = ({ price, product }) => {
  const dispatch = useDispatch();
  const wishlistItems = useAppSelector((state) => state.wishlist.items);

  // Ambil userId dari localStorage
  const userId = localStorage.getItem("userId") ?? "";

  // Cek apakah product sudah ada di wishlist
  const exists = wishlistItems.some((i) => i._id === product._id);

  const handleToggleWishlist = () => {
    if (!userId) {
      alert("You must login first!");
      return;
    }

    if (exists) {
      dispatch(removeWishlistItem({ userId, productId: product._id }));
    } else {
      dispatch(addWishlistItem({ userId, product }));
    }
  };

  // Format harga ke rupiah
  const formattedPrice =
    typeof price === "number"
      ? price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })
      : price;

  return (
    <div className="flex flex-col justify-between flex-auto">
      <span className="text-md text-black">{formattedPrice}</span>

      <div className="flex justify-between">
        <p>{product.size}</p>

        <button onClick={handleToggleWishlist} className="cursor-pointer">
          {exists ? (
            <BsSuitHeartFill size={20} color="red" />
          ) : (
            <BsSuitHeart size={20} />
          )}
        </button>
      </div>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export { CardProduct, CardProductEmpty };
