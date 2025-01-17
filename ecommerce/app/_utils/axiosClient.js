// Importing axios library to facilitate HTTP requests and linking the back-end with the front-end
const {default: axios} = require('axios')
const apikey=process.env.NEXT_PUBLIC_REST_API_KEY;
// Defining the base URL for the back-end API
const apiUrl='http://localhost:1337/api'

// Creating an axios instance to configure default settings for all API requests
const axiosClient = axios.create({
	baseURL: apiUrl,
	headers:{
		Authorization: `bearer ${'apikey'}` // if it is not working like that you have to put bearer here insted of apikey and you will find it in .env.local
	}, // Authorization header containing the API key for secured endpoints
});

// Exporting the axios client instance for use in other parts of the application
export default axiosClient
