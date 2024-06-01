"use client";
import { Question } from "@/type/Question";
import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { allQuestionAtom } from "@/recoil/all-question-atom";

import ViewTeacherPage from "../view/ViewTeacherPage";
import { useRouter } from "next/navigation";

export default function TeacherPageComponent() {
  const [data, setData] = useState<Question[] | null>([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState<Question | null>(null);
  const allQuestion = useRecoilValue(allQuestionAtom);
  const router = useRouter();

  useEffect(() => {
    // 데이터 fetch 예시
    setTimeout(() => {
      setData(allQuestion);
      setLoading(false);
    }, 2000);
  }, [allQuestion]);

  return (
    <>
      <ViewTeacherPage
        loading={loading}
        data={data}
        setSelectedItem={(item: Question) => {
          setSelectedItem(item);
        }}
        selectedItem={selectedItem}
        goToHome={() => router.back()}
      />
    </>
  );
}
