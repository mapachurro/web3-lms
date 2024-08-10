import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { getLevelsForModule } from "@/utils/moduleLevels";
import Button from "../UI/Button/Button";
import { Level, ModuleLevels } from "@/types/levels";
import LevelContentHeader from "./level-content-header";

const LevelContent = ({
  moduleId,
  levelId,
}: {
  moduleId: string;
  levelId: string;
}) => {
  const router = useRouter();
  const { levels } = getLevelsForModule(moduleId) as ModuleLevels;
  const level = levels.find((l: Level) => l.id === levelId);
  const [currentStep, setCurrentStep] = useState(0);

  if (!level) {
    return <div>Level not found</div>;
  }

  const content = Array.isArray(level.content)
    ? level.content
    : [{ title: level.title, content: level.content }];
  const totalSteps = content.length;

  const handleContinue = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
      // Scroll to top of the content area
      window.scrollTo(0, 0);
    } else {
      // Navigate back to the module page when finished
      router.push(`/modules/${moduleId}`);
    }
  };

  return (
    <div className="py-28 px-10 w-full">
      <LevelContentHeader
        levelTitle={level.title}
        levelDesc={level.description}
        levelId={levelId}
        module={moduleId}
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
