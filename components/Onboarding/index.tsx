import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePrivy } from "@privy-io/react-auth";
import {
  initialSteps,
  skillCheckQuestions,
  surfboards,
  steps,
} from "./constants";
import ProgressIndicator from "./ProgressIndicator";
import MotivationStep from "./MotivationStep";
import FamiliarityStep from "./FamiliarityStep";
import SkillCheckStep from "./SkillCheckStep";
import SurfboardSelectionStep from "./SurfboardSelectionStep";
import ConfirmationStep from "./ConfirmationStep";
import { UserCategory, Surfboard } from "@/types/onboarding";
import Loading from "@/components/UI/Loading";
import WaveButton from "@/components/UI/Button/WaveButton";
import { useSearchParams } from "next/navigation";
import { useAuthRedirect } from "@/hooks/useAuthRedirect";

const Onboarding: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { user } = usePrivy();
  const { isLoading, authenticated } = useAuthRedirect(true);

  const [currentStep, setCurrentStep] = useState(() => {
    const stepParam = searchParams.get("step");
    return stepParam ? Math.max(0, parseInt(stepParam) - 1) : 0;
  });
  const [answers, setAnswers] = useState<Record<string, string | boolean>>({});
  const [onboardingSteps, setOnboardingSteps] = useState(initialSteps);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [finalCategory, setFinalCategory] = useState<UserCategory>("beginner");
  const [selectedSurfboard, setSelectedSurfboard] = useState<Surfboard | null>(
    null
  );

  useEffect(() => {
    if (answers.familiarity) {
      const familiarityLevel = parseInt(answers.familiarity as string);
      const updatedSteps = [...onboardingSteps];
      updatedSteps[2].questions[0].options =
        skillCheckQuestions[answers.familiarity as string].options;

      const userLevel =
        familiarityLevel <= 2
          ? "beginner"
          : familiarityLevel === 3
          ? "intermediate"
          : "advanced";
      updatedSteps[3].questions[0].options = surfboards
        .filter((s) => s.level === userLevel)
        .map((s) => s.name);

      setOnboardingSteps(updatedSteps);
    }
  }, [answers.familiarity]);

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  useEffect(() => {
    if (answers.skillCheck) {
      const knowledgeScore = calculateKnowledgeScore();
      const newCategory = determineUserCategory(knowledgeScore);
      setFinalCategory(newCategory);
    }
  }, [answers.skillCheck]);

  const calculateKnowledgeScore = (): number => {
    let points = 0;

    if (answers.motivation === "Just curious about Base") points += 1;
    else if (answers.motivation === "Wanna explore Base") points += 2;
    else if (answers.motivation === "I'm a Pro, bring it on!") points += 3;

    points += parseInt(answers.familiarity as string);

    // Add points based on skill check answer
    const skillCheckOptions =
      skillCheckQuestions[answers.familiarity as string].options;
    const skillIndex = skillCheckOptions.indexOf(answers.skillCheck as string);
    points += Math.min(skillIndex + 1, 3); // Max 3 points for skill check

    const totalPossiblePoints = 11; // 3 (motivation) + 5 (familiarity) + 3 (skill check)
    return (points / totalPossiblePoints) * 100;
  };

  const determineUserCategory = (score: number): UserCategory => {
    if (score <= 50) return "beginner";
    if (score <= 80) return "intermediate";
    return "advanced";
  };

  const handleNext = async () => {
    if (currentStep < onboardingSteps.length - 1) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);

      if (user?.id) {
        await fetch("/api/updateOnboardingStep", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: user.id,
            onboardingStep: nextStep,
          }),
        });
      }
    } else {
      const knowledgeScore = calculateKnowledgeScore();
      const newCategory = determineUserCategory(knowledgeScore);
      setFinalCategory(newCategory);

      if (user?.id) {
        await Promise.all([
          fetch("/api/updateUserOnboarding", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: user.id,
              answers,
              shells: 10,
              createdAt: new Date(),
              category: newCategory,
              knowledgeScore,
              selectedSurfboard: selectedSurfboard?.id,
            }),
          }),
          fetch("/api/updateOnboardingStep", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: user.id,
              onboardingStep: onboardingSteps.length,
            }),
          }),
        ]);
      }

      setShowConfirmation(true);
    }
  };

  const handleSurfboardSelection = (surfboardName: string) => {
    const selected = surfboards.find((s) => s.name === surfboardName);
    if (selected) {
      setSelectedSurfboard(selected);
      handleAnswer("surfboard", surfboardName);
    }
  };

  const handleStartSurfing = () => {
    router.push(`/modules?category=${finalCategory.toLowerCase()}`);
  };

  const renderContent = () => {
    if (showConfirmation) {
      return (
        <ConfirmationStep
          category={finalCategory}
          onStart={handleStartSurfing}
          selectedSurfboard={selectedSurfboard}
        />
      );
    }

    const currentStepData = onboardingSteps[currentStep];

    if (!currentStepData) {
      return (
        <div className="text-gray-200">
          Invalid step. Please start from the beginning.
        </div>
      );
    }

    switch (currentStepData.id) {
      case "motivation":
        return (
          <MotivationStep
            step={currentStepData}
            handleAnswer={handleAnswer}
            answers={answers}
          />
        );
      case "familiarity":
        return (
          <FamiliarityStep
            step={currentStepData}
            handleAnswer={handleAnswer}
            answers={answers}
          />
        );
      case "skillCheck":
        return (
          <SkillCheckStep
            step={currentStepData}
            handleAnswer={handleAnswer}
            answers={answers as Record<string, string>}
          />
        );
      case "surfboard":
        return (
          <SurfboardSelectionStep
            step={currentStepData}
            handleAnswer={handleSurfboardSelection}
            answers={answers as Record<string, string>}
            surfboards={surfboards.filter((s) => s.level === finalCategory)}
            userCategory={finalCategory}
          />
        );
      default:
        return null;
    }
  };

  const isStepCompleted = () => {
    const currentStepData = onboardingSteps[currentStep];
    return currentStepData?.questions.every((q) => answers[q.id] !== undefined);
  };

  if (isLoading) return <Loading />;
  if (!authenticated) return null;

  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <div className="p-8 max-w-2xl w-full">
        <ProgressIndicator
          currentStep={currentStep}
          totalSteps={steps.length}
        />
        {renderContent()}
        {!showConfirmation && isStepCompleted() && (
          <div className="mt-8 flex justify-end">
            <WaveButton
              onClick={handleNext}
              additionalStyles="text-white text-sm py-2 px-4 group w-[100px]"
              liquidStyles="w-[180px] h-[180px] -top-[75px] group-hover:-top-[120px]"
            >
              {currentStep < onboardingSteps.length - 1 ? "Next" : "Yayy"}
            </WaveButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default Onboarding;
