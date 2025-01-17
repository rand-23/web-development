import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server' // Importing Clerk's middleware and route matcher utility

// Create a route matcher for public routes that don't require authentication
const isPublicRoute = createRouteMatcher([ '/', '/product-details/(.*)','/sign-in(.*)', '/sign-up(.*)']) 

export default clerkMiddleware(async (auth, request) => {
 
  if (!isPublicRoute(request)) {  // If the current route is not public
    await auth.protect() // Protect the route, requiring authentication
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}