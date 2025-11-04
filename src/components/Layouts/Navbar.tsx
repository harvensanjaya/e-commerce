import { BsCart3, BsSuitHeart, BsChevronDown, BsSearch } from 'react-icons/bs';
import { FaCircle } from 'react-icons/fa';
import { useNavbar } from '../../context/NavbarContext';

import { Input} from '../Elements/Input'
import Button from '../Elements/Button'
import logo from '../../assets/logo.png'


const Navbar = () => {
  const {isLogin, isShow} = useNavbar()

  return (
    <div className='flex justify-center h-20 text-black items-center px-10'>
      {
        isShow ?
          <div className='flex justify-between w-4/5 h-1/2 items-center gap-6'>
            <img src={logo} alt="" className='h-full'/>
            
            <div className='bg-slate-100 rounded-xl border border-slate-400 items-center flex px-3 w-7/10 gap-3'>
              <BsSearch/>
              <Input
                type="text"
                placeholder="Search for items"
                name="search"
                className="border-0 text-lg"
              />
            </div>
            { 
              isLogin ? 
                <div className='flex gap-7 items-center h-full justify-between w-1/6'>
                  <div className='flex items-center h-full justify-between w-1/3 '>
                    <div className='relative  h-full items-center flex'>
                      <BsCart3 size={30} className='p-2 box-content'/>
                      <FaCircle size={22} className='absolute top-0 right-0' color='red'/>
                      <p className='absolute top-1 right-2 text-white text-xs'>1</p>
                    </div>

                    <div className='relative h-full items-center flex'>
                      <BsSuitHeart size={28} className='p-2 box-content'/>
                      <FaCircle size={22} className='absolute top-0 right-0' color='red'/>
                      <p className='absolute top-1 right-2 text-white text-xs'>1</p>
                    </div>
                  </div>

                  <div className='flex items-center justify-between h-full gap-3'>
                    <div className='flex items-center gap-2 pr-5 h-full'>
                      <img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000" alt="" className='h-full w-auto aspect-square rounded-full object-cover'/>
                      <BsChevronDown size={12} className='shrink-0'/>
                    </div>
                    <div className='flex items-center gap-2 border-l border-slate-300 pl-5'>
                      <p className='text-l'>EN</p>
                      <BsChevronDown size={12}/>
                    </div> 
                  </div>
                </div> 
                : 
                <div className='flex gap-7 h-full items-center justify-between'>
                  <div className='flex items-center h-full justify-between gap-5 '>
                    <Button
                      className='bg-slate-100 border border-slate-500 text-slate-500 text-sm'
                    >Login</Button>

                    <Button
                      className='bg-slate-500 text-white text-sm'
                    >Register</Button>
                  </div>
                  <div className='flex items-center gap-2 border-l border-slate-300 pl-5'>
                    <p className='text-l'>EN</p>
                    <BsChevronDown size={12}/>
                  </div>
                </div> 
            }
          </div>
          :
          <div className='flex justify-between w-4/5 h-1/2 items-center gap-6'>
            <img src={logo} alt="" className='h-full'/>
            <div className='flex items-center gap-2 border-slate-300 pl-5'>
              <p className='text-l'>EN</p>
              <BsChevronDown size={12}/>
            </div>
          </div>
      }
      
     
    </div>
  )
}

export default Navbar