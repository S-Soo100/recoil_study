"use client";
import styled from "@emotion/styled";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import { questionAtom } from "@/recoil/question-atom";
import { useRecoilState } from "recoil";
import HomeButton from "@/vac/view/(result)/HomeButton";

export default function useLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [atom, setAtom] = useRecoilState(questionAtom);

  const NextButton = styled.button`
    padding: 10px;
    margin: 5px 0;
    text-align: start;
    border-radius: 0.75rem; /* 12px */
    // background: #447799;
    background: #4e514e;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
    &:hover {
      background-color: #6aabd2;
    }
  `;
  const router = useRouter();
  const params = useParams();
  const getPageCircle = () => {
    switch (params!.type) {
      case "1":
        return (
          <div className="gap-2 flex">
            <div className="w-4 h-4 bg-[#6AABD2] border-[2px] border-white  rounded-full"></div>
            <div className="w-4 h-4 bg-slate-100 border-[2px] border-slate-300 rounded-full"></div>
            <div className="w-4 h-4 bg-slate-100 border-[2px] border-slate-300 rounded-full"></div>
            <div className="w-4 h-4 bg-slate-100 border-[2px] border-slate-300 rounded-full"></div>
          </div>
        );
      case "2":
        return (
          <div className="gap-2 flex">
            <div className="w-4 h-4 bg-slate-100 border-[2px] border-slate-300 rounded-full"></div>
            <div className="w-4 h-4 bg-[#6AABD2] border-[2px] border-white  rounded-full"></div>
            <div className="w-4 h-4 bg-slate-100 border-[2px] border-slate-300 rounded-full"></div>
            <div className="w-4 h-4 bg-slate-100 border-[2px] border-slate-300 rounded-full"></div>
          </div>
        );
      case "3":
        return (
          <div className="gap-2 flex">
            <div className="w-4 h-4 bg-slate-100 border-[2px] border-slate-300 rounded-full"></div>
            <div className="w-4 h-4 bg-slate-100 border-[2px] border-slate-300 rounded-full"></div>
            <div className="w-4 h-4 bg-[#6AABD2] border-[2px] border-white  rounded-full"></div>
            <div className="w-4 h-4 bg-slate-100 border-[2px] border-slate-300 rounded-full"></div>
          </div>
        );
      case "4":
        return (
          <div className="gap-2 flex">
            <div className="w-4 h-4 bg-slate-100 border-[2px] border-slate-300 rounded-full"></div>
            <div className="w-4 h-4 bg-slate-100 border-[2px] border-slate-300 rounded-full"></div>
            <div className="w-4 h-4 bg-slate-100 border-[2px] border-slate-300 rounded-full"></div>
            <div className="w-4 h-4 bg-[#6AABD2] border-2 border-white rounded-full"></div>
          </div>
        );
      default:
        return (
          <div className="gap-2 flex">
            <div className="w-4 h-4 bg-[#6AABD2] border-[2px] border-white  rounded-full"></div>
            <div className="w-4 h-4 bg-slate-100 border-[2px] border-slate-300 rounded-full"></div>
            <div className="w-4 h-4 bg-slate-100 border-[2px] border-slate-300 rounded-full"></div>
            <div className="w-4 h-4 bg-slate-100 border-[2px] border-slate-300 rounded-full"></div>
          </div>
        );
    }
  };
  const goToPrevQuiz = () => {
    switch (params!.type) {
      case "1":
        router.replace("/");
        return;
      case "2":
        router.push(`/quiz/1`);
        return;
      case "3":
        router.push(`/quiz/2`);
        return;
      case "4":
        router.push(`/quiz/3`);
        return;
      default:
        router.push(`/quiz/1`);
        return;
    }
  };
  const goToNextQuiz = () => {
    switch (params!.type) {
      case "1":
        router.push("/quiz/2");
        return;
      case "2":
        router.push("/quiz/3");
        return;
      case "3":
        router.push("/quiz/4");
        return;
      case "4":
        router.push("/result");
        return;
      default:
        router.push("/result");
        return;
    }
  };
  return (
    <>
      <section className="p-1 flex-row bg-#DBDDD0 text-white flex items-center justify-between border-b-slate-300 shadow-md">
        {params!.type === "1" ? (
          <>
            <HomeButton onClick={goToPrevQuiz} />
          </>
        ) : (
          <>
            <NextButton onClick={goToPrevQuiz}>
              {params!.type !== "1" ? "이전 문제" : "뒤로 가기"}
            </NextButton>
          </>
        )}

        {getPageCircle()}
        <NextButton onClick={goToNextQuiz}>다음 문제</NextButton>
      </section>
      <div className="">{children}</div>
    </>
  );
}
