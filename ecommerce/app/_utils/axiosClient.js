// Importing axios library to facilitate HTTP requests and linking the back-end with the front-end
const {default: axios} = require('axios')
const apikey=process.env.NEXT_PUBLIC_REST_API_KEY;
// Defining the base URL for the back-end API
const apiUrl='http://localhost:1337/api'

// Creating an axios instance to configure default settings for all API requests
const axiosClient = axios.create({
	baseURL: apiUrl,
	headers:{
		Authorization: `bearer ${'32cf27a0e4ac03a2cddd3d6c8a7cf8b78aff14a5871aef0217412f0ac2ac94ce2ddb77a2d7b79a83e56b40c36d4314156d5003913145fb8b40e7bc05328fc5d9b9542b470b10e843dfbe986c7b9cc3e029977f0c66159efc268af2681c5e7ed1ed073a7149282c015d2c2a06ebfde0523f40bce6fcd8f46cfa709f3183c6b3dd'}`
	}, // Authorization header containing the API key for secured endpoints
});

// Exporting the axios client instance for use in other parts of the application
export default axiosClient
