import { levels } from "@/lib/module1-levels";
import { ShareIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const LevelContentHeader = ({
  levelTitle,
  levelDesc,
  levelId,
  moduleId,
  progress,
}: {
  levelTitle: string;
  levelDesc: string;
  levelId: string;
  moduleId: string;
  progress: number;
}) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copyToClipboard = (): void => {
    navigator.clipboard
      .writeText(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/modules/${moduleId}/level/${levelId}`
      )
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // reset after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy the address: ", err);
      });
  };

  return (
    <div className="flex justify-between items-start max-w-4xl mx-auto">
      <div className="flex-grow">
        <div>
          <h1 className="text-3xl font-cg-regular text-gray-100">
            {levelTitle}
          </h1>
          <p className="max-w-[340px] mt-2 text-gray-400">{levelDesc}</p>
        </div>
        <div className="flex gap-2 mt-6">
          <button
            onClick={copyToClipboard}
            className="flex items-center bg-gray-800 hover:brightness-100 text-white font-bold py-2 px-4 rounded-lg"
          >
            <ShareIcon className="h-5 w-5 mr-2 text-gray-400" />
            Share
          </button>
          {isCopied && <p className="mt-2 text-sm text-green-400">Copied!</p>}
        </div>
      </div>
      {/* Circular Progress */}
      <div className="flex flex-col items-end">
        <div className="relative size-24">
          <svg className="size-full" viewBox="0 0 36 36">
            <path
              d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#444"
              strokeWidth="2"
            />
            <path
              d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeDasharray={`${progress}, 100`}
            />
          </svg>
          {/* Percentage Text */}
          <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <span className="text-center text-xl font-cg-regular text-gray-800 dark:text-white">
              {Math.round(progress)}%
            </span>
          </div>
        </div>
        <div className="text-right mt-2">
          <h1 className="text-gray-200 font-cg-bold text-md">Level Progress</h1>
          <p className="text-gray-400 text-md max-w-[240px]">
            We&apos;re calculating your progress of the level here
          </p>
        </div>
      </div>
    </div>
  );
};

export default LevelContentHeader;
