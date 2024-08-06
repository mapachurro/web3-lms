export type Question = {
  id: string;
  text: string;
  options: string[];
};

export type OnboardingStep = {
  id: string;
  title: string;
  questions: Question[];
};

export type UserCategory = "beginner" | "intermediate" | "advanced";
