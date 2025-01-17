const { default: axiosClient } = require("./axiosClient");

// Function to add an item to the cart
const addToCart = (payload) => axiosClient.post('/carts', payload);

// Function to get items in the user's cart
const getUserCartItems = (email) =>
  axiosClient.get(`carts?populate[products][populate]=banner&filters[email][$eq]=${email}`);


// Export the cart APIs
export default {
  addToCart,         // Adds an item to the cart
  getUserCartItems,  // Fetches items from the user's cart
 
};
