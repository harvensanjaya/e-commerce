import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { AnimatePresence, motion } from "motion/react";
import planeAnimation from "../../assets/MessageSentSuccessfully_Plane.lottie";
import Button from "../Elements/Button";
import { useNavigate } from "react-router-dom";

interface SuccessRegisModalProps {
  isOpen?: boolean;
}

function SuccessRegisModal({ isOpen = true }: SuccessRegisModalProps) {
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 font-poppins"
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
            <DotLottieReact src={planeAnimation} loop autoplay />

            <div className="flex justify-center items-center sm:pt-6 pt-4 transition-all">
              <h1 className="font-medium sm:text-xl text-lg transition-all">
                Successfully Register
              </h1>
            </div>

            <div className="sm:p-6 p-4 text-slate-600 transition-all">
              <p className="sm:text-md text-sm text-center transition-all">
                Thank you for registering at Vintage. Start finding your
                favorite pre-loved product here.
              </p>
            </div>

            <Button
              className="bg-gray-200 text-black w-full"
              onClick={() => navigate("/login")}
            >
              Go to Login
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SuccessRegisModal;
