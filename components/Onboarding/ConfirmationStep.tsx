import React from "react";

interface ConfirmationStepProps {
  handleFinalChoice: (choice: "proceed" | "easier" | "harder") => void;
}

const ConfirmationStep: React.FC<ConfirmationStepProps> = ({
  handleFinalChoice,
}) => {
  return (
    <div>
      <h2 className="text-xl font-polysans text-gray-300 mb-4">
        Okay, we found your spot to start surfing. Ready to dive in?
      </h2>
      <div className="space-y-4 flex flex-col">
        <button
          onClick={() => handleFinalChoice("proceed")}
          className="border border-gray-800 text-gray-200 hover:shadow-sm hover:shadow-gray-600 p-3 rounded-lg text-center transition-all transform hover:scale-105"
        >
          Hell yeah!
        </button>
        <button
          onClick={() => handleFinalChoice("easier")}
          className="border border-gray-800 text-gray-200 hover:shadow-sm hover:shadow-gray-600 p-3 rounded-lg text-center transition-all transform hover:scale-105"
        >
          I&apos;d like to start easier
        </button>
        <button
          onClick={() => handleFinalChoice("harder")}
          className="border border-gray-800 text-gray-200 hover:shadow-sm hover:shadow-gray-600 p-3 rounded-lg text-center transition-all transform hover:scale-105"
        >
          I&apos;m up for a bigger challenge
        </button>
      </div>
    </div>
  );
};

export default ConfirmationStep;
