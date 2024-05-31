import React from "react";
import Image from "next/image";
import aitutorlogo from "../../public/ai-tutor-logo.png";
import aimportantlogo from "../../public/aimportant-logo.png";

export default function Icon({ width = 80, height = 40 }) {
  width = width || 100;
  height = height || 40;
  return (
    <>
      <Image
        src={aimportantlogo}
        alt="nextIcon"
        width={width}
        height={height}
        className="mr-2"
      />
    </>
  );
}
