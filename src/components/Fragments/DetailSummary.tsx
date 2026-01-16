import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useNavbar } from "../../context/NavbarContext";
import Button from "../Elements/Button";

interface DetailSummaryProps {
  className?: string;
}

function DetailSummary({ className }: DetailSummaryProps) {
  const { setIsLogin, setIsShow } = useNavbar();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLogin(true);
    setIsShow(true);
  }, []);

  return (
    <div
      className={`flex flex-col p-5 rounded-md w-full border border-slate-400 flex-1 mt-10 lg:mt-0 ${className}`}
    >
      <div className="flex flex-col w-full gap-2 sm:mb-5 mb-2 transition-all transition-discrete">
        <div className="flex justify-between w-full items-center">
          <h1 className="sm:text-2xl text-base font-bold transition-all transition-discrete">
            Order Summary
          </h1>
          <h1 className="sm:text-2xl text-base font-semibold transition-all transition-discrete">
            Rp 400.000
          </h1>
        </div>
      </div>

      <div className="flex flex-col w-full gap-2 sm:mb-5 mb-2 tranisition-all transition-discrete">
        <div className="flex justify-between w-full items-center">
          <p className="sm:text-base text-sm transition-all transition-discrete">
            4 items
          </p>
          <p className="text-red-600 sm:text-base text-sm transition-all transition-discrete">
            Not include shipping fee
          </p>
        </div>
      </div>
      <Button
        className="bg-slate-500 text-white w-full mt-5"
        onClick={() => navigate("/order")}
      >
        Check Out
      </Button>
    </div>
  );
}

export default DetailSummary;
