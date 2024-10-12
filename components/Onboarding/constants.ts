import { OnboardingStep, Question, Surfboard } from "@/types/onboarding";

export const initialSteps: OnboardingStep[] = [
  {
    id: "motivation",
    title: "Hey, there! What brings you to Basics today?",
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
    title: "On a scale of 1-5, how familiar are you with Crypto and Base?",
    questions: [
      {
        id: "familiarity",
        text: "",
        options: ["1", "2", "3", "4", "5"],
      },
    ],
  },
  {
    id: "skillCheck",
    title: "What describes you?",
    questions: [
      {
        id: "skillCheck",
        text: "",
        options: [], // This will be dynamically populated based on familiarity
      },
    ],
  },
  {
    id: "surfboard",
    title: "",
    questions: [
      {
        id: "surfboard",
        text: "",
        options: [], // This will be populated with available surfboards
      },
    ],
  },
];

export const skillCheckQuestions: Record<string, Question> = {
  "1": {
    id: "skillCheck1",
    text: "What describes you?",
    options: [
      "Developer",
      "Designer",
      "Marketer",
      "Student",
      "Entrepreneur",
      "Cyber Security",
      "Other",
    ],
  },
  "2": {
    id: "skillCheck2",
    text: "What describes you?",
    options: [
      "Developer",
      "Designer",
      "Marketer",
      "Student",
      "Entrepreneur",
      "Creator",
      "Trader",
      "Other",
    ],
  },
  "3": {
    id: "skillCheck3",
    text: "What describes you?",
    options: [
      "DeFi Explorer",
      "NFT Enthusiast",
      "DAO Contributor",
      "Blockchain Developer",
      "Trader",
      "Content Creator",
      "Other",
    ],
  },
  "4": {
    id: "skillCheck4",
    text: "What describes you?",
    options: [
      "Crypto Degen",
      "Smart Contract Developer",
      "Governance Architect",
      "Researcher and Writer",
      "Designer",
      "NFT Artist",
      "Other",
    ],
  },
  "5": {
    id: "skillCheck5",
    text: "What describes you?",
    options: [
      "Crypto Degen",
      "Smart Contract Developer",
      "Governance Architect",
      "Researcher and Writer",
      "Designer",
      "NFT Artist",
      "Other",
    ],
  },
};

export const surfboards: Surfboard[] = [
  // Wanderer Surfboards
  {
    id: "w1",
    img: "/images/surfboards/1.png",
    name: "Steady Longboard",
    level: "beginner",
    rarity: "Common",
    attributes: {
      comprehension: 50,
      retention: 40,
      application: 30,
      discovery: 20,
      collaboration: 40,
    },
    shellMultiplier: 1,
    maxLevel: 10,
    currentLevel: 1,
    experience: 0,
  },
  {
    id: "w2",
    img: "/images/surfboards/2.png",
    name: "Curious Cruiser",
    level: "beginner",
    rarity: "Uncommon",
    attributes: {
      comprehension: 55,
      retention: 45,
      application: 35,
      discovery: 25,
      collaboration: 45,
    },
    specialAbility:
      "5% chance to generate extra quiz questions for better understanding",
    shellMultiplier: 1.1,
    maxLevel: 15,
    currentLevel: 1,
    experience: 0,
  },
  {
    id: "w3",
    img: "/images/surfboards/3.png",
    name: "Novice's Fortune",
    level: "beginner",
    rarity: "Rare",
    attributes: {
      comprehension: 60,
      retention: 50,
      application: 40,
      discovery: 30,
      collaboration: 50,
    },
    specialAbility: "10% chance to earn double SHELLS from a completed module",
    shellMultiplier: 1.2,
    maxLevel: 20,
    currentLevel: 1,
    experience: 0,
  },
  {
    id: "r1",
    img: "/images/surfboards/4.png",
    name: "Agile Shortboard",
    level: "intermediate",
    rarity: "Common",
    attributes: {
      comprehension: 70,
      retention: 60,
      application: 50,
      discovery: 40,
      collaboration: 60,
    },
    shellMultiplier: 1.2,
    maxLevel: 20,
    currentLevel: 1,
    experience: 0,
  },
  {
    id: "r2",
    img: "/images/surfboards/5.png",
    name: "Knowledge Seeker",
    level: "intermediate",
    rarity: "Uncommon",
    attributes: {
      comprehension: 75,
      retention: 65,
      application: 55,
      discovery: 45,
      collaboration: 65,
    },
    specialAbility: "10% chance to unlock bonus content in modules",
    shellMultiplier: 1.3,
    maxLevel: 25,
    currentLevel: 1,
    experience: 0,
  },
  {
    id: "r3",
    img: "/images/surfboards/6.png",
    name: "Blockchain Carver",
    level: "intermediate",
    rarity: "Rare",
    attributes: {
      comprehension: 80,
      retention: 70,
      application: 60,
      discovery: 50,
      collaboration: 70,
    },
    specialAbility:
      "5% chance to automatically complete a sub-module upon starting",
    shellMultiplier: 1.4,
    maxLevel: 30,
    currentLevel: 1,
    experience: 0,
  },

  // Master Surfboards
  {
    id: "m1",
    img: "/images/surfboards/7.png",
    name: "Pro Performance",
    level: "advanced",
    rarity: "Common",
    attributes: {
      comprehension: 90,
      retention: 80,
      application: 70,
      discovery: 60,
      collaboration: 80,
    },
    shellMultiplier: 1.4,
    maxLevel: 30,
    currentLevel: 1,
    experience: 0,
  },
  {
    id: "m2",
    img: "/images/surfboards/8.png",
    name: "Crypto Innovator",
    level: "advanced",
    rarity: "Uncommon",
    attributes: {
      comprehension: 95,
      retention: 85,
      application: 75,
      discovery: 65,
      collaboration: 85,
    },
    specialAbility:
      "10% chance to receive a 'flash of inspiration', granting instant completion of a challenge",
    shellMultiplier: 1.5,
    maxLevel: 35,
    currentLevel: 1,
    experience: 0,
  },
  {
    id: "m3",
    img: "/images/surfboards/9.png",
    name: "Web3 Pioneer",
    level: "advanced",
    rarity: "Rare",
    attributes: {
      comprehension: 100,
      retention: 90,
      application: 80,
      discovery: 70,
      collaboration: 90,
    },
    specialAbility:
      "5% chance to enter 'Flow State', doubling all rewards for the next hour",
    shellMultiplier: 1.6,
    maxLevel: 40,
    currentLevel: 1,
    experience: 0,
  },
];

export const steps = [
  { name: "Motivation", status: "current" },
  { name: "Familiarity", status: "upcoming" },
  { name: "Skill Check", status: "upcoming" },
  { name: "Surfboard selection", status: "upcoming" },
  { name: "Confirmation", status: "upcoming" },
];
