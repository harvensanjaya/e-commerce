import { IoLogoWhatsapp } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { BsCCircle } from 'react-icons/bs';

function Footer() {
  return (
    <div className="bg-slate-600 text-white flex flex-col items-center py-10">
      <div className='flex gap-10 justify-between w-4/5 py-10'>
        <div className='w-1/4 flex flex-col gap-5'>
          <h1 className='text-2xl'>Vintage</h1>
          <p><a href="#">About Us</a></p>
          <p><a href="#">Sustainability</a></p>
          <p><a href="#">Blog</a></p>
          <p><a href="#">Advertising</a></p>
        </div>
        <div className='w-1/4 flex flex-col gap-5'>
          <h1 className='text-2xl'>Discover</h1>
          <p><a href="#">How it Works</a></p>
          <p><a href="#">Help Center</a></p>
          <p><a href="#">Infoboard</a></p>
          <p><a href="#">Mobile Apps</a></p>
        </div>
        <div className='w-1/4 flex flex-col gap-5'>
          <h1 className='text-2xl'>Help</h1>
          <p><a href="#">Help Center</a></p>
          <p><a href="#">Buying</a></p>
          <p><a href="#">Trust & Safety</a></p>
        </div>
        <div className='w-1/4 flex flex-col gap-5'>
          <h1 className='text-2xl'>Community</h1>
          <p><a href="#">Forum</a></p>
        </div>
      </div>

      <div className='flex items-center justify-between w-4/5 border-t py-10 border-slate-500'>
        <div className='flex gap-5'>
          <IoLogoWhatsapp size={30} />
          <AiFillInstagram size={30} />
          <FaLinkedin size={30} />
        </div>
        <div className='flex items-center gap-2'>
          <BsCCircle size={15} />
          <p>Vintage, 2025</p>
        </div>
      </div>
    </div>
  )
}

export default Footer