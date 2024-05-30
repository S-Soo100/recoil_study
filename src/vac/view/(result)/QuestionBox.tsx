"use client";
import { StoredQuestion } from "@/type/StoredQuestion";
import { parseQuestionType } from "@/utils/parseQuestionType";
import { parseTestNumber } from "@/utils/parseTestNumber";

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
      className="flex bg-gray-100 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-sm shadow-md flex-col"
      onClick={() => showDetails(e.id)}
    >
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-col justify-start items-start gap-3">
          <div className="flex flex-row gap-3">
            <p className="font-semibold text-lg">{index + 1 + " 번 문제"}</p>
            <p>{parseTestNumber(e.testNumber)}</p>
          </div>
          <p className="font-semibold text-lg">
            {parseQuestionType(e.questionType)}
          </p>
        </div>
        <div className="gap-3 flex flex-col">
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
            className="px-1 bg-gray-300 hover:bg-white py-1 rounded-sm ml-2 shadow-sm"
          >
            {e.isCorrected
              ? "정답"
              : e.selectedAnswer === 6 ||
                e.selectedAnswer === undefined ||
                e.selectedAnswer === null
              ? "풀지않음"
              : "오답"}
          </p>
          <div>{"⏱️ " + e.spentTimeSec + " 초"}</div>
        </div>
      </div>
    </button>
  );
};
