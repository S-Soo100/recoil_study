"use client";
import { storedQuestionAtom } from "@/recoil/stored-question-atom";
import { StoredQuestion } from "@/type/StoredQuestion";
import ViewReviewPage from "@/vac/view/ViewReviewPage";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export default function ReviewPage() {
  const router = useRouter();
  const params: { id: string } | null = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [question, setQuestion] = useState<StoredQuestion | null>(null);
  const [stored, setStored] = useRecoilState(storedQuestionAtom);

  useEffect(() => {
    setQuestion(
      stored.find((e) => e.id === parseInt(params!.id)) as StoredQuestion
    );
  }, [params]);

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      // 사용자가 뒤로가기를 누르면 원하는 경로로 리다이렉트
      router.back();
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [router]);

  if (question === null) {
    return (
      <div>
        <ViewReviewPage
          isLoading={true}
          isSelected={false}
          selectedAnswer={6}
          isCorrect={false}
          question={null}
          choiceAnswer={() => {}}
          recommendedQuestions={[]}
          selectedContent={""}
          isModalOpen={false}
          handleYes={() => {}}
          closeModal={() => {}}
        />
      </div>
    );
  }

  return (
    <div>
      <ViewReviewPage
        isLoading={false}
        isSelected={false}
        selectedAnswer={question?.selectedAnswer ?? 6}
        isCorrect={question?.isCorrected ?? false}
        question={question}
        choiceAnswer={() => {}}
        recommendedQuestions={[]}
        selectedContent={""}
        isModalOpen={false}
        handleYes={() => {}}
        closeModal={() => {}}
      />
    </div>
  );
}
