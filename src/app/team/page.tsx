import Image from "next/image";
import React from "react";
import team1 from "../../../public/team-1.png";

export default function TeamPage() {
  return (
    <main className="bg-white pt-12 max-w-[1400px] mx-auto h-[100dvh]">
      <section
        id="AppBar"
        className="px-4 shadow-md w-[92%] bg-white mb-8 h-[50px] rounded-full justify-between items-center flex flex-row mx-auto"
      >
        구성원
      </section>
      <Image src={team1} alt="TeamImage" />
    </main>
  );
}
