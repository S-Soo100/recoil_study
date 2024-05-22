import React from "react";
import Image from "next/image";
import vercelIcon from "../../public/vercel.svg";

export default function Icon({ width = 80, height = 40 }) {
  width = width || 80;
  height = height || 40;
  return (
    <>
      <Image
        src={vercelIcon}
        alt="nextIcon"
        width={width}
        height={height}
        className="mr-2"
      />
    </>
  );
}
