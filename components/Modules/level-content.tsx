import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getLevelsForModule } from "@/utils/moduleLevels";
import Button from "../UI/Button/Button";
import { Level, ModuleLevels } from "@/types/levels";
import LevelContentHeader from "./level-content-header";
import { setItem, getItem } from "@/utils/localStorage";

const LevelContent = ({
  moduleId,
  levelId,
}: {
  moduleId: string;
  levelId: string;
}) => {
  const router = useRouter();
  const [level, setLevel] = useState<Level | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLevelNotFound, setIsLevelNotFound] = useState(false);

  useEffect(() => {
    // Find the correct level across all map parts
    const mapParts = [
      "welcome",
      "nft",
      "defi",
      "dev",
      "dao",
      "social",
      "metaverse",
      "wallets",
      "vibes",
    ]; // Add all map parts here
    let foundLevel: Level | null = null;
    for (const part of mapParts) {
      const { levels } = getLevelsForModule(moduleId, part) as ModuleLevels;
      foundLevel = levels.find((l: Level) => l.id === levelId) || null;
      if (foundLevel) break;
    }

    if (foundLevel) {
      setLevel(foundLevel);
      setIsLevelNotFound(false);
    } else {
      setIsLevelNotFound(true);
    }

    if (!isLoaded) {
      const savedProgress = getItem(`progress_${moduleId}_${levelId}`);
      if (savedProgress) {
        setCurrentStep(savedProgress.currentStep);
        setProgress(savedProgress.progress);
      }
      setIsLoaded(true);
    }
  }, [moduleId, levelId, isLoaded]);

  useEffect(() => {
    if (level && isLoaded) {
      const newProgress = Math.round(
        ((currentStep + 1) / level.content.length) * 100
      );
      setProgress(newProgress);
      setItem(`progress_${moduleId}_${levelId}`, {
        currentStep,
        progress: newProgress,
      });

      // Update module progress
      const moduleProgress = getItem(`moduleProgress_${moduleId}`) || {};
      moduleProgress[levelId] = newProgress;
      setItem(`moduleProgress_${moduleId}`, moduleProgress);
    }
  }, [currentStep, level, moduleId, levelId, isLoaded]);

  if (isLevelNotFound) {
    return <div>Level not found. Please check the URL and try again.</div>;
  }

  if (!level) {
    return <div>Loading...</div>;
  }

  const content = Array.isArray(level.content)
    ? level.content
    : [{ title: level.title, content: level.content }];
  const totalSteps = content.length;

  const handleContinue = () => {
    if (currentStep < totalSteps - 1) {
      const newStep = currentStep + 1;
      setCurrentStep(newStep);
      window.scrollTo(0, 0);
    } else {
      // Level completed logic
      setItem(`progress_${moduleId}_${levelId}`, null);
      const moduleProgress = getItem(`moduleProgress_${moduleId}`) || {};
      moduleProgress[levelId] = 100;
      setItem(`moduleProgress_${moduleId}`, moduleProgress);
      router.push(`/modules/${moduleId}`);
    }
  };

  return (
    <div className="py-28 px-10 w-full">
      <LevelContentHeader
        levelTitle={level.title}
        levelDesc={level.description}
        levelId={levelId}
        moduleId={moduleId}
        progress={progress}
      />
      <div className="max-w-4xl mx-auto px-0 py-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-cg-regular text-gray-100 mb-2">
          {content[currentStep].title}
        </h2>
        <div className="mb-6 text-gray-200">{content[currentStep].content}</div>
        <div className="mt-4">
          <div className="w-full bg-neutral-800 rounded-full h-2.5 mb-4">
            <div
              className="bg-gray-100 h-2.5 rounded-full transition-all duration-300 ease-in-out"
              style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
            ></div>
          </div>
          <Button
            onClick={handleContinue}
            additionalStyles="text-white py-2 px-4 transition duration-300 mt-4 float-right"
          >
            {currentStep < totalSteps - 1 ? "Continue" : "Next Level"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LevelContent;
