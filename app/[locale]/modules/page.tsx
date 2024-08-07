"use client";

import React from "react";
import withAuth from "@/utils/withAuth";
import ModulesPage from "@/components/Modules";
import ModulesNavbar from "@/components/ModulesNavbar";
import ModulesFooter from "@/components/ModulesFooter";

const Modules = () => {
  return (
    <div className="relative isolate bg-no-repeat bg-cover bg-center bg-[url('/images/modules-bg.svg')] overflow-hidden">
      <ModulesNavbar />
      <ModulesPage />
      <ModulesFooter />
    </div>
  );
};

export default withAuth(Modules);
