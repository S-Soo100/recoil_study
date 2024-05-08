"use client";
import styled from "@emotion/styled";
import React from "react";
import { useParams, useRouter } from "next/navigation";

export default function useLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const NextButton = styled.button`
    padding: 10px;
    margin: 5px 0;
    text-align: start;
    border-radius: 0.75rem; /* 12px */
    background: #447799;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
    &:hover {
      background-color: #dae9f2;
    }
  `;
  const router = useRouter();
  const params = useParams();
  const getPageCircle = () => {
    switch (params.type) {
      case "1":
        return (
          <div className="gap-2 flex">
            <div className="w-4 h-4 bg-white border-2 border-slate-400  rounded-full"></div>
            <div className="w-4 h-4 bg-slate-800 border-2 border-slate-400 rounded-full"></div>
            <div className="w-4 h-4 bg-slate-800 border-2 border-slate-400 rounded-full"></div>
            <div className="w-4 h-4 bg-slate-800 border-2 border-slate-400 rounded-full"></div>
          </div>
        );
      case "2":
        return (
          <div className="gap-2 flex">
            <div className="w-4 h-4 bg-slate-800 border-2 border-slate-400 rounded-full"></div>
            <div className="w-4 h-4 bg-white border-2 border-slate-400  rounded-full"></div>
            <div className="w-4 h-4 bg-slate-800 border-2 border-slate-400 rounded-full"></div>
            <div className="w-4 h-4 bg-slate-800 border-2 border-slate-400 rounded-full"></div>
          </div>
        );
      case "3":
        return (
          <div className="gap-2 flex">
            <div className="w-4 h-4 bg-slate-800 border-2 border-slate-400 rounded-full"></div>
            <div className="w-4 h-4 bg-slate-800 border-2 border-slate-400 rounded-full"></div>
            <div className="w-4 h-4 bg-white border-2 border-slate-400  rounded-full"></div>
            <div className="w-4 h-4 bg-slate-800 border-2 border-slate-400 rounded-full"></div>
          </div>
        );
      case "4":
        return (
          <div className="gap-2 flex">
            <div className="w-4 h-4 bg-slate-800 border-2 border-slate-400 rounded-full"></div>
            <div className="w-4 h-4 bg-slate-800 border-2 border-slate-400 rounded-full"></div>
            <div className="w-4 h-4 bg-slate-800 border-2 border-slate-400 rounded-full"></div>
            <div className="w-4 h-4 bg-white border-2 border-slate-400  rounded-full"></div>
          </div>
        );
      default:
        return (
          <div className="gap-2 flex">
            <div className="w-4 h-4 bg-white border-2 border-slate-400  rounded-full"></div>
            <div className="w-4 h-4 bg-slate-800 border-2 border-slate-400 rounded-full"></div>
            <div className="w-4 h-4 bg-slate-800 border-2 border-slate-400 rounded-full"></div>
            <div className="w-4 h-4 bg-slate-800 border-2 border-slate-400 rounded-full"></div>
          </div>
        );
    }
  };
  const goToPrevQuiz = () => {
    switch (params.type) {
      case "1":
        router.replace("/");
        return;
      case "2":
        router.push("/quiz/1/1234");
        return;
      case "3":
        router.push("/quiz/2/1234");
        return;
      case "4":
        router.push("/quiz/3/1234");
        return;
      default:
        router.push("/quiz/1/1234");
        return;
    }
  };
  const goToNextQuiz = () => {
    switch (params.type) {
      case "1":
        router.push("/quiz/2/1234");
        return;
      case "2":
        router.push("/quiz/3/1234");
        return;
      case "3":
        router.push("/quiz/4/1234");
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
      <section className="p-1 flex-row bg-slate-200 text-white flex items-center justify-between border-b-slate-300 shadow-lg">
        <NextButton onClick={goToPrevQuiz}>
          {params.type !== "1" ? "이전 문제" : "뒤로 가기"}
        </NextButton>
        {getPageCircle()}
        <NextButton onClick={goToNextQuiz}>다음 문제</NextButton>
      </section>
      <div className="">{children}</div>
    </>
  );
}
