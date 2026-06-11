import axios from "axios";
import { attachInterceptors } from "./interceptors";

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 30_000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

attachInterceptors(http);
