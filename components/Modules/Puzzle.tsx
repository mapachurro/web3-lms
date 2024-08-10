import React from "react";
import Image from "next/image";
import { getLevelsForModule } from "@/utils/moduleLevels";

const Puzzle = ({ moduleId }: any) => {
  const { levels, comingSoon } = getLevelsForModule(moduleId);

  // Define positions for each level
  const levelPositions = [
    { top: "24px", left: "24px", questsTop: "390px", questsLeft: "24px" },
    { top: "240px", right: "24px", questsTop: "24px", questsRight: "24px" },
    { top: "510px", left: "24px", questsTop: "800px", questsLeft: "24px" },
    { top: "710px", right: "24px", questsTop: "500px", questsRight: "36px" },
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
            {levels.map((level, index) => (
              <div key={level.id} className="relative">
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
                    {level.id === "1"
                      ? level.content.props.children[0].props.children
                      : "Parturient erat velit tincidunt sapien congue pretium gravida egestas."}
                  </p>
                  <div className="w-full mt-4">
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-white h-2 rounded-full"
                        style={{ width: "40%" }}
                      ></div>
                    </div>
                    <div className="mt-1 text-sm text-gray-300">
                      40% Completed
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
