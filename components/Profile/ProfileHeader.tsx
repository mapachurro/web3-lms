import React, { useState } from "react";
import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import truncateAddress from "@/utils/truncateAddress";
import { UnifiedProfile } from "@/types/profile";
import { copyToClipboard } from "@/utils/clipboard";

interface ProfileHeaderProps {
  unifiedProfile: UnifiedProfile | null;
  ensLoading: boolean;
  combinedScore: number | null;
  fullAddress: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  unifiedProfile,
  ensLoading,
  combinedScore,
  fullAddress,
}) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const truncatedAddress = truncateAddress(fullAddress);

  const handleCopyAddress = async () => {
    const success = await copyToClipboard(fullAddress!);
    if (success) {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  if (!unifiedProfile) return null;

  return (
    <>
      <div className="relative w-20 h-20">
        {unifiedProfile?.avatar ? (
          <img
            src={unifiedProfile.avatar}
            alt="avatar"
            className="w-full h-full rounded-full object-cover border-4 border-gray-800"
          />
        ) : (
          <div className="w-full h-full bg-black text-transparent rounded-full border-4 border-gray-800"></div>
        )}
        <div className="absolute bottom-0 left-0 bg-gray-900 border border-gray-700 rounded-2xl w-8 h-8 flex items-center justify-center">
          <span className="text-white text-xs font-polysans">
            {combinedScore !== null ? Math.round(combinedScore) : "N/A"}
          </span>
        </div>
      </div>
      <div className="flex flex-col items-start">
        <p className="text-xl text-gray-200 mt-2">
          {ensLoading ? <span>User</span> : unifiedProfile.name || "User"}
        </p>
        <div>
          <p className="text-sm flex justify-center gap-2 text-gray-400 mt-1">
            {truncatedAddress}{" "}
            <DocumentDuplicateIcon
              className="w-5 h-5 text-gray-400 cursor-pointer hover:text-primary"
              onClick={handleCopyAddress}
            />
          </p>
          {isCopied && <p className="ml-2 text-sm text-blue-200">Copied!</p>}
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;
