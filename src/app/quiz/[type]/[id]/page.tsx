"use client";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import QuestionPage from "@/vac/components/QuestionPage";
import ViewQuestionPage from "@/vac/view/ViewQuestionPage";
export default function QuizPage() {
  const params: { type: string; id: string } | null = useParams();
  // const router = useRouter();

  // const preventClose = (e: BeforeUnloadEvent) => {
  //   e.preventDefault();
  //   e.returnValue = "";
  // };

  // useEffect(() => {
  //   const handleRouteChange = (url: string) => {
  //     if (!userHasPermission(url)) {
  //       window.alert("You cannot go there!");
  //       throw "Route Change Denied";
  //     }
  //   };

  //   router.events.on("routeChangeStart", handleRouteChange);

  //   return () => {
  //     router.events.off("routeChangeStart", handleRouteChange);
  //   };
  // }, [router]);

  // function userHasPermission(url: string): boolean {
  //   // 사용자 권한을 검사하는 로직
  //   return false; // 이 예에서는 항상 'false'를 반환합니다.
  // }

  return (
    <>
      <ViewQuestionPage />
    </>
  );
}
