"use client";

import ModuleContent from "@/components/Modules/content";
import ModulesFooter from "@/components/ModulesFooter";
import ModulesNavbar from "@/components/ModulesNavbar";
import withAuth from "@/utils/withAuth";
import React from "react";

interface ModulePageProps {
  params: {
    id: string;
  };
}

const ModulePage: React.FC<ModulePageProps> = ({ params }) => {
  return (
    <div className="relative isolate bg-no-repeat bg-cover bg-center bg-[url('/images/modules-bg.svg')] overflow-hidden">
      <ModulesNavbar /> <ModuleContent moduleId={params.id} /> <ModulesFooter />
    </div>
  );
};

export default withAuth(ModulePage);
