import React from "react";
import WhiteButton from "@/components/UI/Button/WhiteButton";
import { useLogin, usePrivy } from "@privy-io/react-auth";
import { registerUser } from "@/utils/registerUser";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const CTA: React.FC = () => {
  const t = useTranslations("IndexPage");
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
    <section className="relative overflow-hidden max-w-7xl mx-auto py-12 px-4 rounded-3xl shadow-lg">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(382.96% 299.79% at 50% -162.77%, rgba(0, 18, 53, 0) 43.03%, #3F7FFF 84.16%, #FFFFFF 100%)",
          zIndex: -1,
        }}
      ></div>
      <div className="relative max-w-4xl mx-auto text-center text-white">
        <h2 className="text-6xl font-cg-extrabold mb-4 tracking-tight">
          It&apos;s time to get based
        </h2>
        <p className="text-xl mb-6 opacity-80">
          Unlock the possibilities on base
        </p>
        {authenticated ? (
          <WhiteButton
            type="link"
            link="/modules"
            additionalStyles="text-md md:p-2 md:px-4 py-3 px-6 capitalize"
          >
            {t("navbar-btn")}
          </WhiteButton>
        ) : (
          <WhiteButton
            onClick={() => login()}
            additionalStyles="text-md md:p-2 md:px-4 py-3 px-6 capitalize"
          >
            {t("navbar-btn")}
          </WhiteButton>
        )}
      </div>
    </section>
  );
};

export default CTA;
