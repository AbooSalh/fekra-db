// src/middleware.ts
import { verifyToken } from "@/lib/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname;

  // Define public paths that don't require authentication
  const isPublicPath =
    path === "/auth/login" ||
    path === "/auth/signup" ||
    path === "/api/auth/login" ||
    path === "/api/auth/signup";

  // If the path is public, allow access
  if (isPublicPath) {
    return NextResponse.next();
  }

  // Get the token from either the Authorization header or cookies
  const authHeader = request.headers.get("Authorization");
  const token =
    authHeader?.split(" ")[1] || request.cookies.get("token")?.value;

  // If there's no token, redirect to login
  if (!token) {
    if (path.startsWith("/api/")) {
      return NextResponse.json(
        { message: "Authentication required" },
        { status: 401 }
      );
    }
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // Verify the token
  const verifiedToken = verifyToken(token);
  if (!verifiedToken) {
    if (path.startsWith("/api/")) {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    }
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // Add user info to request headers
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-user-id", verifiedToken.id.toString());
  requestHeaders.set("x-user-role", verifiedToken.role);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
