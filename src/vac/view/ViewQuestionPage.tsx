"use client";
import React, { useEffect, useState } from "react";
import QuestionPage from "../components/QuestionPage";
import { useParams, useRouter } from "next/navigation";
import { Question } from "@/type/Question";
import { useRecoilState, useRecoilValue } from "recoil";
import { questionAtom } from "@/recoil/question-atom";
import { answerRateAtom } from "@/recoil/answer-rate-atom";
import { demo1 } from "@/demo/demo";

export default function ViewQuestionPage() {
  const params: { type: string } | null = useParams();
  const atom = useRecoilValue(questionAtom);
  const [loading, setLoading] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number>(6);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [question, setQuestion] = useState<Question | null>(null);
  const [answerRate, setAnswerRateAtom] = useRecoilState(answerRateAtom);

  const choiceAnswer = (index: number) => {
    setLoading(true);
    setTimeout(() => {
      if (!isSelected) {
        setIsSelected(true);

        setSelectedAnswer(index);

        if (index + 1! === question?.answer) {
          setIsCorrect(true);
          setAnswerRateAtom([...answerRate, true]);
        } else {
          setIsCorrect(false);
          setAnswerRateAtom([...answerRate, false]);
        }
      }
      setLoading(false);
    }, 300);
  };

  const resetChoice = () => {
    setIsSelected(false);
    setSelectedAnswer(6);
    setIsCorrect(null);
  };

  const router = useRouter();
  useEffect(() => {
    setLoading(true);

    // if (questions) {
    setQuestion(atom[parseInt(params?.type ?? "2") - 1]);
    // }

    if (atom.length < 1) {
      setQuestion(demo1);
    }

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [atom]);
  return (
    <QuestionPage
      isLoading={loading}
      isSelected={isSelected}
      selectedAnswer={selectedAnswer}
      isCorrect={isCorrect}
      question={question}
      choiceAnswer={choiceAnswer}
      resetChoice={resetChoice}
    />
  );
}
