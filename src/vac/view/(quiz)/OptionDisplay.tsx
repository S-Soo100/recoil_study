import styled from "@emotion/styled";

type IProps = {
  options: string[];
  selectedChoice: number;
  handleClick: (content: string, index: number) => void;
};

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  // position: relative;
  // top: -100px;
`;

interface OptionProps {
  selected: boolean;
}

const Option = styled.button<OptionProps>`
  padding: 8px 16px 8px 16px;
  margin: 5px 0;
  text-align: start;
  border-radius: 16px;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(85, 85, 85, 0.25), 0 -0.2px 1px rgba(0, 0, 0, 0.01);
  background-color: ${({ selected }) => (selected ? "black" : "#fefefe")};
  color: ${({ selected }) => (selected ? "#D2D2D2" : "black")};
  font-weight: ${({ selected }) => (selected ? 700 : 400)};
  &:hover {
    background-color: ${({ selected }) => (selected ? "#333" : "#ddd")};
  }
`;

const OptionDisplay = ({
  options: answers,
  selectedChoice,
  handleClick,
}: IProps) => {
  return (
    <AnswerContainer>
      {answers.map((answer, index) => {
        if (answer.trim().length < 1) {
          return null;
        }
        return (
          <Option
            key={index}
            onClick={() => handleClick(answer, index)}
            selected={selectedChoice === index}
          >
            {`${answer}`}
          </Option>
        );
      })}
    </AnswerContainer>
  );
};

export default OptionDisplay;
