"use client";

import Image from "next/image";

interface LogoProps {
  src: string;
  alt: string;
  name: string;
  gridArea: string;
  highlight?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  src,
  alt,
  name,
  gridArea,
  highlight = false,
}) => (
  <div className={`relative group ${gridArea}`}>
    <div
      className={`rounded-xl ${
        highlight ? "bg-white" : "bg-gray-800"
      } p-2 shadow-lg transition-all duration-300 group-hover:scale-105 h-full flex items-center justify-center`}
    >
      <Image
        src={src}
        alt={alt}
        width={40}
        height={40}
        className="w-8 h-8 rounded-full"
        unoptimized
      />
    </div>
    <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 bg-gray-800 px-2 py-1 rounded text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
      {name}
    </div>
  </div>
);

const Features = () => {
  const logos: LogoProps[] = [
    {
      src: "/images/fc.svg",
      alt: "Farcaster",
      name: "Farcaster",
      gridArea: "col-start-4 row-start-4",
    },
    {
      src: "/images/logos/aerodrome.png",
      alt: "Aerodrome",
      name: "Aerodrome",
      gridArea: "col-start-6 row-start-3",
    },
    {
      src: "/images/logos/base.png",
      alt: "Base",
      name: "Base",
      gridArea: "col-start-7 row-start-1",
      highlight: true,
    },
    {
      src: "/images/logos/beearly.avif",
      alt: "Beearly",
      name: "Beearly",
      gridArea: "col-start-3 row-start-2",
    },
    {
      src: "/images/logos/talent-protocol.png",
      alt: "Talent Protocol",
      name: "Talent Protocol",
      gridArea: "col-start-11 row-start-3",
    },
    {
      src: "/images/logos/aave.jpg",
      alt: "Aave",
      name: "Aave",
      gridArea: "col-start-8 row-start-3",
    },
    {
      src: "/images/logos/mirror.jpg",
      alt: "Mirror",
      name: "Mirror",
      gridArea: "col-start-9 row-start-2",
    },
    {
      src: "/images/logos/airstack.jpg",
      alt: "Airstack",
      name: "Airstack",
      gridArea: "col-start-1 row-start-3",
    },
    {
      src: "/images/logos/0x.jpg",
      alt: "0x Protocol",
      name: "0x Protocol",
      gridArea: "col-start-9 row-start-4",
    },
  ];

  return (
    <section className="text-white py-24 px-16 max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-cg-bold text-center mb-12 max-w-md mx-auto">
          Making onchain feel less esoteric, simpler and fun
        </h2>
        <div className="flex flex-col gap-y-8">
          {/* 1st row  */}
          <div className="grid grid-cols-2 lg:gird-cols-1 gap-8">
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
                  skills. No matter where you are in your crypto voyage,
                  there&apos;s always new horizons to explore.
                </p>
              </div>
              <div className="">
                <Image
                  src="/images/feature_1.svg"
                  alt="Example questions"
                  className="w-full mb-1"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div
              className="border border-[#303640] rounded-lg flex flex-col"
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
                <div className="w-full absolute -top-2 left-8 bg-[#1E2226] border border-gray-800 rounded-lg p-3 flex items-center space-x-3">
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

                <div className="w-full absolute left-44 top-6 bg-[#1E2226] border border-gray-800 rounded-lg p-3 flex items-center space-x-3">
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
              className="col-span-2 border border-[#303640] rounded-lg flex flex-col overflow-hidden"
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
                  your learning adventure. You&apos;re always early when
                  you&apos;re with Basics.
                </p>
              </div>

              <div className="relative px-6 pb-0">
                <div className="absolute inset-0 bg-gradient-to-t from-[#12161C] via-transparent to-transparent pointer-events-none"></div>
                <div className="grid grid-cols-11 grid-rows-3 gap-2.5 mb-8">
                  {logos.map((logo, index) => (
                    <Logo key={index} {...logo} />
                  ))}
                  {/* Add empty divs to create the grid effect */}
                  {[...Array(46)].map((_, index) => (
                    <div
                      key={`empty-${index}`}
                      className="w-full h-12 rounded-xl bg-gray-800/30"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
            <div
              className="border border-[#303640] rounded-lg flex flex-col"
              style={{
                background: "linear-gradient(180deg, #1B1E23 0%, #12161C 100%)",
              }}
            >
              <div className="h-48 my-10 relative">
                <Image
                  src="/images/feature_4.png"
                  alt="feature 4"
                  layout="fill"
                  objectFit="cover"
                  className="scale-125"
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
              className="col-span-2 border border-[#303640] rounded-lg flex flex-col overflow-hidden"
              style={{
                background: "linear-gradient(180deg, #1B1E23 0%, #12161C 100%)",
              }}
            >
              <div className="pt-8 pb-6 px-6">
                <h3 className="text-xl font-semibold mb-2">Onchain profile</h3>
                <p className="text-gray-400 font-cg-light text-md flex-grow">
                  Your unique profile that you can share and Showcase your
                  achievements, badges, and expertise to the world.
                </p>
              </div>
              <div className="h-48 mb-8 relative">
                <Image
                  src="/images/profile.jpg"
                  alt="feature 6"
                  width={100}
                  height={100}
                  className="w-[90%] mx-auto rounded-xl border border-gray-800"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
