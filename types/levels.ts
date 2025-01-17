export type ModuleLevels = {
  levels: Level[];
  comingSoon: boolean;
};

export interface LevelContent {
  title: string;
  content: React.ReactNode;
}

export interface Level {
  id: string;
  title: string;
  description: string;
  content: LevelContent[];
  progress?: string;
  shells: number;
}
