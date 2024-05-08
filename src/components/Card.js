import React, { useState } from 'react'

const Card = ({element}) => {
    const [show,setShow]=useState(false);
    console.log('show',show);
  return (
    <div className={`flex flex-col gap-2 justify-center items-center w-[230px] ${show?'shadow-green-300':''} shadow-md px-8 py-5`} onClick={()=>setShow(!show)}>
        <img src={element.img} alt="" className='w-10 h-10 rounded-full' />
        <h1 className='text-black text-xl font-bold'>{element.heading}</h1>
        <p className='text-xl text-gray-700 text-center'>{element.description}</p>
    </div>
  )
}

export default Card