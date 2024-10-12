"use client";

import Onboarding from "@/components/Onboarding";
import withAuth from "@/utils/withAuth";
import React from "react";

const Onboard = () => {
  return (
    <div className="relative isolate bg-no-repeat bg-cover bg-center bg-[url('/images/modules-bg.svg')] overflow-hidden">
      <Onboarding />
    </div>
  );
};

export default withAuth(Onboard);
