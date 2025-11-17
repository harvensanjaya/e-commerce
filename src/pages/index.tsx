import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavbar } from "../context/NavbarContext";
import { getAllProducts } from "../services/product.service";

import Button from "../components/Elements/Button";
import { Input } from "../components/Elements/Input";
import Footer from "../components/Layouts/Footer";
import Navbar from "../components/Layouts/Navbar";
import SectionProduct from "../components/Layouts/SectionProduct";
import type { Product } from "../types/product";

const Home = () => {
  const { setIsShow, setIsLogin } = useNavbar();

  const [products, setProducts] = useState<Product[]>();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setIsShow(true);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getAllProducts();
        setProducts(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="">
      <Navbar />

      <div className="flex lg:hidden flex-col gap-2 py-5 items-center mt-20 transition-all">
        <div className="flex w-4/5 self-center">
          {/* <h1 className='text-3xl pt-10 pb-5 font-medium'>Shop by Brand</h1> */}
          <div className="flex bg-slate-100 rounded-xl border border-slate-400 items-center grow px-3 gap-3 w-2/4">
            <BsSearch />
            <Input
              type="text"
              placeholder="Search for items"
              name="search"
              className="border-0 sm:text-lg text-sm"
            />
          </div>
        </div>
      </div>

      <div className="flex relative lg:mt-20 transition-all tranition-discrete">
        <img
          src="https://images.pexels.com/photos/8311891/pexels-photo-8311891.jpeg"
          alt=""
          className="w-full h-[40vh] md:h-[50vh] lg:h-[70vh] xl:h-[85vh] object-center object-cover transition-all transition-discrete"
        />
        <div className="absolute bg-white text-center p-5 rounded-xl top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 lg:w-[20%] w-[40%] hidden md:flex flex-col transition-all transition-discrete">
          <h1 className="lg:text-4xl md:text-3xl mb-5 text-left transition-all">
            Ready to declutter you closet?
          </h1>
          <Button className="bg-slate-500 text-white w-full">Shop Now</Button>
        </div>
      </div>

      <SectionProduct title="Popular Items" products={products} />

      <div className="flex flex-col gap-2 py-5 items-center">
        <div className="flex w-4/5 self-center">
          <h1 className="text-3xl pt-10 pb-5 font-medium">Shop by Brand</h1>
        </div>

        <div className="flex gap-5 w-4/5 flex-wrap">
          <Button className="bg-white border border-black w-auto">Vans</Button>
          <Button className="bg-white border border-black">Bohoo</Button>
          <Button className="bg-white border border-black">Mango</Button>
          <Button className="bg-white border border-black">Reebok</Button>
          <Button className="bg-white border border-black">Converse</Button>
          <Button className="bg-white border border-black">Sandro</Button>
          <Button className="bg-white border border-black">Nike</Button>
          <Button className="bg-white border border-black">Adidas</Button>
          <Button className="bg-white border border-black">Dior</Button>
          <Button className="bg-white border border-black">Puma</Button>
          <Button className="bg-white border border-black">Zara</Button>
          <Button className="bg-white border border-black">Bershka</Button>
          <Button className="bg-white border border-black">
            American Eagle
          </Button>
        </div>
      </div>

      <SectionProduct title="New Product" products={products} />
      <Footer />
    </div>
  );
};

export default Home;
