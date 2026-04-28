import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// 1. Define what is strictly Admin
const isAdminRoute = createRouteMatcher(['/admin(.*)']);
// 2. Define what is strictly Public (Home and all slugs)
const isPublicRoute = createRouteMatcher(['/', '/(.*)']);

export default clerkMiddleware(async (auth, req) => {
  // Only protect if it's an admin route AND NOT a public route
  // (Though isAdminRoute usually takes precedence, this is the "Factory" safe way)
  if (isAdminRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};