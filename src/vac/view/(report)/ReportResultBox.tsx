import { averageStatistics } from "@/demo/averageStatistics";
import { StudentResult } from "@/type/StudentResult";
import React, { useEffect, useState } from "react";
interface ReportRadarChartProps {
  result: StudentResult;
}

const ReportResultBox = ({ result }: ReportRadarChartProps) => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [low, setLow] = useState("");
  const [isHigherThanAvg, setIsHigherThanAvg] = useState(false);

  useEffect(() => {
    if (result) {
      // 객체를 [key, value] 형태의 배열로 변환
      const resultArray = Object.entries(result) as [
        keyof StudentResult,
        number
      ][];

      // 내림차순으로 정렬
      resultArray.sort((a, b) => b[1] - a[1]);

      // 가장 높은 수치와 key값
      const highest = resultArray[0];
      setFirst(`${highest[0]}`);

      // 두 번째로 높은 수치와 key값
      const secondHighest = resultArray[1];
      setSecond(secondHighest[0]);

      // 가장 낮은 수치와 key값
      const lowest = resultArray[resultArray.length - 1];
      setLow(lowest[0]);

      if (highest[1] > averageStatistics[highest[0]]) {
        setIsHigherThanAvg(true);
      }
    }
  }, [result]);

  return (
    <section className="gap-1 mb-3">
      <h2 className="my-4 text-2xl font-semibold">
        {`📊 ${first}, ${second}에서 강점, ${low} 부분 보충 필요`}
      </h2>
      <p className="px-4">{`추천 모의고사를 풀면 부족한 ${low} 유형을 집중 학습할 수 있어요!`}</p>
      <p className="px-4">
        {isHigherThanAvg
          ? `가장 두각을 나타내고 있는 ${first}능력은 학생 평균보다도 높은 수치에요!`
          : `${first}능력은 가장 두각을 나타내고 있지만 아직 학생 평균 데이터보다 조금 부족해요!`}
      </p>
    </section>
  );
};

export default ReportResultBox;
