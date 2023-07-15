import React from 'react'
import Productsgrid from './Productsgrid'


const Hero = () => {
  return (
    <div className='flex container mx-auto h-full w-full p-2'>
    <div className='w-[20%] bg-slate-50 shadow-md rounded'>hello</div>
      <div className='w-[80%] ml-2  h-full flex'><Productsgrid /></div>
      
    </div>
  )
}

export default Hero