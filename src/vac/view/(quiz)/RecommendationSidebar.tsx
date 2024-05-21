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
  position: relative;
  top: -100px;
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
}

const RecommendationSidebar: React.FC<RecommendationSidebarProps> = ({
  isRecommended,
  recommendations,
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

  return (
    <Sidebar>
      <div className=" text-white font-semibold text- whitespace-pre-wrap m-2">
        동일 유형 추천 문제
      </div>

      <br />
      {isRecommended ? (
        <Container>
          <StyledButton key={"3"}>고3 12월 모의고사 문제</StyledButton>
          <StyledButton key={"2"}>고2 12월 모의고사 문제</StyledButton>
          <StyledButton key={"4"}>00년도 수능 문제</StyledButton>
          <div className="m-8" key={"spacer"}></div>
          <StyledButton key={"5"}>AI 문제 생성</StyledButton>
        </Container>
      ) : (
        //! 추후 수정한 뒤에 사용하기
        // (
        //   recommendations.map((rec, index) => (
        //     <Container key={index}>
        //       <StyledButton
        //         onMouseEnter={() => setIsHovering(true)}
        //         onMouseMove={handleMouseMove}
        //         onMouseLeave={() => setIsHovering(false)}
        //       >
        //         {rec.id + 1}. {rec.question}
        //       </StyledButton>
        //       {isHovering && (
        //         <PreviewBox
        //           style={{
        //             left: `${hoverPos.x + 10}px`,
        //             top: `${hoverPos.y + 10}px`,
        //           }}
        //         >
        //           {rec.question + "\n"}

        //           {rec.article}
        //         </PreviewBox>
        //       )}
        //     </Container>
        //   ))
        // )
        <div className="m-4 text-white font-bold whitespace-pre-wrap">
          {"문제를 풀면\n비슷한 유형의 문제가 추천됩니다."}
        </div>
      )}
    </Sidebar>
  );
};

export default RecommendationSidebar;
