import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
const isProtectedRoutes = createRouteMatcher([
'/dashboard(.*)',
'/api/payment',
'/payment',
])
export default clerkMiddleware( async (auth,req)=>{
    const { userId } = await  auth();
if(isProtectedRoutes(req)){
auth.protect()
}
const publicPaths = ['/', '/login', '/register'];
  const pathname = req.nextUrl.pathname;

  if (userId && publicPaths.includes(pathname)) {
    const url = req.nextUrl.clone();
    url.pathname = '/dashboard';
    return Response.redirect(url);
  }
});
export const config = {
matcher: [
// Skip Next.js internals and all static files, unless found in search params
'/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
// Always run for API routes
'/(api|trpc)(.*)',
],
}