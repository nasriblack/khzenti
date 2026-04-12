/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const api = axios.create({
  baseURL: "https://khzenti-waitlist-back.vercel.app/",
});

const endPoint = {
  ADD_WHITELIST: "api/whitelist",
};

export const addEmail = async (email: string): Promise<any> => {
  try {
    const { data } = await api.post(endPoint.ADD_WHITELIST, { email });
    return data;
  } catch (error: any) {
    // Axios puts the backend response in error.response
    const status = error?.response?.status;
    const message = error?.response?.data?.message || "حدث خطأ، حاول مجدداً";
    return { success: false, message, status };
  }
};
