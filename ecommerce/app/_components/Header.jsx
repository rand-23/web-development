'use client'
import React, { useEffect, useState, useContext } from 'react'
import Image from 'next/image'
import { UserButton, useUser } from '@clerk/nextjs'
import { ShoppingCart } from 'lucide-react';
import { CartContext } from '../_context/CartContext';
import CartApis from '../_utils/CartApis';
import Cart from '../_components/Cart'
import { usePathname } from 'next/navigation';

//This component represents the header section of the application, providing navigation, user authentication actions, and access to the cart.

function Header() {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState()
  const [openCart, setOpenCart] = useState(false) 
  const { cart, setCart } = useContext(CartContext)
  // Check if the user is on the sign-in page
  useEffect(()=>{
    setIsLoggedIn(window?.location?.href.toString().includes('sign-in'))
  },[])
  const{ user } = useUser();
  // Fetches the cart items for the authenticated user
  useEffect(()=>{
    user && getCartItems();
	}, [user])
	// Retrieves the cart items for the current user from the API and updates the cart state.
  const getCartItems = () => {
		CartApis.getUserCartItems(user.primaryEmailAddress.emailAddress).then(res => {
			console.log('response from cart items', res?.data?.data)
			res?.data?.data.forEach(citem => {
				setCart((oldCart) => [
					...oldCart,
					{
						id: citem.id,
						product: citem?.products[0]
					}
				])
			})

		})
	}
  /* Header section: Displays logo, navigation links, and user-specific actions (e.g., Login/Register or Cart/UserButton).
  * then check if the user is authenticated or not 
  *if authenticated can add to cart
  *if not so take him to the sign in page
   */
  if (pathname === '/sign-in' || pathname === '/login') return null;
  return ! isLoggedIn && (
    <header className="bg-white">
    <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 shadow-md">
<Image src='/logo.svg' alt='logo' width={50} height={50}/>
  
      <div className="flex flex-1 items-center justify-end md:justify-between">
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Home </a>
            </li>
  
            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Explore </a>
            </li>
  
            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Projects </a>
            </li>
  
            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> About Us </a>
            </li>
  
            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Contact Us </a>
            </li>
  

          </ul>
        </nav>
           
        <div className="flex items-center gap-4">
          
          {!user ?
          <div className="sm:flex sm:gap-4">
          <a
            className="block rounded-md bg-background px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-300"
            href="/sign-in"
          >
            Login
          </a>

          <a
            className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-background  transition hover:text-red-400/75 sm:block"
            href="#"
          >
            Register
          </a>
        </div>
        :
        <div className='flex items-center gap-5'>
         <h2 className='flex gap-1 cursor-pointer'>
          <ShoppingCart onClick={()=>setOpenCart(!openCart)}/>({cart?.length})</h2>
          <UserButton afterSignOutUrl="/"/>
          {openCart && <Cart />}

          
          </div>

        }
          
  
          <button
            className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header
