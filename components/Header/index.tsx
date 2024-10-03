"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/UI/Button/Button";
import { useTranslations } from "next-intl";
// import { useLogin } from "@privy-io/react-auth";
// import { registerUser } from "@/utils/registerUser";
import Image from "next/image";

const Header = ({ locale }: any) => {
  const router = useRouter();

  const t = useTranslations("IndexPage");

  // const { login } = useLogin({
  //   onComplete: async (
  //     user,
  //     isNewUser,
  //     wasAlreadyAuthenticated,
  //     loginMethod,
  //     linkedAccount
  //   ) => {
  //     console.log(
  //       "User: ",
  //       user,
  //       "isNewUser: ",
  //       isNewUser,

  //       wasAlreadyAuthenticated,
  //       loginMethod,
  //       linkedAccount
  //     );

  //     if (isNewUser) {
  //       await registerUser(user);
  //     }

  //     router.push("/modules");
  //   },
  //   onError: (error) => {
  //     console.log(error);
  //   },
  // });

  return (
    <>
      <div className="relative isolate bg-no-repeat bg-cover bg-center bg-[url('/images/header-bg.svg')] overflow-hidden">
        <div className="max-w-7xl 2xl:max-w-8xl mx-auto px-6 pt-6 sm:pb-0 lg:px-8 lg:pt-16 md:px-2">
          <div className="pt-10 lg:py-0 lg:pb-0 sm:pt-2">
            <header className="text-center relative mx-2 h-[700px] max-h-[700px] min-h-[700px] lg:min-h-[450px] lg:h-[450px] font-wide font-bold leading-none">
              <div className="z-10 pb-36 mt-16 lg:mt-10 md:mt-10 space-x-8 md:space-x-0">
                <div className="mb-8 max-w-5xl mx-auto">
                  <h1 className="lg:text-5xl md:text-4xl text-6xl text-white font-cg-bold tracking-tighter text-center">
                    <span>{t("header")}</span>
                    <div className="flex flex-wrap justify-center items-baseline gap-2">
                      <span>{t("header-half")}</span>
                      <div className="relative inline-block">
                        <span className="base-text-outline">Base</span>
                        <span className="base-text-fill">Base</span>
                      </div>
                    </div>
                  </h1>
                  <p className="max-w-xl mx-auto mt-4 font-polysans text-gray-300 text-lg text-center flex justify-center">
                    {t("header-desc")}
                  </p>
                  <div className="flex mt-8 items-center justify-center gap-4">
                    <Button
                      onClick={() => router.push("/modules")}
                      additionalStyles="z-10 text-lg py-3 px-6 lg:px-4 md:px-8 font-polysans"
                    >
                      <div className="flex items-center gap-2">
                        <span>{t("header-btn")} </span>
                      </div>
                    </Button>
                  </div>
                </div>
                <br />
                <Image
                  src="/images/header-container.svg"
                  alt="header-container"
                  className="w-[95%] md:w-full mx-auto rounded-2xl"
                  width={100}
                  height={100}
                  unoptimized
                />
              </div>
            </header>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
