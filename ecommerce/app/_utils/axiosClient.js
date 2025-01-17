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

// Adding a response interceptor to log all responses 
axiosClient.interceptors.response.use( 
  (response) => { 
    // Log successful responses 
    console.log('Response Data:', response.data); 
    console.log('Status Code:', response.status); 
    console.log('Headers:', response.headers); 
    return response; // Always return the response object to proceed 
  }, 
  (error) => { 
    if (error.response) { 
      // Log errors that include a response from the server 
      console.error('Error Data:', error.response.data); 
      console.error('Status Code:', error.response.status); 
      console.error('Headers:', error.response.headers); 
    } else if (error.request) { 
      // Log errors where no response was received 
      console.error('No Response Received:', error.request); 
    } else { 
      // Log other errors (e.g., setup errors) 
      console.error('Error Message:', error.message); 
    } 
    return Promise.reject(error); // Reject the promise to propagate the error 
  } 
); 
// Exporting the axios client instance for use in other parts of the application
export default axiosClient
