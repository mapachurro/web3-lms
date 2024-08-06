"use client";

import Onboarding from "@/components/Onboarding";
import withAuth from "@/utils/withAuth";
import React from "react";

const Onboard = () => {
  return <Onboarding />;
};

export default withAuth(Onboard);
