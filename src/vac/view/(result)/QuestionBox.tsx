"use client";
import { StoredQuestion } from "@/type/StoredQuestion";

export const QuestionBox = ({
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
      className="flex bg-gray-100 hover:bg-slate-200 px-3 py-2 rounded-sm shadow-md flex-col"
      onClick={() => showDetails(e.id)}
    >
      <div className="flex flex-row w-full justify-between">
        <p className="font-semibold text-lg">{index + 1 + " 번 문제"}</p>
        <p
          style={{
            color: e.isCorrected
              ? "Dodgerblue"
              : e.selectedAnswer === 6 ||
                e.selectedAnswer === undefined ||
                e.selectedAnswer === null
              ? "yellow"
              : "red",
          }}
          className="px-1 bg-gray-200 py-1 rounded-sm ml-12"
        >
          {e.isCorrected
            ? "정답"
            : e.selectedAnswer === 6 ||
              e.selectedAnswer === undefined ||
              e.selectedAnswer === null
            ? "풀지않음"
            : "오답"}
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
