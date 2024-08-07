import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const Logo = ({ type }: any) => {
  const t = useTranslations("IndexPage");

  return (
    <div className="flex lg:flex-1">
      <Link href="/" className="flex items-center gap-2">
        <img src={`/images/logo_${type}.png`} alt="Basics" className="w-20" />
      </Link>
    </div>
  );
};

export default Logo;
