import { Input} from '../Elements/Input'
import Button from '../Elements/Button'
import {useEffect, useState} from 'react'
import {BsSearch} from 'react-icons/bs'
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import { BsCart3, BsSuitHeart, BsChevronDown } from 'react-icons/bs';
import { FaCircle } from 'react-icons/fa';
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <div className='flex justify-center h-20 bg-slate-100 text-black items-center px-10'>
      <div className='flex justify-between w-4/5 h-1/2 items-center gap-6'>
        {/* <h1 className='text-xl font-bold font-momo bg-amber-50 '>Logo</h1> */}
        <img src={logo} alt="" className='h-full'/>
        <div className='bg-slate-100 rounded-xl border-1 border-slate-400 items-center flex px-3 w-7/10 gap-3'>
          <BsSearch/>
          <Input
            type="text"
            placeholder="Search for items"
            name="search"
            className="border-0 text-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar