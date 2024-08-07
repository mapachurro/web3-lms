export const fetchUserData = async (userId: string) => {
  if (!userId) {
    throw new Error("User ID is not provided");
  }

  try {
    const response = await fetch(`/api/getUser/${userId}`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to fetch user data");
    }

    const data = await response.json();
    console.log("User Data Response:", data);
    return data;
  } catch (error) {
    console.error("Failed to fetch user data:", error);
    return null;
  }
};
