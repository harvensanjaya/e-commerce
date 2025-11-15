import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { AnimatePresence, motion } from "motion/react";
import paymentAnimation from "../../assets/PaymentSuccess.lottie";
import Button from "../Elements/Button";

interface PaymentModalProps {
  onConfirm: () => void;
  isOpen?: boolean;
}

function PaymentModal({ onConfirm, isOpen = true }: PaymentModalProps) {
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
            <DotLottieReact src={paymentAnimation} loop autoplay />

            <div className="flex justify-center items-center sm:pt-6 pt-4 transition-all">
              <h1 className="font-medium sm:text-xl text-lg transition-all text-center">
                Order #ORD-89123-823 placed successfully
              </h1>
            </div>

            <div className="sm:p-6 p-4 text-slate-600 transition-all">
              <p className="sm:text-md text-sm text-center transition-all">
                Thank you for do online shopping at Vintage. You can track and
                see your order on transaction history menu.
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
              Go to History Transaction
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default PaymentModal;
