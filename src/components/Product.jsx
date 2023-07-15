import React from 'react'

const Product = ({products}) => {
  return (
    <div className='w-full grid grid-cols-5 grid-rows-3'>
       
         {products.map((product) =>{
            return(
   
          <div className='flex bg-slate-50 shadow-md rounded m-1'>{product}</div>

          
         )})
         }
    </div>
  )
}

export default Product