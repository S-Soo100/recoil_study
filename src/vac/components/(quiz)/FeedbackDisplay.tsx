import React from "react";
import styled from "@emotion/styled";

const FeedbackContainer = styled.div`
  border-radius: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  margin-top: 30px;
  padding: 30px;
  background-color: #f3eff7;
  font-weight: bold;
`;

const SolutionBox = styled.div`
  margin: 16px 4px 16px 4px;
  padding: 0px 140px 0px 0px;
  color: black;
  white-space: pre-wrap;
  font-weight: 400;
`;

const KeywordBox = styled.div`
  margin: 16px 4px 16px 4px;
  color: black;
  font-weight: 400;
  gap: 4px;
`;

interface FeedbackDisplayProps {
  answer: number;
  isCorrect: boolean | null;
  explanation: string;
  keywords: { eng: string; kor: string }[];
}

const FeedbackDisplay: React.FC<FeedbackDisplayProps> = ({
  answer,
  isCorrect,
  explanation,
  keywords,
}) => {
  if (isCorrect === null) {
    return <div></div>;
  }
  return (
    <FeedbackContainer
      style={{
        color: isCorrect ? "cornflowerblue" : "red",
      }}
    >
      {isCorrect ? "정답입니다!" : `오답, 답은 ${answer}번 입니다.`}
      <SolutionBox>{explanation}</SolutionBox>
      <KeywordBox>
        <p className="m-1 text-blue-600 font-bold">{"<Key words>"}</p>
        {keywords.map((keyword, index) => (
          <div className="m-1">
            {keyword.eng} : {keyword.kor}
          </div>
        ))}
      </KeywordBox>
    </FeedbackContainer>
  );
};

export default FeedbackDisplay;
