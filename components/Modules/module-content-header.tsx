import { levels } from "@/lib/module1-levels";
import { ShareIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const ModuleContentHeader = ({ moduleData, moduleId }: any) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [completedLevels, setCompletedLevels] = useState<boolean[]>(
    new Array(levels.length).fill(false)
  );

  // Calculate progress
  const completedCount = completedLevels.filter((level) => level).length;
  const totalLevels = levels.length;
  const progressPercentage = (completedCount / totalLevels) * 100;
  const progressDashoffset = 100 - progressPercentage;

  const copyToClipboard = (): void => {
    navigator.clipboard
      .writeText(`${process.env.NEXT_PUBLIC_API_BASE_URL}/modules/${moduleId}`)
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
            {moduleData?.title}
          </h1>
          <p className="max-w-[340px] mt-2 text-gray-400">
            {moduleData?.description}
          </p>
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
          <svg
            className="size-full"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background Circle  */}
            <circle
              cx="12"
              cy="12"
              r="10"
              fill="none"
              className="stroke-current text-gray-200 dark:text-neutral-800"
              stroke-width="2"
            ></circle>
            {/* Progress Circle inside a group with rotation */}
            <g className="origin-center -rotate-90 transform">
              <circle
                cx="12"
                cy="12"
                r="10"
                fill="none"
                className="stroke-current text-blue-600 dark:text-white"
                stroke-width="2"
                stroke-dasharray="100"
                stroke-dashoffset={progressDashoffset}
              ></circle>
            </g>
          </svg>
          {/* Percentage Text */}
          <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <span className="text-center text-xl font-cg-regular text-gray-800 dark:text-white">
              {progressPercentage}%
            </span>
          </div>
        </div>
        <div className="text-right mt-2">
          <h1 className="text-gray-200 font-cg-bold text-md">
            Module Progress
          </h1>
          <p className="text-gray-400 text-md max-w-[240px]">
            We&apos;re calculating your progress of the module here
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModuleContentHeader;
