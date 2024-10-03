"use client";

import Leaderboard from "@/components/Leaderboard";
import ModulesFooter from "@/components/ModulesFooter";
import ModulesNavbar from "@/components/ModulesNavbar";
// import withAuth from "@/utils/withAuth";
import React from "react";

const LeaderboardPage = () => {
  return (
    <div className="relative isolate bg-no-repeat bg-cover bg-center bg-[url('/images/modules-bg.svg')] overflow-hidden">
      <ModulesNavbar />
      <Leaderboard />
      <ModulesFooter />
    </div>
  );
};

export default LeaderboardPage;
