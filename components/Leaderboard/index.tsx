import Image from "next/image";
import React from "react";

const tabs = [
  { name: "Last week", href: "#", current: true },
  { name: "All time", href: "#", current: false },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const activityItems = [
  {
    rank: "1",
    user: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    points: "10",
    streak: "28",
  },
  {
    rank: "2",
    user: {
      name: "Lindsay Walton",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    points: "10",
    streak: "28",
  },
  {
    rank: "3",
    user: {
      name: "Courtney Henry",
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    points: "10",
    streak: "28",
  },
  {
    rank: "4",
    user: {
      name: "Courtney Henry",
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    points: "10",
    streak: "28",
  },
  {
    rank: "5",
    user: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    points: "10",
    streak: "28",
  },
  {
    rank: "6",
    user: {
      name: "Courtney Henry",
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    points: "10",
    streak: "28",
  },
  {
    rank: "7",
    user: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    points: "10",
    streak: "28",
  },
  {
    rank: "8",
    user: {
      name: "Whitney Francis",
      imageUrl:
        "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    points: "10",
    streak: "28",
  },
];

const Leaderboard = () => {
  return (
    <>
      <div className="py-24 px-10">
        <h1 className="text-2xl text-gray-100 font-cg-regular">Leaderboard</h1>
        <p className="text-md text-gray-400">
          Compete with friends to top the charts
        </p>
        <div className="mt-6">
          <div className="hidden sm:block">
            <label htmlFor="tabs" className="sr-only">
              Select a tab
            </label>
            {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
            <select
              id="tabs"
              name="tabs"
              className="block w-full rounded-full border-gray-300"
              // defaultValue={tabs.find((tab) => tab.current).name}
            >
              {tabs.map((tab) => (
                <option key={tab.name}>{tab.name}</option>
              ))}
            </select>
          </div>
          <div className="block sm:hidden">
            <nav className="flex space-x-4" aria-label="Tabs">
              {tabs.map((tab) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  className={classNames(
                    tab.current
                      ? "text-[#90afee] bg-[#10336D]"
                      : "text-gray-200 hover:text-gray-300",
                    "rounded-full px-3 py-1 text-sm"
                  )}
                  aria-current={tab.current ? "page" : undefined}
                >
                  {tab.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
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
            {activityItems.map((item) => (
              <tr key={item.rank}>
                <td className="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
                  {" "}
                  <p className="text-gray-100">#{item.rank}</p>
                </td>
                <td className="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
                  <div className="flex items-center gap-x-4">
                    <Image
                      src={item.user.imageUrl}
                      alt=""
                      width={100}
                      height={100}
                      className="h-8 w-8 rounded-full bg-gray-800"
                    />
                    <div className="truncate text-sm font-medium leading-6 text-white">
                      {item.user.name}
                    </div>
                  </div>
                </td>
                <td className="py-4 pr-8 text-gray-300">
                  <div className="flex items-center">
                    <Image
                      src="/images/gm_fire.png"
                      alt="gm"
                      width={100}
                      height={100}
                      unoptimized
                      className="w-5 h-5"
                    />
                    {item.streak}
                  </div>
                </td>
                <td className="py-4 pl-4 pr-8 text-gray-300">
                  <div className="flex items-center">
                    <Image
                      src="/images/shell.png"
                      alt="shell"
                      width={100}
                      height={100}
                      className="h-4 w-4"
                      unoptimized
                    />{" "}
                    &nbsp;{item.points} Shells
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
