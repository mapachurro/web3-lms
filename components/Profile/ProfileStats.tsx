import React from "react";
import { UnifiedProfile } from "@/types/profile";
import { User } from "@/types/user";

interface ProfileStatsProps {
  unifiedProfile: UnifiedProfile | null;
  userData: User | null;
  userRole: string;
  combinedScore: number | null;
}

const ProfileStats: React.FC<ProfileStatsProps> = ({
  unifiedProfile,
  userData,
  userRole,
  combinedScore,
}) => {
  return (
    <div className="w-full text-gray-200 grid grid-cols-4 lg:grid-cols-2 md:grid-cols-1 gap-4">
      <div className="flex gap-3 items-center border border-gray-700 rounded-2xl p-2 md:w-full hover:shadow-sm hover:shadow-gray-600">
        <div className="p-4 bg-black rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#0055FF"
            aria-hidden="true"
            data-slot="icon"
            className="h-[20px] w-[20px]"
          >
            <path d="M11.983 1.907a.75.75 0 0 0-1.292-.657l-8.5 9.5A.75.75 0 0 0 2.75 12h6.572l-1.305 6.093a.75.75 0 0 0 1.292.657l8.5-9.5A.75.75 0 0 0 17.25 8h-6.572l1.305-6.093Z"></path>
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-400">Streak</span>
          <p className="text-lg">
            {userData?.streakCount ? userData?.streakCount : "0"} days
          </p>
        </div>
      </div>
      <div className="flex gap-2 items-center border border-gray-700 rounded-2xl p-2 md:w-full hover:shadow-sm hover:shadow-gray-600">
        <div className="p-4 bg-black rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#0055FF"
            aria-hidden="true"
            data-slot="icon"
            className="h-[20px] w-[20px]"
          >
            <path d="M11.983 1.907a.75.75 0 0 0-1.292-.657l-8.5 9.5A.75.75 0 0 0 2.75 12h6.572l-1.305 6.093a.75.75 0 0 0 1.292.657l8.5-9.5A.75.75 0 0 0 17.25 8h-6.572l1.305-6.093Z"></path>
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-400">Modules Completed</span>
          <p className="text-lg">0</p>
        </div>
      </div>
      <div className="flex gap-3 items-center border border-gray-700 rounded-2xl p-2 md:w-full hover:shadow-sm hover:shadow-gray-600">
        <div className="p-4 bg-black rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#0055FF"
            aria-hidden="true"
            data-slot="icon"
            className="h-[20px] w-[20px]"
          >
            <path d="M11.983 1.907a.75.75 0 0 0-1.292-.657l-8.5 9.5A.75.75 0 0 0 2.75 12h6.572l-1.305 6.093a.75.75 0 0 0 1.292.657l8.5-9.5A.75.75 0 0 0 17.25 8h-6.572l1.305-6.093Z"></path>
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-400">User Level</span>
          <span className="text-lg">{userRole}</span>
        </div>
      </div>
      <div className="flex gap-3 items-center border border-gray-700 rounded-2xl p-2 md:w-full hover:shadow-sm hover:shadow-gray-600">
        <div className="p-4 bg-black rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#0055FF"
            aria-hidden="true"
            data-slot="icon"
            className="h-[20px] w-[20px]"
          >
            <path d="M11.983 1.907a.75.75 0 0 0-1.292-.657l-8.5 9.5A.75.75 0 0 0 2.75 12h6.572l-1.305 6.093a.75.75 0 0 0 1.292.657l8.5-9.5A.75.75 0 0 0 17.25 8h-6.572l1.305-6.093Z"></path>
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-400">Knowledge Score</span>
          {combinedScore !== null ? Math.round(combinedScore) : "N/A"}
        </div>
      </div>
    </div>
  );
};

export default ProfileStats;
