import React, { useState } from "react";
import styled from "@emotion/styled";

type IProps = {
  choices: string[];
  selectedChoice: number;
  handleClick: (index: number) => void;
};

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: -100px;
`;

const Option = styled.button`
  padding: 10px 20px 10px 20px;
  margin: 5px 0;
  text-align: start;
  // background: #edf5fb;
  background: #ffffff;
  border-radius: 16px;
  cursor: pointer;
  border: 1px solid #edf5fb;
  box-shadow: 0 4px 3px rgba(0, 0, 0, 0.1), 0 -0.4px 3px rgba(0, 0, 0, 0.08);
  &:hover {
    background-color: #989898;
  }
`;

const ChoiceDisplay = ({ choices, selectedChoice, handleClick }: IProps) => {
  return (
    <AnswerContainer>
      {choices.map((e, index) => (
        <Option
          key={e}
          onClick={() => handleClick(index)}
          style={{
            color: selectedChoice === index ? "cornflowerblue" : "black",
          }}
        >
          {`(${index + 1}) ${e}`}
        </Option>
      ))}
    </AnswerContainer>
  );
};

export default ChoiceDisplay;
