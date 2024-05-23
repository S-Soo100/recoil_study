"use client";
import styled from "@emotion/styled";
import HomeButton from "./(result)/HomeButton";
import Loader from "./Loader";
import { StoredQuestion } from "@/type/StoredQuestion";

interface Props {
  totalCount: number;
  answerCount: number;
  loading: boolean;
  storedQuestions: StoredQuestion[];
  incorrectQuestions: StoredQuestion[];
  stayTime: number;
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

// const HomeButton = styled.button`
//   background-color: #fefcfa;
//   color: #4e4e4e;
//   border: none;
//   border-radius: 0.375rem;
//   padding: 0.5rem 1rem;
//   font-size: 16px;
//   font-weight: 600;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   &:hover {
//     box-shadow: 0 3px 17px 3px rgb(0 0 0 / 0.2);
//   }
// `;

// const HomeIcon = styled.span`
//   margin-right: 8px;
//   font-size: 20px;
// `;

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

const ViewResultPage = ({
  totalCount,
  answerCount,
  loading,
  stayTime,
  storedQuestions,
  incorrectQuestions,
  goToHomePage,
  goToRetry,
  goToNewQuiz,
}: Props) => {
  // const [answerRate, setAnswerRateAtom] = useRecoilState(answerRateAtom);
  // const statistics = useRecoilValue(answerRateSelector);

  const correctRate = () => ((answerCount / totalCount) * 100).toFixed();

  return (
    <>
      <section className="h-full ">
        <div className="px-[1%] pt-[1%] h-[30%] bg-white gap-4 flex flex-col justify-start lg:max-w-[60%] mx-auto">
          <div className="flex justify-end">
            <HomeButton onClick={goToHomePage} />
          </div>
        </div>
        <div className="px-[2%] pt-[50px] h-[30%] bg-white gap-4 flex flex-col justify-start lg:max-w-[60%] mx-auto">
          <h2 className="text-2xl font-semibold">문제풀이 결과</h2>{" "}
          <span className="inline-grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="h-[180px] justify-center items-center flex bg-gray-500 p-3 rounded-sm shadow-md text-white flex-col">
              <div>총 학습시간</div>
              <div>{stayTime} 초</div>
              {/* <div>{stayTime}</div> */}
            </div>{" "}
            <div className="h-[180px] justify-center items-center flex bg-gray-500 p-3 rounded-sm shadow-md text-white flex-col">
              <p>{"정답률 " + correctRate() + "%"}</p>
              <p>{answerCount + "/" + totalCount + "문제 정답"}</p>
            </div>
          </span>
        </div>

        <div className="px-[2%] pt-[50px] bg-white gap-4 flex flex-col justify-start lg:max-w-[60%] mx-auto mb-8 pb-12">
          <h2 className="text-2xl font-semibold">문제풀이 점검</h2>
          <span className="inline-grid grid-cols-1 lg:grid-cols-2 gap-4">
            {storedQuestions.map((e, index) => (
              <QuestionBox key={`${index}`} e={e} index={index}></QuestionBox>
            ))}
          </span>
        </div>
      </section>
      {loading ? <Loader loading={loading} /> : <div></div>}
    </>
  );
};

export default ViewResultPage;

const QuestionBox = ({
  e,
  index,
  key: key,
}: {
  e: StoredQuestion;
  index: number;
  key: string;
}) => {
  return (
    <div
      key={key}
      className="h-[180px] flex bg-gray-500 p-3 rounded-sm shadow-md text-white flex-col"
    >
      <div className="flex flex-row justify-between mb-4">
        <p className="font-semibold text-lg">{index + 1 + " 번 문제"}</p>
        <p
          style={{
            color: e.isCorrected ? "Dodgerblue" : "red",
          }}
          className="px-1 bg-gray-900 rounded-sm "
        >
          {e.isCorrected ? "정답" : "오답"}
        </p>
      </div>
      {/* <div className="overflow-hidden text-ellipsis text-sm h-[50%] w-full">
        {e.article}
      </div> */}
      <div>{"유형: " + e.questionType}</div>
      <div>{"걸린 시간: " + e.spentTimeSec + " 초"}</div>
      <div>기타 표기 정보 추가해주세요!</div>
    </div>
  );
};
