"use client";
// components/RadarChart.js
import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  TooltipItem,
} from "chart.js";
import { demoStatistics } from "@/demo/demoStatistics";
import styled from "@emotion/styled";
import { StudentResult } from "@/type/StudentResult";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);
interface ReportRadarChartProps {
  result: StudentResult;
}

const ReportRadarChart = ({ result }: ReportRadarChartProps) => {
  const skills = [
    { name: "추론력", value: result.reasoning },
    { name: "이해력", value: result.comprehension },
    { name: "논리력", value: result.logic },
    { name: "사고력", value: result.criticalThinking },
    { name: "어휘력", value: result.vocabulary },
    { name: "시간 관리", value: result.timeManagement },
  ];

  const data = {
    labels: skills.map((e) => e.name),
    datasets: [
      {
        label: "신규 분석 결과",
        data: skills.map((e) => e.value),
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgb(54, 162, 235)",
        pointBackgroundColor: "#fff",
        pointBorderColor: "rgb(54, 162, 235)",
        pointHoverBackgroundColor: "#343434",
        pointHoverBorderColor: "rgb(54, 162, 235)",
        borderWidth: 4,
      },
      {
        label: "이전 나의 데이터",
        data: [
          demoStatistics.reasoning,
          demoStatistics.comprehension,
          demoStatistics.logic,
          demoStatistics.criticalThinking,
          demoStatistics.vocabulary,
          demoStatistics.timeManagement,
        ],
        fill: true,
        backgroundColor: "rgba(201, 203, 207, 0.2)",
        borderColor: "rgb(201, 203, 207)",
        pointBackgroundColor: "rgb(201, 203, 207)",
        pointBorderColor: "rgb(151, 153, 157)",
        pointHoverBackgroundColor: "#343434",
        pointHoverBorderColor: "rgb(201, 203, 207)",
        borderWidth: 4,
      },
    ],
  };

  // const options = {
  //   responsive: true,
  //   plugins: {
  //     tooltip: {
  //       callbacks: {
  //         label: function (tooltipItem: TooltipItem<"radar">) {
  //           const label = tooltipItem.dataset.label || "";
  //           const value = tooltipItem.raw || 0;
  //           return `${label}: ${value}`;
  //         },
  //       },
  //     },
  //   },
  // };

  const Container = styled.div`
    width: 100%;
    position: relative;
    @media (min-width: 1024px) {
      width: 50%;
    }
  `;
  return (
    <Container>
      <h1 className="text-2xl font-bold p-3 mx-4">이전 데이터 분석 결과</h1>
      <Radar data={data} />
    </Container>
  );
};

export default ReportRadarChart;
