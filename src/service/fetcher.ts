import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://10.100.4.10:8000/"
})

const fetcher = (url: string) => axiosInstance.get(url).then((res) => res.data);

export default fetcher;