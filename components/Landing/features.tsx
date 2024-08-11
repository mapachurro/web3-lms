"use client";

import Image from "next/image";

const Features = () => {
  return (
    <section className="text-white py-16 px-16 max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-cg-bold text-center mb-12">
          What we provide
        </h2>
        <div className="flex flex-col gap-y-8">
          {/* 1st row  */}
          <div className="grid grid-cols-3 lg:gird-cols-1 gap-8">
            <div
              className="border border-[#303640] rounded-lg flex flex-col"
              style={{
                background: "linear-gradient(180deg, #1B1E23 0%, #12161C 100%)",
              }}
            >
              <div className="h-48 mb-4 relative">
                <Image
                  src="/images/feature_1.png"
                  alt="feature 1"
                  layout="fill"
                  objectFit="cover"
                  unoptimized
                />
              </div>
              <div className="pt-2 pb-6 px-6">
                <h3 className="text-xl font-semibold mb-2">
                  Ride the Wave of Knowledge
                </h3>
                <p className="text-gray-400 text-sm flex-grow">
                  Interactive lessons tailored to your level, from beginner to
                  expert. Dive into engaging crypto content and hands-on
                  simulations.
                </p>
              </div>
            </div>
            <div
              className="col-span-2 border border-[#303640] rounded-lg flex flex-col"
              style={{
                background: "linear-gradient(180deg, #1B1E23 0%, #12161C 100%)",
              }}
            >
              <div className="h-48 mb-4 relative">
                <Image
                  src="/images/feature_2.png"
                  alt="feature 2"
                  unoptimized
                  width={100}
                  height={100}
                  className="w-[64%] mx-auto"
                />
              </div>
              <div className="pt-2 pb-6 px-6">
                <h3 className="text-xl font-semibold mb-2">
                  Earn While You Learn
                </h3>
                <p className="text-gray-400 text-sm flex-grow">
                  Complete modules and challenges to earn Shells, our
                  in-platform reward token. Use them for exclusive perks and
                  opportunities later.
                </p>
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
              <div className="h-48 mb-4 relative">
                <Image
                  src="/images/feature_3.png"
                  alt="feature 3"
                  width={100}
                  height={100}
                  className="w-[64%] mx-auto"
                  unoptimized
                />
              </div>
              <div className="pt-2 pb-6 px-6">
                <h3 className="text-xl font-semibold mb-2">
                  Climb the Ranks & Track Your Progress
                </h3>
                <p className="text-gray-400 text-sm flex-grow">
                  Start as a Beach Wanderer and work your way up to Surf Master.
                  Your personalized Beach Shack profile showcases your journey,
                  achievements, and stats.
                </p>
              </div>
            </div>
            <div
              className="border border-[#303640] rounded-lg flex flex-col"
              style={{
                background: "linear-gradient(180deg, #1B1E23 0%, #12161C 100%)",
              }}
            >
              <div className="h-48 mb-4 relative">
                <Image
                  src="/images/feature_4.png"
                  alt="feature 4"
                  layout="fill"
                  objectFit="cover"
                  unoptimized
                />
              </div>
              <div className="pt-2 pb-6 px-6">
                <h3 className="text-xl font-semibold mb-2">
                  Compete, Collaborate, and Form Your Crew
                </h3>
                <p className="text-gray-400 text-sm flex-grow">
                  Race to the top of our Leaderboard Pier and invite friends to
                  boost your rewards. Build your network of fellow crypto
                  enthusiast
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
                  src="/images/feature_5.png"
                  alt="feature 5"
                  layout="fill"
                  objectFit="cover"
                  unoptimized
                />
              </div>
              <div className="pt-2 pb-6 px-6">
                <h3 className="text-xl font-semibold mb-2">Gamified Mastery</h3>
                <p className="text-gray-400 text-sm flex-grow">
                  Unlock achievements, earn NFT badges, and showcase your crypto
                  expertise. Complete quests for bigger rewards and bragging
                  rights.
                </p>
              </div>
            </div>
            <div
              className="col-span-2 border border-[#303640] rounded-lg flex flex-col"
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
                  className="w-[64%] mx-auto"
                  unoptimized
                />
              </div>
              <div className="pt-2 pb-6 px-6">
                <h3 className="text-xl font-semibold mb-2">
                  Daily Challenges & Streaks
                </h3>
                <p className="text-gray-400 text-sm flex-grow">
                  Join the Dawn Patrol for daily micro-learning sessions. Keep
                  your streak alive to multiply your rewards and unlock special
                  bonuses.
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
