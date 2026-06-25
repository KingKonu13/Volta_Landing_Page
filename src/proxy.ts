import { NextRequest, NextResponse } from "next/server";

// Redirect the www subdomain to the bare apex domain (canonical host).
// Next.js 16 renamed the "middleware" convention to "proxy".
export function proxy(req: NextRequest) {
  const host = req.headers.get("host") ?? "";
  if (host === "www.voltafile.com") {
    const { pathname, search } = req.nextUrl;
    return NextResponse.redirect(`https://voltafile.com${pathname}${search}`, 308);
  }
  return NextResponse.next();
}

export const config = {
  // Run on all paths except Next internals and static assets.
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
