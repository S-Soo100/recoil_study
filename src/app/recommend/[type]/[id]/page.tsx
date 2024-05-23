"use client";
import { demo1 } from "@/demo/demo";
import { answerRateAtom } from "@/recoil/answer-rate-atom";
import {
  recommend1Atom,
  recommend2Atom,
  recommend3Atom,
  recommend4Atom,
} from "@/recoil/recommend-atom";
import { Question } from "@/type/Question";
import ViewQuestionPage from "@/vac/view/ViewQuestionPage";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export default function RecommendPage() {
  const params: { type: string; id: string } | null = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number>(6);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [question, setQuestion] = useState<Question | null>(null);
  const [answerRate, setAnswerRateAtom] = useRecoilState(answerRateAtom);
  const [recommend1, setRecommend1Atom] = useRecoilState(recommend1Atom);
  const [recommend2, setRecommend2Atom] = useRecoilState(recommend2Atom);
  const [recommend3, setRecommend3Atom] = useRecoilState(recommend3Atom);
  const [recommend4, setRecommend4Atom] = useRecoilState(recommend4Atom);

  const getAtomsByNumber = (type: string) => {
    switch (type) {
      case "1":
        return recommend1;
      case "2":
        return recommend2;
      case "3":
        return recommend3;
      case "4":
        return recommend4;
      default:
        return recommend1;
    }
  };

  const getQuestionById = (id: string) => {
    const idNum = parseInt(id);
    return getAtomsByNumber(params?.type ?? "1").find((e) => e.id === idNum);
  };

  const choiceAnswer = (content: string, index: number) => {
    if (!isSelected) {
      setLoading(true);
      // setRecommendQuestionByNumber({
      //   type: params?.type ?? "1",
      //   currentQuestion: [question!.id],
      //   // currentQuestion: [...atom.map((e) => e.id)],
      //   setAtom: getAtomSetterByNumber(params?.type ?? "1"),
      // });
      setTimeout(() => {
        setIsSelected(true);

        setSelectedAnswer(index);

        if (index + 1! === question?.answer) {
          setIsCorrect(true);
          setAnswerRateAtom([...answerRate, true]);
        } else {
          setIsCorrect(false);
          setAnswerRateAtom([...answerRate, false]);
        }
        setLoading(false);
      }, 300);
    }
  };

  useEffect(() => {
    setQuestion(getQuestionById(params!.id)!);
  }, [params]);

  return (
    <div>
      <ViewQuestionPage
        isLoading={false}
        isSelected={isSelected}
        selectedAnswer={selectedAnswer}
        isCorrect={isCorrect}
        question={question}
        choiceAnswer={choiceAnswer}
        recommendedQuestions={[]}
        selectedContent={""}
        isModalOpen={false}
        handleYes={() => {}}
        closeModal={() => {}}
      />
    </div>
  );
}
