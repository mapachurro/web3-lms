import Image from "next/image";
import React, { useEffect, useState } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { User } from "@/types/user";

const tabs = [
  { name: "Last week", value: "week" },
  { name: "All time", value: "all" },
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

const Leaderboard: React.FC = () => {
  const [leaderboard, setLeaderboard] = useState<User[]>([]);
  const [userRanking, setUserRanking] = useState<{
    rank: number;
    user: User;
  } | null>(null);
  const [selectedTab, setSelectedTab] = useState<string>("week");
  const { user, authenticated } = usePrivy();

  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        const leaderboardResponse = await fetch(
          `/api/leaderboard?period=${selectedTab}`
        );
        if (!leaderboardResponse.ok) {
          throw new Error("Failed to fetch leaderboard data");
        }
        const leaderboardData: User[] = await leaderboardResponse.json();

        // Filter out users with no shells and no streak
        const filteredLeaderboard = leaderboardData.filter(
          (user) => user.shells > 0 || user.streakCount > 0
        );
        setLeaderboard(filteredLeaderboard);

        if (authenticated && user?.id) {
          const userRankingResponse = await fetch(
            `/api/userRanking?userId=${user.id}&period=${selectedTab}`
          );
          if (userRankingResponse.ok) {
            const userRankingData = await userRankingResponse.json();
            setUserRanking(userRankingData);
          }
        } else {
          setUserRanking(null);
        }
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
      }
    };

    fetchLeaderboardData();
  }, [selectedTab, authenticated, user]);

  return (
    <>
      <div className="py-24 px-10">
        <h1 className="text-2xl text-gray-100 font-cg-regular">Leaderboard</h1>
        <p className="text-md text-gray-400">
          Compete with friends to top the charts
        </p>
        <div className="mt-6">
          <div className="hidden sm:bloxk">
            <label htmlFor="tabs" className="sr-only">
              Select a tab
            </label>
            <select
              id="tabs"
              name="tabs"
              className="block w-full rounded-full border-gray-300"
              value={selectedTab}
              onChange={(e) => setSelectedTab(e.target.value)}
            >
              {tabs.map((tab) => (
                <option key={tab.value} value={tab.value}>
                  {tab.name}
                </option>
              ))}
            </select>
          </div>
          <div className="block sm:hidden">
            <nav className="flex space-x-4" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setSelectedTab(tab.value)}
                  className={classNames(
                    tab.value === selectedTab
                      ? "text-[#90afee] bg-[#10336D]"
                      : "text-gray-200 hover:text-gray-300",
                    "rounded-full px-3 py-1 text-sm"
                  )}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
        {userRanking && (
          <div className="mt-6">
            <h2 className="text-lg text-white mb-2">Your Ranking</h2>
            <table className="w-full whitespace-nowrap text-left">
              <colgroup>
                <col className="w-1/12" />
                <col className="w-full sm:w-4/12" />
                <col className="lg:w-2/12" />
                <col className="lg:w-1/12" />
                <col className="lg:w-1/12" />
              </colgroup>
              <thead className="border-b border-white/10 text-md leading-6 text-white">
                <tr>
                  <th
                    scope="col"
                    className="py-2 pl-4 pr-8 font-cg-regular sm:pl-6 lg:pl-8"
                  >
                    Rank
                  </th>
                  <th
                    scope="col"
                    className="py-2 pl-4 pr-8 font-cg-regular sm:pl-6 lg:pl-8"
                  >
                    User
                  </th>
                  <th
                    scope="col"
                    className="py-2 pl-0 pr-8 text-center font-cg-regular sm:pr-8 sm:text-left lg:pr-20"
                  >
                    Knowledge Score
                  </th>
                  <th
                    scope="col"
                    className="py-2 pl-0 pr-4 text-center font-cg-regular sm:pr-8 sm:text-left lg:pr-20"
                  >
                    Streak
                  </th>
                  <th
                    scope="col"
                    className="py-2 pl-0 pr-4 text-center font-cg-regular sm:pr-8 sm:text-left lg:pr-20"
                  >
                    Shells
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
                    <p className="text-gray-100">#{userRanking.rank}</p>
                  </td>
                  <td className="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
                    <div className="flex items-center gap-x-4">
                      {userRanking.user.avatar ? (
                        <Image
                          src={userRanking.user.avatar}
                          alt=""
                          width={32}
                          height={32}
                          className="h-8 w-8 rounded-full"
                        />
                      ) : (
                        <div className="h-8 w-8 rounded-full bg-blue-500"></div>
                      )}
                      <div className="truncate text-sm font-medium leading-6 text-white">
                        {userRanking.user.name
                          ? userRanking.user.name
                          : userRanking.user.wallet
                          ? userRanking.user?.wallet?.address
                          : ""}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 pl-0 pr-8 text-gray-300">
                    <div className="flex items-center justify-center sm:justify-start">
                      {Math.round(userRanking.user.knowledgeScore)}
                    </div>
                  </td>
                  <td className="py-4 pr-8 text-gray-300">
                    <div className="flex items-center justify-center sm:justify-start">
                      <Image
                        src="/images/gm_fire.png"
                        alt="gm"
                        width={20}
                        height={20}
                        unoptimized
                        className="w-5 h-5 mr-2"
                      />
                      {userRanking.user.streakCount}
                    </div>
                  </td>
                  <td className="py-4 pl-4 pr-8 text-gray-300">
                    <div className="flex items-center justify-center sm:justify-start">
                      <Image
                        src="/images/shell.png"
                        alt="shell"
                        width={16}
                        height={16}
                        className="h-4 w-4 mr-2"
                        unoptimized
                      />
                      {userRanking.user.shells}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        <table className="mt-6 w-full whitespace-nowrap text-left">
          <colgroup>
            <col className="w-1/12" />
            <col className="w-full sm:w-4/12" />
            <col className="lg:w-2/12" />
            <col className="lg:w-1/12" />
            <col className="lg:w-1/12" />
          </colgroup>
          <thead className="border-b border-white/10 text-md leading-6 text-white">
            <tr>
              <th
                scope="col"
                className="py-2 pl-4 pr-8 font-cg-regular sm:pl-6 lg:pl-8"
              >
                Rank
              </th>
              <th
                scope="col"
                className="py-2 pl-4 pr-8 font-cg-regular sm:pl-6 lg:pl-8"
              >
                User
              </th>
              <th
                scope="col"
                className="py-2 pl-0 pr-8 text-center font-cg-regular sm:pr-8 sm:text-left lg:pr-20"
              >
                Knowledge Score
              </th>
              <th
                scope="col"
                className="py-2 pl-0 pr-4 text-center font-cg-regular sm:pr-8 sm:text-left lg:pr-20"
              >
                Streak
              </th>
              <th
                scope="col"
                className="py-2 pl-0 pr-4 text-center font-cg-regular sm:pr-8 sm:text-left lg:pr-20"
              >
                Shells
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {leaderboard.map((item, index) => (
              <tr key={item.id}>
                <td className="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
                  <p className="text-gray-100">#{index + 1}</p>
                </td>
                <td className="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
                  <div className="flex items-center gap-x-4">
                    {item.avatar ? (
                      <Image
                        src={item.avatar}
                        alt=""
                        width={32}
                        height={32}
                        className="h-8 w-8 rounded-full"
                        unoptimized
                      />
                    ) : (
                      <div className="h-8 w-8 rounded-full bg-blue-500"></div>
                    )}
                    <div className="truncate text-sm font-medium leading-6 text-white">
                      {item.name
                        ? item.name
                        : item.wallet
                        ? item?.wallet?.address
                        : ""}
                    </div>
                  </div>
                </td>
                <td className="py-4 pl-10 pr-8 text-gray-300">
                  <div className="flex items-center">
                    {Math.round(item.knowledgeScore)}
                  </div>
                </td>
                <td className="py-4 pr-8 text-gray-300">
                  <div className="flex items-center">
                    <Image
                      src="/images/gm_fire.png"
                      alt="gm"
                      width={20}
                      height={20}
                      unoptimized
                      className="w-5 h-5 mr-2"
                    />
                    {item.streakCount}
                  </div>
                </td>
                <td className="py-4 pl-4 pr-8 text-gray-300">
                  <div className="flex items-center">
                    <Image
                      src="/images/shell.png"
                      alt="shell"
                      width={16}
                      height={16}
                      className="h-4 w-4 mr-2"
                      unoptimized
                    />
                    {item.shells}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Leaderboard;
