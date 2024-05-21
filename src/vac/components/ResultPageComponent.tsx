"use client";
import { questionAtom } from "@/recoil/question-atom";
import { useRecoilState, useRecoilValue } from "recoil";
import ViewResultPage from "../view/ViewResultPage";
import { useParams, useRouter } from "next/navigation";
import { answerRateAtom, answerRateSelector } from "@/recoil/answer-rate-atom";
import { useState } from "react";
import { initMainQuestion } from "@/service/initMainQuestion";

const ResultPageComponent = () => {
  const [loading, setLoading] = useState(false);
  const [answerRate, setAnswerRateAtom] = useRecoilState(answerRateAtom);
  const statistics = useRecoilValue(answerRateSelector);
  // 내가 푼 문제 목록 및 정답률
  const router = useRouter();
  const [recoilMainQuestion, setRecoilMainQuestion] =
    useRecoilState(questionAtom);

  const props = {
    goToHomePage: () => goToHome(),
    goToRetry: () => goToRetry(),
    goToNewQuiz: () => goToNewQuiz(),
    loading: loading,
  };

  const goToHome = () => {
    sessionStorage.removeItem("mainQuestion");
    setRecoilMainQuestion([]);
    router.push("/");
  };
  const goToRetry = () => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
      router.push("/quiz/1");
    }, 1000);
  };
  const goToNewQuiz = () => {
    setLoading(true);
    // 새로운 문제 목록을 서버로 요청
    sessionStorage.removeItem("mainQuestion");
    setRecoilMainQuestion([]);
    initMainQuestion({ setAtom: setRecoilMainQuestion });
    const timer = setTimeout(() => {
      setLoading(false);
      router.push("/quiz/1");
    }, 2000);
  };

  return (
    <ViewResultPage
      totalCount={statistics.totalCount}
      answerCount={statistics.correctCount}
      {...props}
    />
  );
};

export default ResultPageComponent;
