import axios from "axios";

const API_BASE_URL = "http://localhost/next-movies/php"; // Replace with your API base URL

// Register a new user
export async function register(userData) {
  try {
    const response = await axios.post(`${API_BASE_URL}/register.php`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

// Log in an existing user
export async function login(userData) {
  try {
    const response = await axios.post(`${API_BASE_URL}/login.php`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}
