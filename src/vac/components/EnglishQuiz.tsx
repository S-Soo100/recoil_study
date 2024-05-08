"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import styled from "@emotion/styled";
import QuestionDisplay from "./(quiz)/QuestionDisplay";
import ChoiceDisplay from "./(quiz)/ChoiceDisplay";
import RecommendationSidebar from "./(quiz)/RecommendationSidebar";
import FeedbackDisplay from "./(quiz)/FeedbackDisplay";
import { fetchDemo } from "@/api/fetchDemo";
import { demo1 } from "@/demo/demo";

const QuizContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: row;
  justify-content: center;
  // align-items: center;
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
              <QuestionDisplay question={"loading..."} article={"loading..."} />
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
