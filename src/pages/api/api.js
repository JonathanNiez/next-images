import axios from "axios";

const API_BASE_URL = "http://localhost/next-images/php";

export async function uploadImageToDB(imageData) {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/uploadImage.php`,
      imageData
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function register(userData) {
  try {
    const response = await axios.post(`${API_BASE_URL}/register.php`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function login(userData) {
  try {
    const response = await axios.post(`${API_BASE_URL}/login.php`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}
