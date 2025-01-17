// Importing the pre-configured axios client for making HTTP requests
const { default: axiosClient } = require("./axiosClient");

//Fetches the latest products from the back-end.
const getLatestProducts = ()=>axiosClient.get('/products?populate=*'); 
const getProductById = (documentId)=>axiosClient.get(`/products/${documentId}?populate=*`); //Fetches a specific product by its unique ID.

const getProductsByCategory=(category)=>axiosClient.get(`/products?filters[category][$eq]=${category}&populate=*`); //Fetches products by a specific category.
export default {
	getLatestProducts,
	getProductById,
	getProductsByCategory
}