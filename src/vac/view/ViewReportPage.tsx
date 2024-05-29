"use client";
import React from "react";
import styled from "@emotion/styled";
import { StoredQuestion } from "@/type/StoredQuestion";
import Loader from "./Loader";
import { StudentResult } from "@/type/StudentResult";
import ResultsChart from "./(report)/ResultsChart";
import ReportRadarChart from "./(report)/ReportRadarChart";
import { Grid } from "react-loader-spinner";
import ReportBarChart from "./(report)/ReportBarChart";
import ReportResultBox from "./(report)/ReportResultBox";

type IProps = {
  // questions: StoredQuestion[];
  result: StudentResult | null;
  loading: boolean;
  goBack: () => void;
};

const AppBar = styled.div`
  padding-left: 1%;
  padding-right: 1%;
  padding-top: 1%;
  height: 30%;
  background-color: #fff;
  gap: 16px;
  flex-direction: column;
  justify-content: flex-start;

  @media (min-width: 1024px) {
    max-width: 60%;
  }
  margin: 0 auto;
`;

export default function ViewReportPage({
  // questions,
  result,
  loading,
  goBack,
}: IProps) {
  return (
    <>
      <section className="h-full">
        <AppBar className="">
          <button
            onClick={goBack}
            className="p-2 bg-gray-800 text-white flex max-w-[100px] justify-center text-center rounded-xl hover:bg-gray-700"
          >
            {"뒤로가기"}
          </button>
        </AppBar>
        <div className="px-[2%] pt-[50px] h-[30%] bg-white gap-4 flex flex-col justify-start lg:max-w-[60%] mx-auto">
          <h2 className="text-2xl font-semibold">
            {"🤖 문제 해결능력 AI 분석 결과"}
          </h2>{" "}
          <div className="text-lg px-4">
            {
              "이번 풀이 결과를 내 기존 데이터, 학생 평균 데이터와 대조하여 분석합니다."
            }
          </div>
        </div>
        <div className="px-[2%] pt-[50px] bg-white gap-4 flex flex-col justify-start lg:max-w-[60%] mx-auto ">
          {result ? (
            <ReportResultBox result={result} />
          ) : (
            <div className="w-[100%] flex items-center justify-center">
              <Grid
                visible={true}
                height={80}
                width={80}
                color="#7BAFD4"
                ariaLabel="grid-loading"
                radius="12.5"
                wrapperClass="grid-wrapper"
              />
            </div>
          )}
        </div>
        <div className="x-[2%] pt-[50px] h-[30%] bg-white gap-4 flex flex-col lg:flex-row p-2  justify-center items-start lg:max-w-[60%] mx-auto">
          {result ? (
            <ReportRadarChart result={result} />
          ) : (
            <div className="w-[100%] lg:w-[50%] h-full flex items-center justify-center">
              <Grid
                visible={true}
                height={80}
                width={80}
                color="#7BAFD4"
                ariaLabel="grid-loading"
                radius="12.5"
                wrapperClass="grid-wrapper"
              />
            </div>
          )}
          {result ? (
            <ReportBarChart result={result} />
          ) : (
            <div className="w-[100%] lg:w-[50%]  h-full flex items-center justify-center">
              <Grid
                visible={true}
                height={80}
                width={80}
                color="#7BAFD4"
                ariaLabel="grid-loading"
                radius="12.5"
                wrapperClass="grid-wrapper"
              />
            </div>
          )}
        </div>

        <div className="px-[2%] pt-[50px] bg-white gap-4 flex flex-col justify-start lg:max-w-[60%] mx-auto mb-8 pb-[300px]">
          <div>{/* 여기에 아래로 확장해야 하는 내용을 넣어주세요 */}</div>
        </div>
      </section>
      {loading ? <Loader loading={loading} /> : <div></div>}
    </>
  );
}
