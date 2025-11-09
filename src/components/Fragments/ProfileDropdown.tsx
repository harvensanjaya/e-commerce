import { BsPersonFillGear, BsCart3, BsDoorOpen } from 'react-icons/bs';
import Button from '../Elements/Button';

function ProfileDropdown() {
  return (
    <div className='absolute right-[50%] top-7 translate-y-1/4 mt-2 w-auto bg-white rounded-md shadow-lg z-10 box-content overflow-hidden'>
      <Button className='bg-auto flex items-center whitespace-nowrap w-full rounded-none pr-20'>
        <BsPersonFillGear size={20} className='mr-2 shrink-0'/>
        Profile
      </Button>
      <Button className='bg-auto flex items-center whitespace-nowrap w-full rounded-none pr-20'>
        <BsCart3 size={20} className='mr-2 shrink-0'/>
        Order
      </Button>
      <Button className='bg-auto flex items-center  whitespace-nowrap w-full rounded-none pr-20 text-red-500' logout={true}>
        <BsDoorOpen size={20} className='mr-2 shrink-0'/>
        Logout
      </Button>
    </div>
  )
}

export default ProfileDropdown