import { levels as module1Levels } from "@/lib/module1-levels";
import { Level } from "@/types/levels";

export const getLevelsForModule = (
  moduleId: string
): { levels: Level[]; comingSoon: boolean } => {
  switch (moduleId) {
    case "1":
      return { levels: module1Levels, comingSoon: false };
    case "2":
    case "3":
    case "4":
      // For modules 2, 3, 4, or any other future modules that are not yet implemented
      return { levels: [], comingSoon: true };
    default:
      // Instead of throwing an error, we'll return comingSoon: true for any unknown module
      console.warn(
        `No levels found for module ${moduleId}. Showing 'Coming Soon'.`
      );
      return { levels: [], comingSoon: true };
  }
};
