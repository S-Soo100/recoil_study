"use client";
import { StudentResult } from "@/type/StudentResult";
import React from "react";

interface ResultsChartProps {
  result: StudentResult;
}
//"추론력", "이해력", "논리력", "사고력", "어휘력", "시간관리"
const ResultsChart: React.FC<ResultsChartProps> = ({ result }) => {
  const skills = [
    { name: "추론력", value: result.reasoning },
    { name: "이해력", value: result.comprehension },
    { name: "논리력", value: result.logic },
    { name: "사고력", value: result.criticalThinking },
    { name: "어휘력", value: result.vocabulary },
    { name: "시간 관리", value: result.timeManagement },
  ];

  return (
    <div className="w-[100%] lg:w-[50%] ">
      {skills.map((skill) => (
        <div key={skill.name} className="skill">
          <div className="skill-name">{skill.name}</div>
          <div className="skill-bar">
            <div
              className="skill-value"
              style={{ width: `${skill.value}%` }}
            ></div>
          </div>
          <div className="skill-score">{skill.value}</div>
        </div>
      ))}
      <style jsx>{`
        .results-chart {
          width: 100%;
          max-width: 600px;
          margin: auto;
        }
        .skill {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }
        .skill-name {
          width: 150px;
        }
        .skill-bar {
          flex: 1;
          height: 20px;
          background-color: #e0e0e0;
          margin: 0 10px;
          position: relative;
        }
        .skill-value {
          height: 100%;
          background-color: #3b82f6;
        }
        .skill-score {
          width: 40px;
          text-align: right;
        }
      `}</style>
    </div>
  );
};

export default ResultsChart;
