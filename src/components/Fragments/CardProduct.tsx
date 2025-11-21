import type React from "react";
import type { ReactNode } from "react";
import { BsSuitHeart } from "react-icons/bs";
import { Link } from "react-router-dom";

// interfaces
interface CardProductProps {
  children: ReactNode;
  to: string;
}

interface CardProductEmptyProps {
  children: ReactNode;
  to: string;
}

interface HeaderProps {
  image: string;
}

interface BodyProps {
  title: string;
  children: ReactNode;
}

interface FooterProps {
  price: string | number;
}

const CardProduct: React.FC<CardProductProps> & {
  Header: React.FC<HeaderProps>;
  Body: React.FC<BodyProps>;
  Footer: React.FC<FooterProps>;
} = ({ children, to }) => {
  return (
    <Link
      to={to}
      className="w-full rounded-lg shadow sm:p-4 p-2 flex flex-col gap-2 font-poppins justify-between"
    >
      {children}
    </Link>
  );
};

const CardProductEmpty: React.FC<CardProductEmptyProps> = ({ children,to }) => {
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

const Header: React.FC<HeaderProps> = ({ image }) => {
  return (
    <img
      src={image}
      alt=""
      className="rounded-md object-cover object-center sm:h-60 h-40 aspect-square"
    />
  );
};

const Body: React.FC<BodyProps> = ({ title, children }) => {
  return (
    <div className="">
      <h5 className="text-xl font-semibold tracking-tight text-black">
        {title}
      </h5>
      <p className="text-xs text-black">{children}</p>
    </div>
  );
};

const Footer: React.FC<FooterProps> = ({ price }) => {
  return (
    <div className="flex flex-col justify-between">
      <span className="text-md text-black">{price}</span>
      <div className="flex justify-between">
        <p>8 / M</p>
        <div className="flex items-center">
          <BsSuitHeart size={15} color="black" />
          <p className="ml-1 text-black">12</p>
        </div>
      </div>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export { CardProduct, CardProductEmpty };
