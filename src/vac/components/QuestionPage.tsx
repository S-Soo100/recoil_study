"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import styled from "@emotion/styled";
import QuestionDisplay from "./(quiz)/QuestionDisplay";
import OptionDisplay from "./(quiz)/OptionDisplay";
import RecommendationSidebar from "./(quiz)/RecommendationSidebar";
import FeedbackDisplay from "./(quiz)/FeedbackDisplay";
import { demo1 } from "@/demo/demo";
import { Question } from "@/type/Question";
import Loader from "./Loader";
import { useRouter } from "next/navigation";

const QuestionContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 1600px;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
`;

const MainContent = styled.div`
  flex-grow: 1;
  width: 70vw;
  padding: 24px;
`;

const ResetButton = styled.button`
  padding: 8px 20px 8px 20px;
  margin: 8px;
  color: #63519f;
  font-weight: bold;
  border-radius: 30px;
  background-color: #ecdafc;
`;

const FloatAnswer = styled.div`
  width: 20%;
  height: 100px;
  // background-color: #ff2323;
  position: relative;
  font-weight: 500;
  top: -40px;
  left: 10px;
  font-size: 32px;
  transform: rotate(-45deg);
  z-index: 1;
  text-shadow: 3px 3px 4px rgba(43, 82, 20, 0.5),
    -1px -1px 4px rgba(43, 82, 20, 0.5);
`;
type Props = {
  isLoading: boolean;
  isSelected: boolean;
  selectedAnswer: number;
  isCorrect: boolean | null;
  question: Question | null;
  choiceAnswer: (val: number) => void;
  resetChoice: () => void;
};

export default function QuestionPage({
  isLoading,
  isSelected,
  selectedAnswer,
  isCorrect,
  question,
  choiceAnswer,
  resetChoice,
}: Props) {
  const router = useRouter();
  if (question === null || question === undefined || !question.options) {
    return (
      <>
        <div id="loading skeletons">
          <FloatAnswer
            style={{
              color: isCorrect ? "chartreuse" : "red",
            }}
          >
            {isSelected ? (isCorrect ? "정답" : "오답") : ""}
          </FloatAnswer>
          <QuestionContainer>
            <MainContent>
              <div className=""></div>
              <QuestionDisplay
                question={"loading..."}
                article={"loading...\n\n\n\n\n\n\n\n\n\n\n"}
              />
              <div id="loading_choiceDisplay">
                <OptionDisplay
                  options={[
                    "loading...",
                    "loading...",
                    "loading...",
                    "loading...",
                    "loading...",
                  ]}
                  selectedChoice={6}
                  handleClick={() => {}}
                />
              </div>
              <ResetButton onClick={resetChoice}>reset</ResetButton>
            </MainContent>
            <RecommendationSidebar
              isRecommended={false}
              recommendations={[demo1, demo1]}
            />
          </QuestionContainer>
        </div>
        <Loader loading={true} size="60" />
      </>
    );
  }

  const getOptions = (data: string) => {
    return data.split("\n");
  };

  const getKeywords = (data: string) => {
    return data.split("|");
  };

  return (
    <>
      <div id="main_quiz">
        <FloatAnswer
          style={{
            color: isCorrect ? "chartreuse" : "red",
          }}
        >
          {isSelected ? (isCorrect ? "정답" : "오답") : ""}
        </FloatAnswer>
        <QuestionContainer>
          <MainContent>
            <QuestionDisplay
              question={question.question}
              article={question.article}
            />
            <OptionDisplay
              options={getOptions(question.options)}
              selectedChoice={selectedAnswer ?? 6}
              handleClick={choiceAnswer}
            />
            <FeedbackDisplay
              answer={question.answer}
              isCorrect={isCorrect}
              explanation={question.solution}
              keywords={getKeywords(question.keyWords)}
            />
            {/* <ResetButton onClick={resetChoice}>reset</ResetButton> */}
          </MainContent>
          <RecommendationSidebar
            isRecommended={isSelected}
            recommendations={[demo1, demo1]}
          />
        </QuestionContainer>
      </div>
      {isLoading ? <Loader loading={isLoading} size="60" /> : <div></div>}
    </>
  );
}
