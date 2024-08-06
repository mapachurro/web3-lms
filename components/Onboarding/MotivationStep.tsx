import React from "react";
import { OnboardingStep } from "@/types/onboarding";

interface MotivationStepProps {
  step: OnboardingStep;
  handleAnswer: (questionId: string, answer: string) => void;
  answers: Record<string, string | boolean>;
}

const MotivationStep: React.FC<MotivationStepProps> = ({
  step,
  handleAnswer,
  answers,
}) => {
  return (
    <>
      <h2 className="text-xl font-polysans text-gray-300 mb-4">{step.title}</h2>
      {step.questions.map((question) => (
        <div key={question.id} className="space-y-4">
          <p className="text-lg text-gray-400">{question.text}</p>
          <div
            className={`grid gap-3 ${
              question.id === "familiarity"
                ? "grid-cols-5"
                : "grid-cols-1 sm:grid-cols-2"
            }`}
          >
            {question.options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(question.id, option)}
                className={`p-3 rounded-lg text-center transition-all transform hover:scale-105 ${
                  question.id === "familiarity"
                    ? "border border-white hover:border border-white"
                    : answers[question.id] === option
                    ? "border  border-gray-600 text-gray-200 shadow-sm shadow-gray-400"
                    : "border border-gray-800 text-gray-200 hover:shadow-sm hover:shadow-gray-600"
                } ${
                  question.id === "familiarity" &&
                  answers[question.id] === option
                    ? "ring-2 ring-blue-400 ring-opacity-75"
                    : ""
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default MotivationStep;
