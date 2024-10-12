import React from "react";
import { OnboardingStep } from "@/types/onboarding";

interface SkillCheckStepProps {
  step: OnboardingStep;
  handleAnswer: (questionId: string, answer: string) => void;
  answers: Record<string, string>;
}

const SkillCheckStep: React.FC<SkillCheckStepProps> = ({
  step,
  handleAnswer,
  answers,
}) => {
  return (
    <div>
      <h2 className="text-xl font-polysans text-gray-300 mb-4">{step.title}</h2>
      {step.questions.map((question) => (
        <div key={question.id} className="space-y-4">
          {question.options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer(question.id, option)}
              className={`w-full border ${
                answers[question.id] === option
                  ? "border-blue-500 text-blue-500"
                  : "border-gray-800 text-gray-200"
              } hover:shadow-sm hover:shadow-gray-600 p-3 rounded-lg text-center transition-all transform hover:scale-105`}
            >
              {option}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SkillCheckStep;
