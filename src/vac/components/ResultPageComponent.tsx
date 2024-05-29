"use client";
import { useRecoilState, useRecoilValue } from "recoil";
import ViewResultPage from "../view/ViewResultPage";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  storedQuestionAtom,
  storedQuestionSelector,
} from "@/recoil/stored-question-atom";

const ResultPageComponent = () => {
  const [loading, setLoading] = useState(false);
  const statistics = useRecoilValue(storedQuestionSelector);
  // 내가 푼 문제 목록 및 정답률
  const router = useRouter();
  const [stored, setStored] = useRecoilState(storedQuestionAtom);

  const props = {
    goToHomePage: () => goToHome(),
    goToReport: () => goToReport(),
    goToRecommendQuiz: () => goToRecommendQuiz(),
    loading: loading,
  };

  const goToHome = () => {
    setLoading(true);
    setStored([]);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    router.push("/");
  };

  const goToReport = () => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
      router.push("/report");
    }, 1000);
  };

  const goToRecommendQuiz = () => {
    setLoading(true);
    //todo stored를 넣어서, 틀린놈만 골라서 통신하는 API 짜기
    //! 추천 문제 서버통힌하는 로직 여기에 써야됨
    const timer = setTimeout(() => {
      setLoading(false);
      // router.push("/어디어디로???");
    }, 1000);
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
