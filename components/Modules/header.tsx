import React from "react";
import Image from "next/image";
import { DocumentIcon } from "@heroicons/react/24/solid";

const ModulesHeader: React.FC = () => {
  return (
    <div className="text-white p-6 rounded-lg flex justify-between items-center">
      <div>
        <h2 className="text-3xl font-cg-regular mb-2 max-w-xs">
          Complete the quests to get the extra rewards
          <span className="ml-2 inline-block">
            <Image
              src="/images/modules_header_shell.png"
              width={100}
              height={100}
              className="w-8 h-8"
              alt="Rewards icon"
              unoptimized
            />
          </span>
        </h2>
        <p className="text-gray-400">
          Once you complete a quest, you will get rewarded!
        </p>
        <button className="mt-4 bg-gray-800 text-white px-4 py-2 rounded-md flex items-center">
          <span className="mr-2">
            <DocumentIcon className="w-4 h-4 text-gray-400" />
          </span>
          Know the cultural
        </button>
      </div>
      <div className="relative w-52 h-52">
        <Image
          src="/images/surfer.svg"
          alt="Surfer illustration"
          className="w-full"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default ModulesHeader;
