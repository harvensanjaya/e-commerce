import { FiMapPin } from "react-icons/fi";
import DetailSummary from "../components/Fragments/DetailSummary";
import Footer from "../components/Layouts/Footer";
import Navbar from "../components/Layouts/Navbar";
import SectionProduct from "../components/Layouts/SectionProduct";

function CartPage() {
  return (
    <div className="">
      <Navbar />

      <div className="flex lg:grid lg:grid-cols-9 sm:gap-5 gap-2 flex-col py-5 mt-20 w-4/5 mx-auto items-start transition-all">
        <div className="lg:col-span-6 flex lg:flex-col flex-col lg:items-center md:items-start items-center justify-between w-full transition-all">
          <div className="flex w-full justify-between sm:mb-5 mb-3 items-center transition-all">
            <h1 className="sm:text-3xl text-xl font-semibold transition-all transition-discrete">
              Cart
            </h1>
            <div className="p-1 border border-gray-300 font-medium sm:text-base text-sm transition-all transition-discrete">
              <p>4 items</p>
            </div>
          </div>
          <div className="flex flex-col w-full bg-gray-200 rounded-md">
            <div className="flex gap-3 w-full sm:p-4 p-3 rounded-md">
              <FiMapPin className="sm:text-lg text-base" />
              <p className="text-sm">
                Shiping to <span className="font-bold">Kuta, Badung</span>
              </p>
            </div>
            <div className="flex flex-col gap-3  w-full p-4 rounded-md bg-white mb-2">
              <div className="flex gap-4">
                <img
                  src="https://images.pexels.com/photos/1868566/pexels-photo-1868566.jpeg"
                  alt=""
                  className="sm:w-30 w-20 aspect-square object-cover"
                />
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col">
                    <h4 className="sm:text-lg text-sm font-medium transition-all transition-discrete">
                      White Crewneck
                    </h4>
                    <p>8 / M</p>
                  </div>
                  <p className="sm:text-lg text-sm font-medium transition-all transition-discrete">
                    Rp200.000
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <p className="font-medium sm:text-lg text-sm text-red-600">
                  Remove
                </p>
                <div className="flex gap-2 font-medium sm:text-base text-sm transition-all transiiton-discrete items-center">
                  <p className="border border-slate-200 sm:py-1 sm:px-3 px-1 ">
                    -
                  </p>
                  <p className="border border-slate-200 sm:py-1 sm:px-3 px-1 ">
                    1
                  </p>
                  <p className="border border-slate-200 sm:py-1 sm:px-3 px-1 ">
                    +
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3  w-full p-4 rounded-md bg-white mb-2">
              <div className="flex gap-4">
                <img
                  src="https://images.pexels.com/photos/1868566/pexels-photo-1868566.jpeg"
                  alt=""
                  className="sm:w-30 w-20 aspect-square object-cover"
                />
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col">
                    <h4 className="sm:text-lg text-sm font-medium transition-all transition-discrete">
                      White Crewneck
                    </h4>
                    <p>8 / M</p>
                  </div>
                  <p className="sm:text-lg text-sm font-medium transition-all transition-discrete">
                    Rp200.000
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <p className="font-medium sm:text-lg text-sm text-red-600">
                  Remove
                </p>
                <div className="flex gap-2 font-medium sm:text-base text-sm transition-all transiiton-discrete items-center">
                  <p className="border border-slate-200 sm:py-1 sm:px-3 px-1 ">
                    -
                  </p>
                  <p className="border border-slate-200 sm:py-1 sm:px-3 px-1 ">
                    1
                  </p>
                  <p className="border border-slate-200 sm:py-1 sm:px-3 px-1 ">
                    +
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3  w-full p-4 rounded-md bg-white mb-2">
              <div className="flex gap-4">
                <img
                  src="https://images.pexels.com/photos/1868566/pexels-photo-1868566.jpeg"
                  alt=""
                  className="sm:w-30 w-20 aspect-square object-cover"
                />
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col">
                    <h4 className="sm:text-lg text-sm font-medium transition-all transition-discrete">
                      White Crewneck
                    </h4>
                    <p>8 / M</p>
                  </div>
                  <p className="sm:text-lg text-sm font-medium transition-all transition-discrete">
                    Rp200.000
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <p className="font-medium sm:text-lg text-sm text-red-600">
                  Remove
                </p>
                <div className="flex gap-2 font-medium sm:text-base text-sm transition-all transiiton-discrete items-center">
                  <p className="border border-slate-200 sm:py-1 sm:px-3 px-1 ">
                    -
                  </p>
                  <p className="border border-slate-200 sm:py-1 sm:px-3 px-1 ">
                    1
                  </p>
                  <p className="border border-slate-200 sm:py-1 sm:px-3 px-1 ">
                    +
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DetailSummary className="col-span-3" />
      </div>

      <SectionProduct title="Other Product" />

      <Footer />
    </div>
  );
}

export default CartPage;
