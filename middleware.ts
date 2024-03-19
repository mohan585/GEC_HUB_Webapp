import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: ['/','/api/webhook/clerk','/api/uploadthing','/viewresultslist','/viewresultslistgetResults'],


  ignoredRoutes: ['/api/webhook/clerk','/viewresultslistgetResults'],
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};