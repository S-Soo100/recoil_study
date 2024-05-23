import styled from "@emotion/styled";

type IProps = {
  options: string[];
  selectedChoice: number;
  isSelected: boolean;
  handleClick: (content: string, index: number) => void;
  handleNextQuestion: () => void;
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
  isSelected,
  handleClick,
  handleNextQuestion,
}: IProps) => {
  if (isSelected) {
    return (
      <AnswerContainer>
        <Option
          key={"selected"}
          onClick={() => {}}
          selected={true}
        >{`${answers[selectedChoice]}`}</Option>
        <div className="ml-4 text-sky-600">
          {"선택 완료! 다음으로 넘어가주세요!"}
        </div>
        <div className="flex flex-row justify-end ">
          <button
            className="m-2 p-2 bg-blue-600 text-white text-lg rounded-md"
            onClick={handleNextQuestion}
          >
            {"다음 문제 ➡️"}
          </button>
        </div>
      </AnswerContainer>
    );
  }
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
