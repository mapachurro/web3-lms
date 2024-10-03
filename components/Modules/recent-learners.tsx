import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { User } from "@/types/user";
import { determineUserRole } from "@/utils/userRole";

const RecentLearners: React.FC = () => {
  const [recentLearners, setRecentLearners] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecentLearners = async () => {
      try {
        const response = await fetch("/api/recentLearners");
        if (!response.ok) {
          throw new Error("Failed to fetch recent learners");
        }
        const data: User[] = await response.json();
        setRecentLearners(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching recent learners:", error);
        setError("Failed to load recent learners. Please try again later.");
        setIsLoading(false);
      }
    };

    fetchRecentLearners();
  }, []);

  const duplicatedItems = [...recentLearners, ...recentLearners];

  if (isLoading) {
    return <div>Loading recent learners...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="w-96 md:w-full mt-8 relative">
      <h1 className="flex items-center gap-4 justify-between">
        <span className="text-md text-gray-400 uppercase">
          Recent Learners{" "}
        </span>
        <Link
          href="/leaderboard"
          className="text-blue-600 text-sm uppercase font-bold"
        >
          Leaderboard &rarr;
        </Link>
      </h1>
      <div className="mt-4 marquee-container relative">
        <ul role="list" className="divide-y divide-white/5 marquee-content">
          {duplicatedItems.map((item, index) => (
            <li key={index} className="py-4">
              <div className="flex items-center gap-x-3">
                {item.avatar ? (
                  <div className="w-8 h-8 rounded-full">
                    <Image
                      src={item.avatar}
                      alt=""
                      width={32}
                      height={32}
                      className="w-full rounded-full object-cover"
                      unoptimized
                    />
                  </div>
                ) : (
                  <div className="h-8 w-8 rounded-full bg-blue-500"></div>
                )}
                <h3 className="flex-auto truncate text-base leading-6 text-white">
                  {item.name ? item.name : "User"}
                </h3>
                <p className="flex gap-2 items-center text-sm text-gray-50">
                  <Image
                    src="/images/gray-shell.png"
                    alt="shell"
                    width={100}
                    height={100}
                    className="h-4 w-4"
                    unoptimized
                  />
                  {item.shells} Shells
                </p>
              </div>
              <p className="mt-2 truncate text-sm text-gray-500">
                User Level:&nbsp;
                <span className="text-gray-400">
                  {determineUserRole(item.category)}
                </span>
              </p>
            </li>
          ))}
        </ul>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0C0F14] via-[rgba(12,15,20,0.8)] to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default RecentLearners;
