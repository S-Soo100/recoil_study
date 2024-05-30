"use client";
import React, { useState } from "react";
import Image from "next/image";
import profilePic from "../../../public/ai-tutor-character.png";
import Modal from "./(main)/(modal)/Modal";
import Icon from "@/icons/Icon";
import { useRouter } from "next/navigation";
import { questionAtom } from "@/recoil/question-atom";
import { initMainQuestion } from "@/service/initMainQuestion";
import { useRecoilState } from "recoil";
import Loader from "./Loader";
import { Question } from "@/type/Question";
import { useUpdateStoredQuestionsArray } from "@/hook/useUpdateStoredQuestion";
import { StoredQuestion } from "@/type/StoredQuestion";

export default function ViewMainHomePage() {
  const updateStoredQuestionsArray = useUpdateStoredQuestionsArray();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  function atomSetter(val: StoredQuestion[]) {
    updateStoredQuestionsArray(val);
  }

  const goToQustionPage = async () => {
    setLoading(true);
    initMainQuestion({ setStoredAtom: atomSetter });
    const timer = setTimeout(() => {
      setLoading(false);
      router.push("/quiz/1");
    }, 1500);
  };

  const handleLogin = async (email: string, password: string) => {
    try {
      goToQustionPage();
    } catch (error) {
      return (error as Error).message;
    }
  };

  return (
    <main className="bg-white pt-12 max-w-[1400px] mx-auto h-[100dvh] ">
      <section
        id="AppBar"
        className="px-4 shadow-md w-[92%] bg-white mb-8 h-[50px] rounded-full justify-between items-center flex flex-row mx-auto"
      >
        <div className="flex flex-row justify-center items-center">
          <Icon width={160} />
          <div>A Important</div>
        </div>
        <div className="gap-3 flex-row flex">
          <a href="/about">더 알아보기</a>
          <a href="/team">팀 구성</a>
        </div>
      </section>
      <section className="bg-white min-h-[80dvh] flex lg:flex-row flex-col lg:gap-x-12 items-start">
        <div className="lg:w-1/2 flex justify-center flex-col gap-8 items-start pl-[10dvh] min-h-[50dvh] pr-2 ">
          <div>
            <h1 className="text-3xl lg:text-6xl font-semibold ">나만을 위한</h1>
            <h1 className="text-3xl lg:text-6xl font-semibold ">
              Ai 영어 튜터
            </h1>
          </div>
          <div className="flex flex-col">
            <p className="">나의 풀이기록 기반 학습 포인트 체크</p>
            <p className="">문제유형별, 주제별 추천 문제 제공</p>
          </div>
          <button
            className="bg-blue-500 rounded-full m-2 px-8 py-2 text-white font-semibold text-lg"
            onClick={() => openModal()}
          >
            로그인
          </button>
        </div>
        <div className="lg:w-1/2 flex justify-center items-center min-h-[50dvh] pr-2">
          <Image src={profilePic} alt="Profile Picture" />
        </div>
      </section>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        handleLogin={handleLogin}
      />
      {loading ? <Loader loading={loading} /> : <div></div>}
    </main>
  );
}
