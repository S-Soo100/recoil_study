import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig } from "axios";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { questionAtom } from "@/recoil/question-atom";
import { Question } from "@/type/Question";

const BASE_URL = process.env.NEXT_PUBLIC_AITUTOR_BACKEND_PRODUCT_SERVER;

const useFetchQuestions = (): [Question[], boolean, boolean | null] => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean | null>(false);
  const [recoilMainQuestion, setRecoilMainQuestion] =
    useRecoilState(questionAtom);

  const questionType = "questionType=1";
  const solvedQuestions = "solvedQuestions=[]";
  const length = "length=1";
  const testType = "testType=1";

  // Axios Option
  const axiosOption: AxiosRequestConfig = {
    url: `${BASE_URL}question/random?${questionType}&${solvedQuestions}&${length}&${testType}`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      setError(false);

      // 0. Atom에 있으면 세션 스토리지에 넣고 그 값을 그대로 사용.
      if (recoilMainQuestion.length > 0) {
        setQuestions(recoilMainQuestion);
        setLoading(false);
        setError(false);
        console.log("case 0");
        return;
      }

      // 1. 세션 스토리지에 id가 있는지 확인
      const storedQuestions = sessionStorage.getItem("mainQuestion");

      // 2. 가져온 값이 Question[] 타입이면 그 값을 반환
      if (storedQuestions) {
        try {
          const parsedQuestions: Question[] = JSON.parse(storedQuestions);
          if (Array.isArray(parsedQuestions) && parsedQuestions.length > 0) {
            setRecoilMainQuestion(parsedQuestions);
            // const parsedIds: number[] = [];
            // parsedQuestions.forEach((question) => parsedIds.push(question.id));
            // setRecoilIds(parsedIds);
            setQuestions(parsedQuestions);
            setLoading(false);
            console.log("case 1");
            return;
          }
        } catch (error) {
          console.error("Error parsing questions from sessionStorage", error);
        }
      }

      // 3. 값이 없거나 내부 배열이 비었거나 undefined 이면 서버 통신
      try {
        const arr = [1, 2, 3, 4];
        let fetchedQuestions: Question[] = [];
        arr.forEach(async (i, index) => {
          // console.log(i + "번 호출");
          // axiosOption.data.questionType = i;
          const response = await axios.request(axiosOption);
          const fetchedQuestion = response.data.data as Question[];
          // console.log("Fetch 결과");
          // console.log(fetchedQuestion);
          setQuestions([...questions, ...fetchedQuestion]);
        });
        // const response = await axios.request(axiosOption);
        // console.log("case 2");
        // const fetchedQuestions = response.data.data;

        if (questions!.length > 0) {
          setError(true);
          setLoading(false);
          return;
        }
        // 서버에서 가져온 데이터를 세션 스토리지에 저장
        sessionStorage.setItem(
          "mainQuestion",
          JSON.stringify(fetchedQuestions)
        );
        setRecoilMainQuestion(fetchedQuestions);
        setQuestions(fetchedQuestions);
        // console.log("fetchedQuestions");
        // console.log(fetchedQuestions);
      } catch (error) {
        console.error("Error fetching questions from server", error);
        setError(true);
        setQuestions([]);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  return [questions, loading, error];
};

export default useFetchQuestions;
