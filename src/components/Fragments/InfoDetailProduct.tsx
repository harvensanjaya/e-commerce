import { useEffect } from "react";
import { Bs0CircleFill, BsHeart, BsStarFill } from "react-icons/bs";
import { useNavbar } from "../../context/NavbarContext";
import Button from "../Elements/Button";

interface InfoDetailProductProps {
  onConfirm: () => void;
  className?: string;
}

function InfoDetailProduct({ onConfirm, className }: InfoDetailProductProps) {
  const { setIsLogin, setIsShow } = useNavbar();

  useEffect(() => {
    setIsLogin(true);
    setIsShow(true);
  }, []);
  return (
    <div
      className={`flex flex-col p-5 rounded-md w-full border border-slate-400 flex-1 mt-10 lg:mt-0 ${className}`}
    >
      <div className="flex flex-col w-full gap-2 mb-5">
        <div className="flex justify-between w-full items-center">
          <h1 className="sm:text-3xl xs:text-2xl text-xl font-bold transition-all">
            Rp 89.000
          </h1>
          <BsHeart className="sm:text-2xl text-xl transition-all" />
        </div>
        <p className="sm:text-xl text-base transition-all">Tshirt Pria</p>
        <div className="flex xs:gap-10 gap-5 items-center text-slate-500 flex-wrap">
          <p className="text-sm text-slate-500">XL</p>
          <Bs0CircleFill size={5} />
          <p className="text-sm text-slate-500">Very Good</p>
          <Bs0CircleFill size={5} />
          <p className="text-sm text-slate-500">Cianjur</p>
        </div>
      </div>
      <p className="text-gray-700 text-md mb-2">Item Description</p>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        deserunt facilis officia non cumque quaerat assumenda atque ipsam nihil
        dolores reiciendis repudiandae repellat, sit consectetur similique
        magnam, magni aliquid recusandae.
      </p>
      <div className="flex flex-col w-full mt-5 gap-3">
        <div className="flex justify-between w-full">
          <h1 className="flex-1 font-semibold sm:text-lg text-sm">
            Store name
          </h1>
          <p className="flex-1 sm:text-lg text-sm">Marnie</p>
        </div>
        <div className="flex justify-between w-full">
          <h1 className="flex-1 font-semibold sm:text-lg text-sm">Category</h1>
          <p className="flex-1 sm:text-lg text-sm">Dress</p>
        </div>
        <div className="flex justify-between w-full">
          <h1 className="flex-1 font-semibold sm:text-lg text-sm">Brand</h1>
          <p className="flex-1 sm:text-lg text-sm">Boho</p>
        </div>
        <div className="flex justify-between w-full">
          <h1 className="flex-1 font-semibold sm:text-lg text-sm">Condition</h1>
          <p className="flex-1 sm:text-lg text-sm">Very Good</p>
        </div>
        <div className="flex justify-between w-full">
          <h1 className="flex-1 font-semibold sm:text-lg text-sm">Uploaded</h1>
          <p className="flex-1 sm:text-lg text-sm">Tue, Nov 28, 2023</p>
        </div>
        <div className="flex justify-between w-full">
          <h1 className="flex-1 font-semibold sm:text-lg text-sm">Shipping</h1>
          <p className="flex-1 sm:text-lg text-sm">Rp20000</p>
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
            <div className="flex gap-1">
              <BsStarFill size={12} />
              <BsStarFill size={12} />
              <BsStarFill size={12} />
              <BsStarFill size={12} />
              <BsStarFill size={12} />
            </div>
            <p className="text-xs text-gray-500">(100)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoDetailProduct;
