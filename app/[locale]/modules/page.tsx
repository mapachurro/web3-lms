"use client";

import React from "react";
import withAuth from "@/utils/withAuth";
import ModulesPage from "@/components/Modules";

const Modules = () => {
  return <ModulesPage />;
};

export default withAuth(Modules);
