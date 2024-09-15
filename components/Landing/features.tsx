"use client";

import Image from "next/image";

const Features = () => {
  return (
    <section className="text-white py-24 px-16 max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-cg-bold text-center mb-12 max-w-md mx-auto">
          Making onchain feel less esoteric, simpler and fun
        </h2>
        <div className="flex flex-col gap-y-8">
          {/* 1st row  */}
          <div className="grid grid-cols-3 lg:gird-cols-1 gap-8">
            <div
              className="border border-[#303640] rounded-lg flex flex-col overflow-hidden"
              style={{
                background: "linear-gradient(180deg, #1B1E23 0%, #12161C 100%)",
              }}
            >
              <div className="pt-2 px-6 mt-4">
                <h3 className="text-xl font-semibold mb-2">
                  Ride the Wave of Knowledge
                </h3>
                <p className="text-gray-400 font-cg-light text-md flex-grow">
                  Interactive modules and quests tailored to your level and
                  skills. No matter where you are in your crypto voyage, there's
                  always new horizons to explore.
                </p>
              </div>
              <div className="">
                <Image
                  src="/images/feature_1.png"
                  alt="Example questions"
                  className="w-full scale-110 mb-1"
                  width={100}
                  height={100}
                  unoptimized
                />
              </div>
            </div>
            <div
              className="col-span-2 border border-[#303640] rounded-lg flex flex-col"
              style={{
                background: "linear-gradient(180deg, #1B1E23 0%, #12161C 100%)",
              }}
            >
              <div className="pt-6 pb-6 px-6">
                <h3 className="text-xl font-semibold mb-2">
                  Earn While You Learn
                </h3>
                <p className="text-gray-400 font-cg-light text-md flex-grow">
                  Earn $SHELLS, our virtual platform token, and collect NFT
                  badges as you progress. Use them for exclusive perks and
                  opportunities later in the Base ecosystem.
                </p>
              </div>

              <div className="flex flex-col justify-center relative space-y-2 max-w-xs">
                <div className="w-full absolute -top-2 left-20 bg-[#1E2226] border border-gray-800 rounded-lg p-3 flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#36373B] rounded-full flex items-center justify-center"></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-white">
                        Dan
                      </span>
                      <span className="flex gap-1 items-center text-sm text-gray-200">
                        <Image
                          src="/images/shell.png"
                          alt="shell"
                          width={100}
                          height={100}
                          className="h-4 w-4"
                          unoptimized
                        />
                        30 Shells
                      </span>
                    </div>
                    <p className="text-xs text-gray-400">Surf Master</p>
                  </div>
                </div>

                <div className="w-full absolute left-64 top-6 bg-[#1E2226] border border-gray-800 rounded-lg p-3 flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#1c1c1c] rounded-md flex items-center justify-center">
                    <Image
                      src="/images/shrutz.png"
                      alt="Shrutz"
                      width={100}
                      height={100}
                      className="rounded-full object-fit scale-110"
                      unoptimized
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-white">
                        Shrutz
                      </span>
                      <span className="flex gap-1 items-center text-sm text-gray-200">
                        <Image
                          src="/images/shell.png"
                          alt="shell"
                          width={100}
                          height={100}
                          className="h-4 w-4"
                          unoptimized
                        />
                        10 Shells
                      </span>
                    </div>
                    <p className="text-xs text-gray-400">Wanderer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 2nd row  */}
          <div className="grid grid-cols-3 lg:gird-cols-1 gap-8">
            <div
              className="col-span-2 border border-[#303640] rounded-lg flex flex-col"
              style={{
                background: "linear-gradient(180deg, #1B1E23 0%, #12161C 100%)",
              }}
            >
              <div className="pt-8 pb-6 px-6">
                <h3 className="text-xl font-semibold mb-2">
                  Navigate with Ease
                </h3>
                <p className="text-gray-400 font-cg-light text-md flex-grow">
                  Explore an interactive map of the Base ecosystem. Discover new
                  projects, protocols, and opportunities as you sail through
                  your learning adventure. You're always early when you're with
                  Basics.
                </p>
              </div>
            </div>
            <div
              className="border border-[#303640] rounded-lg flex flex-col"
              style={{
                background: "linear-gradient(180deg, #1B1E23 0%, #12161C 100%)",
              }}
            >
              <div className="h-48 mt-4 mb-2 relative">
                <Image
                  src="/images/feature_4.png"
                  alt="feature 4"
                  layout="fill"
                  objectFit="cover"
                  unoptimized
                />
              </div>
              <div className="pt-2 pb-6 px-6">
                <h3 className="text-xl font-semibold mb-2">Knowledge Score</h3>
                <p className="text-gray-400 font-cg-light text-md flex-grow">
                  Level up your knowledge and build your onchain reputation.
                  Watch your Knowledge Score rise as you master new skills and
                  concepts.
                </p>
              </div>
            </div>
          </div>
          {/* 3rd row  */}
          <div className="grid grid-cols-3 lg:gird-cols-1 gap-8">
            <div
              className="border border-[#303640] rounded-lg flex flex-col"
              style={{
                background: "linear-gradient(180deg, #1B1E23 0%, #12161C 100%)",
              }}
            >
              <div className="h-48 mb-4 relative">
                <Image
                  src="/images/feature_6.png"
                  alt="feature 6"
                  width={100}
                  height={100}
                  className="w-full scale-125 mx-auto"
                  unoptimized
                />
              </div>
              <div className="pt-2 pb-6 px-6">
                <h3 className="text-xl font-semibold mb-2">Join the Crew</h3>
                <p className="text-gray-400 font-cg-light text-md flex-grow">
                  Race to the top of our Leaderboard Pier, invite friends to
                  boost your rewards, and build your network.
                </p>
              </div>
            </div>
            <div
              className="col-span-2 border border-[#303640] rounded-lg flex flex-col"
              style={{
                background: "linear-gradient(180deg, #1B1E23 0%, #12161C 100%)",
              }}
            >
              <div className="pt-8 pb-6 px-6">
                <h3 className="text-xl font-semibold mb-2">
                  Beach Shack Profile
                </h3>
                <p className="text-gray-400 font-cg-light text-md flex-grow">
                  Create your unique Beach Shack profile with a public URL.
                  Showcase your achievements, badges, and expertise to the
                  world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
