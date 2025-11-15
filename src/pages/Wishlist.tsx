import { useEffect } from "react";
import { useNavbar } from "../context/NavbarContext";

import Footer from "../components/Layouts/Footer";
import Navbar from "../components/Layouts/Navbar";

const Wishlist = () => {
  const { setIsShow, setIsLogin } = useNavbar();

  useEffect(() => {
    setIsShow(true);
    setIsLogin(true);
  }, []);

  return (
    <div className="flex flex-col">
      <Navbar />

      <div className="flex w-4/5 self-center">
        <h1 className="text-3xl pb-10 pt-5">Favorite Items</h1>
      </div>

      <Footer />
    </div>
  );
};

export default Wishlist;
