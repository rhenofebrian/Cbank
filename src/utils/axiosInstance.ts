import axios, { AxiosInstance } from "axios";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "User-Agent": "Mozilla/5.0",
    "Accept-Encoding": "gzip, deflate",
    "Content-Type": "application/json",
  },
});
