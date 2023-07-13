const axios = require('axios');

// Make API requests with the user's access token
async function getUserData(accessToken) {
  try {
    const response = await axios.get('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
  
    const userData = response.data;
    // Process and store the retrieved user data as per your requirements
    console.log(userData);
  } catch (error) {
    console.error('Error retrieving user data:', error.response.data);
  }
}