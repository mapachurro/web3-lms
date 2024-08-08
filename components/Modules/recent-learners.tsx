import Image from "next/image";
import Link from "next/link";
import React from "react";

const activityItems = [
  {
    user: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    projectName: "Introduction: Meet Base",
    points: "10",
  },
  {
    user: {
      name: "Lindsay Walton",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    projectName: "Introduction: Meet Base",
    points: "10",
  },
  {
    user: {
      name: "Courtney Henry",
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    projectName: "Introduction: Meet Base",
    points: "10",
  },
  {
    user: {
      name: "Courtney Henry",
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    projectName: "Introduction: Meet Base",
    points: "10",
  },
  {
    user: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    projectName: "Introduction: Meet Base",
    points: "10",
  },
];

const RecentLearners = () => {
  const duplicatedItems = [...activityItems, ...activityItems];

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
                <img
                  src={item.user.imageUrl}
                  alt=""
                  className="h-6 w-6 flex-none rounded-full bg-gray-800"
                />
                <h3 className="flex-auto truncate text-base leading-6 text-white">
                  {item.user.name}
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
                  {item.points} Shells
                </p>
              </div>
              <p className="mt-2 truncate text-sm text-gray-500">
                Started with{" "}
                <span className="text-gray-400">{item.projectName}</span>
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
