import { createContext } from "react";
/*
 * Purpose:
 * - Provides a centralized way to access and manage the cart state (e.g., items in the cart, 
 *   functions to add/remove items, etc.).
 * - Allows components to consume and modify cart data without prop drilling.
*/
export const CartContext = createContext(null);
