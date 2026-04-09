/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/",
});

const endPoint = {
  ADD_WHITELIST: "api/whitelist",
};

export const addEmail = async (email: string): Promise<any> => {
  const { data } = await api.post(endPoint.ADD_WHITELIST, { email: email });
  console.log("checking the data", data);
  return data;
};
