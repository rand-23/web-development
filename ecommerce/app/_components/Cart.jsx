// create cart and list of components in cart
'use client' // Indicates this is a client-side rendered component
import React, { useContext } from 'react'  // React for component creation and useContext for accessing context
import { CartContext } from '../_context/CartContext' // Import the CartContext to access cart data and actions
import Link from 'next/link'  // For client-side navigation in Next.js
/*
 * Cart Component
 * This component displays a small cart dropdown that lists the items in the user's cart.
 * It provides options to view the full cart, proceed to checkout, or continue shopping.
 * Access cart data and the method to update the cart from the CartContext
 * List of cart items
 * Display product image
 * Display product details
 * Action buttons: Link to view full cart,  Button to proceed to checkout, Button to continue shopping
*/

function Cart() {
    const {cart,setcart } = useContext(CartContext)
  return (
    <div className='h-[300px] w-[250px]
    bg-gray-100 z-10 rounded-md border shadow-sm
    absolute mx-10 right-10 top-12 p-5 overflow-auto'>

<div className="mt-4 space-y-6">
    <ul className="space-y-4">
        {cart?.map((item)=>(
              <li key={item?.id} className="flex items-center gap-4">
              <img
                src={item?.product?.banner?.url}
                alt="banner-card"
                className="size-16 rounded object-cover"
              />
      
              <div>
                <h3 className="text-sm text-gray-900 line-clamp-1">{item?.product?.title}</h3>
      
                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                  <div>
                    <dt className="inline">Category:</dt>
                    <dd className="inline">{item?.product?.category}</dd>
                  </div>
      
                  <div>
                    <dt className="inline">Price:</dt>
                    <dd className="inline">${item?.product?.price}</dd>
                  </div>
                </dl>
              </div>
            </li>    
        ))}





    </ul>
    <div className="space-y-4 text-center">
      <Link
        href="/cart"
        className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
      >
        View my cart ({cart?.length})
      </Link>


       

      <a
        href="/"
        className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
      >
        Continue shopping
      </a>
    </div>

   </div>
    </div>
  
  )
}

export default Cart

