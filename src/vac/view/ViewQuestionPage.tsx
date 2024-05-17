"use client";
import React, { useEffect, useState } from "react";
import QuestionPage from "../components/QuestionPage";
import { useParams, useRouter } from "next/navigation";
import { Question } from "@/type/Question";
import useFetchQuestions from "@/hook/useFetchQuestion";
import { useRecoilValue } from "recoil";
import { questionAtom } from "@/recoil/question-atom";

export default function ViewQuestionPage() {
  const params: { type: string } | null = useParams();
  const atom = useRecoilValue(questionAtom);
  // const [questions, loading, error] = useFetchQuestions();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number>(6);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [question, setQuestion] = useState<Question | null>(null);
  const choiceAnswer = (index: number) => {
    if (!isSelected) {
      setIsSelected(true);

      setSelectedAnswer(index);

      if (index + 1! === question?.answer) {
        setIsCorrect(true);
      } else {
        setIsCorrect(false);
      }
    }
  };

  const resetChoice = () => {
    setIsSelected(false);
    setSelectedAnswer(6);
    setIsCorrect(null);
  };

  const router = useRouter();
  useEffect(() => {
    setIsLoading(true);

    // if (questions) {
    setQuestion(atom[parseInt(params?.type ?? "2") - 1]);
    // }

    setIsLoading(false);
  }, [atom]);
  return (
    <QuestionPage
      isLoading={isLoading}
      isSelected={isSelected}
      selectedAnswer={selectedAnswer}
      isCorrect={isCorrect}
      question={question}
      choiceAnswer={choiceAnswer}
      resetChoice={resetChoice}
    />
  );
}
