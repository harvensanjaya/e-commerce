import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import Footer from "../components/Layouts/Footer";
import Navbar from "../components/Layouts/Navbar";
import PasswordSetting from "../components/Layouts/PasswordSetting";
import ProfileSetting from "../components/Layouts/ProfileSetting";
import TransactionSetting from "../components/Layouts/TransactionSetting";
import { useNavbar } from "../context/NavbarContext";

function ProfilePage() {
  const { setIsLogin, setIsShow } = useNavbar();
  const [showProfile, setShowProfile] = useState(true);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showTransaction, setShowTransaction] = useState(false);

  useEffect(() => {
    setIsLogin(true);
    setIsShow(true);
    setShowProfile(true);
    setShowChangePassword(false);
    setShowTransaction(false);
  }, []);
  return (
    <div className="bg-gray-100">
      <Navbar />

      <div className="flex lg:grid lg:grid-cols-12 gap-5 flex-col py-5 sm:mt-20 mt-15 w-4/5 mx-auto items-start transition-all">
        <div className="lg:col-span-3 flex lg:flex-col flex-col gap-10 md:items-start justify-between w-full transition-all ">
          <h1 className="sm:text-3xl text-2xl font-semibold">Settings</h1>
          <div className="flex flex-col w-full">
            <div
              className="flex items-center lg:p-4 p-0 cursor-pointer transition-all transition-discrete"
              onClick={() => {
                setShowProfile(true);
                setShowChangePassword(false);
                setShowTransaction(false);
              }}
            >
              <p
                className={`sm:text-xl text-lg transition-all duration-200 ${
                  showProfile
                    ? "font-bold translate-x-5 bg-white p-2 rounded-t-md"
                    : "opacity-70 mb-5"
                }`}
              >
                Profile details
              </p>
            </div>
            <div className="col-span-9 w-full transition-all transition-discrete lg:hidden block">
              <AnimatePresence mode="wait">
                {showProfile && (
                  <motion.div
                    key="profile"
                    initial={{ opacity: 1, y: 250 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: 0 }}
                  >
                    <ProfileSetting />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div
              className="flex items-center lg:p-4 p-0 cursor-pointer transition-all transition-discrete"
              onClick={() => {
                setShowProfile(false);
                setShowChangePassword(true);
                setShowTransaction(false);
              }}
            >
              <p
                className={`sm:text-xl text-lg transition-all duration-200 ${
                  showChangePassword
                    ? "font-bold translate-x-5 bg-white p-2 rounded-t-md"
                    : "opacity-70 mb-5"
                }`}
              >
                Change Password
              </p>
            </div>
            <div className="col-span-9 w-full transition-all transition-discrete lg:hidden block">
              <AnimatePresence mode="wait">
                {showChangePassword && (
                  <motion.div
                    key="profile"
                    initial={{ opacity: 1, y: 250 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: 0 }}
                  >
                    <PasswordSetting />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div
              className="flex items-center lg:p-4 p-0 cursor-pointer transition-all transition-discrete"
              onClick={() => {
                setShowProfile(false);
                setShowChangePassword(false);
                setShowTransaction(true);
              }}
            >
              <p
                className={`sm:text-xl text-lg transition-all duration-200 ${
                  showTransaction
                    ? "font-bold translate-x-5 bg-white p-2 rounded-t-md"
                    : "opacity-70 mb-5"
                }`}
              >
                Transaction History
              </p>
            </div>
            <div className="col-span-9 w-full transition-all transition-discrete lg:hidden block">
              <AnimatePresence mode="wait">
                {showTransaction && (
                  <motion.div
                    key="profile"
                    initial={{ opacity: 1, y: 250 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: 0 }}
                  >
                    <TransactionSetting />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="col-span-9 w-full transition-all transition-discrete lg:block hidden">
          <AnimatePresence mode="wait">
            {showProfile && (
              <motion.div
                key="profile"
                initial={{ opacity: 1, y: 250 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: 0 }}
              >
                <ProfileSetting />
              </motion.div>
            )}
            {showChangePassword && (
              <motion.div
                key="password"
                initial={{ opacity: 1, y: 250 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: 0 }}
              >
                <PasswordSetting />
              </motion.div>
            )}

            {showTransaction && (
              <motion.div
                key="transaction"
                initial={{ opacity: 1, y: 250 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: 0 }}
              >
                <TransactionSetting />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProfilePage;
