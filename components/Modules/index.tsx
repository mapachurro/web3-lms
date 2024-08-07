import React from "react";
import { useAuthRedirect } from "@/hooks/useAuthRedirect";
import Loading from "@/components/UI/Loading";

const ModulesPage = () => {
  const { isLoading } = useAuthRedirect(true);

  if (isLoading) {
    return <Loading />;
  }

  return <div className="text-white">ModulesPage</div>;
};

export default ModulesPage;
