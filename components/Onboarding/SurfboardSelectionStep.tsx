import React from "react";
import { OnboardingStep, Surfboard, UserCategory } from "@/types/onboarding";
import Image from "next/image";

interface SurfboardSelectionStepProps {
  step: OnboardingStep;
  handleAnswer: (surfboardName: string) => void;
  answers: Record<string, string>;
  surfboards: Surfboard[];
  userCategory: UserCategory;
}

const SurfboardSelectionStep: React.FC<SurfboardSelectionStepProps> = ({
  step,
  handleAnswer,
  answers,
  surfboards,
  userCategory,
}) => {
  const availableSurfboard = surfboards[0];
  const lockedSurfboards = surfboards.slice(1);

  return (
    <div>
      <h2 className="text-2xl font-polysans text-gray-300 mb-2">
        Your First Surfboard Awaits!
      </h2>
      <p className="text-gray-400 mb-6">
        Surfboards are tools to navigate and track the waves of knowledge in the
        Base ecosystem. As you learn and grow, you&apos;ll unlock more powerful
        boards with unique abilities.
      </p>
      <div className="grid grid-cols-3 gap-8 justify-items-center content-center place-content-center">
        <button
          onClick={() => handleAnswer(availableSurfboard.name)}
          className={`w-full bg-gray-900 ${
            answers["surfboard"] === availableSurfboard.name
              ? "ring-2 ring-blue-500"
              : ""
          } hover:bg-gray-800 p-4 rounded-lg text-center transition-all transform hover:scale-105`}
        >
          <div className="surfboard-container">
            <div className="surfboard-circle"></div>
            <Image
              src={availableSurfboard.img}
              className="surfboard-image"
              alt={availableSurfboard.name}
              width={180}
              height={230}
              unoptimized
            />
          </div>
          <h3 className="font-bold mt-2 text-white">
            {availableSurfboard.name}
          </h3>
          <p className="text-gray-400">Rarity: {availableSurfboard.rarity}</p>
          <p className="text-gray-400">
            Shell Multiplier: x{availableSurfboard.shellMultiplier}
          </p>
        </button>
        {lockedSurfboards.map((surfboard) => (
          <div
            key={surfboard.id}
            className="w-full bg-gray-900 p-4 rounded-lg text-center opacity-50"
          >
            <div className="surfboard-container relative">
              <div className="surfboard-circle"></div>
              <Image
                src={surfboard.img}
                className="surfboard-image filter grayscale"
                alt={surfboard.name}
                width={180}
                height={230}
                unoptimized
              />
              {/* <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                <p className="text-white font-bold z-10 bg-black">
                  Unlock Later
                </p>
              </div> */}
            </div>
            <h3 className="font-bold mt-2 text-white">{surfboard.name}</h3>
            <p className="text-gray-400">Rarity: {surfboard.rarity}</p>
            <p className="text-gray-400">
              Shell Multiplier: x{surfboard.shellMultiplier}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SurfboardSelectionStep;
