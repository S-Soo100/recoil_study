"use client";
import React, { useEffect, useState } from "react";
import ViewRecommendPage from "../view/ViewRecommendPage";
import { recommendQuestionAtom } from "@/recoil/recommend-question-atom";
import { useRecoilState } from "recoil";
import { StoredQuestion } from "@/type/StoredQuestion";
import { useRouter } from "next/navigation";

export default function RecommendPageComponent() {
  const [isStarted, setIsStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [recommend, setRecommend] = useRecoilState(recommendQuestionAtom);
  const [question, setQuestion] = useState<StoredQuestion | null>(null);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number>(6);
  const [selectedContent, setSelectedContent] = useState<string>("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    if (recommend) {
      if (!isStarted) {
        setIsStarted(true);
        setMaxIndex(recommend.length - 1);
        setCurrentIndex(0);
        setQuestion(recommend[currentIndex]);
      }
    }
    setLoading(false);
  }, [recommend]);

  const setNextQuestion = () => {
    setLoading(true);
    setTimeout(() => {
      if (currentIndex < maxIndex) {
        reset();
        console.log("currentIndex" + currentIndex);
        console.log("maxIndex" + maxIndex);
        setCurrentIndex(currentIndex + 1);
        setQuestion(recommend[currentIndex + 1]);
        setLoading(false);
      } else {
        alert("마지막 문제");
        setLoading(false);
      }
    }, 500);
  };

  const reset = () => {
    setIsSelected(false);
    setIsCorrect(null);
    setSelectedAnswer(6);
  };

  const setPrev = () => {
    if (currentIndex === 0) {
      router.back();
      return;
    }
    setLoading(true);
    setTimeout(() => {
      reset();
      setCurrentIndex(currentIndex - 1);
      setQuestion(recommend[currentIndex - 1]);
      setLoading(false);
    }, 500);
  };

  return (
    <>
      <ViewRecommendPage
        isLoading={!isStarted || loading}
        isSelected={isSelected}
        selectedAnswer={selectedAnswer}
        selectedContent={selectedContent}
        isCorrect={isCorrect}
        question={question}
        choiceAnswer={(content: string, index: number) => {
          if (!isSelected) {
            setIsSelected(true);
            setSelectedAnswer(index);
            if (index + 1 === question?.answer) {
              setIsCorrect(true);
            } else {
              setIsCorrect(false);
            }
          }
        }}
        recommendedQuestions={recommend}
        handleYes={function (): void {}}
        goToNextQuiz={function (): void {
          setNextQuestion();
        }}
        goToPrev={setPrev}
        currentIndex={currentIndex}
        maxIndex={maxIndex}
      />
    </>
  );
}
