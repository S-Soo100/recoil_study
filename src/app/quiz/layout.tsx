"use client";
import styled from "@emotion/styled";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import HomeButton from "@/vac/view/(result)/HomeButton";

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
    const typeNumber = parseInt(params!.type[0]);

    if (params!.type[0] === "1") {
      router.push("/");
      return;
    }

    router.push(`/quiz/${typeNumber - 1}`);
  };
  const goToNextQuiz = () => {
    const typeNumber = parseInt(params!.type[0]);

    if (params!.type[0] + params!.type[1] === "10") {
      router.push(`/result`);
      return;
    }

    router.push(`/quiz/${typeNumber + 1}`);
  };
  return (
    <div className="bg-white max-w-[1600px] mx-auto ">
      <section className="flex justify-between items-center text-white mx-auto pt-8 pb-4">
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
        <div className="text-black">{`${params!.type}/10`}</div>
        {params!.type === "4" ? (
          <>
            <NextButton onClick={goToNextQuiz}>{"결과 보기"}</NextButton>
          </>
        ) : (
          <>
            <NextButton onClick={goToNextQuiz}>{"다음 문제"}</NextButton>
          </>
        )}
      </section>
      {/* <section className="p-1 flex-row bg-#DBDDD0 text-white flex items-center justify-between border-b-slate-300">
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
        {params!.type === "4" ? (
          <>
            <NextButton onClick={goToNextQuiz}>{"결과 보기"}</NextButton>
          </>
        ) : (
          <>
            <NextButton onClick={goToNextQuiz}>{"다음 문제"}</NextButton>
          </>
        )}
      </section> */}
      {/* <div className="flex w-[100%] px-[5%] mx-auto"> */}
      <div>{children}</div>
      {/* </div> */}
    </div>
  );
}
