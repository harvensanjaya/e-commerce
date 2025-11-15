import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { AnimatePresence, motion } from "motion/react";
import cartAnimation from "../../assets/AddToCartSuccess.lottie";
import Button from "../Elements/Button";

interface CartAddedProps {
  onConfirm: () => void;
  isOpen?: boolean;
}

function CartAdded({ onConfirm, isOpen = true }: CartAddedProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/40 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.13 }}
        >
          <motion.div
            className="bg-white rounded-xl shadow-lg sm:w-[400px] w-[300px] overflow-hidden sm:p-6 p-4 transition-all transition-discrete"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.35, ease: [0.25, 1, 0.25, 1] }}
          >
            <DotLottieReact src={cartAnimation} loop autoplay />

            <div className="flex justify-center items-center sm:pt-6 pt-4 transition-all">
              <h1 className="font-medium sm:text-xl text-lg transition-all text-center">
                Product successfully added to cart
              </h1>
            </div>

            <div className="sm:p-6 p-4 text-slate-600 transition-all">
              <p className="sm:text-md text-sm text-center transition-all">
                "name product" successfully added to cart. Check now on the cart
                or continue shopping
              </p>
            </div>

            <Button
              className="bg-none border border-slate-700 text-slate-700 w-full mb-5"
              onClick={onConfirm}
            >
              Continue Shopping
            </Button>

            <Button
              className="bg-slate-500 text-white w-full"
              onClick={onConfirm}
            >
              Go to Cart
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CartAdded;
