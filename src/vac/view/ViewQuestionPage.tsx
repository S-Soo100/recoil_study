"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { fetchDemo } from "@/pages/api/fetchDemo";
import { demo1 } from "@/demo/demo";
import QuestionPage from "../components/QuestionPage";

export default function ViewQuestionPage() {
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

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      try {
        const response = await fetchDemo();
        setQuestion(response);
      } catch (error) {
        setQuestion(demo1);
      }
    }
    fetchData();

    setIsLoading(false);
  }, []);
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
