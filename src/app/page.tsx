"use client";
import QuestionPage from "@/vac/components/QuestionPage";
import MainPage from "@/vac/components/MainPage";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { StoreApi } from "zustand";
import { questionIdAtom } from "@/recoil/question-id-atom";
import { initMainQuestion } from "@/service/initMainQuestion";
import { useRecoilState } from "recoil";
import { questionAtom } from "@/recoil/question-atom";
import { Question } from "@/type/Question";

export default function Home() {
  const [atom, setAtom] = useRecoilState(questionAtom);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function atomSetter(val: Question[]) {
    const newArray = [...atom, ...val];
    setAtom(newArray);
  }

  const goToQustionPage = async () => {
    setLoading(true);
    initMainQuestion({ setAtom: atomSetter });
    const timer = setTimeout(() => {
      setLoading(false);
      if (atom.length > 0) {
        console.log("fetch complete");
        router.push("/quiz/1");
      } else {
        console.log("re fetch");
        setLoading(true);
        const timer = setTimeout(() => {
          setLoading(false);
          router.push("/quiz/1");
        }, 2000);
      }
    }, 2000);
  };

  return (
    <main className="max-w-[1080px] mx-auto">
      <MainPage onClick={goToQustionPage} loading={loading} />
    </main>
  );
}
