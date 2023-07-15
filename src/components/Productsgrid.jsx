import React from 'react'
import { useState } from 'react'
import Product from './Product';
import Pagination from './Pagination'


const Productsgrid = () => {

    const product = ["hello","world","hello","hel","hello","hello","hel","hel","hello","hello","hello","hello","hello","hello","hello","hello","hello","hello","hello","hello",]


    // const [products,setProducts]=useState([]) from the database or the api
    const [currentPage,setCurrentPage]=useState(1);
    const [productPerPage]=useState(15)

    // get current products
    const indexofLastProduct = currentPage * productPerPage;
    const indexofFirstProduct = indexofLastProduct - productPerPage;
    const curentProducts = product.slice(indexofFirstProduct,indexofLastProduct)
    const setPage = (pageNumbers)=>{
        setCurrentPage(pageNumbers)
    }
  return (
    <div className='w-full  flex flex-col'>
        <div className='flex w-full h-full '><Product products={curentProducts} /></div>
        <div className='w-full flex mx-auto container'><Pagination productPerPage={productPerPage} totalProducts={product.length} setPage={setPage} /></div>

    </div>
  )
}

export default Productsgrid