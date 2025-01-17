import React from 'react'
import Image from 'next/image'

/*this function is used to fetch banners(images) for products from the back end and return them in a specific way in the front-end*/

function ProductBanner({product}) {
  return (
 <div>
    {product?.banner?.url ?
     <Image
     src={product?.banner?.url} 
     alt='product-details-banner'
     width={400}
     height={400}
     className='rounded-lg'
     />:
     <div className='w-[400px] h-[225px] bg-slate-200 rounded-lg animate-pulse'></div> // to give an animate effect during loading the image
    }

 </div>
  )
}

export default ProductBanner
