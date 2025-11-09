import { HiMiniXMark } from 'react-icons/hi2';
import Button from '../Elements/Button';

function Logout() {
  return (
    <div className='absolute right-[50%] top-5 translate-y-1/4 mt-2 w-[280%] bg-white border border-slate-300 rounded-md shadow-lg z-10 box-content'>
      <div className='flex flex-col gap-2 py-4 px-6'>
        <div className='flex justify-between items-center mb-2'>
          <h1 className='font-semibold text-xl'>Logout</h1>
          <HiMiniXMark size={25}/>
        </div>
        <p className='text-md text-slate-600'>Are you sure want to logout from vintage?</p>
      </div>
      <div className='flex items-center justify-between w-full bg-gray-100 py-2 px-6'>
        <span></span>
        <div className='flex gap-2 w-1/2'>
          <Button className='bg-slate-500 text-white w-full'>Close</Button>
          <Button className='bg-red-500 text-white w-full p=2'>Log Out</Button>
        </div>
      </div>
    </div>
  )
}

export default Logout