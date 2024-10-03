import { TalentData } from "@/types/profile";

export async function fetchTalentData(
  walletAddress: string
): Promise<{ passport: TalentData } | null> {
  try {
    const response = await fetch(
      `/api/fetchTalentData?walletAddress=${encodeURIComponent(walletAddress)}`
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to fetch talent data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching talent data:", error);
    return null;
  }
}
