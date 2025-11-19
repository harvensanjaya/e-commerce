import { AnimatePresence, motion } from "motion/react";
import {
  BsCart3,
  BsDoorOpen,
  BsPersonFillGear,
  BsSuitHeart,
} from "react-icons/bs";
import Button from "../Elements/Button";

interface ProfileDropdownProps {
  onLogoutClick: () => void;
}

function ProfileDropdown({ onLogoutClick }: ProfileDropdownProps) {
  return (
    <AnimatePresence>
      <motion.div
        className="absolute right-[50%] top-7 translate-y-1/4 mt-2 w-auto bg-white rounded-md shadow-lg z-10 box-content overflow-hidden"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.35, ease: [0.25, 1, 0.25, 1] }}
      >
        <Button className="bg-auto flex items-center whitespace-nowrap w-full rounded-none pr-20">
          <BsPersonFillGear size={20} className="mr-2 shrink-0" />
          Profile
        </Button>
        <Button className="bg-auto flex items-center whitespace-nowrap w-full rounded-none pr-20">
          <BsCart3 size={20} className="mr-2 shrink-0" />
          Order
        </Button>
        <Button className="bg-auto flex items-center whitespace-nowrap w-full rounded-none pr-20 sm:hidden transition-all transition-discrete">
          <BsSuitHeart size={20} className="mr-2 shrink-0" />
          Wishlist
        </Button>
        <Button
          className="bg-auto flex items-center  whitespace-nowrap w-full rounded-none pr-20 text-red-500"
          logout={true}
          onClick={onLogoutClick}
        >
          <BsDoorOpen size={20} className="mr-2 shrink-0" />
          Logout
        </Button>
      </motion.div>
    </AnimatePresence>
  );
}

export default ProfileDropdown;
