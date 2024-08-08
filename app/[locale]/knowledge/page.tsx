import QuickDivePage from "@/components/Modules/quick-dive-page";
import ModulesNavbar from "@/components/ModulesNavbar";
import React from "react";

const QuickDive = () => {
  return (
    <div className="relative isolate bg-no-repeat bg-cover bg-center bg-[url('/images/modules-bg.svg')] overflow-hidden">
      <ModulesNavbar />
      <QuickDivePage />{" "}
    </div>
  );
};

export default QuickDive;
