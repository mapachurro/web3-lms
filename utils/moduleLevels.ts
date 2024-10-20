import {
  nftLevels,
  welcomeLevels,
  defiLevels,
  devLevels,
  daoLevels,
  socialLevels,
  metaverseLevels,
  walletLevels,
  vibesLevels,
} from "@/lib/module1-levels";
import { Level } from "@/types/levels";

export const getLevelsForModule = (
  moduleId: string,
  mapPart: string
): { levels: Level[]; comingSoon: boolean } => {
  switch (moduleId) {
    case "1":
      switch (mapPart) {
        case "welcome":
          return { levels: welcomeLevels, comingSoon: false };
        case "nft":
          return { levels: nftLevels, comingSoon: false };
        case "defi":
          return { levels: defiLevels, comingSoon: false };
        case "dev":
          return { levels: devLevels, comingSoon: false };
        case "dao":
          return { levels: daoLevels, comingSoon: false };
        case "social":
          return { levels: socialLevels, comingSoon: false };
        case "metaverse":
          return { levels: metaverseLevels, comingSoon: false };
        case "wallets":
          return { levels: walletLevels, comingSoon: false };
        case "vibes":
          return { levels: vibesLevels, comingSoon: false };
        default:
          return { levels: [], comingSoon: true };
      }
    // ... other module cases
    default:
      return { levels: [], comingSoon: true };
  }
};
