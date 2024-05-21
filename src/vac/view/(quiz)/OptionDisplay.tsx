import styled from "@emotion/styled";

type IProps = {
  options: string[];
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
  padding: 8px 16px 8px 16px;
  margin: 3px 0;
  text-align: start;
  // background: #edf5fb;
  background-color: #d3d3d3;
  border-radius: 16px;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 -0.2px 1px rgba(0, 0, 0, 0.01);
  &:hover {
    background-color: #e3e3e3;
  }
`;

const OptionDisplay = ({
  options: choices,
  selectedChoice,
  handleClick,
}: IProps) => {
  return (
    <AnswerContainer>
      {choices.map((e, index) => {
        if (e.trim().length < 1) {
          return null;
        }
        return (
          <Option
            key={index}
            onClick={() => handleClick(index)}
            style={{
              backgroundColor: selectedChoice === index ? "black" : "white",
              color: selectedChoice === index ? "#D2D2D2" : "black",
              fontWeight: selectedChoice === index ? 700 : 400,
            }}
          >
            {`${e}`}
          </Option>
        );
      })}
    </AnswerContainer>
  );
};

export default OptionDisplay;
