import { NextResponse, type NextRequest } from "next/server";

import { defaultLocale, detectLocaleFromHeader, locales } from "@/lib/i18n";

function hasLocale(pathname: string) {
  return locales.some((locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`));
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (hasLocale(pathname)) {
    return NextResponse.next();
  }

  const preferredLocale = detectLocaleFromHeader(request.headers.get("accept-language")) ?? defaultLocale;
  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = `/${preferredLocale}${pathname}`;

  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
