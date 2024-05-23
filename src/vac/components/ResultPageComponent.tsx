"use client";
import { questionAtom } from "@/recoil/question-atom";
import { useRecoilState, useRecoilValue } from "recoil";
import ViewResultPage from "../view/ViewResultPage";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { initMainQuestion } from "@/service/initMainQuestion";
import {
  storedQuestionAtom,
  storedQuestionSelector,
} from "@/recoil/stored-question-atom";
import { StoredQuestion } from "@/type/StoredQuestion";

const ResultPageComponent = () => {
  const [loading, setLoading] = useState(false);
  const statistics = useRecoilValue(storedQuestionSelector);
  // 내가 푼 문제 목록 및 정답률
  const router = useRouter();
  const [recoilMainQuestion, setRecoilMainQuestion] =
    useRecoilState(questionAtom);
  const [stored, setStored] = useRecoilState(storedQuestionAtom);

  const props = {
    goToHomePage: () => goToHome(),
    goToRetry: () => goToRetry(),
    goToNewQuiz: () => goToNewQuiz(),
    loading: loading,
  };

  const goToHome = () => {
    setLoading(true);
    sessionStorage.removeItem("mainQuestion");
    setRecoilMainQuestion([]);
    setStored([]);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    router.push("/");
  };

  const goToRetry = () => {
    setLoading(true);
    setStored([]);
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
    setStored([]);
    initMainQuestion({ setAtom: setRecoilMainQuestion });
    const timer = setTimeout(() => {
      setLoading(false);
      router.push("/quiz/1");
    }, 2000);
  };

  const showDetails = (id: number) => {
    router.push(`/review/${id}`);
  };

  return (
    <ViewResultPage
      totalCount={statistics.totalCount}
      answerCount={statistics.correctCount}
      storedQuestions={stored}
      incorrectQuestions={statistics.incorrectQuestions}
      stayTime={statistics.totalTimeSec}
      showDetails={showDetails}
      {...props}
    />
  );
};

export default ResultPageComponent;
