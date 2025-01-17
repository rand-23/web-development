'use Client'
import React, { useContext } from 'react'
import { ShoppingCart, AlertOctagon, BadgeCheck} from 'lucide-react'
import SkeletonProductInfo from './SkeletonProductInfo'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import CartApis from '../../_utils/CartApis'
import { CartContext } from '../../_context/CartContext'

/* these functions are already used here to show the product information(title, category,description, price, is it instant to delivery or not), and to show add to cart button and give the user the ability to add products to cart
skeleton function is to give an animation effect during loading the images and details of the product  
*/

function ProductInfo({product}) {
 const {user} =useUser();  // Access user data from Clerk
 const router = useRouter(); // Access Next.js router for navigation
 const { cart, setCart } = useContext(CartContext)  // Access cart data from CartContext
  const handleAddToCart = () =>{
   if(!user){
    router.push('/sign-in'); // Redirect to sign-in page if the user is not authenticated
   }else{
    /*logic to add to cart*/
    const data ={
      data: {
        username: user.fullName,
        email: user.primaryEmailAddress.emailAddress,
        products: [product?.documentId]
      }
    }
    CartApis.addToCart(data)  // Call the API to add the product to the cart
    .then(res=>{
      console.log('cart created successfully', res.data.data)
      setCart(oldCart=>[
        ...oldCart,
        {
          id:res?.data?.data?.documentId,
          product
        }
      ]) // Update the cart state with the new product
    }).catch(error => {
      console.log('error',error)
    })
   }
  }
  return (
 <div>
    {product?.documentId ? 
      <div>
      <h2 className='text-[20px]'>{product?.title}</h2>
  <h2 className='text-[15px] text-gray-400'>
  {product?.category}</h2>
  <h2 className='text-[11-px] mt-2'>
  {product?.description[0]?.children[0].text}</h2>
 <h2 className='text-[11px] text-gray-500 flex gap-2 mt-2 items-center'> {product?.instantDelivary ? <BadgeCheck className='text-green-500 h-5 w-5'/>: <AlertOctagon />} Eligible For Instant Delivery</h2>
  <h2 className='text-[26px] text-red-500 mt-2'>
  $ {product?.price} </h2>
<button onClick={()=>handleAddToCart()} className='flex gap-2 bg-red-500 hover:bg-red-400 p-2 rounded-lg text-white'><ShoppingCart /> Add To Cart</button>
  </div>
    :
    <SkeletonProductInfo />}

 </div>
  )
}

export default ProductInfo