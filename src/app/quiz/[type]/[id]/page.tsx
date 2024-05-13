"use client";
import React from "react";
import { useParams } from "next/navigation";
import QuestionPage from "@/vac/components/QuestionPage";

export default function QuizPage() {
  const params = useParams();

  // Route -> /quiz/[tag]/[item]
  // URL -> /quiz/shoes/nike-air-max-97
  // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }
  console.log(params);

  return (
    <div>
      <QuestionPage></QuestionPage>
      {/* <p>슬러그 뭐고</p>
      <p>{params.type}</p>
      <p>{params.id}</p> */}
    </div>
  );
}
