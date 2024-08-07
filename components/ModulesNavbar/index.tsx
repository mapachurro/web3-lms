"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import LocaleSwitcher from "@/components/UI/LocaleSwitcher";
import { useTranslations } from "next-intl";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useLogout, usePrivy } from "@privy-io/react-auth";
import {
  Dialog,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import Logo from "@/components/UI/Logo";
import truncateAddress from "@/utils/truncateAddress";
import { fetchUserData } from "@/utils/fetchUser";
import Image from "next/image";
import { useStreak } from "@/hooks/useStreak";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const ModulesNavbar = () => {
  const [userData, setUserData] = useState<any>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations("IndexPage");

  const router = useRouter();

  const { logout } = useLogout({
    onSuccess: () => {
      console.log("User logged out");
      router.push("/");
    },
  });

  const { user } = usePrivy();

  useEffect(() => {
    const loadUserData = async () => {
      if (user) {
        const data = await fetchUserData(user.id);
        if (data) {
          setUserData(data);
        }
      }
    };

    loadUserData();
  }, [user?.id]);

  const fullAddress = user?.wallet?.address;
  const truncatedAddress = truncateAddress(fullAddress);

  const { streakCount, buttonDisabled, handleGMClick } = useStreak();

  return (
    <header className="absolute inset-x-0 top-0 z-10">
      <nav
        className="mx-auto flex max-w-8xl items-center justify-between px-6 py-4"
        aria-label="Global"
      >
        {mobileMenuOpen ? (
          ""
        ) : (
          <>
            <div className="hidden lg:flex mr-2">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <Logo type={"white"} />
          </>
        )}
        <div className="flex lg:hidden gap-x-8 items-center">
          <div className="w-80 relative flex items-center">
            <div className="w-full flex rounded-3xl bg-black ring-1 ring-inset ring-white/10 px-1">
              <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
              </span>
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search"
                className="outline-none flex-1 border-0 bg-transparent font-polysans py-2 pl-1 text-white focus:ring-0 sm:text-sm sm:leading-6"
              />
              <div className="absolute inset-y-2 right-0 flex py-1 pr-4">
                <kbd className="inline-flex items-center rounded-md border border-gray-500 px-1 font-sans text-xs text-gray-500">
                  ⌘K
                </kbd>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-1 lg:justify-end gap-4 items-center">
          <Menu as="div" className="relative inline-block text-left">
            <div className="relative flex items-center gap-4">
              <div className="relative z-10 md:hidden">
                <div className="transition-all select-none rounded-lg font-polysans flex items-center justify-center gap-2 text-center group text-sm py-2 text-gray-10 hover:brightness-90 cursor-not-allowed">
                  <Image
                    src="/images/shell.png"
                    alt="gm"
                    width={100}
                    height={100}
                    unoptimized
                    className="w-5 h-5"
                  />
                  <span className="-mr-1 text-sm text-white lg:mr-0">
                    {userData?.shells}
                  </span>
                  <span className="inline text-gray-200 text-md font-thin">
                    Shells
                  </span>
                </div>
              </div>
              <div className="relative z-10 group md:hidden">
                <button
                  style={{
                    background:
                      "radial-gradient(100% 100% at 50% 0%, #465770 0%, #1E2836 100%)",
                  }}
                  className={`transition-all select-none rounded-lg font-polysans uppercase flex items-center justify-center text-center border text-sm py-2 px-2 text-gray-10 ${
                    buttonDisabled ? "cursor-not-allowed" : "cursor-pointer"
                  } border-gray-600`}
                  onClick={!buttonDisabled ? handleGMClick : undefined}
                >
                  <Image
                    src="/images/gm_fire.png"
                    alt="gm"
                    width={100}
                    height={100}
                    unoptimized
                    className="w-5 h-5"
                  />
                  <span className="ml-1 text-sm text-white lg:mr-0">
                    {streakCount}&nbsp;
                  </span>
                  <span className="inline text-gray-200 font-thin">GM</span>
                </button>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full px-4 py-2 w-64 bg-black border border-grey text-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-md">About Streaks</p>
                  <p className="text-sm my-1">
                    Streaks reset every day at 00:00 UTC. Your streak will break
                    if you don&apos;t gm tomorrow.
                  </p>
                </div>
              </div>
              <MenuButton>
                <div className="relative z-10">
                  <div className="active:scale-95 select-none rounded-lg flex items-center justify-start gap-2 subpixel-antialiased focus:outline-highlight focus:ring-0 border whitespace-nowrap group h-9 min-w-[2rem] border-transparent bg-white text-gray-10 hover:bg-gray-100 disabled:bg-gray-50 disabled:text-gray w-full px-2 py-2 font-polysans text-sm transition-all">
                    <div style={{ width: "120px" }}>{truncatedAddress}</div>
                  </div>
                </div>
              </MenuButton>
            </div>

            <MenuItems
              className={`absolute right-0 z-10 mt-2 ${
                user?.google || user?.email ? "w-56" : "w-44"
              } origin-top-right divide-y divide-gray-800 rounded-md bg-black shadow-lg ring-1 ring-white ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in`}
            >
              {user?.google ? (
                <div className="px-4 py-3 font-polysans">
                  <p className="text-white text-sm">Signed in as</p>
                  <p className="truncate text-sm text-gray-400">
                    {user?.google?.email}
                  </p>
                </div>
              ) : user?.email ? (
                <div className="px-4 py-3 font-polysans">
                  <p className="text-white text-sm">Signed in as</p>
                  <p className="truncate text-sm text-gray-400">
                    {user?.email?.address}
                  </p>
                </div>
              ) : user?.discord ? (
                <div className="px-4 py-3 font-polysans">
                  <p className="text-white text-sm">Signed in as</p>
                  <p className="truncate text-sm text-gray-400">
                    {user?.discord?.username}
                  </p>
                </div>
              ) : user?.twitter ? (
                <div className="px-4 py-3 font-polysans">
                  <p className="text-white text-sm">Signed in as</p>
                  <p className="truncate text-sm text-gray-400">
                    {user?.twitter?.username}
                  </p>
                </div>
              ) : (
                user?.farcaster && (
                  <div className="px-4 py-3 font-polysans">
                    <p className="text-white text-sm">Signed in as</p>
                    <p className="truncate text-sm text-gray-400">
                      {user?.farcaster.username} - {user?.farcaster.fid}
                    </p>
                  </div>
                )
              )}

              <div className="py-1">
                <MenuItem>
                  {({ focus }) => (
                    <Link
                      href="/profile"
                      className={classNames(
                        focus ? "bg-black text-gray-200" : "text-gray-200",
                        "block px-4 py-2 text-sm font-polysans"
                      )}
                    >
                      My Profile
                    </Link>
                  )}
                </MenuItem>
              </div>
              <div className="py-1">
                <form method="POST" action="#">
                  <MenuItem>
                    {({ focus }) => (
                      <button
                        type="submit"
                        className={classNames(
                          focus ? "bg-black text-gray-200" : "text-gray-200",
                          "block w-full px-4 py-2 text-left text-sm font-polysans"
                        )}
                        onClick={logout}
                      >
                        Sign out
                      </button>
                    )}
                  </MenuItem>
                </form>
              </div>
            </MenuItems>
          </Menu>
          <div className="flex">
            <LocaleSwitcher />
          </div>
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
              <Logo type={"white"} />
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
            <div className="-my-6 divide-y divide-gray-300/10">
              <div className="flex flex-col space-y-2 py-6">
                <div className="relative z-10">
                  <div className="transition-all select-none rounded-lg font-polysans flex items-center gap-1 text-center group text-sm py-2 text-gray-10 hover:brightness-90 cursor-not-allowed">
                    <Image
                      src="/images/shell.png"
                      alt="gm"
                      width={100}
                      height={100}
                      unoptimized
                      className="w-5 h-5"
                    />
                    <span className="-mr-1 text-sm text-white lg:mr-0">
                      {userData?.shells}
                    </span>
                    <span className="inline text-gray-200 font-thin">
                      Shells
                    </span>
                  </div>
                </div>
                <div className="relative z-10 group">
                  <button
                    style={{
                      background:
                        "radial-gradient(100% 100% at 50% 0%, #465770 0%, #1E2836 100%)",
                    }}
                    className={`transition-all select-none rounded-lg font-polysans uppercase flex items-center justify-center text-center border text-sm py-2 px-2 text-gray-10 ${
                      buttonDisabled ? "cursor-not-allowed" : "cursor-pointer"
                    } border-gray-600`}
                    onClick={!buttonDisabled ? handleGMClick : undefined}
                  >
                    <Image
                      src="/images/gm_fire.png"
                      alt="gm"
                      width={100}
                      height={100}
                      unoptimized
                      className="w-5 h-5"
                    />
                    <span className="ml-1 text-sm text-white lg:mr-0">
                      {streakCount}&nbsp;
                    </span>
                    <span className="text-xs text-gray-200 hidden lg:inline">
                      GM
                    </span>
                    <span className="inline text-gray-200 lg:hidden font-thin">
                      GM
                    </span>
                  </button>
                  <div className="absolute -bottom-2 left-1/3 transform -translate-x-1/2 translate-y-full px-4 py-2 w-64 bg-black border border-grey text-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-md">About Streaks</p>
                    <p className="text-sm my-1">
                      Streaks reset every day at 00:00 UTC. Your streak will
                      break if you don&apos;t gm tomorrow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default ModulesNavbar;
