// The ProductDetails component displays detailed information about a product along with a list of similar products.
// It uses Next.js hooks for navigation and dynamic route handling, and fetches data from APIs using utility functions.

'use client';
import React, { useEffect, useState } from 'react';
import { usePathname, useParams } from 'next/navigation';
import BreadCrumb from '/app/_components/BreadCrumb';
import ProductApis from '/app/_utils/ProductApis';
import ProductBanner from '../_components/ProductBanner';
import ProductInfo from '../_components/ProductInfo';
import ProductList from '/app/_components/ProductList';

// The main functional component for rendering product details.
function ProductDetails() {
  // Extract the current path and route parameters using Next.js hooks.
  const path = usePathname();
  const params = useParams();

  // State variables to store product details and the list of similar products.
  const [productDetails, setProductDetails] = useState({});
  const [productList, setProductList] = useState([]);

  // Fetch product details whenever the productId route parameter changes.
  useEffect(() => {
    if (params?.productId) {
      getProductById_();
    }
  }, [params?.productId]);

  // Fetches details of a product based on the productId route parameter.
  const getProductById_ = () => {
    ProductApis.getProductById(params?.productId)
      .then((res) => {
        console.log('product item', res.data.data);
        setProductDetails(res.data.data); // Update state with product details.
        getProductListByCategory(res.data.data); // Fetch similar products based on the category.
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
      });
  };

  // Fetches a list of similar products based on the product category.
  const getProductListByCategory = (product) => {
    ProductApis.getProductsByCategory(product?.category)
      .then((res) => {
        console.log(res?.data?.data);
        setProductList(res?.data?.data); // Update state with the list of similar products.
      })
      .catch((error) => {
        console.error('Error fetching product list:', error);
      });
  };

  return (
    <div className="px-10 py-8 md:px-28">
      {/* Render breadcrumb navigation based on the current path. */}
      <BreadCrumb path={path} />

      {/* Display the product banner and detailed information side by side. */}
      <div className="grid justify-around grid-cols-1 mt-10 gap-5 sm:gap-0 sm:grid-cols-2">
        <ProductBanner product={productDetails} />
        <ProductInfo product={productDetails} />
      </div>

      {/* Render a list of similar products under the "Similar Products" section. */}
      <div>
        <h2 className="mt-24 text-xl mb-4">Similar Products</h2>
        <ProductList productList={productList} />
      </div>
    </div>
  );
}

export default ProductDetails;
