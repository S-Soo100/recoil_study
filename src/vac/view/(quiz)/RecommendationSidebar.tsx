"use client";
import React, { useState } from "react";
import styled from "@emotion/styled";
import { Question } from "@/type/Question";

interface HoverPosition {
  x: number;
  y: number;
}

const Sidebar = styled.div`
  width: 20vw;
  background-color: #385e72;
  padding: 10px;
  // position: relative;
  // top: -100px;
`;

const Container = styled.div`
  position: relative;
`;

const StyledButton = styled.button`
  background: white;
  flex: 1 1 auto;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(83, 83, 83, 0.3), 0 1px 3px rgba(83, 83, 83, 0.28);
  margin: 4px 4px 10px 4px;
  padding: 10px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 16px;
`;

const PreviewBox = styled.div`
  position: fixed;
  width: 400px;
  height: 200px;
  border: 1px solid #ccc;
  background-color: white;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transition: opacity 0.5s linear;
  pointer-events: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-wrap;

  ${StyledButton}:hover + & {
    opacity: 1;
    z-index: 10;
  }
`;
interface RecommendationSidebarProps {
  isRecommended: boolean;
  recommendations: Array<Question>;
  // onClick: (number: number) => MouseEventHandler<HTMLButtonElement> | undefined;
  onClick: (number: number) => void;
}

const RecommendationSidebar: React.FC<RecommendationSidebarProps> = ({
  isRecommended,
  recommendations,
  onClick,
}) => {
  const [hoverPos, setHoverPos] = useState<HoverPosition>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setHoverPos({
      x: event.clientX - 400,
      y: event.clientY,
    });
  };

  const getQuestionTitleByTestNumber = (testNumber: string) => {
    const titles: string[] = [];
    switch (testNumber[0]) {
      case "1":
        titles.push("고1 ");
        break;
      case "2":
        titles.push("고2 ");
        break;
      case "3":
        titles.push("고3 ");
        break;
      case "4":
        titles.push(testNumber.slice(2, 4) + "년도 ");
        titles.push("수능 문제");
        return titles.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          ""
        );
      case "5":
        titles.push("AI생성 문제");
        return "AI생성 문제";
      default:
        titles.push("수능 ");
        break;
    }
    titles.push(testNumber.slice(2, 4) + "년도 ");
    titles.push(testNumber.slice(4, 6) + "월 문제");

    return titles.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      ""
    );
  };

  const recommendedList = () => {
    return (
      <div>
        {recommendations.map((rec, index) => (
          <Container key={index}>
            <StyledButton
              onMouseEnter={() => setIsHovering(true)}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setIsHovering(false)}
              onClick={() => onClick(rec.id)}
            >
              {getQuestionTitleByTestNumber(rec.testNumber)}
            </StyledButton>
            {isHovering && (
              <PreviewBox
                style={{
                  left: `${hoverPos.x + 10}px`,
                  top: `${hoverPos.y + 10}px`,
                }}
              >
                {rec.question + "\n"}

                {rec.article}
              </PreviewBox>
            )}
          </Container>
        ))}
      </div>
    );
  };

  return (
    <Sidebar>
      <div className=" text-white font-semibold text- whitespace-pre-wrap m-2">
        동일 유형 추천 문제
      </div>

      <br />
      {isRecommended ? recommendedList() : <div></div>}
      {/* {isRecommended ? (
        <Container>
          <StyledButton key={"3"}>고3 12월 모의고사 문제</StyledButton>
          <StyledButton key={"2"}>고2 12월 모의고사 문제</StyledButton>
          <StyledButton key={"4"}>00년도 수능 문제</StyledButton>
          <div className="m-8" key={"spacer"}></div>
          <StyledButton key={"5"}>AI 문제 생성</StyledButton>
        </Container>
      ) : (
        //! 추후 수정한 뒤에 사용하기
        
        <div className="m-4 text-white font-bold whitespace-pre-wrap">
          {"문제를 풀면\n비슷한 유형의 문제가 추천됩니다."}
        </div>
      )} */}
    </Sidebar>
  );
};

export default RecommendationSidebar;
