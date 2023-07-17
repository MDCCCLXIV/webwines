import React, { useState, useEffect } from 'react';
import Product from './Product';
import Pagination from './Pagination';

const Productsgrid = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://sipshop.herokuapp.com/products-list/")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(15);

  // get current products
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const setPage = (pageNumbers) => {
    setCurrentPage(pageNumbers);
  };

  return (
    <div className="w-full  flex flex-col">
      <div className="flex w-full h-full">
        <Product
          products={currentProducts}
          product_name={currentProducts.product_name}
          price={currentProducts.price}
          alcohol_content={currentProducts.alcohol_content}
          image={currentProducts.image}
        />
      </div>
      <div className="w-full flex mx-auto container">
        <Pagination
          productPerPage={productPerPage}
          totalProducts={products.length}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

export default Productsgrid;
