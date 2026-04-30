import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// --- RATE LIMITER CONFIG ---
const trackers = new Map<string, number>();
const RATE_LIMIT_MS = 5000; // 5 seconds

const isAdminRoute = createRouteMatcher(['/admin(.*)']);
const isPublicRoute = createRouteMatcher([
  '/', 
  '/sign-in(.*)', 
  '/sign-up(.*)', 
  '/api/uploadthing(.*)'
]);

export default clerkMiddleware(async (auth, req) => {
  
  /** * 🛡️ RATE LIMITER SECTION 
   * To "Grey it out" (disable) for testing, simply highlight this block 
   * and press Ctrl + / (or Cmd + /) to comment it out.
   */
  // if (req.nextUrl.pathname.startsWith('/api/generate')) {
  //   const ip = req.headers.get('x-forwarded-for')?.split(',')[0] ?? '127.0.0.1';
  //   const now = Date.now();
  //   const lastRequest = trackers.get(ip) ?? 0;

  //   if (now - lastRequest < RATE_LIMIT_MS) {
  //     return new NextResponse(
  //       JSON.stringify({ error: 'Slow down! One request every 5 seconds allowed.' }),
  //       { status: 429, headers: { 'content-type': 'application/json' } }
  //     );
  //   }
  //   trackers.set(ip, now);
  // }
  // --- END RATE LIMITER ---

  if (isAdminRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};