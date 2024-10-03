import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({ type }: any) => {
  return (
    <div className="flex lg:flex-1">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src={`/images/logo_${type}.png`}
          alt="Basics"
          className="w-20"
          width={100}
          height={100}
          unoptimized
        />
      </Link>
    </div>
  );
};

export default Logo;
