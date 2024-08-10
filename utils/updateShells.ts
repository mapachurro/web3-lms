export const updateShells = async (userId: string, shellsToAdd: number) => {
  const response = await fetch("/api/update-shells", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId: userId, shellsToAdd }),
  });
  return response.json();
};
