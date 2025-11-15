import { BsSuitHeart } from "react-icons/bs";

function CardProduct(props) {
  const { children } = props;
  return (
    <div className="max-w-sm rounded-md xl:w-1/6 flex flex-col justify-between">
      {children}
    </div>
  );
}

function CardProductEmpty(props) {
  const { children } = props;
  return (
    <a
      href=""
      className="max-w-sm rounded-md xl:w-1/7 flex flex-col justify-center bg-slate-200"
    >
      <div className="px-5 py-5">
        <h5 className="text-2xl font-semibold tracking-tight text-black">
          {children}
        </h5>
      </div>
    </a>
  );
}

const Header = (props) => {
  const { image } = props;
  return (
    <a href="">
      <img
        src={image}
        alt=""
        className="rounded-md w-full object-cover object-center"
      />
    </a>
  );
};

const Body = (props) => {
  const { children, title } = props;
  return (
    <div className="py-5">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-black">
          {title}
        </h5>
        <p className="text-xs text-black">{children}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price } = props;
  return (
    <div className="flex flex-col justify-between pb-5">
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
