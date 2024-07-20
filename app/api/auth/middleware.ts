import { NextRequest } from "next/server";
import { updataSession } from "./lib";

export async function middleware(request: NextRequest) {
  return await updataSession(request);
}

export const config = {
  matcher: '/api/auth/:path*',
}