import React from "react";
import { useAuthRedirect } from "@/hooks/useAuthRedirect";
import Loading from "@/components/UI/Loading";
import ModulesHeader from "./header";

const ModulesPage = () => {
  const { isLoading } = useAuthRedirect(true);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="py-24 px-16 flex flex-row gap-8 lg:flex-col xl:px-8">
      {/* left container  */}
      <div>
        <ModulesHeader />
        Modules
      </div>
      {/* right container  */}
    </div>
  );
};

export default ModulesPage;
