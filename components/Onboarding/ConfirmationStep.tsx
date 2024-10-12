import React from "react";
import { Surfboard, UserCategory } from "@/types/onboarding";
import { determineUserRole } from "@/utils/userRole";
import Image from "next/image";

interface ConfirmationStepProps {
  category: UserCategory;
  onStart: () => void;
  selectedSurfboard: Surfboard | null;
}

const ConfirmationStep: React.FC<ConfirmationStepProps> = ({
  category,
  onStart,
  selectedSurfboard,
}) => {
  if (!selectedSurfboard) return null;
  return (
    <div>
      <h2 className="text-xl font-polysans text-gray-300 mb-4">
        Okay, we found your spot to start surfing. You&apos;re a{" "}
        {determineUserRole(category)}!
      </h2>
      <div className="p-4 rounded-lg mb-8">
        <h3 className="text-2xl font-bold text-white mb-1">
          That&apos;s your tool to learn and earn
        </h3>
        <p className=" text-gray-400">
          Earn $SHELLS as you progress and upgrade your surfboard and You never
          know where the waves will lead you once you go down.
        </p>
        <div className="flex items-start gap-6 my-4">
          <div className="surfboard-container">
            <div className="surfboard-circle"></div>
            <Image
              src={selectedSurfboard.img}
              alt={selectedSurfboard.name}
              width={200}
              height={250}
              className="w-24"
              unoptimized
            />
          </div>
          <div>
            <h4 className="text-xl font-bold text-blue-400 mb-2">
              {selectedSurfboard.name}
            </h4>
            <p className="text-gray-300 mb-2">
              Rarity: {selectedSurfboard.rarity}
            </p>
            <p className="text-gray-300 mb-4">
              Shell Multiplier: x{selectedSurfboard.shellMultiplier}
            </p>
            <h5 className="text-lg font-bold text-white mb-2">Attributes:</h5>
            <ul className="text-gray-300 mb-4">
              {Object.entries(selectedSurfboard.attributes).map(
                ([key, value]) => (
                  <li key={key} className="mb-1">
                    {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
                  </li>
                )
              )}
            </ul>
            {selectedSurfboard.specialAbility && (
              <div className="mb-4">
                <h5 className="text-lg font-bold text-white mb-2">
                  Special Ability:
                </h5>
                <p className="text-gray-300">
                  {selectedSurfboard.specialAbility}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <button
        onClick={onStart}
        className="w-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white p-3 rounded-lg text-center transition-all transform hover:scale-105"
      >
        Start Surfing!
      </button>
    </div>
  );
};

export default ConfirmationStep;
