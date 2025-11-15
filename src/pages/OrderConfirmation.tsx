import { useState } from "react";
import { BiLogoVisa } from "react-icons/bi";
import { CiClock2 } from "react-icons/ci";
import { FaCircle } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa6";
import { IoShieldCheckmark } from "react-icons/io5";
import { RiMapPinFill } from "react-icons/ri";
import OrderSummary from "../components/Fragments/OrderSummary";
import PaymentModal from "../components/Fragments/SuccessPayment";
import Footer from "../components/Layouts/Footer";
import Navbar from "../components/Layouts/Navbar";
import SectionProduct from "../components/Layouts/SectionProduct";

function OrderPage() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="bg-gray-200">
      <Navbar />

      <div className="flex lg:grid lg:grid-cols-9 sm:gap-5 gap-0 flex-col py-5 sm:mt-20 mt-15 w-4/5 mx-auto items-start transition-all">
        <div className="lg:col-span-6 flex lg:flex-col flex-col lg:items-center md:items-start items-center justify-between w-full transition-all">
          <div className="flex flex-col w-full mb-5 transition-all bg-white p-6 rounded-md gap-5">
            <h1 className="sm:text-lg text-base font-semibold transition-all transition-discrete text-gray-500">
              Order
            </h1>
            <div className="flex flex-col gap-5 w-full rounded-mdmb-2">
              <div className="flex justify-between">
                <div className="flex gap-4">
                  <img
                    src="https://images.pexels.com/photos/1868566/pexels-photo-1868566.jpeg"
                    alt=""
                    className="sm:w-20 w-15 aspect-square object-cover"
                  />
                  <div className="flex flex-col justify-between">
                    <div className="flex flex-col">
                      <h4 className="sm:text-base text-xs font-medium transition-all transition-discrete">
                        White Crewneck
                      </h4>
                      <p className="sm:text-sm text-xs">8 / M</p>
                    </div>
                    <p className="sm:text-base text-xs font-medium transition-all transition-discrete">
                      Rp200.000
                    </p>
                  </div>
                </div>
                <p className="sm:text-base text-xs font-medium transition-all transition-discrete">
                  x1
                </p>
              </div>

              <div className="flex justify-between">
                <div className="flex gap-4">
                  <img
                    src="https://images.pexels.com/photos/1868566/pexels-photo-1868566.jpeg"
                    alt=""
                    className="sm:w-20 w-15 aspect-square object-cover"
                  />
                  <div className="flex flex-col justify-between">
                    <div className="flex flex-col">
                      <h4 className="sm:text-base text-xs font-medium transition-all transition-discrete">
                        White Crewneck
                      </h4>
                      <p className="sm:text-sm text-xs">8 / M</p>
                    </div>
                    <p className="sm:text-base text-xs font-medium transition-all transition-discrete">
                      Rp200.000
                    </p>
                  </div>
                </div>
                <p className="sm:text-base text-xs font-medium transition-all transition-discrete">
                  x1
                </p>
              </div>

              <div className="flex justify-between">
                <div className="flex gap-4">
                  <img
                    src="https://images.pexels.com/photos/1868566/pexels-photo-1868566.jpeg"
                    alt=""
                    className="sm:w-20 w-15 aspect-square object-cover"
                  />
                  <div className="flex flex-col justify-between">
                    <div className="flex flex-col">
                      <h4 className="sm:text-base text-xs font-medium transition-all transition-discrete">
                        White Crewneck
                      </h4>
                      <p className="sm:text-sm text-xs">8 / M</p>
                    </div>
                    <p className="sm:text-base text-xs font-medium transition-all transition-discrete">
                      Rp200.000
                    </p>
                  </div>
                </div>
                <p className="sm:text-base text-xs font-medium transition-all transition-discrete">
                  x1
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mb-5  bg-white p-6 rounded-md sm:gap-5 gap-2 transition-all transition-discrete">
            <h1 className="sm:text-lg text-base font-semibold transition-all transition-discrete text-gray-500">
              Address
            </h1>
            <div className="flex flex-col gap-5 w-full rounded-md border border-gray-200 sm:p-6 p-2 transition-all transition-discrete">
              <div className="flex justify-between">
                <div className="flex gap-4">
                  <div className="bg-slate-100 flex justify-center items-center p-2 rounded-full sm:w-12 sm:h-12 h-8 w-8 transition-all transition-discrete">
                    <RiMapPinFill className="sm:text-3xl text-xl text-slate-500 shrink-0 transition-all transition-discrete" />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="flex flex-col">
                      <h4 className="sm:text-base text-xs font-medium transition-all transition-discrete whitespace-nowrap">
                        PT. Timedoor Indonesia
                      </h4>
                    </div>
                    <p className="sm:text-sm text-xs transition-all transition-discrete text-gray-500">
                      Jl. Tukad Yeh Aya IX No.46, Renon, Denpasar Selatan, Kota
                      Denpasar, Bali 80226
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mb-5 transition-all bg-white p-6 rounded-md sm:gap-5 gap-2 transition-discrete">
            <h1 className="sm:text-lg text-base font-semibold transition-all transition-discrete text-gray-500">
              Delivery details
            </h1>
            <div className="flex flex-col gap-5 w-full rounded-md border border-gray-200 sm:p-6 p-2 transition-all transition-discrete">
              <div className="flex flex-col justify-between">
                <div className="flex gap-4">
                  <div className="bg-slate-100 flex justify-center items-center p-2 rounded-full sm:w-12 sm:h-12 w-8 h-8 transition-all transition-discrete">
                    <IoShieldCheckmark className="sm:text-3xl text-xl text-slate-500 shrink-0 transition-all transition-discrete" />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="flex flex-col">
                      <h4 className="sm:text-base text-xs font-medium transition-all transition-discrete whitespace-nowrap">
                        Fedex Express Shipping
                      </h4>
                    </div>
                    <p className="sm:text-sm text-xs text-gray-500 transition-all transition-discrete">
                      Rp20.000
                    </p>
                    <div className="flex gap-2 items-center mt-2">
                      <CiClock2 className="text-gray-500 shrink-0 sm:block hidden" />
                      <p className="sm:text-sm hidden sm:block text-gray-500">
                        Home delivery in 1-3 working days
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center mt-2">
                  <CiClock2 className="text-gray-500 shrink-0 sm:hidden block" />
                  <p className="sm:text-sm text-xs block sm:hidden text-gray-500">
                    Home delivery in 1-3 working days
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mb-5 transition-all bg-white p-6 rounded-md gap-5">
            <h1 className="sm:text-lg text-base font-semibold transition-all transition-discrete text-gray-500">
              Payment Method
            </h1>
            <div className="flex flex-col gap-5 w-full rounded-md border border-gray-200 sm:p-6 p-3 transition-all transition-discrete">
              <div className="flex justify-between">
                <div className="flex gap-4">
                  <div className=" flex justify-center items-center p-2 rounded-full sm:w-12 sm:h-12 h-6 w-6 transition-all transition-discrete">
                    <BiLogoVisa className="sm:text-5xl text-4xl text-slate-500 shrink-0 transition-all transition-discrete" />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="flex flex-col">
                      <h4 className="sm:text-base text-xs font-medium transition-all transition-discrete whitespace-nowrap">
                        0819283210323
                      </h4>
                    </div>
                    <div className="flex gap-2 items-center">
                      <p className="sm:text-sm text-xs text-gray-500 transition-all transition-discrete">
                        23/12
                      </p>
                      <FaCircle
                        size={5}
                        className="sm:block hidden text-slate-500"
                      />
                      <FaCircle
                        size={3}
                        className="sm:hidden block text-slate-500"
                      />
                      <p className="sm:text-sm text-xs transition-all transition-discrete text-gray-500">
                        123
                      </p>
                    </div>
                    <div className="flex gap-2 items-center mt-2">
                      <FaRegCreditCard className="text-gray-500 text-xs sm:text-sm transition-all transition-discrete" />
                      <p className="sm:text-sm text-xs transition-all transition-discrete text-gray-500">
                        Jack Daniel Arya
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <OrderSummary
          className="col-span-3"
          onConfirm={() => setShowModal(true)}
        />
      </div>

      <SectionProduct title="Other Product" />

      <Footer />
      <PaymentModal isOpen={showModal} onConfirm={() => setShowModal(false)} />
    </div>
  );
}

export default OrderPage;
