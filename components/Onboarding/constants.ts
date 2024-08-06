import { OnboardingStep, Question } from "@/types/onboarding";

export const initialSteps: OnboardingStep[] = [
  {
    id: "motivation",
    title: "Hey, there! What brings you to Base Beach today?",
    questions: [
      {
        id: "motivation",
        text: "",
        options: [
          "Just curious about Base",
          "Wanna explore Base",
          "I'm a Pro, bring it on!",
        ],
      },
    ],
  },
  {
    id: "familiarity",
    title:
      "On a scale of 1-5, how familiar are you with Base and Layer 2 solutions?",
    questions: [
      {
        id: "familiarity",
        text: "",
        options: ["1", "2", "3", "4", "5"],
      },
    ],
  },
];

export const knowledgeCheckQuestions: Record<string, Question> = {
  "1": {
    id: "knowledgeCheck1",
    text: "Which best describes you?",
    options: [
      "I've heard about crypto but never used it",
      "I know about Ethereum but not sure what Base",
      "I'm curious about Layer 2 solutions",
    ],
  },
  "2": {
    id: "knowledgeCheck2",
    text: "How would you describe Base's relationship to Ethereum?",
    options: [
      "Base is a competitor to Ethereum",
      "Base is a Layer 2 solution built on Ethereum",
      "Base is an independent blockchain",
      "I'm not sure",
    ],
  },
  "3": {
    id: "knowledgeCheck3",
    text: "What is the primary benefit of using Base?",
    options: [
      "It's faster than Bitcoin",
      "It reduces gas fees compared to Ethereum mainnet",
      "It offers more privacy than other blockchains",
      "It's the only way to buy certain tokens",
    ],
  },
  "4": {
    id: "knowledgeCheck4",
    text: "Which of the following is true about Base?",
    options: [
      "It uses Proof of Work for consensus",
      "It's an Optimistic rollup",
      "It can only be accessed through Coinbase",
      "It has its own native token called BASE",
    ],
  },
  "5": {
    id: "knowledgeCheck5",
    text: "What technology does Base use to achieve scalability?",
    options: ["Sharding", "Optimistic rollups", "zk-rollups", "Plasma chains"],
  },
};

export const correctAnswers: Record<string, string> = {
  knowledgeCheck2: "Base is a Layer 2 solution built on Ethereum",
  knowledgeCheck3: "It reduces gas fees compared to Ethereum mainnet",
  knowledgeCheck4: "It's an Optimistic rollup",
  knowledgeCheck5: "Optimistic rollups",
};

export const steps = [
  { name: "Motivation", status: "current" },
  { name: "Familiarity", status: "upcoming" },
  { name: "Knowledge Check", status: "upcoming" },
  { name: "Confirmation", status: "upcoming" },
];
