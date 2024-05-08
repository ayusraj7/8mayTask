import React from 'react'
import { IoLogoApple } from "react-icons/io";
import Button from './Button';

const Navbar = () => {
  return (
    <div className='bg-[rgb(6,5,5)] text-white h-[60px] justify-between flex px-[10%] py-1 items-center '>
        <IoLogoApple size={30} className='text-white' />
        <ul className='flex gap-8 text-[18px]  '>
            <li className='hover:text-[rgb(81,204,143)] transition-all duration-200 hover:border-b hover:border-[rgb(81,204,143)]'>Home</li>
            <li className='hover:text-[rgb(81,204,143)] transition-all duration-200 hover:border-b hover:border-[rgb(81,204,143)]'>About</li>
            <li className='hover:text-[rgb(81,204,143)] transition-all duration-200 hover:border-b hover:border-[rgb(81,204,143)]'>Courses</li>
            <li className='hover:text-[rgb(81,204,143)] transition-all duration-200 hover:border-b hover:border-[rgb(81,204,143)]'>Pricing</li>
            <li className='hover:text-[rgb(81,204,143)] transition-all duration-200 hover:border-b hover:border-[rgb(81,204,143)]'>Blog</li>
        </ul>
        <div className='flex gap-6 '>
            <button>Login</button>
            <Button text={'Register'}/>
        </div>
    </div>
  )
}

export default Navbar