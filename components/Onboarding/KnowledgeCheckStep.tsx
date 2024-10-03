import React from "react";
import { Question } from "@/types/onboarding";

interface KnowledgeCheckStepProps {
  question: Question;
  handleKnowledgeCheck: (answer: string) => void;
}

const KnowledgeCheckStep: React.FC<KnowledgeCheckStepProps> = ({
  question,
  handleKnowledgeCheck,
}) => {
  return (
    <div>
      <h2 className="text-xl font-polysans text-gray-300 mb-4">
        {question.text}
      </h2>
      <div className="space-y-4 flex flex-col">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => handleKnowledgeCheck(option)}
            className="border border-gray-800 text-gray-200 hover:shadow-sm hover:shadow-gray-600 p-3 rounded-lg text-center transition-all transform hover:scale-105"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default KnowledgeCheckStep;
