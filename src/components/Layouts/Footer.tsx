import { AiFillInstagram } from "react-icons/ai";
import { BsCCircle } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

function Footer() {
  return (
    <div className="bg-slate-600 text-white flex flex-col items-center py-10 sm:mt-50 mt-30 transition-all transition-discrete">
      <div className="flex md:flex-row flex-col gap-10 justify-between w-4/5 sm:py-10 py-5 transition-all transition-discrete">
        <div className="w-1/4 flex flex-col md:gap-5 sm:gap-3 gap-2 transition-all transition-discrete">
          <h1 className="md:text-2xl font-semibold sm:text-xl text-lg transition-all transition-discrete">
            Vintage
          </h1>
          <p className="text-sm sm:text-base">
            <a href="#">About Us</a>
          </p>
          <p className="text-sm sm:text-base">
            <a href="#">Sustainability</a>
          </p>
          <p className="text-sm sm:text-base">
            <a href="#">Blog</a>
          </p>
          <p className="text-sm sm:text-base">
            <a href="#">Advertising</a>
          </p>
        </div>
        <div className="w-1/4 flex flex-col md:gap-5 sm:gap-3 gap-2 transition-all transition-discrete">
          <h1 className="md:text-2xl font-semibold sm:text-xl text-lg transition-all transition-discrete">
            Discover
          </h1>
          <p className="text-sm sm:text-base transition-all">
            <a href="#">How it Works</a>
          </p>
          <p className="text-sm sm:text-base transition-all">
            <a href="#">Help Center</a>
          </p>
          <p className="text-sm sm:text-base transition-all">
            <a href="#">Infoboard</a>
          </p>
          <p className="text-sm sm:text-base transition-all">
            <a href="#">Mobile Apps</a>
          </p>
        </div>
        <div className="w-1/4 flex flex-col md:gap-5 sm:gap-3 gap-2 transition-all transition-discrete">
          <h1 className="md:text-2xl font-semibold sm:text-xl text-lg transition-all transition-discrete">
            Help
          </h1>
          <p className="text-sm sm:text-base transition-all">
            <a href="#">Help Center</a>
          </p>
          <p className="text-sm sm:text-base transition-all">
            <a href="#">Buying</a>
          </p>
          <p className="text-sm sm:text-base transition-all">
            <a href="#">Trust & Safety</a>
          </p>
        </div>
        <div className="w-1/4 flex flex-col md:gap-5 sm:gap-3 gap-2 transition-all transition-discrete">
          <h1 className="md:text-2xl font-semibold sm:text-xl text-lg transition-all transition-discrete">
            Community
          </h1>
          <p className="text-sm sm:text-base transition-all">
            <a href="#">Forum</a>
          </p>
        </div>
      </div>

      <div className="flex md:flex-row flex-col gap-5 md:items-center justify-between w-4/5 border-t py-10 border-slate-500">
        <div className="flex gap-5">
          <IoLogoWhatsapp className="md:text-3xl sm:text-2xl text-xl transition-all" />
          <AiFillInstagram className="md:text-3xl sm:text-2xl text-xl transition-all" />
          <FaLinkedin className="md:text-3xl sm:text-2xl text-xl transition-all" />
        </div>
        <div className="flex items-center gap-2">
          <BsCCircle size={15} />
          <p className="text-sm sm:text-base transition-all">Vintage, 2025</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
