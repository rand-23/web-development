// The Cart component renders the shopping cart page, displaying the items in the cart, their details, the total amount,
// and providing a checkout button. It uses React Context to manage cart state and integrates navigation for checkout.
'use client';
import React, { useContext } from 'react';
import { CartContext } from '../_context/CartContext'; // Import the CartContext for state management.
import { useRouter } from 'next/navigation'; // Hook for navigation within the application.

// The Cart functional component.
function Cart() {
  const { cart, setCart } = useContext(CartContext); // Access cart state and update function from CartContext.
  const router = useRouter();  // Initialize router for navigation.

   // Calculate the total amount for the items in the cart.
  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + Number(item?.product?.price || 0), 0);
  };


  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <div className="max-w-3xl mx-auto">
            {/* Header for the cart section. */}
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
          </header>

          <div className="mt-8">
              {/* List of items in the cart. */}
            <ul className="space-y-4">
              {cart.map((item) => (
                <li key={item?.id} className="flex items-center gap-4">
                    {/* Product image */}
                  <img
                    src={item?.product?.banner?.url}
                    alt={item?.product?.title}
                    className="object-cover w-16 h-16 rounded"
                  />

                  <div>
                     {/* Product title and category */}
                    <h3 className="text-sm text-gray-900">{item?.product?.title}</h3>
                    <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                      <div>
                        <dt className="inline">Category:</dt>
                        <dd className="inline">{item?.product?.category}</dd>
                      </div>
                    </dl>
                  </div>
                    {/* Price and remove button */}
                  <div className="flex items-center justify-end flex-1 gap-2">
                    <span>${item?.product?.price}</span>
                    <button className="text-gray-600 transition hover:text-red-600">
											<span className="sr-only">Remove item</span>
                     <svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth="1.5"
												stroke="currentColor"
												className="w-4 h-4"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
												/>
											</svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
              {/* Total amount and checkout button */}
            <div className="flex justify-end pt-8 mt-8 border-t border-gray-100">
              <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-sm text-gray-700">
                  <div className="flex justify-between !text-base font-medium">
                    <dt>Total</dt>
                    <dd>${getTotalAmount()}</dd>
                  </div>
                </dl>

                <div className="flex justify-end">
                  <button
                    onClick={() => router.push(`/checkout?amount=${getTotalAmount()}`)}
                    className="block px-5 py-3 text-sm text-gray-100 transition bg-gray-700 rounded hover:bg-gray-600"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
             {/* Note section */}
            <h2 className="text-gray-400 text-[12px]">Note: All items will be sent via email.</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
