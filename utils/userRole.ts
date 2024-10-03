export const determineUserRole = (category: string): string => {
  switch (category.toLowerCase()) {
    case "beginner":
      return "Wanderer";
    case "intermediate":
      return "Wave Rider";
    case "advanced":
      return "Surf Master";
    default:
      return "Wanderer";
  }
};
