// src/middleware.ts
import { verifyToken } from "@/lib/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname;

  // Define public paths that don't require authentication
  const isPublicPath =
    path === "/api/auth/login" || path === "/api/auth/signup";

  // Get the token from the Authorization header
  const token = request.headers.get("Authorization")?.split(" ")[1];

  // If the path is public, allow access
  if (isPublicPath) {
    return NextResponse.next();
  }

  // If there's no token, redirect to login
  if (!token) {
    return NextResponse.json(
      { message: "Authentication required" },
      { status: 401 }
    );
  }

  // Verify the token
  const verifiedToken = verifyToken(token);
  if (!verifiedToken) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
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

// Configure which routes to run middleware on
export const config = {
  matcher: ["/api/:path*", "/((?!_next/static|_next/image|favicon.ico).*)"],
};
