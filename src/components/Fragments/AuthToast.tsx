import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import { hideModal } from "../../redux/modal/modalSlice";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AuthToast() {
  const dispatch = useAppDispatch();
  const { visible, message } = useAppSelector((s) => s.modal);

  useEffect(() => {
    if (visible) {
      const t = setTimeout(() => dispatch(hideModal()), 2500);
      return () => clearTimeout(t);
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-2 rounded-lg shadow-lg z-50 font-poppins"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.35, ease: [0.25, 1, 0.25, 1] }}
      >
        {message}
      </motion.div>
    </AnimatePresence>
  );
}
