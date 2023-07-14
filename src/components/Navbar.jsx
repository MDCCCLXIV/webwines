import React from 'react'
import { useState } from 'react'
import {AiOutlineMenu,AiOutlineClose,AiOutlineUser,AiOutlineShoppingCart,AiOutlineSearch,AiOutlineCaretUp,AiFillCaretDown, AiOutlineCaretDown} from 'react-icons/ai'
import Dropdownbutton from './Dropdownbutton'
import Userbtn from './Userbtn'

const Navbar = () => {

  return (
    <header className='lg:container flex p-1 mx-auto bg-orange-300 justify-items-center align-items-middle lg:rounded mt-1'>
        <nav className='container flex justify-between px-4 mx-4'>
            <div className='flex my-auto'>
        <h1 className='text-white my-auto text-xl md:text-2xl '>webwines</h1>
                {/* <AiOutlineMenu className='my-auto ml-1 hover:cursor-pointer hover:text-white' size={18}/> */}
               <Dropdownbutton  name={"category"}  />
            </div>
        <div  className='flex my-auto'>
            <input className='rounded text-center outline-none' type='search' />
            <AiOutlineSearch className='my-auto hover:cursor-pointer hover:text-white ml-1' size ={20}/>
        </div>
        <div className='flex my-auto'>
            {/* <div><AiOutlineUser className='mr-2 hover:cursor-pointer  hover:text-white' size={25} /></div> */}
            <Userbtn />
            <div><AiOutlineShoppingCart className='hover:cursor-pointer hover:text-white' size ={25} /></div>
        </div>
        </nav>
       
    </header>
  )
}

export default Navbar