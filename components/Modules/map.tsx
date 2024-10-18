"use client";

import Image from "next/image";
import React from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

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
      } p-2 md:p-1 shadow-lg transition-all duration-300 group-hover:scale-105 h-full flex items-center justify-center`}
    >
      <Image
        src={src}
        alt={alt}
        width={40}
        height={40}
        className="w-8 h-8 md:h-full rounded-full md:object-contain"
        unoptimized
      />
    </div>
    <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 bg-gray-800 px-2 py-1 rounded text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
      {name}
    </div>
  </div>
);

const InteractiveMap = () => {
  const logos: LogoProps[] = [
    {
      src: "/images/fc.svg",
      alt: "Farcaster",
      name: "Farcaster",
      gridArea: "col-start-1 row-start-4",
    },
    {
      src: "/images/logos/aerodrome.png",
      alt: "Aerodrome",
      name: "Aerodrome",
      gridArea: "col-start-1 row-start-2",
    },
    {
      src: "/images/logos/base.png",
      alt: "Base",
      name: "Base",
      gridArea: "col-start-4 row-start-1",
      highlight: true,
    },
    {
      src: "/images/logos/beearly.avif",
      alt: "Beearly",
      name: "Beearly",
      gridArea: "col-start-4 row-start-3",
    },
    {
      src: "/images/logos/talent-protocol.png",
      alt: "Talent Protocol",
      name: "Talent Protocol",
      gridArea: "col-start-5 row-start-4",
    },
    {
      src: "/images/logos/aave.jpg",
      alt: "Aave",
      name: "Aave",
      gridArea: "col-start-3 row-start-2",
    },
    {
      src: "/images/logos/mirror.jpg",
      alt: "Mirror",
      name: "Mirror",
      gridArea: "col-start-5 row-start-2",
    },
    {
      src: "/images/logos/airstack.jpg",
      alt: "Airstack",
      name: "Airstack",
      gridArea: "col-start-2 row-start-1",
    },
    {
      src: "/images/logos/0x.jpg",
      alt: "0x Protocol",
      name: "0x Protocol",
      gridArea: "col-start-3 row-start-4",
    },
  ];

  return (
    <div
      className="mt-6 rounded-2xl flex flex-col overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #151A25 0%, #12161C 100%)",
      }}
    >
      <div className="pt-6 pb-6 px-6 flex items-start justify-between">
        <div>
          <h3 className="text-white text-xl font-cg-regular leading-tight">
            Navigate the ecosystem
          </h3>
          <p className="text-gray-400 font-cg-light text-md max-w-[340px]">
            You&apos;re always early when you&apos;re with Basics.
          </p>
        </div>
        <Link href="/map">
          <ArrowTopRightOnSquareIcon className="w-5 h-5 text-blue-600 font-bold" />
        </Link>
      </div>

      <div className="relative px-6 pb-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#12161C] via-transparent to-transparent pointer-events-none"></div>
        <div className="grid grid-cols-5 grid-rows-2 sm:grid-cols-1 sm:grid-rows-1 gap-2 sm:gap-1 mb-8">
          {logos.map((logo, index) => (
            <Logo key={index} {...logo} />
          ))}
          {/* Add empty divs to create the grid effect */}
          {[...Array(11)].map((_, index) => (
            <div
              key={`empty-${index}`}
              className="w-full h-12 md:h-6 rounded-xl bg-gray-800/30"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
