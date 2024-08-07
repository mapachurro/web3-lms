export interface SocialProfile {
  follower_count: number;
  following_count: number;
  location: string;
  profile_bio: string;
  profile_display_name: string;
  profile_image_url: string;
  profile_name: string;
  profile_url: string;
  source: string;
}

export interface TalentData {
  credibility_score: number;
  nominations_received_count: number;
  passport_id: number;
  passport_profile: {
    bio: string;
    display_name: string;
    image_url: string;
    location: string;
    name: string;
  };
  passport_socials: SocialProfile[];
  score: number;
  user: {
    name: string;
  };
}

export type SocialPlatform =
  | "Farcaster"
  | "Lens"
  // | "X"
  | "LinkedIn"
  // | "Instagram"
  | "GitHub";

export interface UnifiedProfile {
  id: string;
  name: string;
  displayName: string;
  bio: string;
  avatar: string;
  score: number;
  credibilityScore: number;
  nominationsReceivedCount: number;
  socials: {
    Farcaster?: string;
    Lens?: string;
    X?: string;
    LinkedIn?: string;
    Instagram?: string;
    GitHub?: string;
    [key: string]: string | undefined;
  };
  passportSocials: SocialProfile[];
}
