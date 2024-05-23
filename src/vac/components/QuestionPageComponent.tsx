"use client";
import React, { useEffect, useState } from "react";
import ViewQuestionPage from "../view/ViewQuestionPage";
import { useParams, useRouter } from "next/navigation";
import { Question } from "@/type/Question";
import { useRecoilState, useRecoilValue } from "recoil";
import { questionAtom } from "@/recoil/question-atom";
import { answerRateAtom } from "@/recoil/answer-rate-atom";
import { demo1 } from "@/demo/demo";
import { setRecommendQuestionByNumber } from "@/service/getRecommendQuestionByNumber";
import {
  recommend1Atom,
  recommend2Atom,
  recommend3Atom,
  recommend4Atom,
} from "@/recoil/recommend-atom";
import { storedQuestionAtom } from "@/recoil/stored-question-atom";

export default function QuestionPageComponent() {
  const params: { type: string } | null = useParams();
  const atom = useRecoilValue(questionAtom);
  const [storedQuestion, setStoredQuestion] =
    useRecoilState(storedQuestionAtom);
  const [loading, setLoading] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number>(6);
  const [selectedContent, setSelectedContent] = useState<string>("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [question, setQuestion] = useState<Question | null>(null);
  const [recommend1, setRecommend1Atom] = useRecoilState(recommend1Atom);
  const [recommend2, setRecommend2Atom] = useRecoilState(recommend2Atom);
  const [recommend3, setRecommend3Atom] = useRecoilState(recommend3Atom);
  const [recommend4, setRecommend4Atom] = useRecoilState(recommend4Atom);
  const [stayTime, setStayTime] = useState(0);

  //! 나중에 밖으로 빼야 할 부분
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  //! 나중에 밖으로 빼야 할 부분

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
  const getAtomSetterByNumber = (type: string) => {
    switch (type) {
      case "1":
        return setRecommend1Atom;
      case "2":
        return setRecommend2Atom;
      case "3":
        return setRecommend3Atom;
      case "4":
        return setRecommend4Atom;
      default:
        return setRecommend1Atom;
    }
  };

  const choiceAnswer = (content: string, index: number) => {
    resetChoice();
    setSelectedAnswer(index);
    setSelectedContent(content);
    openModal();
  };

  const handleYes = () => {
    closeModal();
    // if (!isSelected) {
    //   setLoading(true);
    // setRecommendQuestionByNumber({
    //   type: params?.type ?? "1",
    //   currentQuestion: [question!.id],
    //   // currentQuestion: [...atom.map((e) => e.id)],
    //   setAtom: getAtomSetterByNumber(params?.type ?? "1"),
    // });
    setIsSelected(false);
    setTimeout(() => {
      setIsSelected(true);
      if (selectedAnswer + 1! === question?.answer) {
        setStoredQuestion([
          ...storedQuestion,
          {
            ...question,
            selectedAnswer: selectedAnswer,
            spentTimeSec: stayTime,
            isCorrected: true,
          },
        ]);
        console.log(stayTime + " seconds");
      } else if (question !== null) {
        setStoredQuestion([
          ...storedQuestion,
          {
            ...question,
            selectedAnswer: selectedAnswer,
            spentTimeSec: stayTime,
            isCorrected: false,
          },
        ]);
        console.log(stayTime + " seconds");
      }
      setLoading(false);
    }, 200);
    // }
  };

  const modalClose = () => {
    closeModal();
    resetChoice();
  };

  const resetChoice = () => {
    setIsSelected(false);
    setSelectedAnswer(6);
    setIsCorrect(null);
  };

  const router = useRouter();
  useEffect(() => {
    setLoading(true);

    // if (questions) {
    setQuestion(atom[parseInt(params?.type ?? "2") - 1]);
    // }

    if (atom.length < 1) {
      setQuestion(demo1);
    }

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [atom, params?.type]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isSelected) {
        setStayTime((prevTime) => prevTime + 1);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
      // console.log(`Stay time: ${stayTime} seconds`);
    };
  }, [stayTime, isSelected]);

  return (
    <ViewQuestionPage
      isLoading={loading}
      isSelected={isSelected}
      selectedAnswer={selectedAnswer}
      selectedContent={selectedContent}
      isCorrect={isCorrect}
      question={question}
      choiceAnswer={choiceAnswer}
      recommendedQuestions={getAtomsByNumber(params?.type ?? "1")}
      isModalOpen={isModalOpen}
      handleYes={handleYes}
      closeModal={modalClose}
      // resetChoice={resetChoice}
    />
  );
}
