import { Question } from "@/type/Question";
import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_AITUTOR_BACKEND_PRODUCT_SERVER;
const TOKEN = process.env.NEXT_PUBLIC_AITUTOR_BEARER_TOKEN;

export const getAllQuestion = async (): Promise<Question[] | null> => {
  const axiosOption: AxiosRequestConfig = {
    baseURL: "",
    url: `${BASE_URL}question`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
  };

  const res = await axios
    .request(axiosOption)
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => console.log(`ERROR IS : ${error.message}`));

  if (!res) {
    return null;
  }

  return res as Question[];
};
