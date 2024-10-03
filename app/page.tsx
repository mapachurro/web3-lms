"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { parseCookies } from "nookies";

const RootPage = () => {
  const router = useRouter();

  useEffect(() => {
    const cookies = parseCookies();
    const locale = cookies.NEXT_LOCALE || "en";

    router.push(`/${locale}`);
  }, [router]);

  return null;
};

export default RootPage;
