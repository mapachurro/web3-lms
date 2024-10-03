import { getRequestConfig } from "next-intl/server";
import { locales } from "./lib/locales";

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) {
    // Redirect to default locale if the locale is not valid
    return {
      redirect: {
        destination: "/en", // Default locale
        permanent: false,
      },
    };
  }

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
