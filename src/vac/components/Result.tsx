"use client";
import ViewResultPage from "../view/ViewResultPage";
import { useParams, useRouter } from "next/navigation";

const Result = () => {
  // 내가 푼 문제 목록 및 정답률
  const params = useParams();
  const router = useRouter();

  const props = {
    goToHomePage: () => goToHome(),
    goToRetry: () => goToRetry(),
    goToNewQuiz: () => goToNewQuiz(),
  };

  const goToHome = () => {
    router.push("/");
  };
  const goToRetry = () => {
    router.push("/quiz/1/1234");
  };
  const goToNewQuiz = () => {
    router.push("/quiz/1/1234");
  };

  return <ViewResultPage {...props} />;
};

export default Result;
