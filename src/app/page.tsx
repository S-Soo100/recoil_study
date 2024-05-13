"use client";
import QuestionPage from "@/vac/components/QuestionPage";
import MainPage from "@/vac/components/MainPage";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [randomId, setRandomId] = useState(0);
  const goToQustionPage = () => {
    router.push(`/quiz/${1}/${randomId}`);
  };

  useEffect(() => {
    setRandomId(2134);
  }, []);

  return (
    <main className="max-w-[1080px] mx-auto">
      <MainPage onClick={goToQustionPage} />
    </main>
  );
}
