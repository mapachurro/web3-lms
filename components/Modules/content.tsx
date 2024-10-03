"use client";

import React from "react";
import { modules } from "@/lib/modules";
import Puzzle from "./Puzzle";
import ModuleContentHeader from "./module-content-header";

interface ModuleContentProps {
  moduleId: string;
  levelId?: string;
}

const ModuleContent: React.FC<ModuleContentProps> = ({ moduleId, levelId }) => {
  const moduleData = modules.find(
    (module) => module.id.toString() === moduleId
  );

  if (!moduleData) {
    return <div>Module Content Not Found</div>;
  }

  return (
    <div className="py-28 px-10 w-full">
      <ModuleContentHeader moduleData={moduleData} moduleId={moduleId} />
      <Puzzle moduleId={moduleId} />
    </div>
  );
};

export default ModuleContent;
