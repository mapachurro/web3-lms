"use client";

import ModulesNavbar from "@/components/ModulesNavbar";
import ProfilePage from "@/components/Profile";
import withAuth from "@/utils/withAuth";
import React from "react";

const Profile = () => {
  return (
    <div className="relative isolate bg-no-repeat bg-cover bg-center bg-[url('/images/modules-bg.svg')] overflow-hidden">
      <ModulesNavbar />
      <ProfilePage />
    </div>
  );
};

export default withAuth(Profile);
