import axios from "axios"

// const baseUrl = process.env.REACT_APP_BASE_URL
const baseUrl = "https://football.jennypoint.com/api/public/api"

const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 30000, // 30 secs
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
  },
})

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Check if the response body contains a custom status_code for unauthorized access
    if (
      response.data &&
      response.data.data &&
      response.data.data.status_code === 401
    ) {
      // Handle the unauthorized access
      localStorage.clear()
      window.location.href = "/"
      return Promise.reject(new Error("Unauthorized"))
    }
    return response
  },
  (error) => {
    // Handle other API errors
    return Promise.reject(error)
  }
)

export default axiosInstance
