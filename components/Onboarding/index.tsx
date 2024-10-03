import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePrivy } from "@privy-io/react-auth";
import {
  correctAnswers,
  initialSteps,
  knowledgeCheckQuestions,
} from "./constants";
import ProgressIndicator from "./ProgressIndicator";
import MotivationStep from "./MotivationStep";
import FamiliarityStep from "./FamiliarityStep";
import KnowledgeCheckStep from "./KnowledgeCheckStep";
import ConfirmationStep from "./ConfirmationStep";
import { UserCategory } from "@/types/onboarding";
import Loading from "@/components/UI/Loading";
import WaveButton from "@/components/UI/Button/WaveButton";
import { useSearchParams } from "next/navigation";

const Onboarding: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { ready, authenticated, user } = usePrivy();
  const [currentStep, setCurrentStep] = useState(() => {
    const stepParam = searchParams.get("step");
    return stepParam ? Math.max(0, parseInt(stepParam) - 1) : 0;
  });
  const [answers, setAnswers] = useState<Record<string, string | boolean>>({});
  const [onboardingSteps] = useState(initialSteps);
  const [isKnowledgeCheck, setIsKnowledgeCheck] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [finalCategory, setFinalCategory] = useState<UserCategory>("beginner");

  useEffect(() => {
    if (ready) {
      if (!authenticated) {
        router.replace("/");
      } else {
        checkOnboardingStatus(user?.id as string);
      }
    }
  }, [ready, authenticated, user, router]);

  useEffect(() => {
    if (authenticated && user?.id) {
      router.replace(`/en/onboard?step=${currentStep + 1}`);
    }
  }, [currentStep, authenticated, user, router]);

  const checkOnboardingStatus = async (id: string) => {
    const response = await fetch("/api/checkOnboarding", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    const data = await response.json();
    if (data.onboardingCompleted) {
      router.replace("/modules");
    }
  };

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const calculateKnowledgeScore = (
    motivation: string,
    familiarity: string,
    knowledgeCheckCorrect: boolean
  ): number => {
    let points = 0;

    // Motivation points
    if (motivation === "Just curious about Base") points += 1;
    else if (motivation === "Wanna explore Base") points += 2;
    else if (motivation === "I'm a Pro, bring it on!") points += 3;

    // Familiarity points
    points += parseInt(familiarity);

    // Knowledge check point
    if (knowledgeCheckCorrect) points += 1;

    // Calculate percentage
    const totalPossiblePoints = 9;
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
    } else if (currentStep === initialSteps.length - 1) {
      setIsKnowledgeCheck(true);

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
            }),
          }),
          fetch("/api/updateOnboardingStep", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: user.id,
              onboardingStep: TOTAL_STEPS - 2, // This will be the index of the knowledge check step
            }),
          }),
        ]);
      }
    }
  };

  const handleKnowledgeCheck = async (answer: string) => {
    try {
      const familiarityLevel = parseInt(answers["familiarity"] as string);
      const isCorrect =
        answer === correctAnswers[`knowledgeCheck${familiarityLevel}`];

      const knowledgeScore = calculateKnowledgeScore(
        answers["motivation"] as string,
        answers["familiarity"] as string,
        isCorrect
      );

      console.log(" knowledge score from onboarding ", knowledgeScore);

      const newCategory = determineUserCategory(knowledgeScore);
      setFinalCategory(newCategory);

      setAnswers((prev) => ({
        ...prev,
        knowledgeCheck: answer,
        knowledgeCheckCorrect: isCorrect,
      }));

      if (user?.id) {
        await Promise.all([
          fetch("/api/updateCategory", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: user.id,
              category: newCategory,
              onboardingCompleted: true,
              knowledgeCheckAnswer: answer,
              knowledgeCheckCorrect: isCorrect,
              knowledgeScore: knowledgeScore,
            }),
          }),
          fetch("/api/updateOnboardingStep", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: user.id,
              onboardingStep: onboardingSteps.length + 1, // This will be the confirmation step
            }),
          }),
        ]);
      }

      setShowConfirmation(true);
    } catch (error) {
      console.error("Error in handleKnowledgeCheck:", error);
    }
  };

  const handleFinalChoice = (choice: "proceed" | "easier" | "harder") => {
    let categoryToUse = finalCategory;
    if (choice === "easier" && finalCategory !== "beginner") {
      categoryToUse =
        finalCategory === "advanced" ? "intermediate" : "beginner";
    } else if (choice === "harder" && finalCategory !== "advanced") {
      categoryToUse =
        finalCategory === "beginner" ? "intermediate" : "advanced";
    }

    // You might want to update the category one last time if it changed
    if (categoryToUse !== finalCategory && user?.id) {
      fetch("/api/updateCategory", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: user.id,
          category: categoryToUse,
          onboardingCompleted: true,
        }),
      });
    }

    router.push(`/modules?${categoryToUse}`);
  };

  const getCurrentStep = () => {
    if (showConfirmation) return TOTAL_STEPS - 1;
    if (isKnowledgeCheck) return TOTAL_STEPS - 2;
    return currentStep;
  };

  const renderContent = () => {
    if (showConfirmation) {
      return <ConfirmationStep handleFinalChoice={handleFinalChoice} />;
    }

    if (isKnowledgeCheck) {
      return (
        <KnowledgeCheckStep
          question={knowledgeCheckQuestions[answers["familiarity"] as string]}
          handleKnowledgeCheck={handleKnowledgeCheck}
        />
      );
    }

    const currentStepData = onboardingSteps[currentStep];

    if (!currentStepData) {
      // Handle case where currentStepData is undefined
      return (
        <div className="text-gray-200">
          Invalid step. Please start from the beginning.
        </div>
      );
    }

    if (currentStepData?.id === "motivation") {
      return (
        <MotivationStep
          step={currentStepData}
          handleAnswer={handleAnswer}
          answers={answers}
        />
      );
    }

    if (currentStepData?.id === "familiarity") {
      return (
        <FamiliarityStep
          step={currentStepData}
          handleAnswer={handleAnswer}
          answers={answers}
        />
      );
    }

    return null;
  };

  const isStepCompleted = () => {
    const currentStepData = onboardingSteps[currentStep];
    return currentStepData?.questions.every((q) => answers[q.id] !== undefined);
  };
  const TOTAL_STEPS = initialSteps.length + 2;

  if (!ready || !authenticated) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      <div className="p-8 max-w-2xl w-full">
        <ProgressIndicator currentStep={getCurrentStep()} />
        {renderContent()}
        {!isKnowledgeCheck && !showConfirmation && isStepCompleted() && (
          <div className="mt-8 flex justify-end">
            <WaveButton
              onClick={handleNext}
              additionalStyles="text-white text-sm py-2 px-4 group"
              liquidStyles="w-[180px] h-[180px] -top-[75px] group-hover:-top-[120px]"
            >
              {getCurrentStep() < TOTAL_STEPS - 1 ? "Next" : "Finish"}
            </WaveButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default Onboarding;
