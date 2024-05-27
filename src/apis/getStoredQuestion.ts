import { Question } from "@/type/Question";
import axios, { AxiosRequestConfig } from "axios";
import { setBaseUrls } from "./html";
import { StoredQuestion } from "@/type/StoredQuestion";

const BASE_URL = process.env.NEXT_PUBLIC_AITUTOR_BACKEND_PRODUCT_SERVER;

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
  setBaseUrls();
  // console.log(`getQuestion ${questionType}`);
  const axiosOption: AxiosRequestConfig = {
    url: `${BASE_URL}question/random?questionType=${questionType}&solvedQuestions=${solvedQuestions}&length=${length}&testType=${testType}`,
    method: "GET",
    headers: {
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
