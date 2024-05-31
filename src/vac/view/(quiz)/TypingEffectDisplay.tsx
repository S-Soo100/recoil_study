"use client";
import React, { useState, useEffect } from "react";

interface TypingEffectProps {
  text: string;
  speed: number;
  start: boolean;
}

const TypingEffectDisplay: React.FC<TypingEffectProps> = ({
  text,
  speed,
  start,
}) => {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (start && index < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
    }
    return () => clearTimeout(timeout);
  }, [index, text, speed, start]);

  useEffect(() => {
    if (!start) {
      setDisplayedText("");
      setIndex(0);
    }
  }, [start]);

  return <div>{displayedText}</div>;
};

export default TypingEffectDisplay;
