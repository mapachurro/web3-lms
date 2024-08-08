"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/UI/Button/Button";
import { useTranslations } from "next-intl";
import { useLogin } from "@privy-io/react-auth";
import { registerUser } from "@/utils/registerUser";
// import Image from "next/image";

const Header = ({ locale }: any) => {
  const router = useRouter();

  const t = useTranslations("IndexPage");

  const { login } = useLogin({
    onComplete: async (
      user,
      isNewUser,
      wasAlreadyAuthenticated,
      loginMethod,
      linkedAccount
    ) => {
      console.log(
        "User: ",
        user,
        "isNewUser: ",
        isNewUser,
        wasAlreadyAuthenticated,
        loginMethod,
        linkedAccount
      );

      if (isNewUser) {
        await registerUser(user);
      }

      router.push("/modules");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <>
      <div className="relative isolate bg-no-repeat bg-cover bg-center bg-[url('/images/header-bg.svg')] overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-8 sm:pb-8 lg:px-8 lg:py-8 md:pt-0">
          <div className="pt-10 lg:py-0 lg:pb-0 md:pt-2">
            <header className="text-center relative mx-2 h-[700px] max-h-[700px] min-h-[700px] font-wide font-bold leading-none">
              <div className="z-10 pb-36 mt-10 lg:mt-10 md:mt-10 space-x-8 md:space-x-0">
                <div className="mb-12 max-w-xl mx-auto">
                  <h1 className="lg:text-5xl md:text-4xl md:w-[90%] text-7xl text-white font-cg-extrabold tracking-tighter text-center">
                    <span>{t("header")}</span>
                    <div className="flex flex-wrap justify-center items-baseline gap-2">
                      <div className="relative inline-block">
                        <span className="base-text-outline">Base</span>
                        <span className="base-text-fill">Base</span>
                      </div>
                      <span>{t("header-half")}</span>
                    </div>
                  </h1>
                  <p className="max-w-md mx-auto mt-2 font-polysans text-gray-300 text-lg text-center flex justify-center">
                    {t("header-desc")}
                  </p>
                  <div className="flex mt-8 items-center justify-center gap-4">
                    <Button
                      onClick={() => login()}
                      additionalStyles="z-10 text-md py-3 px-6 lg:px-4 sm:px-4 font-polysans"
                    >
                      <div className="flex items-center gap-2">
                        <span>{t("header-btn")} </span>
                      </div>
                    </Button>
                  </div>
                </div>
                {/* <Image
                  src="/images/header-container.svg"
                  alt="header-container"
                  className="w-full"
                  width={100}
                  height={100}
                  unoptimized
                /> */}
              </div>
            </header>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
