import axios from "axios";

const BASE_URL = 'https://taste-bite-api.onrender.com'

const axiosInstance = axios.create({
    baseURL: BASE_URL
})

export default axiosInstance