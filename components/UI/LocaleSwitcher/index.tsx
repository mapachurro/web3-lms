"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import { setCookie } from "nookies";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const localActive = useLocale();

  const handleLocaleChange = (nextLocale: string) => {
    startTransition(() => {
      setCookie(null, "NEXT_LOCALE", nextLocale, { path: "/" });

      // Replace the locale in the current path
      const newPathname = pathname.replace(`/${localActive}`, `/${nextLocale}`);
      router.replace(newPathname);
    });
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="flex items-center rounded-full text-gray-300 hover:text-gray-400 focus:outline-none">
          <span className="sr-only">Open options</span>
          <GlobeAltIcon className="h-6 w-6" aria-hidden="true" />
        </MenuButton>
      </div>

      {/* <label className="font-polysans rounded-2xl border border-gray-800 text-xs leading-6 text-white text-center shadow-lg px-4">
        <p className="sr-only">change language</p>
        <select
          defaultValue={localActive}
          className="bg-transparent py-2 outline-none"
          onChange={onSelectChange}
          disabled={isPending}
        >
          <option value="en">English</option>
          <option value="id">Indonesian</option>
          <option value="hi">हिंदी</option>
        </select>
      </label> */}

      <MenuItems className="absolute right-0 z-10 font-polysans mt-4 w-44 origin-top-right rounded-md bg-black shadow-lg ring-1 ring-white ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
        <div className="py-1">
          <div className="bg-black hover:bg-grey">
            <MenuItem>
              {({ focus }) => (
                <button
                  onClick={() => handleLocaleChange("en")}
                  className={classNames(
                    focus ? "bg-black text-white" : "text-white",
                    "block px-4 py-2 text-xs hover:bg-grey"
                  )}
                >
                  English
                </button>
              )}
            </MenuItem>
          </div>
          <div className="bg-black hover:bg-grey">
            <MenuItem>
              {({ focus }) => (
                <button
                  onClick={() => handleLocaleChange("id")}
                  className={classNames(
                    focus ? "bg-black text-white" : "text-white",
                    "block px-4 py-2 text-xs hover:bg-grey"
                  )}
                >
                  Bahasa Indonesia
                </button>
              )}
            </MenuItem>
          </div>
          <div className="bg-black hover:bg-grey">
            <MenuItem>
              {({ focus }) => (
                <button
                  onClick={() => handleLocaleChange("hi")}
                  className={classNames(
                    focus ? "bg-black text-white" : "text-white",
                    "block px-4 py-2 text-xs hover:bg-grey"
                  )}
                >
                  हिंदी
                </button>
              )}
            </MenuItem>
          </div>
        </div>
      </MenuItems>
    </Menu>
  );
}
