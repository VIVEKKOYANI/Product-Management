import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://api.freeapi.app/api/v1'
})

export default axiosInstance;