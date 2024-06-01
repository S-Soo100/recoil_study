"use client";
import { useRecoilState, useRecoilValue } from "recoil";
import ViewResultPage from "../view/ViewResultPage";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  storedQuestionAtom,
  storedQuestionSelector,
} from "@/recoil/stored-question-atom";
import { initRecommendQuestion } from "@/service/initRecommendQuestion";
import { StoredQuestion } from "@/type/StoredQuestion";
import { recommendQuestionAtom } from "@/recoil/recommend-question-atom";
import { demoResult } from "@/demo/demoResult";

const ResultPageComponent = () => {
  const [loading, setLoading] = useState(false);
  const statistics = useRecoilValue(storedQuestionSelector);
  // 내가 푼 문제 목록 및 정답률
  const router = useRouter();
  const [stored, setStored] = useRecoilState(storedQuestionAtom);
  const [recommend, setRecommend] = useRecoilState(recommendQuestionAtom);

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

  function atomSetter(val: StoredQuestion[]) {
    setRecommend(val);
  }

  const goToRecommendQuiz = async () => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
      if (recommend.length !== 0) {
        router.push(`/recommend`);
      }
    }, 500);
  };

  const showDetails = (id: number) => {
    router.push(`/review/${id}`);
  };

  useEffect(() => {
    // setRecommend(demoResult);
    if (recommend.length > 1 && statistics.incorrectNotes.length > 0) {
      initRecommendQuestion({
        incorrectNotes: statistics.incorrectNotes,
        setStoredAtom: atomSetter,
      });
    } else {
      console.log("demo setted");
      setRecommend(demoResult);
    }
  }, [recommend]);

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
