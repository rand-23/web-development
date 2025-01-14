 'use client'
 import React, { useEffect, useState } from 'react'
 import ProductApis from '../_utils/ProductApis'
 import ProductList from './ProductList'
/* ProductSection Component
 * This component is responsible for displaying the "Our Latest Products" section on the webpage.
 * It fetches the latest product data from an API when the component mounts and displays them using the ProductList component.
 */
function ProductSection() {
  const [productList,setProductList]= useState([])
  useEffect(()=>{
   getLatestProducts_();
   },[])
    /*Fetches the latest products using the ProductApis utility and updates the state.*/
  const getLatestProducts_=()=>{
  ProductApis.getLatestProducts().then(res=>{
 console.log(res.data.data);
 setProductList(res.data.data)
  })
 }
   // Render the product section
  return ( 
    <div className='px-10 md:px-20'>
       <h2 className='my-4 text-xl'>Our Latest Products</h2>
       <ProductList productList={productList}/>
     </div>
  )
}

export default ProductSection