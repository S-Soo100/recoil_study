import { Question } from "@/type/Question";
import { StoredQuestion } from "@/type/StoredQuestion";
import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_AITUTOR_BACKEND_PRODUCT_SERVER;
const TOKEN = process.env.NEXT_PUBLIC_AITUTOR_BEARER_TOKEN;

type IProps = {
  uid: number;
  questions: StoredQuestion[];
};

export const updateHistory = async ({
  uid,
  questions,
}: IProps): Promise<boolean> => {
  const dataBody = questions.map(
    (question) =>
      `id=${question.id}&testType=${question.questionType}&selected=${question.selectedAnswer}&isCorrect=${question.isCorrected}`
  );

  const dataString = `[${dataBody.join("\n")}]`;

  const axiosOption: AxiosRequestConfig = {
    baseURL: "",
    url: `${BASE_URL}history/${uid}`,
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
    data: {
      testResult: dataString,
    },
  };

  const res = await axios
    .request(axiosOption)
    .then((response) => {
      console.log("updateHistroy" + response.data.data);
      return response.data.data;
    })
    .catch((error) => console.log(`ERROR IS : ${error.message}`));

  if (!res) {
    return false;
  }

  return true;
};
