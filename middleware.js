import { NextResponse } from "next/server";

const LOCALES = ["it", "en"];

export function middleware(request) {
  const { pathname, search } = new URL(request.url);

  const hasLocale = LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasLocale) return NextResponse.next();

  // Anything else (bare paths, or the "/x-default" sentinel Next.js falls
  // back to) gets redirected to the real default locale, "it".
  const rest = pathname === "/x-default"
    ? ""
    : pathname.startsWith("/x-default/")
    ? pathname.slice("/x-default".length)
    : pathname === "/"
    ? ""
    : pathname;

  const dest = new URL(`/it${rest}${search}`, request.url);
  return NextResponse.redirect(dest, 308);
}

export const config = {
  matcher: ["/", "/((?!_next|api|.*\\..*).*)"],
};
