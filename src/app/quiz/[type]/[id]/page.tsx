"use client";
import React from "react";
import { useParams } from "next/navigation";
import EnglishQuiz from "@/vac/components/EnglishQuiz";

export default function QuizPage() {
  const params = useParams();

  // Route -> /quiz/[tag]/[item]
  // URL -> /quiz/shoes/nike-air-max-97
  // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }
  console.log(params);

  return (
    <div>
      <EnglishQuiz></EnglishQuiz>
      {/* <p>슬러그 뭐고</p>
      <p>{params.type}</p>
      <p>{params.id}</p> */}
    </div>
  );
}
