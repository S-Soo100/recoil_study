import axios, { AxiosRequestConfig } from "axios";
import { StoredQuestion } from "@/type/StoredQuestion";

const BASE_URL = process.env.NEXT_PUBLIC_AITUTOR_BACKEND_PRODUCT_SERVER;
const TOKEN = process.env.NEXT_PUBLIC_AITUTOR_BEARER_TOKEN;

type IProps = {
  questionType: number;
  solvedQuestions: string;
  length: number;
  testType: number;
};

export const getStoredQuestion = async ({
  questionType,
  solvedQuestions,
  length,
  testType,
}: IProps): Promise<StoredQuestion[] | null> => {
  const axiosOption: AxiosRequestConfig = {
    baseURL: "",
    url: `${BASE_URL}question/random?questionType=${questionType}&solvedQuestions=${solvedQuestions}&length=${length}&testType=${testType}`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
  };

  const res = await axios
    .request(axiosOption)
    .then((response) => {
      // console.log(questionType + "번째 호출");
      // console.log(response.data.data);
      return response.data.data;
    })
    .catch((error) => console.log(`ERROR IS : ${error.message}`));

  if (!res) {
    return null;
  }

  return {
    ...res,
    selectedAnswer: 6,
    spentTimeSec: 0,
    isCorrected: false,
  } as StoredQuestion[];
};
