import React from 'react'
import { useState } from 'react'
import Product from './Product';
import Pagination from './Pagination'


const Productsgrid = () => {

    const product = [{name:"John Walker",
                      price:1200,
                    image:"jd.jpeg",
                    alcontent:40}
                    ,{name:"best",
                      price:1200,
                    image:"best.webp",
                    alcontent:40}
                    ,{name:"Black Lable",
                      price:1200,
                    image:"bl.jpeg",
                    alcontent:40}
                    ,{name:"John Walker",
                      price:1200,
                    image:"jd.jpeg",
                    alcontent:40}
                    ,{name:"Jack Daniels",
                      price:1200,
                    image:"jd.jpeg",
                    alcontent:40}
                    ,{name:"John Walker",
                      price:1200,
                    image:"jd.jpeg",
                    alcontent:40}
                    ,{name:"John Walker",
                      price:1200,
                    image:"kibao.jpeg",
                    alcontent:40}
                    ,{name:"John Walker",
                      price:1200,
                    image:"jd.jpeg",
                    alcontent:40}
                    ,{name:"John Walker",
                      price:1200,
                    image:"aperol.jpeg",
                    alcontent:40}
                    ,{name:"John Walker",
                      price:1200,
                    image:"jd.jpeg",
                    alcontent:40}
                    ,{name:"John Walker",
                      price:1200,
                    image:"jd.jpeg",
                    alcontent:40}
                    ,{name:"John Walker",
                      price:1200,
                    image:"jd.jpeg",
                    alcontent:40}
                    ,{name:"John Walker",
                      price:1200,
                    image:"jd.jpeg",
                    alcontent:40}
                    ,{name:"John Walker",
                      price:1200,
                    image:"jd.jpeg",
                    alcontent:40}
                    ,{name:"John Walker",
                      price:1200,
                    image:"jd.jpeg",
                    alcontent:40}
                    ,{name:"Hennessy",
                      price:1200,
                    image:"hennessy.jpeg",
                    alcontent:40}
                    ,{name:"Kibao",
                      price:1200,
                    image:"kibao.jpeg",
                    alcontent:40}
                    
                ]


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
        <div className='flex w-full h-full '><Product products={curentProducts} name={curentProducts.name} price={curentProducts.price} alcontent={curentProducts.alcontent} image={curentProducts.image} /></div>
        <div className='w-full flex mx-auto container'><Pagination productPerPage={productPerPage} totalProducts={product.length} setPage={setPage} /></div>

    </div>
  )
}

export default Productsgrid