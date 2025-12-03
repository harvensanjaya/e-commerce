import { AnimatePresence, motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import {
  BsCart3,
  BsDoorOpen,
  BsPersonFillGear,
  BsSuitHeart,
} from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import { useAppSelector } from "../../hooks/reduxHooks";
import Button from "../Elements/Button";

interface ProfileDropdownProps {
  readonly onLogoutClick: () => void;
}

function ProfileDropdown({ onLogoutClick }: ProfileDropdownProps) {
  const wishlistCount = useAppSelector((state) => state.wishlist.items.length);
  const navigate = useNavigate()
  return (
    <AnimatePresence>
      <motion.div
        className="absolute right-[50%] top-7 translate-y-1/4 mt-2 w-auto bg-white rounded-md shadow-lg z-10 box-content overflow-hidden"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.35, ease: [0.25, 1, 0.25, 1] }}
      >
        <Button className="bg-auto flex items-center whitespace-nowrap w-full rounded-none pr-20">
          <BsPersonFillGear size={20} className="mr-2 shrink-0" />
          Profile
        </Button>
        <Button className="bg-auto flex items-center whitespace-nowrap w-full rounded-none pr-20 relative">
          <BsCart3 size={20} className="mr-2 shrink-0" />
          Order
        </Button>
        <Button className="bg-auto flex items-center whitespace-nowrap w-full rounded-none pr-20 sm:hidden transition-all transition-discrete relative" onClick={() => navigate("/wishlist")}>
          <BsSuitHeart size={20} className="mr-2 shrink-0" />
          Wishlist
          <FaCircle
            size={22}
            className="absolute top-1/2 -translate-1/2 right-0"
            color="red"
          />
          <p className="absolute top-1/2 -translate-1/2 right-4 text-white text-xs">
            {wishlistCount}
          </p>
        </Button>
        <Button
          className="bg-auto flex items-center whitespace-nowrap w-full rounded-none pr-20 text-red-500"
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
