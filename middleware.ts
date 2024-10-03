import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale } from "@/lib/locales";

export default async function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  let locale;
  if (pathnameHasLocale) {
    locale = pathname.split("/")[1];
  } else {
    locale = request.cookies.get("NEXT_LOCALE")?.value || defaultLocale;
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}${search}`, request.url)
    );
  }

  // Set or update the NEXT_LOCALE cookie
  const response = NextResponse.next();
  response.cookies.set("NEXT_LOCALE", locale, { path: "/" });

  const handleI18nRouting = createMiddleware({
    locales,
    defaultLocale,
  });

  const i18nResponse = handleI18nRouting(request);

  // Merge the cookies from our response with the i18n middleware response
  i18nResponse.cookies.set("NEXT_LOCALE", locale, { path: "/" });

  return i18nResponse;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.svg).*)"],
};
