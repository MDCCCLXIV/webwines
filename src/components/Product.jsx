import React from 'react'

const Product = ({products}) => {
  return (
    <div className='w-full grid grid-cols-5 grid-rows-3'>
       
         {products.map(({name,price,alcontent,image}) =>{
            return(
   
          <div className='flex flex-col  p-2 bg-slate-50 shadow-md rounded m-1 align-middle'>
            <div className='w-full h-[80%] flex justify-center'>
                <img src={image} alt=''/></div>
            <div className='flex w-full justify-center'>
                <span>{name}</span>
                <span>{price}</span>
                <span>{alcontent}</span>
            </div>
            <div className='flex w-100 justify-center'>add to cart</div>
            </div>

          
         )})
         }
    </div>
  )
}

export default Product