"use client";
import { questionAtom } from "@/recoil/question-atom";
import { useRecoilState } from "recoil";
import ViewResultPage from "../view/ViewResultPage";
import { useParams, useRouter } from "next/navigation";

const ResultPage = () => {
  // 내가 푼 문제 목록 및 정답률
  const router = useRouter();
  const [recoilMainQuestion, setRecoilMainQuestion] =
    useRecoilState(questionAtom);

  const props = {
    goToHomePage: () => goToHome(),
    goToRetry: () => goToRetry(),
    goToNewQuiz: () => goToNewQuiz(),
  };

  const goToHome = () => {
    sessionStorage.removeItem("mainQuestion");
    setRecoilMainQuestion([]);
    router.push("/");
  };
  const goToRetry = () => {
    // zustand 에서 내 문제 목록 받아오고, 맨 앞에거로 start
    router.push("/quiz/1/0");
  };
  const goToNewQuiz = () => {
    // 새로운 문제 목록을 서버로 요청
    sessionStorage.removeItem("mainQuestion");
    setRecoilMainQuestion([]);
    router.push("/quiz/1/0");
  };

  return <ViewResultPage {...props} />;
};

export default ResultPage;
