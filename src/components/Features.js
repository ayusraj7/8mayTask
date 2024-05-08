import React from 'react'
import img from './time.jpeg'
import Card from './Card'
import girl from './girl.png'
import { FaRegCircle } from "react-icons/fa6";
import Button from './Button';
const Features = () => {
    const data=[{
        img:img,
        heading:'Flexible Time',
        description:'Learn at your own pace with flexible scheduling'
    },
    { 
            img:img,
            heading:'Certificate',
            description:'Earn a certificate upon completion of your course'  
    },
    {
            img:img,
            heading:'Practical Class',
            description:'Gain practical skills with hands-on learning.'  
    },
    {
            img:img,
            heading:'Global access',
            description:'Access courses from anywhere in the world.'  
    }
]
  return (
    <div className=' mt-[70px] pb-[100px]'>
        <div className='flex flex-col px-[10%]'>
            <p className='text-green-400 text-sm'>What we provide</p>
            <h1 className='text-black text-2xl font-semibold'>The amazing features we offer our students</h1>
            <div className='flex gap-10 justify-between px-[3%] mt-8 flex-wrap'>
                {
                    data.map((element,index)=>(
                        <Card element={element} key={index}/>
                    ))
                }
            </div>
            
        </div>
        <div className='px-[10%] mt-[80px] flex flex-col sm:flex-row justify-between items-center gap-10'>
            <img src={girl} alt="girl"  className='md:w-[30%] h-[400px]'/>
            <div className='sm:w-[50%] flex flex-col gap-9'>
                <div>
                    <p className='text-[rgb(81,204,143)] text-sm'>About Us</p>
                    <h1 className='text-black text-3xl font-semibold'>One Platform,plenty benefits</h1>
                </div>
                <ul className='flex flex-col gap-5 text-[18px]'>
                    <p className='flex items-center gap-3 '><span className='rounded-full w-6 h-6 border-[5px] border-[rgb(81,204,143)]'></span> Cutting-edge online courses in the most in-demand fields.</p>
                    <p className='flex items-center gap-3 '><span className='rounded-full w-6 h-6 border-[5px] border-[rgb(81,204,143)]'></span> Provision of a personalized and engaging learning experience for every student.</p>
                    <p className='flex items-center gap-3'><span className='rounded-full w-6 h-6 border-[5px] border-[rgb(81,204,143)]'></span> Our platform connects students with world-class instructors from around the globe.</p>
                    <p className='flex items-center gap-3 '><span className='rounded-full w-6 h-6 border-[5px] border-[rgb(81,204,143)]'></span> A supportive community of learns and educators, creating a collaborative and enriching learning environment. </p>
                </ul>
                <Button text={'Learn More'}/>
            </div>

        </div>
        
    </div>
  )
}

export default Features