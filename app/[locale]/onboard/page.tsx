"use client";

import ModulesFooter from "@/components/ModulesFooter";
import ModulesNavbar from "@/components/ModulesNavbar";
import Onboarding from "@/components/Onboarding";
import withAuth from "@/utils/withAuth";
import React from "react";

const Onboard = () => {
  return (
    <div className="relative isolate bg-no-repeat bg-cover bg-center bg-[url('/images/modules-bg.svg')] overflow-hidden">
      <ModulesNavbar />
      <Onboarding />
      <ModulesFooter />
    </div>
  );
};

export default withAuth(Onboard);
