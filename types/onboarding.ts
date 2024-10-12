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

export type UserCategory = Level;

type Rarity = "Common" | "Uncommon" | "Rare";
type Level = "beginner" | "intermediate" | "advanced";

export interface Surfboard {
  id: string;
  img: string;
  name: string;
  level: Level;
  rarity: Rarity;
  attributes: {
    comprehension: number; // Affects speed of completing modules
    retention: number; // Influences knowledge score gains
    application: number; // Impacts performance in practical exercises
    discovery: number; // Chance to unlock bonus content
    collaboration: number; // Enhances group learning benefits
  };
  specialAbility?: string; // Unique feature for rarer boards
  shellMultiplier: number; // Affects SHELL earning rate
  maxLevel: number; // Maximum level this surfboard can reach
  currentLevel: number; // Current level of the surfboard
  experience: number; // Current experience points
}
