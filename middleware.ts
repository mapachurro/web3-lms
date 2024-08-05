import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale } from "@/lib/locales";

export default async function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;

  const urlLocale = pathname.split("/")[1];

  // Check if the URL locale is valid
  if (!locales.includes(urlLocale)) {
    // Redirect to the default locale or cookie locale if not valid
    const newPathname = pathname.replace(/^\/(en|id|hi)/, "");
    const redirectLocale = cookieLocale || defaultLocale;
    // Ensure we are not redirecting in a loop
    if (urlLocale !== redirectLocale) {
      return NextResponse.redirect(
        new URL(`/${redirectLocale}${newPathname}${search}`, request.url)
      );
    }
  }

  // Set the locale in cookies if not already set or if URL locale differs
  if (!cookieLocale || cookieLocale !== urlLocale) {
    const response = NextResponse.next();
    response.cookies.set("NEXT_LOCALE", urlLocale, { path: "/" });
    return response;
  }

  const handleI18nRouting = createMiddleware({
    locales,
    defaultLocale: "en",
  });

  const response = handleI18nRouting(request);

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.svg).*)"],
};
