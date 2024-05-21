import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  position: relative;
  top: -100px;
`;

const QuestionBox = styled.div`
  background-color: #44444c;
  // background-color: rgb(242, 242, 242);
  color: #ffffff;
  border-radius: 4px;
  padding: 10px;
  font-weight: 500j;
  // box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  font-size: 18px;
`;
const ArticleBox = styled.div`
  white-space: pre-wrap;
  border-top: 0.5px solid #d3d3d3;
  border-bottom: 0.5px solid #d3d3d3;
  // border-radius: 10px;
  background: #ffffff;
  padding: 20px;
  margin: 12px 2px;
  // box-shadow: 0 3px 1px rgba(0, 0, 0, 0.07), 0 -11px 3px rgba(0, 0, 0, 0.08);
`;

interface IProps {
  question: string;
  article: string;
}

const QuestionDisplay: React.FC<IProps> = ({ question, article }) => {
  return (
    <Container>
      <QuestionBox id="questionBox">Q. {question || "fetching..."}</QuestionBox>
      <ArticleBox id="articleBox">{article || "fetching..."}</ArticleBox>
    </Container>
  );
};

export default QuestionDisplay;
