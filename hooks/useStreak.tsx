"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { usePrivy } from "@privy-io/react-auth";

export const useStreak = () => {
  const [streakCount, setStreakCount] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const { user } = usePrivy();

  useEffect(() => {
    if (!user) return;
    // Check local storage for the streak count and last "gm" date
    const storedStreakCount = localStorage.getItem("streakCount");
    const lastGMDateString = localStorage.getItem("lastGMDate");
    const today = new Date();
    const currentDate = today.toISOString().split("T")[0];

    if (storedStreakCount) {
      setStreakCount(parseInt(storedStreakCount));
    }

    if (lastGMDateString) {
      const lastGMDate = new Date(lastGMDateString);

      if (lastGMDate.toISOString().split("T")[0] === currentDate) {
        // If "gm" was already clicked today, hide the button
        setButtonDisabled(true);
      } else {
        const nextDay = new Date(lastGMDate);
        nextDay.setDate(nextDay.getDate() + 1);

        if (currentDate > nextDay.toISOString().split("T")[0]) {
          // If a day was missed, reset the streak
          setStreakCount(0);
          localStorage.setItem("streakCount", "0");
        }

        // If the current date is past the "next day" after the last "gm", show the button
        setButtonDisabled(false);
      }
    } else {
      // If there is no stored date, the button should be shown as well
      setButtonDisabled(false);
    }
  }, [user]);

  const handleGMClick = async () => {
    if (!user) return;
    console.log("gm click");
    // Update streak and set today's date
    const newStreakCount = streakCount + 1;
    const today = new Date();
    const currentDate = today.toISOString().split("T")[0];

    setStreakCount(newStreakCount);
    setButtonDisabled(true);
    localStorage.setItem("streakCount", newStreakCount.toString());
    localStorage.setItem("lastGMDate", currentDate);

    try {
      await axios.post("/api/streak", {
        userId: user?.id,
        streakCount: newStreakCount,
      });
    } catch (error) {
      console.error("Failed to update streak in the database:", error);
    }
  };

  return { streakCount, buttonDisabled, handleGMClick };
};
