"use client";

import React, { useEffect, useRef, useState } from "react";
import { BrianSDK } from "@brian-ai/sdk";
import { useRouter, useSearchParams } from "next/navigation";
import TypewriterEffect from "@/components/UI/TypewriterEffect";
import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";
import { ComputerDesktopIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import WhiteButton from "@/components/UI/Button/WhiteButton";

const BRIAN_API_KEY = process.env.NEXT_PUBLIC_BRIAN_API_KEY;

if (!BRIAN_API_KEY) {
  throw new Error("BRIAN_API_KEY is not set");
}

const brian = new BrianSDK({
  apiKey: BRIAN_API_KEY as string,
});

const QuickDivePage: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [conversation, setConversation] = useState<
    Array<{ type: "question" | "answer"; content: string }>
  >([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newQuestion, setNewQuestion] = useState<string>("");
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  const initialQuestionAsked = useRef(false);

  useEffect(() => {
    const questionParam = searchParams.get("question");
    if (questionParam && !initialQuestionAsked.current) {
      const decodedQuestion = decodeURIComponent(questionParam);
      handleAskQuestion(decodedQuestion);
      initialQuestionAsked.current = true;
    }
  }, [searchParams]);

  const handleAskQuestion = async (questionToAsk: string) => {
    setIsLoading(true);
    setConversation((prev) => [
      ...prev,
      { type: "question", content: questionToAsk },
    ]);
    try {
      const result = await brian.ask({
        prompt: questionToAsk,
        kb: "public-knowledge-box",
      });
      setConversation((prev) => [
        ...prev,
        { type: "answer", content: result.answer },
      ]);
    } catch (error) {
      console.error("Error asking question:", error);
      setConversation((prev) => [
        ...prev,
        {
          type: "answer",
          content: "Oops! The wave was too strong. Try again!",
        },
      ]);
    }
    setIsLoading(false);
  };

  const handleNewQuestion = (e: React.FormEvent) => {
    e.preventDefault();

    if (newQuestion.trim()) {
      handleAskQuestion(newQuestion);
      setNewQuestion("");
    }
  };

  useEffect(() => {
    const scrollToBottom = () => {
      const chatContainer = chatContainerRef.current;
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    };

    // Use requestAnimationFrame for smoother scrolling
    requestAnimationFrame(scrollToBottom);
  }, [conversation, isLoading]);

  return (
    <div className="flex flex-col h-[95vh] p-8 md:p-4 mt-10">
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center mb-2">
          <ArrowLongLeftIcon
            className="cursor-pointer mr-4 h-6 w-6 text-white"
            onClick={() => router.back()}
          />
          <h1 className="text-xl font-cg-regular text-white">Quick Dive 🏊‍♂️</h1>
        </div>
        <p className="text-gray-400 text-md">
          Explore the web3 ecosystem and find the resources that you need. Ask
          follow-up questions to dive deeper!
        </p>
      </div>

      <div
        ref={chatContainerRef}
        className="flex-grow overflow-y-auto p-4 space-y-4"
      >
        {conversation.map((item, index) => (
          <div
            key={index}
            className={`flex ${
              item.type === "question" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`flex items-start max-w-[80%] w-full ${
                item.type === "question"
                  ? "bg-blue-600 text-white hover:shadow-sm hover:shadow-blue-500 transition ease-in"
                  : "text-gray-300 border border-gray-800 hover:shadow-sm hover:shadow-gray-200 transition ease-in"
              } rounded-lg py-2 px-4`}
            >
              {item.type === "question" ? (
                <UserCircleIcon className="w-6 h-6 mr-2 flex-shrink-0" />
              ) : (
                <ComputerDesktopIcon className="mt-2 w-6 h-6 mr-2 flex-shrink-0" />
              )}
              {item.type === "answer" ? (
                // <p>{item.content}</p>
                <TypewriterEffect text={item.content} speed={10} />
              ) : (
                <p className="text-md break-words">{item.content}</p>
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="border border-gray-800 text-gray-200 rounded-lg p-3">
              <img src="./images/cat-typing.gif" className="h-full w-full" />
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-gray-800">
        <form className="flex items-center gap-4">
          <input
            type="text"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            placeholder="Ask a follow-up question..."
            className="flex-grow rounded-full bg-transparent border border-gray-800 py-2 px-4 text-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500"
          />
          <WhiteButton
            onClick={handleNewQuestion}
            additionalStyles="text-sm text-black py-2 px-4"
          >
            Dive In 🌊
          </WhiteButton>
        </form>
      </div>
    </div>
  );
};

export default QuickDivePage;
