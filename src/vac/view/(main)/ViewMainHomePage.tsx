"use client";
import React, { useState } from "react";
import Image from "next/image";
import profilePic from "../../../../public/ai-tutor-character.png";
import Modal from "./(modal)/Modal";
import Icon from "@/icons/Icon";
import { useRouter } from "next/navigation";
import { questionAtom } from "@/recoil/question-atom";
import { initMainQuestion } from "@/service/initMainQuestion";
import { useRecoilState } from "recoil";
import Loader from "../Loader";
import { Question } from "@/type/Question";

export default function ViewMainHomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [atom, setAtom] = useRecoilState(questionAtom);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
        closeModal();
        router.push("/quiz/1");
      } else {
        console.log("re fetch");
        setLoading(true);
        const timer = setTimeout(() => {
          setLoading(false);
          closeModal();
          router.push("/quiz/1");
        }, 500);
      }
    }, 1500);
  };

  const handleLogin = async (email: string, password: string) => {
    try {
      goToQustionPage();
      // const response = await fetch("/api/login", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ email, password }),
      // });
      // if (!response.ok) {
      //   throw new Error("Login failed");
      // }
      // const data = await response.json();
      // console.log("Login successful:", data);
      // // Add your logic here for successful login, like redirecting the user
    } catch (error) {
      return (error as Error).message;
    }
  };

  return (
    <main className="bg-white pt-12 max-w-[1400px] mx-auto h-[100dvh]">
      <section
        id="AppBar"
        className="px-4 shadow-md w-[92%] bg-white mb-8 h-[50px] rounded-full justify-between items-center flex flex-row mx-auto"
      >
        <div className="flex flex-row justify-center items-center">
          <Icon width={160} />
        </div>
        <div className="gap-3 flex-row flex">
          <p>팀 구성</p>
          <p>팀 구성</p>
          <p>팀 구성</p>
          <p>팀 구성</p>
        </div>
      </section>
      <section className="bg-white min-h-[80dvh] flex lg:flex-row flex-col lg:gap-x-12 ">
        <div className="lg:w-1/2 flex justify-center flex-col gap-8 items-start pl-[10dvh] min-h-[50dvh] pr-2 ">
          <div>
            <h1 className="text-3xl lg:text-6xl font-semibold ">Ai로 하는</h1>
            <h1 className="text-3xl lg:text-6xl font-semibold ">
              수능영어 공부
            </h1>
          </div>
          <p className="">
            Unlock your potential with our comprehensive English study program.
            Designed for high school students, we offer a wealth of resources to
            help you excel in the language.
          </p>
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
