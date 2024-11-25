import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/labs")) {
    const redirectUrl = new URL(
      request.nextUrl.pathname,
      "https://sugarheart.utgw.net"
    );
    return NextResponse.redirect(redirectUrl, {
      status: 308,
      headers: {
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    });
  }
}
