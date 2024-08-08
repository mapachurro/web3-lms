import { modules } from "@/lib/modules";
import React from "react";

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
    <div className="py-24 px-10 w-full flex items-center gap-10 flex-col">
      <h1 className="text-2xl text-gray-100">{moduleData?.title}</h1>
    </div>
  );
};

export default ModuleContent;
