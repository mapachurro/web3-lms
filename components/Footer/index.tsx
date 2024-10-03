import React from "react";
import { navigation } from "@/lib/footer";
import Logo from "@/components/UI/Logo";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="text-white w-full px-8 md:px-2 max-w-7xl 2xl:max-w-8xl mx-auto">
      <div className="mx-auto max-w-7xl px-6 py-12 flex w-full justify-between">
        <div className="w-5/12 md:w-full">
          <Logo type={"blue"} />
          <p className="mt-4 text-sm text-gray-400 max-w-sm">
            Your easy guide to all things onchain. Learn, earn and surf through
            possibilites on Base, one wave at a time.
          </p>
        </div>
        <div className="flex flex-col items-end">
          <div className="px-6 py-2">
            <div className="flex justify-center space-x-6 md:order-2">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          {/* <div className="mt-6">
            <div className="grid grid-cols-3 gap-x-8 place-content-end">
              <div>
                <h3 className="text-sm font-semibold">Important Links</h3>
                <ul role="list" className="mt-4 space-y-2">
                  {navigation.importantLinks.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-400 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold">Modules</h3>
                <ul role="list" className="mt-4 space-y-2">
                  {navigation.modules.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-400 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold">Others</h3>
                <ul role="list" className="mt-4 space-y-2">
                  {navigation.others.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-400 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <Image
        src="/images/footer-bg.svg"
        alt="footer-bg"
        width={100}
        height={100}
        className="w-full"
      />
    </footer>
  );
};

export default Footer;
