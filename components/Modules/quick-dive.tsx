"use client";

import React, { useState, KeyboardEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const QuickDive = () => {
  const router = useRouter();
  const [question, setQuestion] = useState<string>("");

  const handleAskQuestion = () => {
    if (question.trim()) {
      router.push(`/knowledge?question=${encodeURIComponent(question)}`);
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAskQuestion();
    }
  };

  return (
    <div className="flex flex-col items-start gap-4 h-[205px] p-4 self-stretch rounded-2xl border border-white/20 bg-[radial-gradient(109.93%_68.05%_at_53.3%_45.37%,rgba(17,22,31,0.20)_49.86%,#3F7FFF_84.16%,#FFF_100%)] relative overflow-hidden">
      <h2 className="text-white text-xl font-cg-regular leading-tight">
        Got a crypto question? Take a quick dive into the knowledge pool!
      </h2>

      <div className="relative z-10 w-full">
        <input
          id="question"
          name="question"
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="What is ERC-20?"
          className="w-full flex self-stretch rounded-lg bg-gray-900/50 border border-gray-600 py-2 px-4 text-white placeholder:text-gray-400 outline-none text-sm"
        />
      </div>

      <div className="absolute -bottom-2 left-0 right-0">
        <Image
          src="/images/questions.svg"
          alt="Example questions"
          className="w-full scale-125"
          width={480}
          height={120}
        />
      </div>
    </div>
  );
};

export default QuickDive;
