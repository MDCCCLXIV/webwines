import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div className='flex container flex-col justify-items-center w-[70%] h-screen mx-auto sm:my-2'>
        <Navbar />
        <Hero />
    </div>
  )
}

export default Home