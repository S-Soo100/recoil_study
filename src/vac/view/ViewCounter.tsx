"use client";
// VCounter.tsx
import styled from "@emotion/styled";

interface Props {
  value: number;
  disabledIncrease: boolean;
  disabledDecrease: boolean;
  onIncrease: () => void;
  onDecrease: () => void;
}

const Count = styled.span`
  display: block;
  font-size: 36px;
  color: hotpink;
  padding: 4px;
  margin: 4px;
`;

const Button = styled.button`
  padding: 1rem;
  font-size: 2rem;
  background: powderblue;
  border-radius: 1rem;
  transition: 0.5s;
  &:hover {
    background: cornflowerblue;
    color: white;
    transition: 0.5s;
  }
`;

const Div = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 24px;
  padding: 24px;
  height: 100vh; // 전체 뷰포트 높이를 차지하도록 설정
  width: 100vw; // 전체 뷰포트 너비를 차지하도록 설정
`;

const ViewCounter = ({
  value,
  disabledIncrease,
  disabledDecrease,
  onIncrease,
  onDecrease,
}: Props) => {
  return (
    <Div>
      <Count>{value}</Count>
      <div>
        <Button type="button" disabled={disabledIncrease} onClick={onIncrease}>
          +
        </Button>
        <Button type="button" disabled={disabledDecrease} onClick={onDecrease}>
          -
        </Button>
      </div>
    </Div>
  );
};

export default ViewCounter;
