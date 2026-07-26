import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const adminCookie = request.cookies.get("admin");
  const { pathname } = request.nextUrl;

  // Protect admin routes
  if (pathname.startsWith("/admin") && !adminCookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Prevent logged-in users from accessing login page
  if (pathname === "/login" && adminCookie) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/login"],
};