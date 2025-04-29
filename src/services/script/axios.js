import axios from "axios";

const BASE_URL = 'https://dummyjson.com/products/'

const axiosInstance = axios.create({
    baseURL: BASE_URL
})

export default axiosInstance