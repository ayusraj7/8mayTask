import React from 'react'
import Button from './Button'
import people from './people.png'
import { MdSlowMotionVideo } from "react-icons/md";

const FirstPart = () => {
  return (
    <div className='bg-[rgb(6,5,5)] sm:h-[89vh] md:h-[80vh] w-full text-white relative '>
        <div className='pt-[80px] px-[10%]'>
            <div className='flex flex-col sm:w-[50%] gap-11'>
                <h1 className='text-3xl sm:text-5xl font-semibold sm:leading-[55px] w-[80%]'>Discover Limitless Learning with Eduverse</h1>
                <p className='text-xl text-gray-100 font-extralight'>Empower your mind;unleash your learning journey and access unlimited courses anytime,anywhere in the world</p>
                <div className='text-xl font-extralight flex gap-5 items-center '>
                    <Button text={'Get Started'}/>
                    <p className='flex gap-2 items-center'><MdSlowMotionVideo className='bg-[rgb(81,204,143)] text-white rounded-full'/><span className='text-[rgb(81,204,143)]'> Watch More</span></p>
                </div>
            </div>
        </div>
        <div className='sm:h-[130px] mt-6 py-3 text-black flex flex-wrap gap-8 bg-[rgb(207,240,197)] px-[10%]'>
            <div className='flex flex-col  gap-1 border-r-[2px] border-gray-500 w-[110px] h-[85%]'>
                <h1 className='text-3xl text-black text-bold'>100%</h1>
                <p className='text-gray-700 text-[16px]'>Online</p>
            </div>
            <div className='flex flex-col gap-1 border-r-[2px] border-gray-500 w-[110px] h-[85%]'>
                <h1 className='text-3xl text-black text-bold'>10k+</h1>
                <p className='text-gray-700 text-[16px]'>Students</p>
            </div>
            <div className='flex flex-col gap-1 border-r-[2px] border-gray-500 w-[110px] h-[85%]'>
                <h1 className='text-3xl text-black text-bold'>150+</h1>
                <p className='text-gray-700 text-[16px]'>Tutors</p>
            </div>
            <div className='flex flex-col gap-1 border-r-[2px] border-gray-500 w-[110px] h-[85%]'>
                <h1 className='text-3xl text-black text-bold'>100+</h1>
                <p className='text-gray-700 text-[16px]'>Courses</p>
            </div>

        </div>
        <img src={people} alt=""  className='absolute bottom-[30%] right-0 h-[400px] sm:bottom-[-2%] w-[40%] sm:right-[10%]'/>
    </div>
  )
}

export default FirstPart