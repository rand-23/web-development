/*ProductList Component
 * This component is responsible for rendering a grid layout of product items. It accepts a list of products as a prop and maps over the list to render individual `ProductItem` components.
 */
import React from 'react';
import ProductItem from './ProductItem';

  function ProductList({productList}) {
  return (   
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {productList?.map(item => (
        
          <ProductItem product={item} key={item.id}/>
       
      ))}
    </div>
  )
}

export default ProductList;
