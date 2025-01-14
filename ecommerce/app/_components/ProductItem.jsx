/**
 * ProductItem Component
 * This component represents an individual product card that displays essential product details
 * and links to a detailed view of the product.*/

import React from 'react';
import Image from 'next/image'; //get images for each product
import { List } from 'lucide-react'; //to import the List icon
import Link from 'next/link'; //linking between pages

function ProductItem({ product }) {
  return (
    //Clicking on the product card redirects users to `/product-details/{documentId}`.
    <Link href={`/product-details/${product?.documentId}`} className="hover:border p-1 hover:shadow-md rounded-lg border-red-300 hover:cursor-pointer"> 
      <Image src={product?.banner?.url}
        alt="banner-card"
        width={400}
        height={350}
        className="rounded-t-lg h-[170px] object-cover"
      />
     <div className='flex justify-between p-3 items-center bg-gray-50 rounded-b-lg'>
     <div className='p-3'>
      <h2 className="text-[14px] font-medium line-clamp-1">{product?.title}</h2>
        <h2 className="text-[12px] text-gray-400 flex gap-1 items-center">
        <List className="w-4 h-4" />
            {product?.category}
          </h2>
      </div>
      <h2 className='text-[12px]'> $ {product?.price}</h2>
     </div>
    </Link>

  );
}

export default ProductItem;
