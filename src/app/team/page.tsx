"use client";
import Image from "next/image";
import React from "react";
import team1 from "../../../public/team-2.png";
import { useRouter } from "next/navigation";
import HomeButton from "@/vac/view/(result)/HomeButton";

export default function TeamPage() {
  const router = useRouter();
  return (
    <main className="bg-white pt-2 max-w-[1400px] mx-auto h-[100dvh]">
      <section id="AppBar" className="m-2 px-3">
        {/* <div className="p-2"> */}
        <HomeButton
          onClick={() => {
            router.back();
          }}
        />
        {/* </div> */}
      </section>
      <Image src={team1} alt="TeamImage" />
    </main>
  );
}
