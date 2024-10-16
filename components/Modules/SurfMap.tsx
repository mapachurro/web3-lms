"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getLevelsForModule } from "@/utils/moduleLevels";
import { useRouter } from "next/navigation";
import { Level } from "@/types/levels";
import { getItem } from "@/utils/localStorage";

type LevelProgress = Record<string, number>;

const SurfMap = ({ moduleId }: { moduleId: string }) => {
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

  return (
    <>
      {/* Surf Map UI */}
      <div className="h-[1200px] relative bg-no-repeat bg-cover bg-center bg-[url('/images/surfParkMap.svg')] overflow-hidden">
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
            <div className="absolute top-44 left-10">Welcome</div>
            <div className="absolute top-44 right-10">NFT Land</div>
          </>
        )}
      </div>
    </>
  );
};

export default SurfMap;
