"use client";

import { usePrivy } from "@privy-io/react-auth";
import React, { useEffect, useState } from "react";
import Loading from "@/components/UI/Loading";
import { fetchUserData } from "@/utils/fetchUser";
import EditProfileDialog from "./EditProfile";
import { fetchTalentData } from "@/utils/fetchTalentData";
import { TalentData, UnifiedProfile } from "@/types/profile";
import { PartialUserData, User } from "@/types/user";
import { formatDate } from "@/utils/formatDate";
import ProfileHeader from "./ProfileHeader";
import SocialLinks from "./SocialLinks";
import ProfileBio from "./ProfileBio";
import ProfileStats from "./ProfileStats";
import { determineUserRole } from "@/utils/userRole";
import Badges from "./Badges";
import { useGetPrimaryENS } from "@airstack/airstack-react";
import OutlineButton from "@/components/UI/Button/OutlineButton";

const ProfilePage = () => {
  const { user } = usePrivy();
  const [userRole, setUserRole] = useState<string>("Wanderer");
  const [combinedScore, setCombinedScore] = useState<number | null>(null);
  const [talentData, setTalentData] = useState<TalentData | null>(null);
  const [userData, setUserData] = useState<User | null>(null);
  const [unifiedProfile, setUnifiedProfile] = useState<UnifiedProfile>({
    id: "",
    name: "",
    displayName: "",
    bio: "",
    avatar: "",
    score: 0,
    credibilityScore: 0,
    nominationsReceivedCount: 0,
    socials: {},
    passportSocials: [],
  });
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [error, setError] = useState("");
  const fullAddress = user?.wallet?.address;

  const { data: ensData, loading: ensLoading } = useGetPrimaryENS({
    identity: fullAddress || "",
    blockchain: "ethereum",
  });

  console.log("Primary ENS data:", ensData);

  useEffect(() => {
    const fetchData = async () => {
      if (!fullAddress) {
        throw new Error("Wallet address is not provided");
      }

      try {
        let talentDataResponse: TalentData | null = null;
        let userDataResponse: User | null = null;

        // Fetch talent data
        try {
          const response = await fetchTalentData(fullAddress);
          console.log("Full talent data response:", response);
          if (response && response.passport) {
            talentDataResponse = response.passport;
            console.log("Setting talent data:", talentDataResponse);
            setTalentData(talentDataResponse);
          } else {
            console.log("No passport data in talent response");
          }
        } catch (talentError) {
          console.error("Error fetching talent data:", talentError);
        }

        // Fetch user data
        try {
          userDataResponse = await fetchUserData(user?.id);
        } catch (userError) {
          console.error("Error fetching user data:", userError);
          setError("Failed to fetch user data");
          return;
        }

        if (userDataResponse) {
          setUserData(userDataResponse);
          setUserRole(determineUserRole(userDataResponse.category));

          const talentScore = talentDataResponse?.score ?? null;
          const finalCombinedScore =
            talentScore !== null
              ? userDataResponse.knowledgeScore * 0.6 + talentScore * 0.4
              : userDataResponse.knowledgeScore;

          setCombinedScore(finalCombinedScore);

          // Get ENS name if available
          let ensName = "";
          if (ensData && !ensLoading) {
            ensName = ensData.Wallet?.primaryDomain?.name || "";
          }

          console.log(`ens name for ${fullAddress}:`, ensName);

          // Update unified profile
          setUnifiedProfile({
            id: userDataResponse.id,
            name: ensName || userDataResponse.name || "",
            displayName: userDataResponse.name || "",
            bio: userDataResponse.bio || "",
            avatar: userDataResponse.avatar || "",
            score: userDataResponse.knowledgeScore || 0,
            credibilityScore: 0,
            nominationsReceivedCount: 0,
            socials: userDataResponse.socials || {},
            passportSocials: [],
          });

          // If talent data is available, update the unified profile with it
          if (talentDataResponse) {
            setUnifiedProfile((prevProfile) => ({
              ...prevProfile,
              displayName:
                talentDataResponse?.passport_profile?.display_name ||
                prevProfile.displayName,
              bio: talentDataResponse?.passport_profile?.bio || prevProfile.bio,
              avatar:
                talentDataResponse?.passport_profile?.image_url ||
                prevProfile.avatar,
              score: talentDataResponse?.score || prevProfile.score,
              credibilityScore:
                talentDataResponse?.credibility_score ||
                prevProfile.credibilityScore,
              nominationsReceivedCount:
                talentDataResponse?.nominations_received_count ||
                prevProfile.nominationsReceivedCount,
              passportSocials:
                talentDataResponse?.passport_socials ||
                prevProfile.passportSocials,
            }));
          }

          // Only post talent data if it's available
          if (talentDataResponse) {
            await fetch("/api/postTalentData", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                userId: user?.id,
                talentData: talentDataResponse,
              }),
            });
          }
        } else {
          setError("No user data found");
        }
      } catch (err) {
        console.error("Error in data fetching process:", err);
        setError("An unexpected error occurred");
      }
    };

    fetchData();
  }, [fullAddress, user?.id, ensData, ensLoading]);

  console.log("talentdata: ", talentData);
  console.log("userRole: ", userRole);
  console.log("combinedScore: ", combinedScore);

  if (error) return <div>Error: {error}</div>;
  if (!user || !unifiedProfile) return <Loading />;

  return (
    <div className="relative grid grid-cols-3 w-full py-24 px-10 gap-10 xl:grid-cols-2">
      {/* left container  */}
      <div className="relative py-6 rounded-2xl col-span-1 lg:col-span-2">
        <div className="flex gap-4 md:flex-col md:justify-start">
          <ProfileHeader
            unifiedProfile={unifiedProfile}
            ensLoading={ensLoading}
            combinedScore={combinedScore}
            fullAddress={fullAddress || ""}
          />
          <div className="justify-self-end md:justify-self-start ml-10 md:ml-0">
            <OutlineButton
              onClick={() => setIsEditDialogOpen(true)}
              additionalStyles="text-sm text-gray-200 border border-gray-700 hover:shadow-sm hover:shadow-gray-600 px-4 py-1 font-polysans"
            >
              Edit profile
            </OutlineButton>
          </div>
        </div>
        {unifiedProfile && (
          <>
            <ProfileBio unifiedProfile={unifiedProfile} />
            <SocialLinks unifiedProfile={unifiedProfile} />
          </>
        )}
        <p className="text-md mt-6">
          <span className="text-gray-200">🌊 &nbsp;Riding the waves since</span>{" "}
          <span className="text-gray-400"> {formatDate(user?.createdAt)}</span>
        </p>
        {userData && (
          <EditProfileDialog
            isOpen={isEditDialogOpen}
            onClose={() => setIsEditDialogOpen(false)}
            userData={userData}
            onUpdate={(updatedData: PartialUserData) => {
              setUserData((prev) =>
                prev ? { ...prev, ...updatedData } : null
              );
              setUnifiedProfile((prev) => ({ ...prev, ...updatedData }));
            }}
          />
        )}
      </div>
      {/* right container  */}
      <div className="col-span-2">
        <ProfileStats
          unifiedProfile={unifiedProfile}
          userData={userData}
          userRole={userRole}
          combinedScore={combinedScore}
        />
        <Badges fullAddress={fullAddress as string} />
      </div>
    </div>
  );
};

export default ProfilePage;
