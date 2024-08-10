import React from "react";
import Image from "next/image";
import { levels } from "@/lib/module1-levels";

const Puzzle = () => {
  return (
    <>
      {/* Puzzle UI */}
      <div className="mt-12 h-[900px] rounded-xl max-w-4xl mx-auto relative bg-no-repeat bg-cover bg-center bg-[url('/images/module1/puzzle.svg')] overflow-hidden">
        {/* First Level Block */}
        <div className="relative">
          <div className="absolute top-6 left-6">
            <span className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-sm uppercase text-gray-200 ring-1 ring-inset ring-gray-400/20">
              Level 1
            </span>
            <h1 className="mt-2 text-white text-xl">Base Origins</h1>
            <p className="mt-1 text-gray-400 text-base max-w-xs">
              Parturient erat velit tincidunt sapien congue pretium gravida
              egestas.
            </p>
            <div className="w-full mt-4">
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-white h-2 rounded-full"
                  style={{ width: "40%" }}
                ></div>
              </div>
              <div className="mt-1 text-sm text-gray-300">40% Completed</div>
            </div>
          </div>
          <div className="absolute top-[390px] left-6 bg-gray-950 border border-gray-700 rounded-lg px-4 py-2 inline-block">
            <div className="flex items-center space-x-2">
              <span className="flex items-center text-gray-400 text-sm">
                <Image
                  src="/images/skull.svg"
                  alt="shell"
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
              <span className="text-base text-white mr-1">230 Points</span>
              <span className="text-gray-400 text-sm">out of 250</span>
            </div>
          </div>
        </div>
        {/* Second Level Block */}
        <div className="relative">
          <div className="absolute top-6 right-6 bg-gray-950 border border-gray-700 rounded-lg px-4 py-2 inline-block">
            <div className="flex items-center space-x-2">
              <span className="flex items-center text-gray-400 text-sm">
                <Image
                  src="/images/skull.svg"
                  alt="shell"
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
              <span className="text-base text-white mr-1">230 Points</span>
              <span className="text-gray-400 text-sm">out of 250</span>
            </div>
          </div>
          <div className="absolute top-[240px] right-6">
            <span className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-sm uppercase text-gray-200 ring-1 ring-inset ring-gray-400/20">
              Level 2
            </span>
            <h1 className="mt-2 text-white text-xl">Get Started with Base</h1>
            <p className="mt-1 text-gray-400 text-base max-w-xs">
              Parturient erat velit tincidunt sapien congue pretium gravida
              egestas.
            </p>
            <div className="w-full mt-4">
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-white h-2 rounded-full"
                  style={{ width: "40%" }}
                ></div>
              </div>
              <div className="mt-1 text-sm text-gray-300">40% Completed</div>
            </div>
          </div>
        </div>
        {/* Third Level Block */}
        <div className="relative">
          <div className="absolute top-[510px] left-6">
            <span className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-sm uppercase text-gray-200 ring-1 ring-inset ring-gray-400/20">
              Level 3
            </span>
            <h1 className="mt-2 text-white text-xl">Base Origins</h1>
            <p className="mt-1 text-gray-400 text-base max-w-xs">
              Parturient erat velit tincidunt sapien congue pretium gravida
              egestas.
            </p>
            <div className="w-full mt-4">
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-white h-2 rounded-full"
                  style={{ width: "40%" }}
                ></div>
              </div>
              <div className="mt-1 text-sm text-gray-300">40% Completed</div>
            </div>
          </div>
          <div className="absolute top-[800px] left-6 bg-gray-950 border border-gray-700 rounded-lg px-4 py-2 inline-block">
            <div className="flex items-center space-x-2">
              <span className="flex items-center text-gray-400 text-sm">
                <Image
                  src="/images/skull.svg"
                  alt="shell"
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
              <span className="text-base text-white mr-1">230 Points</span>
              <span className="text-gray-400 text-sm">out of 250</span>
            </div>
          </div>
        </div>
        {/* Fourth Level Block */}
        <div className="relative">
          <div className="absolute top-[500px] right-36 bg-gray-950 border border-gray-700 rounded-lg px-4 py-2 inline-block">
            <div className="flex items-center space-x-2">
              <span className="flex items-center text-gray-400 text-sm">
                <Image
                  src="/images/skull.svg"
                  alt="shell"
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
              <span className="text-base text-white mr-1">230 Points</span>
              <span className="text-gray-400 text-sm">out of 250</span>
            </div>
          </div>
          <div className="absolute top-[710px] right-6">
            <span className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-sm uppercase text-gray-200 ring-1 ring-inset ring-gray-400/20">
              Level 4
            </span>
            <h1 className="mt-2 text-white text-xl">Get Started with Base</h1>
            <p className="mt-1 text-gray-400 text-base max-w-xs">
              Parturient erat velit tincidunt sapien congue pretium gravida
              egestas.
            </p>
            <div className="w-full mt-4">
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-white h-2 rounded-full"
                  style={{ width: "40%" }}
                ></div>
              </div>
              <div className="mt-1 text-sm text-gray-300">40% Completed</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Puzzle;
