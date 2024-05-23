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
  showDetails: (id: number) => void;
}

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
  showDetails,
}: Props) => {
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
              <QuestionBox
                key={`${index}`}
                e={e}
                index={index}
                showDetails={showDetails}
              ></QuestionBox>
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
  showDetails,
}: {
  e: StoredQuestion;
  index: number;
  key: string;
  showDetails: (id: number) => void;
}) => {
  return (
    <button
      key={key}
      className="h-[180px] flex bg-gray-500 p-3 rounded-sm shadow-md text-white flex-col"
      onClick={() => showDetails(e.id)}
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
    </button>
  );
};
