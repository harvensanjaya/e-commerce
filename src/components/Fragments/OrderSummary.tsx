import { useEffect } from "react";
import { useNavbar } from "../../context/NavbarContext";
import Button from "../Elements/Button";

interface OrderSummaryProps {
  onConfirm: () => void;
  className?: string;
}

function OrderSummary({ className, onConfirm }: OrderSummaryProps) {
  const { setIsLogin, setIsShow } = useNavbar();

  useEffect(() => {
    setIsLogin(true);
    setIsShow(true);
  }, []);

  return (
    <div
      className={`flex bg-white flex-col sm:gap-5 gap-5 p-5 rounded-md w-full flex-1 sm:mt-10 mt-5 lg:mt-0 ${className}`}
    >
      <div className="flex flex-col w-full gap-2 transition-all transition-discrete">
        <div className="flex justify-between w-full items-center">
          <p className="sm:text-base text-sm font-semibold transition-all transition-discrete text-slate-600">
            Order Summary
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full gap-1 tranisition-all transition-discrete">
        <div className="flex justify-between w-full items-center">
          <p className="sm:text-base text-sm transition-all transition-discrete text-gray-500 font-medium">
            Order
          </p>
          <p className="text-gray-500 sm:text-base text-sm transition-all transition-discrete font-medium">
            Rp400.000
          </p>
        </div>
        <div className="flex justify-between w-full items-center">
          <p className="sm:text-base text-sm transition-all transition-discrete text-gray-500 font-medium">
            Protection Fee
          </p>
          <p className="text-gray-500 sm:text-base text-sm transition-all transition-discrete font-medium">
            Rp20.000
          </p>
        </div>
        <div className="flex justify-between w-full items-center">
          <p className="sm:text-base text-sm transition-all transition-discrete text-gray-500 font-medium">
            Shipping
          </p>
          <p className="text-gray-500 sm:text-base text-sm transition-all transition-discrete font-medium">
            Rp15.000
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full gap-1 tranisition-all transition-discrete border-t border-slate-400 pt-5">
        <div className="flex justify-between w-full items-center">
          <p className="sm:text-base text-sm transition-all transition-discrete font-bold">
            Total to pay
          </p>
          <p className="sm:text-base text-sm transition-all transition-discrete font-bold">
            Rp435.000
          </p>
        </div>
      </div>
      <Button
        className="bg-slate-500 text-white w-full"
        onClick={(e) => {
          e.preventDefault();
          onConfirm();
        }}
      >
        Check Out
      </Button>
    </div>
  );
}

export default OrderSummary;
