import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePrivy } from "@privy-io/react-auth";
import axios from "axios";
import Loading from "@/components/UI/Loading";

export const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { ready, authenticated, user } = usePrivy();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuthAndRedirect = async () => {
      if (ready) {
        if (authenticated && user) {
          try {
            const response = await axios.post("/api/checkOnboarding", {
              id: user.id,
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
  }, [ready, authenticated, user, router]);

  if (isLoading) {
    return <Loading />;
  }

  return <>{children}</>;
};
