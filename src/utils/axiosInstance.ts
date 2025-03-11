import axios, { AxiosInstance } from "axios";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}?q=${import.meta.env.VITE_QUERY}`,
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    apiKey: import.meta.env.VITE_API_KEY,
  },
});
