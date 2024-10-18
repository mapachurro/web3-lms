"use client";

import InteractiveMap from "@/components/InteractiveMap/page";
import ModulesFooter from "@/components/ModulesFooter";
import ModulesNavbar from "@/components/ModulesNavbar";
import React from "react";

const ExamplePark: React.FC = () => {
  return (
    <div className="relative isolate bg-no-repeat bg-cover bg-center bg-[url('/images/modules-bg.svg')] overflow-hidden">
      <ModulesNavbar />
      <InteractiveMap />
      <ModulesFooter />
    </div>
  );
};

export default ExamplePark;
