"use client";
import { useRecoilState, useRecoilValue } from "recoil";
import ViewResultPage from "../view/ViewResultPage";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  storedQuestionAtom,
  storedQuestionSelector,
} from "@/recoil/stored-question-atom";
import ViewReportPage from "../view/ViewReportPage";
import { StoredQuestion } from "@/type/StoredQuestion";
import useCalculateResults from "@/hook/useCalculateResults";
import { demoResult } from "@/demo/demoResult";

export default function ReportPageComponent() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const statistics = useRecoilValue(storedQuestionSelector);
  const stored = useRecoilValue(storedQuestionAtom);

  const { result, calculateResults } = useCalculateResults();

  const handleQuizSubmit = (questions: StoredQuestion[]) => {
    calculateResults(questions);
  };

  useEffect(() => {
    // handleQuizSubmit(demoResult);
    if (stored) {
      handleQuizSubmit(stored);
    }
  }, [stored]);
  const props = {
    // questions: stored,
    result: result,
    loading: loading,
    goBack: () => {
      router.back();
    },
    goToRecommendPage: () => {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
        router.push("/recommend");
      }, 500);
    },
  };

  return (
    <>
      <ViewReportPage {...props} />
    </>
  );
}
