"use client";

import Image from "next/image";
import React from "react";

const ExamplePark = () => {
  return (
    <div className="relative isolate bg-no-repeat bg-cover bg-center bg-[url('/images/modules-bg.svg')] overflow-hidden">
      <Image
        src="/images/surfParkMap.svg"
        alt="svg"
        className="w-full"
        height={100}
        width={100}
      />
    </div>
  );
};

export default ExamplePark;
