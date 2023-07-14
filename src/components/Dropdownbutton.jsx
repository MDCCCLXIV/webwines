import React from 'react' 
import { useState } from 'react';
import {AiOutlineCaretUp,AiOutlineCaretDown} from 'react-icons/ai'


const Dropdownbutton = (props) => {
const [categoryBtnIsOpen,setCategoryBtnIsOpen] = useState(false);
const openDropdownBtn =()=>{
    setCategoryBtnIsOpen(!categoryBtnIsOpen)
}
  return (
    <div onClick={openDropdownBtn} className='my-auto'>
    {
        !categoryBtnIsOpen ?  <>
        <button onClick={openDropdownBtn} className='relative bg-transparent border-2 border-red-500 rounded-md my-auto ml-1 flex active:border-green-500'>{props.name}
        {categoryBtnIsOpen ?   <AiOutlineCaretUp className='my-auto'/> : <AiOutlineCaretDown className='my-auto'/> }
    </button>
    <ul className='hidden  flex-col absolute mx-auto p-2 '>
        <li>whiskey</li>
        <li>whiskey</li>
        <li>whiskey</li>
    </ul>
    </>
    :
    <>
    <button onClick={openDropdownBtn} className='relative bg-transparent border-2 border-green-500 rounded-md my-auto ml-1 flex'>{props.name}
    {categoryBtnIsOpen ?   <AiOutlineCaretUp className='my-auto'/> : <AiOutlineCaretDown className='my-auto'/> }
</button>
    <ul className='flex flex-col absolute mx-auto p-2 mt-2 w-[150px] bg-slate-50 shadow-md rounded'>
    <li className='hover:text-orange-400 hover:cursor-pointer'>whisky</li>
    <li className='hover:text-orange-400 hover:cursor-pointer'>Vodka</li>
    <li className='hover:text-orange-400 hover:cursor-pointer'>Gin</li>
</ul></>
    }
   
</div>
  )
}

export default Dropdownbutton