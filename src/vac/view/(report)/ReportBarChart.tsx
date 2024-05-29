"use client";
import { averageStatistics } from "@/demo/averageStatistics";
import { StudentResult } from "@/type/StudentResult";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// 필요한 스케일 및 요소 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ReportBarChartProps {
  result: StudentResult;
}

const ReportBarChart: React.FC<ReportBarChartProps> = ({ result }) => {
  const skills = [
    { name: "추론력", value: result.reasoning },
    { name: "이해력", value: result.comprehension },
    { name: "논리력", value: result.logic },
    { name: "사고력", value: result.criticalThinking },
    { name: "어휘력", value: result.vocabulary },
    { name: "시간 관리", value: result.timeManagement },
  ];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 14, // X축 텍스트 크기 설정
          },
        },
      },
      y: {
        ticks: {
          font: {
            size: 14, // Y축 텍스트 크기 설정
          },
        },
      },
    },
  };

  const labels = skills.map((e) => e.name);

  const data = {
    labels,
    datasets: [
      {
        label: "신규 분석 결과",
        data: skills.map((e) => e.value),
        backgroundColor: "rgb(54, 162, 235)",
      },
      {
        label: "학생 평균 수치",
        data: [
          averageStatistics.reasoning,
          averageStatistics.comprehension,
          averageStatistics.logic,
          averageStatistics.criticalThinking,
          averageStatistics.vocabulary,
          averageStatistics.timeManagement,
        ],
        backgroundColor: "rgba(151, 153, 157, 0.5)",
      },
    ],
  };

  return (
    <div className="w-[100%] lg:w-[50%] ">
      <Bar options={options} data={data} />
    </div>
  );
};

export default ReportBarChart;
