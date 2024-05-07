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
    // background: #edf5fb;
    background: #222222;
    border-radius: 4px;
    cursor: pointer;
    border: 1px solid #edf5fb;
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
        return <div>XOOO</div>;
      case "2":
        return <div>OXOO</div>;
      case "3":
        return <div>OOXO</div>;
      case "4":
        return <div>OOOX</div>;
      default:
        return <div>OOOO</div>;
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
        router.push("/quiz/1/1234");
        return;
      default:
        router.push("/quiz/1/1234");
        return;
    }
  };
  return (
    <>
      <section className="p-1 flex-row bg-slate-800 text-white flex items-center justify-between">
        <NextButton onClick={goToPrevQuiz}>이전 문제</NextButton>
        {getPageCircle()}
        <NextButton onClick={goToNextQuiz}>다음 문제</NextButton>
      </section>
      <div className="">{children}</div>
    </>
  );
}
