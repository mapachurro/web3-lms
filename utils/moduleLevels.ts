import { levels as module1Levels } from "@/lib/module1-levels";
import { levels as module2Levels } from "@/lib/module2-levels";

export const getLevelsForModule = (moduleId: string) => {
  switch (moduleId) {
    case "1":
      return { levels: module1Levels, comingSoon: false };
    case "2":
      return { levels: module2Levels, comingSoon: true };
    // Add cases for other modules
    default:
      throw new Error(`No levels found for module ${moduleId}`);
  }
};
