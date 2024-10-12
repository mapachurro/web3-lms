export interface User {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  wallet: { address: string };
  socials: Record<string, string>;
  streakCount: number;
  category: string;
  knowledgeScore: number;
  selectedSurfboard: string;
  answers: Record<string, string>;
  shells: number;
  createdAt: Date;
  isNewbie?: boolean;
  talentData: {
    passport_profile: {
      name: "";
      display_name: "";
      bio: "";
      image_url: "";
      location: "";
    };
    score: "";
    credibility_score: "";
    nominations_received_count: "";
    passport_socials: {};
  };
}

// If you need a partial version of UserData for updates:
export type PartialUserData = Partial<User>;
