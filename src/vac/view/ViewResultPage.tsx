"use client";
import styled from "@emotion/styled";

interface Props {
  goToHomePage: () => void;
  goToRetry: () => void;
  goToNewQuiz: () => void;
}

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 100dvh;
  align-items: center;
  flex-direction: column;
`;

const AppBar = styled.span`
  width: 100%;
  justify-content: start;
  align-items: start;
  padding: 0.5rem 1rem 0.5rem 1rem;
`;

const HomeButton = styled.button`
  background-color: #fefcfa;
  color: #4e4e4e;
  border: none;
  border-radius: 0.375rem;
  padding: 0.5rem 1rem;
  font-size: 16px;
  font-weight: 600;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    box-shadow: 0 3px 17px 3px rgb(0 0 0 / 0.2);
  }
`;

const HomeIcon = styled.span`
  margin-right: 8px;
  font-size: 20px;
`;

const Card = styled.span`
  display: flex;
  flex-direction: column;
  background-color: #fefcfa;
  border-radius: 2rem;
  padding: 4rem;
  font-size: 2rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  gap: 16%;
  &:hover {
    box-shadow: 0 13px 50px 14px rgb(0 0 0 / 0.2);
  }
`;

const Correct = styled.p`
  color: rgb(34 197 94);
  font-weight: 800;
  margin-right: 1rem;
  font-size: 2.25rem;
  line-height: 2.5rem;
`;
const Rate = styled.p`
  font-weight: 800;
  font-size: 2.25rem;
  line-height: 2.5rem;
`;

const CardFooter = styled.div`
  display: flex;5
  margin-top: 2rem;
  justify-content: space-between;
  gap: 3rem;
`;

const RetryButton = styled.button`
  background-color: #007aff;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const NewChallengeButton = styled.button`
  background-color: #4cd964;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #34c759;
  }
`;

const ViewResultPage = ({ goToHomePage, goToRetry, goToNewQuiz }: Props) => {
  return (
    <Main>
      <AppBar>
        <HomeButton onClick={goToHomePage}>
          <HomeIcon>🏠</HomeIcon>
          {" Home"}
        </HomeButton>
      </AppBar>
      <Card>
        <div className="flex flex-row">
          <Correct>{"75%"}</Correct>
          <Rate>{"Correct"}</Rate>
        </div>
        <div className="mb-6">{"0/3문제 정답"}</div>
        <CardFooter>
          <RetryButton onClick={goToRetry}>{"다시 풀기"}</RetryButton>
          <NewChallengeButton onClick={goToNewQuiz}>
            {"새로운 문제 풀기"}
          </NewChallengeButton>
        </CardFooter>
      </Card>
      <div className="m-8">
        <p>추가할 항목</p>
        <p>
          1) 유형별 오답률 정답률 2) 유형별 어디가 강하고 약한지 3) AI가 볼 때
          당신은 몇등급 입니다 하고 알려주기
        </p>
      </div>
    </Main>
  );
};

export default ViewResultPage;
