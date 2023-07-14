import React from 'react' 
import {AiOutlineCaretUp,AiOutlineCaretDown} from 'react-icons/ai'
import { useState,useEffect,useRef } from 'react';



const Dropdownbutton = (props) => {
    const [categoryBtnIsOpen,setCategoryBtnIsOpen] = useState(false);

    const openDropdownBtn =()=>{
        setCategoryBtnIsOpen(!categoryBtnIsOpen)
    }
    const closeDropDown=()=>{
        setCategoryBtnIsOpen(categoryBtnIsOpen)
    }

    const element = useRef()

    const close = (e)=>{
        !element.current.contains(e.target) ? 
            closeDropDown()
        :
            openDropdownBtn()
    }

    useEffect(()=>{
        document.addEventListener("click",close,true)
    },[])
   
    
  return (
    <div ref={element} className='my-auto'>
    {
        !categoryBtnIsOpen ?  <>
        <button  className='relative bg-transparent border-2 border-red-500 rounded-md my-auto ml-1 flex active:border-green-500'>{props.name}
        {categoryBtnIsOpen ?   <AiOutlineCaretUp className='my-auto'/> : <AiOutlineCaretDown className='my-auto'/> }
    </button>
    <ul className='hidden  flex-col absolute mx-auto p-2 '>
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