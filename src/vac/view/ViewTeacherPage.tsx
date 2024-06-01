"use client";
import { Question } from "@/type/Question";
import React from "react";
import Loader from "./Loader";
import { parseTestNumber } from "@/utils/parseTestNumber";
import { parseQuestionType } from "@/utils/parseQuestionType";
import HomeButton from "./(result)/HomeButton";

type IProps = {
  loading: boolean;
  data: Question[] | null;
  setSelectedItem: (item: Question) => void;
  selectedItem: Question | null;
  goToHome: () => void;
  goToUploadPage: () => void;
  isAi: boolean;
  setIsAi: (value: boolean) => void;
};

export default function ViewTeacherPage({
  loading,
  data,
  setSelectedItem,
  selectedItem,
  goToHome,
  goToUploadPage,
  isAi,
  setIsAi,
}: IProps) {
  return (
    <>
      <div className="p-2 bg-slate-800 flex flex-row justify-between">
        <div className="p-2">
          <HomeButton onClick={goToHome} />
        </div>
        <button
          className="p-2 m-2 rounded-lg bg-white text-black font-semibold px-4"
          onClick={goToUploadPage}
        >
          pdf 업로드
        </button>
      </div>
      <div className="flex h-screen bg-gray-300 text-gray-800 font-sans">
        <div
          id="Sidebar"
          className="min-w-[300px] bg-slate-800 text-white border-r border-gray-200 p-4 overflow-y-auto"
        >
          <h1 className="text-2xl mb-4 p-2 text-center font-semibold">
            문제 목록
          </h1>
          <div className="grid grid-cols-2 gap-2 p-2">
            <button
              onClick={() => setIsAi(false)}
              className={`w-full  p-1 text-center text-ellipsis ${
                isAi ? "" : "bg-slate-300 text-black"
              }`}
            >
              모의고사&수능
            </button>
            <button
              onClick={() => setIsAi(true)}
              className={`w-full p-1 ext-center text-ellipsis ${
                isAi ? "bg-slate-300 text-black" : " "
              }`}
            >
              AI PDF문제 해설
            </button>
          </div>
          {loading ? (
            <div className="text-center p-4">Loading...</div>
          ) : isAi ? (
            data!
              .filter((e) => e.question === "")
              .map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className={`p-2 border-b border-gray-200 w-full text-ellipsis cursor-pointer hover:bg-gray-600 ${
                    selectedItem && selectedItem.id === item.id
                      ? "bg-slate-300 text-gray-900"
                      : ""
                  }`}
                >
                  {item.id + " : " + parseTestNumber(item.testNumber)}
                </div>
              ))
          ) : (
            data!
              .filter((e) => e.question !== "")
              .map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className={`p-2 border-b border-gray-200 w-full text-ellipsis cursor-pointer hover:bg-gray-600 ${
                    selectedItem && selectedItem.id === item.id
                      ? "bg-slate-300 text-gray-900"
                      : ""
                  }`}
                >
                  {item.id + " : " + parseTestNumber(item.testNumber)}
                </div>
              ))
          )}
        </div>
        <div className="flex-grow p-10 bg-gray-100 flex  flex-col gap-4 max-w-[70%]">
          {selectedItem ? (
            <>
              <h2 className="text-2xl p-6 shadow-lg bg-white rounded-xl font-semibold">
                {selectedItem.question !== ""
                  ? "[No." + selectedItem.id + "] " + selectedItem.question
                  : "[No." +
                    selectedItem.id +
                    "] 파일명 " +
                    parseTestNumber(selectedItem.testNumber) +
                    ".pdf"}
              </h2>
              <p className="text-lg p-6 shadow-lg bg-white rounded-xl">
                <p className="font-bold mb-4">문제 정보</p>
                <div>
                  <p>{"출제 : " + parseTestNumber(selectedItem.testNumber)}</p>
                  <p>
                    {"문제 유형 : " +
                      parseQuestionType(selectedItem.questionType)}
                  </p>
                  <p>{"문제 번호 : " + selectedItem.questionNumber + "번"}</p>
                </div>
              </p>
              {selectedItem.article !== "" ? (
                <p className="text-lg p-6 shadow-lg bg-white rounded-xl">
                  <p className="font-bold mb-4">지문</p>
                  <p>{selectedItem.article}</p>
                </p>
              ) : (
                <></>
              )}

              {selectedItem.article !== "" ? (
                <p className="text-lg p-6 shadow-lg bg-white rounded-xl">
                  <p className="font-bold mb-4">선택지</p>
                  <div>
                    {selectedItem.options.split("\n").map((e) => (
                      <p key={e}>{e}</p>
                    ))}
                  </div>
                </p>
              ) : (
                <></>
              )}

              <p className="text-lg p-6 shadow-lg bg-white rounded-xl">
                <p className="font-bold mb-4">답변 및 해석</p>
                <p className="mb-4">{"정답 : " + selectedItem.answer + "번"}</p>
                <p>{selectedItem.solution}</p>
              </p>
            </>
          ) : loading ? (
            <div>
              <h1 className="text-2xl font-bold shadow-lg p-6 mb-4 bg-white rounded-xl">
                로딩 중입니다....
              </h1>
              <p className="text-lg shadow-lg p-6 bg-white rounded-xl">
                로딩 후에도 아이템이 표시되지 않으면 뒤로 가서 다시 로그인 해
                주세요.
              </p>
            </div>
          ) : (
            <div>
              <p className="text-lg shadow-lg p-6 bg-white rounded-xl">
                왼 쪽의 목록에서 확인할 문제를 선택해주세요
              </p>
            </div>
          )}
        </div>
        {loading ? <Loader loading={loading} /> : <div></div>}
      </div>
    </>
  );
}
