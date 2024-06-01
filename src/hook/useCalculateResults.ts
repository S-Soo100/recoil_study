import { storedQuestionAtom } from "@/recoil/stored-question-atom";
import { ScoringMap } from "@/type/ScoreMap";
import { StoredQuestion } from "@/type/StoredQuestion";
import { StudentResult } from "@/type/StudentResult";
import { useState, useCallback } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

const scoringMap: ScoringMap = {
  1: {
    reasoning: 0,
    comprehension: 12.5,
    logic: 12.5,
    criticalThinking: 12.5,
    vocabulary: 12.5,
  },
  2: {
    reasoning: 12.5,
    comprehension: 0,
    logic: 12.5,
    criticalThinking: 12.5,
    vocabulary: 12.5,
  },
  3: {
    reasoning: 12.5,
    comprehension: 12.5,
    logic: 0,
    criticalThinking: 12.5,
    vocabulary: 12.5,
  },
  4: {
    reasoning: 12.5,
    comprehension: 12.5,
    logic: 12.5,
    criticalThinking: 0,
    vocabulary: 12.5,
  },
  5: {
    reasoning: 12.5,
    comprehension: 12.5,
    logic: 12.5,
    criticalThinking: 12.5,
    vocabulary: 0,
  },
  6: {
    reasoning: 0,
    comprehension: 12.5,
    logic: 12.5,
    criticalThinking: 12.5,
    vocabulary: 12.5,
  },
  7: {
    reasoning: 12.5,
    comprehension: 0,
    logic: 12.5,
    criticalThinking: 12.5,
    vocabulary: 12.5,
  },
  8: {
    reasoning: 12.5,
    comprehension: 12.5,
    logic: 0,
    criticalThinking: 12.5,
    vocabulary: 12.5,
  },
  9: {
    reasoning: 12.5,
    comprehension: 12.5,
    logic: 12.5,
    criticalThinking: 0,
    vocabulary: 12.5,
  },
  10: {
    reasoning: 12.5,
    comprehension: 12.5,
    logic: 12.5,
    criticalThinking: 12.5,
    vocabulary: 0,
  },
};

const useCalculateResults = () => {
  const [result, setResult] = useState<StudentResult | null>(null);

  const calculateResults = useCallback(
    (questions: StoredQuestion[]): StudentResult => {
      let reasoning = 0;
      let comprehension = 0;
      let logic = 0;
      let criticalThinking = 0;
      let vocabulary = 0;
      let timeManagement = 0;

      questions.forEach((question) => {
        if (question.isCorrected) {
          const score = scoringMap[parseInt(question.questionType)] || {};
          reasoning += score.reasoning || 0;
          comprehension += score.comprehension || 0;
          logic += score.logic || 0;
          criticalThinking += score.criticalThinking || 0;
          vocabulary += score.vocabulary || 0;
          timeManagement += question.spentTimeSec <= 100 ? 10 : 5;
        }
      });

      const calculatedResult: StudentResult = {
        reasoning,
        comprehension,
        logic,
        criticalThinking,
        vocabulary,
        timeManagement,
      };

      setResult(calculatedResult);

      return calculatedResult;
    },
    []
  );

  return { result, calculateResults };
};

export default useCalculateResults;
