import React from 'react'

const Product = ({products}) => {
  return (
    <div className='w-full grid grid-cols-5 grid-rows-3'>
       ,
         {products.map(({product_name,price,alcohol_content,image}) =>{
            return(
   
          <div className='flex flex-col  p-2 bg-slate-50 shadow-md rounded m-1 align-middle hover:shadow-lg'>
            <div className='w-full h-[70%] flex justify-center'>
                <img className=' object-fit w-full h-[200px]' src={image} alt=''/></div>
            <div className='flex w-full justify-between p-2 text-sm'>
                <span>{product_name}</span>
                <span>{alcohol_content}%</span>
            </div>
            <div className='flex w-full justify-evenly text-sm'>
            <span>KES {price}</span>
            </div>
            <div className='flex w-100 justify-center'>
                <button className='hover:bg-orange-300 p-1 my-auto hover:text-white rounded-md text-sm'>add to cart</button>
            </div>
            </div>

          
         )})
         }
    </div>
  )
}

export default Product