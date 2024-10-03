import React from "react";
import { UnifiedProfile } from "@/types/profile";

interface ProfileBioProps {
  unifiedProfile: UnifiedProfile;
}

const ProfileBio: React.FC<ProfileBioProps> = ({ unifiedProfile }) => {
  console.log("unified profile: ", unifiedProfile);

  return (
    <p className="mt-4 text-gray-300">
      {unifiedProfile?.bio || "No bio available"}
    </p>
  );
};

export default ProfileBio;
