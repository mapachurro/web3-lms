"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getLevelsForModule } from "@/utils/moduleLevels";
import { useRouter } from "next/navigation";
import { Level } from "@/types/levels";
import { getItem } from "@/utils/localStorage";

type LevelProgress = Record<string, number>;

const Puzzle = ({ moduleId }: { moduleId: string }) => {
  const router = useRouter();
  const { levels, comingSoon } = getLevelsForModule(moduleId);
  const [levelProgress, setLevelProgress] = useState<LevelProgress>({});

  useEffect(() => {
    const updateProgress = () => {
      const moduleProgress = getItem(`moduleProgress_${moduleId}`) || {};
      setLevelProgress(moduleProgress);
    };

    updateProgress();
    // Set up an interval to check for updates
    const interval = setInterval(updateProgress, 1000);
    return () => clearInterval(interval);
  }, [moduleId]);

  const handleLevelClick = (levelId: string) => {
    router.push(`/modules/${moduleId}/level/${levelId}`);
  };

  // Define positions for each level
  const levelPositions = [
    { top: "24px", left: "24px", questsTop: "390px", questsLeft: "24px" },
    { top: "240px", right: "24px", questsTop: "24px", questsRight: "24px" },
    { top: "510px", left: "24px", questsTop: "800px", questsLeft: "24px" },
    { top: "710px", right: "24px", questsTop: "500px", questsRight: "144px" },
  ];

  return (
    <>
      {/* Puzzle UI */}
      <div className="mt-12 h-[900px] rounded-xl max-w-4xl mx-auto relative bg-no-repeat bg-cover bg-center bg-[url('/images/module1/puzzle.svg')] overflow-hidden">
        {comingSoon ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-10 backdrop-blur-sm">
            <div className="text-center">
              <h2 className="text-3xl font-cg-regular text-white">
                Coming Soon
              </h2>
              <p className="text-lg text-gray-300">
                This module is being cooked up. Stay tuned!
              </p>
            </div>
          </div>
        ) : (
          <>
            {levels.map((level: Level, index: number) => (
              <div
                key={level.id}
                className="relative cursor-pointer"
                onClick={() => handleLevelClick(level.id)}
              >
                <div
                  className="absolute"
                  style={{
                    top: levelPositions[index].top,
                    left: levelPositions[index].left,
                    right: levelPositions[index].right,
                  }}
                >
                  <span className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-sm uppercase text-gray-200 ring-1 ring-inset ring-gray-400/20">
                    Level {level.id}
                  </span>
                  <h1 className="mt-2 text-white text-xl">{level.title}</h1>
                  <p className="mt-1 text-gray-400 text-base max-w-xs">
                    {level.description}
                  </p>
                  <div className="w-full mt-4">
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-white h-2 rounded-full"
                        style={{ width: `${levelProgress[level.id] || 0}%` }}
                      ></div>
                    </div>
                    <div className="mt-1 text-sm text-gray-300">
                      {levelProgress[level.id] || 0}% Completed
                    </div>
                  </div>
                </div>
                <div
                  className="absolute"
                  style={{
                    top: levelPositions[index].questsTop,
                    left: levelPositions[index].questsLeft,
                    right: levelPositions[index].questsRight,
                  }}
                >
                  <div className="bg-gray-950 border border-gray-700 rounded-lg px-4 py-2 inline-block">
                    <div className="flex items-center space-x-2">
                      <span className="flex items-center text-gray-400 text-sm">
                        <Image
                          src="/images/skull.svg"
                          alt="skull"
                          width={100}
                          height={100}
                          unoptimized
                          className="w-6 h-6"
                        />{" "}
                        QUESTS
                      </span>
                    </div>
                    <div className="flex items-center mt-2">
                      <span className="mr-1">
                        <Image
                          src="/images/shell.png"
                          alt="shell"
                          width={100}
                          height={100}
                          unoptimized
                          className="w-5 h-5"
                        />
                      </span>
                      <span className="text-base text-white mr-1">
                        230 Points
                      </span>
                      <span className="text-gray-400 text-sm">out of 250</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Puzzle;
