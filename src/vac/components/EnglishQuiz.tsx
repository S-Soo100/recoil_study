"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import styled from "@emotion/styled";
import QuestionDisplay from "./(quiz)/QuestionDisplay";
import ChoiceDisplay from "./(quiz)/ChoiceDisplay";
import RecommendationSidebar from "./(quiz)/RecommendationSidebar";
import FeedbackDisplay from "./(quiz)/FeedbackDisplay";
import { fetchDemo } from "@/pages/api/fetchDemo";
import { demo1 } from "@/demo/demo";

const QuizContainer = styled.div`
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

export default function EnglishQuiz() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number>(6);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [question, setQuestion] = useState<Question | null>(null);

  const resetChoice = () => {
    setIsSelected(false);
    setSelectedAnswer(6);
    setIsCorrect(null);
  };

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

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (question === null || question === undefined) {
    return (
      <>
        <div id="loading skeletons">
          <QuizContainer>
            <MainContent>
              <div className="h-[100px]"></div>
              <QuestionDisplay
                question={"loading..."}
                article={"loading...\n\n\n\n\n\n\n\n\n\n\n"}
              />
              <div id="loading_choiceDisplay">
                <ChoiceDisplay
                  choices={["loading...", "loading..."]}
                  selectedChoice={6}
                  handleClick={() => {}}
                />
              </div>
              <FeedbackDisplay
                answer={1}
                isCorrect={true}
                explanation={"Loading..."}
                keywords={[
                  {
                    eng: "loading",
                    kor: "loading...",
                  },
                ]}
              />
              <ResetButton onClick={resetChoice}>reset</ResetButton>
            </MainContent>
            <RecommendationSidebar
              isRecommended={false}
              recommendations={[demo1, demo1]}
            />
          </QuizContainer>
        </div>
      </>
    );
  }

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
        <QuizContainer>
          <MainContent>
            <QuestionDisplay
              question={question!.question}
              article={question!.article}
            />
            <ChoiceDisplay
              choices={question!.options}
              selectedChoice={selectedAnswer ?? 6}
              handleClick={choiceAnswer}
            />
            <FeedbackDisplay
              answer={question!.answer}
              isCorrect={isCorrect}
              explanation={question!.solution}
              keywords={question!.keyWords}
            />
            <ResetButton onClick={resetChoice}>reset</ResetButton>
          </MainContent>
          <RecommendationSidebar
            isRecommended={isSelected}
            recommendations={[demo1, demo1]}
          />
        </QuizContainer>
      </div>
    </>
  );
}
