"use client";

import React, { ComponentType, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePrivy } from "@privy-io/react-auth";
import Loading from "@/components/UI/Loading";

const withAuth = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const WithAuth = (props: P) => {
    const router = useRouter();
    const { ready, authenticated } = usePrivy();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);

    useEffect(() => {
      if (ready && !authenticated && isClient) {
        router.push("/");
      }
    }, [ready, authenticated, router, isClient]);

    if (!ready || !isClient) {
      return <Loading />;
    }

    if (!authenticated) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return WithAuth;
};

export default withAuth;
