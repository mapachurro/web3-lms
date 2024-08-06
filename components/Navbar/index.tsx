"use client";

import React, { useState } from "react";
import WhiteButton from "@/components/UI/Button/WhiteButton";
import Link from "next/link";
import LocaleSwitcher from "@/components/UI/LocaleSwitcher";
import { useTranslations } from "next-intl";
import { useLogin, usePrivy } from "@privy-io/react-auth";
import { useRouter } from "next/navigation";
import Logo from "@/components/UI/Logo";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Dialog } from "@headlessui/react";
import { registerUser } from "@/utils/registerUser";

const Navbar = ({ locale }: any) => {
  const t = useTranslations("IndexPage");

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const { authenticated } = usePrivy();

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
    <header className="absolute inset-x-0 top-0 z-10">
      <nav
        className="mx-auto flex max-w-[95%] items-center justify-between px-6 py-4"
        aria-label="Global"
      >
        {mobileMenuOpen ? (
          ""
        ) : (
          <>
            <Logo />
            <div className="hidden lg:flex">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-end rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </>
        )}
        <div className="flex lg:hidden gap-x-10 items-center">
          <Link href="/" className="text-white">
            {t("navbar-item1")}
          </Link>
          <Link href="/" className="text-white">
            {t("navbar-item2")}
          </Link>
          <Link href="/" className="text-white">
            {t("navbar-item3")}
          </Link>
        </div>
        <div className="md:hidden flex lg:flex-1 lg:justify-end gap-4 items-center">
          {authenticated ? (
            <WhiteButton
              type="link"
              link={`/${locale}/modules`}
              additionalStyles="text-sm md:p-2 md:px-4 p-2 px-6 capitalize"
            >
              {t("navbar-btn")}
            </WhiteButton>
          ) : (
            <WhiteButton
              onClick={() => login()}
              additionalStyles="text-sm md:p-2 md:px-4 p-2 px-6 capitalize"
            >
              {t("navbar-btn")}
            </WhiteButton>
          )}

          <LocaleSwitcher />
        </div>
      </nav>
      <Dialog
        as="div"
        className="hidden lg:flex"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <Logo />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6">
              <div className="flex flex-col space-y-2 py-6">
                <Link href="/" className="text-white">
                  {t("navbar-item1")}
                </Link>
                <Link href="/" className="text-white">
                  {t("navbar-item2")}
                </Link>
                <Link href="/" className="text-white">
                  {t("navbar-item3")}
                </Link>
              </div>
              <div className="flex items-center gap-2">
                {authenticated ? (
                  <WhiteButton
                    type="link"
                    link={`/${locale}/modules`}
                    additionalStyles="text-sm md:p-2 md:px-4 p-2 px-6 capitalize"
                  >
                    {t("navbar-btn")}
                  </WhiteButton>
                ) : (
                  <WhiteButton
                    onClick={() => login()}
                    additionalStyles="text-sm md:p-2 md:px-4 p-2 px-6 capitalize"
                  >
                    {t("navbar-btn")}
                  </WhiteButton>
                )}
                <LocaleSwitcher />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
