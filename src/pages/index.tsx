import { Fragment, useEffect, useState } from 'react'
import { useNavbar } from '../context/NavbarContext'

import Navbar from '../components/Layouts/Navbar'
import Button from '../components/Elements/Button'

const Home = () => {
  const {setIsShow, setIsLogin} = useNavbar()

  useEffect(() => {
    setIsShow(true)
    setIsLogin(true)
  }, [])

  return (
    <div className='' >
      <Navbar/>
      <div className="flex h-[85vh] bg-amber-50 relative">
        <img src="https://images.pexels.com/photos/8311889/pexels-photo-8311889.jpeg" alt="" className='w-full h-full object-[25%_70%] object-cover'/>
        <div className='absolute bg-white text-center p-5 rounded-xl top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[20%]'>
          <h1 className='text-4xl mb-5 text-left'>Ready to declutter you closet?</h1>
          <Button className='bg-slate-500 text-white w-full'>
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Home