"use client";
import QuestionPage from "@/vac/components/QuestionPage";
import MainPage from "@/vac/components/MainPage";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { StoreApi } from "zustand";
import { questionIdAtom } from "@/recoil/question-id-atom";

export default function Home() {
  const router = useRouter();

  const goToQustionPage = () => {
    router.push(`/quiz/1/0`);
  };

  return (
    <main className="max-w-[1080px] mx-auto">
      <MainPage onClick={goToQustionPage} />
    </main>
  );
}
