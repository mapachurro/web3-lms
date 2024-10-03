export const registerUser = async (user: {}) => {
  try {
    const response = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error saving user:", errorData.message);
    } else {
      const data = await response.json();
      console.log("User saved successfully:", data);
    }
  } catch (error) {
    console.error("Error saving user:", error);
  }
};
