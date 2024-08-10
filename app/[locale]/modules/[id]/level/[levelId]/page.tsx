"use client";

import ModulesNavbar from "@/components/ModulesNavbar";
import ModulesFooter from "@/components/ModulesFooter";
import LevelContent from "@/components/Modules/level-content";
import withAuth from "@/utils/withAuth";

interface LevelPageProps {
  params: {
    id: string;
    levelId: string;
  };
}

const LevelPage: React.FC<LevelPageProps> = ({ params }) => {
  return (
    <div className="relative isolate bg-no-repeat bg-cover bg-center bg-[url('/images/modules-bg.svg')] overflow-hidden">
      <ModulesNavbar />
      <LevelContent moduleId={params.id} levelId={params.levelId} />
      <ModulesFooter />
    </div>
  );
};

export default withAuth(LevelPage);
