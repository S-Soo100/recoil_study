"use client";
import React from "react";
import styled from "@emotion/styled";
import QuestionDisplay from "./(quiz)/QuestionDisplay";
import OptionDisplay from "./(quiz)/OptionDisplay";
import FeedbackDisplay from "./(quiz)/FeedbackDisplay";
import { Question } from "@/type/Question";
import Loader from "./Loader";
import { useParams } from "next/navigation";
import { StoredQuestion } from "@/type/StoredQuestion";

const QuestionContainer = styled.div`
  // background-color: rgba(0, 0, 0, 0.02);
  display: flex;
  // flex-direction: row;
  justify-content: center;
  max-width: 1400px;
  min-height: 100vh;

  margin-left: auto;
  margin-right: auto;
`;

const MainContent = styled.div`
  flex-grow: 1;
  // width: 70vw;
  padding: 24px;
  background-color: #ffffff;
`;

const ResetButton = styled.button`
  padding: 8px 20px 8px 20px;
  margin: 8px;
  color: #63519f;
  font-weight: bold;
  border-radius: 30px;
  background-color: #ecdafc;
`;

type Props = {
  isLoading: boolean;
  isSelected: boolean;
  selectedAnswer: number;
  selectedContent: string;
  isCorrect: boolean | null;
  question: StoredQuestion | null;
  choiceAnswer: (content: string, index: number) => void;
  recommendedQuestions: Question[] | null;
  handleYes: () => void;
  goToNextQuiz: () => void;
  goToPrev: () => void;
  currentIndex: number;
  maxIndex: number;
};

export default function ViewRecommendPage({
  isLoading,
  isSelected,
  selectedAnswer,
  selectedContent,
  isCorrect,
  question,
  choiceAnswer,
  recommendedQuestions,
  handleYes,
  goToNextQuiz,
  goToPrev,
  currentIndex,
  maxIndex,
}: Props) {
  const params: { type: string } = useParams();

  const getAnswerOptions = (data: string) => {
    return data.split("\n");
  };

  const getKeywords = (data: string) => {
    return data.split("|");
  };

  //데이터가 없을 때
  if (question === null || question === undefined || !question.options) {
    return (
      <>
        <SkeletonComponent />
      </>
    );
  }
  return (
    <>
      <div id="main_quiz">
        {/* <FloatAnswer
          style={{
            color: isCorrect ? "chartreuse" : "red",
          }}
        >
          {isSelected ? (isCorrect ? "정답" : "오답") : ""}
        </FloatAnswer> */}
        <QuestionContainer>
          <MainContent>
            <div className="my-4 flex flex-row justify-between items-center">
              <button
                onClick={goToPrev}
                className=" p-2 bg-gray-800 text-white flex max-w-[100px] justify-center text-center rounded-xl"
              >
                {"뒤로가기"}
              </button>
              <div className="">{currentIndex + 1 + "/" + (maxIndex + 1)}</div>
              <div className="w-[180px]">
                {isSelected && (
                  <div className="flex flex-row justify-end ">
                    <button
                      className=" mx-2 p-2 bg-blue-600 text-white text-lg rounded-md"
                      onClick={goToNextQuiz}
                    >
                      {"다음 문제 ➡️"}
                    </button>
                  </div>
                )}
              </div>
            </div>
            <QuestionDisplay
              question={question.question}
              article={question.article}
            />
            <OptionDisplay
              options={getAnswerOptions(question.options)}
              selectedChoice={selectedAnswer ?? 6}
              isSelected={isSelected}
              handleClick={choiceAnswer}
              handleNextQuestion={goToNextQuiz}
            />
            <FeedbackDisplay
              answer={question.answer}
              isCorrect={isCorrect}
              explanation={question.solution}
              keywords={getKeywords(question.keyWords)}
            />
            {/* <ResetButton onClick={resetChoice}>reset</ResetButton> */}
          </MainContent>
          {/* <RecommendationSidebar
            isRecommended={isSelected}
            recommendations={recommendedQuestions ?? []}
            onClick={(number) => {
              onRecommendedClick(number);
            }}
          /> */}
        </QuestionContainer>
      </div>
      {isLoading ? <Loader loading={isLoading} size="60" /> : <div></div>}
    </>
  );
}

//! 로딩중일 때 표기
const SkeletonComponent = () => {
  return (
    <>
      <div id="loading skeletons">
        {/* <FloatAnswer
          style={{
            color: "chartreuse",
          }}
        >
          {"정답"}
        </FloatAnswer> */}
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
                isSelected={false}
                selectedChoice={6}
                handleClick={() => {}}
                handleNextQuestion={() => {}}
              />
            </div>
          </MainContent>
          {/* <RecommendationSidebar
            isRecommended={false}
            recommendations={[]}
            onClick={(number) => {
              alert(number + "onclick");
            }}
          /> */}
        </QuestionContainer>
      </div>
      <Loader loading={true} size="60" />
    </>
  );
};
