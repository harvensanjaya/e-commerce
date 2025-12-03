import { motion } from "motion/react";
import { useState } from "react";
import { BsCart3, BsChevronDown, BsSearch, BsSuitHeart } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useNavbar } from "../../context/NavbarContext";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { logout } from "../../redux/auth/authSlice";

import logo from "../../assets/logo.png";
import Button from "../Elements/Button";
import { Input } from "../Elements/Input";
import Logout from "../Fragments/LogOut";
import ProfileDropdown from "../Fragments/ProfileDropdown";

const Navbar = () => {
  const { isShow } = useNavbar();
  const wishlistCount = useAppSelector((state) => state.wishlist.items.length);
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const goLogin = () => navigate("/login");

  const goRegister = () => navigate("/register");

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="font-poppins flex justify-center sm:h-20 h-18 text-black items-center fixed w-full top-0 bg-white z-10 border-b border-slate-300 transition-all transition-discrete"
    >
      {isShow ? (
        <div className="flex justify-between w-4/5 sm:h-1/2 h-2/5 items-center gap-6 transition-all transition-discrete">
          <Link to={"/"} className="h-full">
            <img src={logo} alt="" className="h-full" />
          </Link>

          <div className="hidden lg:flex bg-slate-100 rounded-xl border border-slate-400 items-center grow px-3 gap-3 w-2/4 transition-all transition-discrete">
            <BsSearch />
            <Input
              type="text"
              placeholder="Search for items"
              name="search"
              className="border-0 sm:text-base text-sm focus:border-0 focus:outline-0 transition-all transition-discrete"
            />
          </div>
          {isAuthenticated ? (
            <div className="flex gap-7 items-center h-full justify-between">
              <div className="flex items-center h-full justify-between ">
                <div className="relative h-full items-center sm:flex hidden">
                  <BsCart3 size={30} className="p-2 box-content" />
                  <FaCircle
                    size={22}
                    className="absolute top-0 right-0"
                    color="red"
                  />
                  <p className="absolute top-1 right-2 text-white text-xs">1</p>
                </div>

                <button
                  className="relative h-full items-center sm:flex hidden cursor-pointer"
                  onClick={() => navigate("/wishlist")}
                >
                  <BsSuitHeart size={28} className="p-2 box-content" />
                  <FaCircle
                    size={22}
                    className="absolute top-0 right-0"
                    color="red"
                  />
                  <p className="absolute top-1 right-2 text-white text-xs">
                    {wishlistCount}
                  </p>
                </button>
              </div>

              <div className="flex items-center justify-between h-full gap-3 relative">
                <img
                  src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000"
                  alt=""
                  className="h-full w-auto aspect-square rounded-full object-cover"
                />
                <button
                  className="flex items-center h-full"
                  onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                >
                  <BsChevronDown
                    size={12}
                    className="shrink-0 cursor-pointer"
                  />
                </button>
                {showProfileDropdown && (
                  <ProfileDropdown
                    onLogoutClick={() => setShowLogoutModal(true)}
                  />
                )}
                <div className="flex items-center gap-2 border-l border-slate-300 pl-5">
                  <p className="sm:text-lg text-sm transition-all">EN</p>
                  <BsChevronDown size={12} />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex gap-7 h-full items-center justify-between">
              <div className="flex items-center h-full justify-between gap-5 ">
                <Button
                  className="bg-slate-100 border border-slate-500 text-slate-500 text-sm"
                  onClick={() => goLogin()}
                >
                  Login
                </Button>

                <Button
                  className="bg-slate-500 text-white text-sm"
                  onClick={() => goRegister()}
                >
                  Register
                </Button>
              </div>
              <div className="flex items-center gap-2 border-l border-slate-300 pl-5">
                <p className="sm:text-lg text-sm transition-all">EN</p>
                <BsChevronDown size={12} />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex justify-between w-4/5 sm:h-1/2 h-2/5 items-center gap-6 transition-all">
          <Link to={"/"} className="h-full">
            <img src={logo} alt="" className="h-full" />
          </Link>
          <div className="flex items-center gap-2 border-slate-300 pl-5">
            <p className="sm:text-lg text-sm transition-all">EN</p>
            <BsChevronDown size={12} />
          </div>
        </div>
      )}

      <Logout
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={() => handleLogout()}
      />
    </motion.div>
  );
};

export default Navbar;
