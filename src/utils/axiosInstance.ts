import axios, { AxiosInstance } from "axios";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}?q=${import.meta.env.VITE_QUERY}`,
  headers: {
    "Upgrade-Insecure-Requests": "1",
    "Content-Type": "application/json",
  },
  params: {
    q: import.meta.env.VITE_QUERY,
    apiKey: import.meta.env.VITE_API_KEY,
  },
});
