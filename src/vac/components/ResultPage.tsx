"use client";
import ViewResultPage from "../view/ViewResultPage";
import { useParams, useRouter } from "next/navigation";

const ResultPage = () => {
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
    // zustand 에서 내 문제 목록 받아오고, 맨 앞에거로 start
    router.push("/quiz/1/1234");
  };
  const goToNewQuiz = () => {
    // 새로운 문제 목록을 서버로 요청
    router.push("/quiz/1/1234");
  };

  return <ViewResultPage {...props} />;
};

export default ResultPage;
