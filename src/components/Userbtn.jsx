import React from 'react'
import {AiOutlineUser} from 'react-icons/ai'
import { useState } from 'react';


const Userbtn = () => {
    const [categoryBtnIsOpen,setCategoryBtnIsOpen] = useState(false);
    const openDropdownBtn =()=>{
    setCategoryBtnIsOpen(!categoryBtnIsOpen)
}
  return (
    <div onClick={openDropdownBtn}>{categoryBtnIsOpen ? <AiOutlineUser className='mr-2 hover:cursor-pointer  hover:text-white text-white' size={25} />:<AiOutlineUser className='mr-2 hover:cursor-pointer hover:text-white' size={25} />}
      {
        !categoryBtnIsOpen ?  
    <ul className='hidden  flex-col absolute mx-auto p-2 '>
    </ul>
    :
    <ul className='flex flex-col absolute mx-auto p-2 mt-2 w-[150px] bg-slate-50 shadow-md rounded'>
    <li className='hover:text-orange-400 hover:cursor-pointer'>Login</li>
    <li className='hover:text-orange-400 hover:cursor-pointer'>Sign Up</li>
    <li className='hover:text-orange-400 hover:cursor-pointer'>Account Settings</li>
</ul>
    }
    </div>
  )
}

export default Userbtn