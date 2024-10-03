"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePrivy } from "@privy-io/react-auth";
import axios from "axios";

export const useAuthRedirect = (requiredAuth: boolean) => {
  const router = useRouter();
  const { ready, authenticated, user } = usePrivy();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuthAndRedirect = async () => {
      if (ready) {
        if (requiredAuth && !authenticated) {
          router.replace("/");
        } else if (authenticated && !requiredAuth) {
          try {
            const response = await axios.post("/api/checkOnboarding", {
              id: user?.id,
            });
            const { userExists, onboardingCompleted, onboardingStep } =
              response.data;

            if (userExists && onboardingCompleted) {
              router.replace("/modules");
            } else if (userExists && !onboardingCompleted) {
              router.replace(`/onboard?step=${onboardingStep}`);
            } else {
              router.replace("/onboard");
            }
          } catch (error) {
            console.error("Failed to check user existence:", error);
            router.replace("/onboard");
          }
        }
        setIsLoading(false);
      }
    };

    checkAuthAndRedirect();
  }, [ready, authenticated, requiredAuth, router, user]);

  return { isLoading, authenticated, ready };
};
