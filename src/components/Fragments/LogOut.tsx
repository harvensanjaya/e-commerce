import { AnimatePresence, motion } from "motion/react";
import { HiMiniXMark } from "react-icons/hi2";
import Button from "../Elements/Button";

interface LogoutProps {
  onClose: () => void;
  onConfirm: () => void;
  isOpen?: boolean;
}

function Logout({ onClose, onConfirm, isOpen = true }: LogoutProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/60 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.13 }}
        >
          <motion.div
            className="bg-white rounded-xl shadow-lg sm:w-[400px] w-[300px] overflow-hidden transition-all transition-discrete"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.35, ease: [0.25, 1, 0.25, 1] }}
          >
            <div className="flex justify-between items-center px-6 sm:pt-6 pt-4 transition-all">
              <h1 className="font-medium sm:text-xl text-lg transition-all">
                Logout
              </h1>
              <button onClick={onClose} className="cursor-pointer">
                <HiMiniXMark size={25} />
              </button>
            </div>

            <div className="p-6 text-slate-600 transition-all">
              <p className="sm:text-md text-sm transition-all">
                Are you sure you want to logout from Vintage?
              </p>
            </div>

            <div className="flex justify-end gap-2 bg-gray-100 px-6 py-3">
              <Button className="bg-gray-200 text-black" onClick={onClose}>
                Close
              </Button>
              <Button className="bg-red-500 text-white" onClick={onConfirm}>
                Log Out
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Logout;
