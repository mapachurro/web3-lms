"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { getLevelsForModule } from "@/utils/moduleLevels";
import { useRouter } from "next/navigation";
import { Level } from "@/types/levels";
import { getItem } from "@/utils/localStorage";
import { ArrowLongRightIcon, FireIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

type LevelProgress = Record<string, number>;

const SurfMap = ({ moduleId }: { moduleId: string }) => {
  const router = useRouter();
  const [activeWelcomeLevel, setActiveWelcomeLevel] = useState<string | null>(
    null
  );
  const [activeNFTLevel, setActiveNFTLevel] = useState<string | null>(null);
  const [activeDefiLevel, setActiveDefiLevel] = useState<string | null>(null);
  const [activeDevLevel, setActiveDevLevel] = useState<string | null>(null);
  const [activeDaoLevel, setActiveDaoLevel] = useState<string | null>(null);
  const [activeSocialLevel, setActiveSocialLevel] = useState<string | null>(
    null
  );
  const [activeMetaverseLevel, setActiveMetaverseLevel] = useState<
    string | null
  >(null);
  const [activeWalletLevel, setActiveWalletLevel] = useState<string | null>(
    null
  );
  const [activeVibesLevel, setActiveVibesLevel] = useState<string | null>(null);
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

  const renderLevels = (
    mapPart: string,
    setActiveLevel: (id: string | null) => void,
    activeLevel: string | null
  ) => {
    const { levels, comingSoon } = getLevelsForModule(moduleId, mapPart);

    if (comingSoon) {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full">
            {/* Blurred background */}
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 backdrop-blur-sm"></div>
            {/* Coming Soon text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-3xl font-cg-regular text-white">
                Coming Soon
              </h2>
            </div>
          </div>
        </div>
      );
    }

    return levels.map((level) => (
      <div key={level.id} className="relative">
        <button
          className="rounded-full bg-blue-600 text-gray-200 w-6 h-6 flex items-center justify-center"
          onMouseEnter={() => setActiveLevel(level.id)}
        >
          <FireIcon className="h-4 w-4" />
        </button>
        {activeLevel === level.id && (
          <div
            onMouseLeave={() => setActiveLevel(null)}
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-4 py-2 w-[200px] bg-gray-900 border border-grey text-white rounded-lg shadow-lg z-10"
          >
            <p className="text-md mt-2">{level.title}</p>
            <div className="flex gap-3">
              <p className="text-sm text-gray-400 my-1">{level.description}</p>
            </div>
            <div className="flex items-center justify-between my-2">
              <div className="flex items-center">
                <span className="mr-1">
                  <Image
                    src="/images/shell.png"
                    alt="shell"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                    unoptimized
                  />
                </span>
                <span className="text-sm text-white">
                  {level.shells} Shells
                </span>
              </div>
              {/* <Link href={`/modules/${moduleId}/level/${level.id}`}>
                <ArrowLongRightIcon className="w-6 h-6 text-blue-600" />
              </Link> */}
              <button
                onClick={() => {
                  const url = `/modules/${moduleId}/level/${level.id}`;
                  console.log("Navigating to:", url);
                  router.push(url);
                }}
                className="text-blue-600 hover:text-blue-800"
              >
                <ArrowLongRightIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    ));
  };

  const allModulesComingSoon = [
    "welcome",
    "nft",
    "defi",
    "dev",
    "dao",
    "social",
    "metaverse",
    "wallets",
    "vibes",
  ].every((part) => getLevelsForModule(moduleId, part).comingSoon);

  if (allModulesComingSoon) {
    return (
      <div className="h-[1200px] relative bg-no-repeat bg-cover bg-center bg-[url('/images/surfParkMap.svg')] overflow-hidden">
        <div className="absolute inset-0 bg-gray-800 bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
          <h2 className="text-5xl font-cg-regular text-white">Coming Soon</h2>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Surf Map UI */}
      <div className="h-[1200px] relative bg-no-repeat bg-cover bg-center bg-[url('/images/surfParkMap.svg')] overflow-hidden">
        {/* Welcome section  */}
        <div className="inline-block absolute top-14 left-[340px] uppercase text-2xl">
          <h1 className="text-white text-xl font-bold tracking-wider drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">
            Welcome Beach
          </h1>
        </div>
        <div className="absolute top-24 left-[340px]">
          <Image
            src="/images/elements/islandgate.png"
            alt="islandgate"
            width={100}
            height={100}
            className="w-44"
            unoptimized
          />
        </div>
        <div className="absolute top-48 left-[320px] flex items-center gap-2">
          {renderLevels("welcome", setActiveWelcomeLevel, activeWelcomeLevel)}
        </div>

        <div className="inline-block absolute top-44 left-[620px] uppercase text-2xl">
          <h1 className="text-white text-xl font-bold tracking-wider drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">
            NFT Cove
          </h1>
        </div>
        <div className="absolute top-48 left-[560px]">
          <Image
            src="/images/elements/nft.png"
            alt="nft"
            width={100}
            height={100}
            className="w-[350px]"
            unoptimized
          />
        </div>

        <div className="absolute top-96 left-[620px] flex items-center gap-2">
          {renderLevels("nft", setActiveNFTLevel, activeNFTLevel)}
        </div>

        <div className="inline-block absolute top-44 right-48 uppercase text-2xl">
          <h1 className="text-white text-xl font-bold tracking-wider drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">
            DeFi Bay
          </h1>
        </div>

        <div className="absolute top-64 right-48 flex items-center gap-2">
          {renderLevels("defi", setActiveDefiLevel, activeDefiLevel)}
        </div>

        <div className="inline-block absolute top-[440px] right-44 uppercase text-2xl">
          <h1 className="text-white text-xl font-bold tracking-wider drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">
            Developers&apos; Reef
          </h1>
        </div>

        <div className="absolute top-[600px] right-32 flex items-center gap-2">
          {renderLevels("dev", setActiveDevLevel, activeDevLevel)}
        </div>

        <div className="inline-block absolute top-[690px] left-[620px] uppercase text-2xl">
          <h1 className="text-white text-xl font-bold tracking-wider drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">
            DAO Island
          </h1>
        </div>

        <div className="absolute top-[800px] left-[700px] flex items-center gap-2">
          {renderLevels("dao", setActiveDaoLevel, activeDaoLevel)}
        </div>

        <div className="inline-block absolute top-[630px] left-80 uppercase text-2xl">
          <h1 className="text-white text-xl font-bold tracking-wider drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">
            Social Surf Spot
          </h1>
        </div>

        <div className="absolute top-[690px] left-96 flex items-center gap-2">
          {renderLevels("social", setActiveSocialLevel, activeSocialLevel)}
        </div>

        <div className="inline-block absolute top-[490px] left-[580px] uppercase text-2xl">
          <h1 className="text-white text-xl font-bold tracking-wider drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">
            Metaverse Marina
          </h1>
        </div>

        <div className="absolute top-[550px] left-[650px] flex items-center gap-2">
          {renderLevels(
            "metaverse",
            setActiveMetaverseLevel,
            activeMetaverseLevel
          )}
        </div>

        <div className="inline-block absolute top-[330px] left-56 uppercase text-2xl">
          <h1 className="text-white text-xl max-w-[100px] font-bold tracking-wider drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">
            Wallet Waterproofing
          </h1>
        </div>

        <div className="absolute top-[420px] left-[240px] flex items-center gap-2">
          {renderLevels("wallets", setActiveWalletLevel, activeWalletLevel)}
        </div>

        <div className="inline-block absolute top-[880px] left-28 uppercase text-2xl">
          <h1 className="text-white text-xl max-w-[100px] text-center font-bold tracking-wider drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">
            Surfer&apos;s Lagoon
          </h1>
        </div>

        <div className="absolute top-[940px] left-56 flex items-center gap-2">
          {renderLevels("vibes", setActiveVibesLevel, activeVibesLevel)}
        </div>
      </div>
    </>
  );
};

export default SurfMap;
