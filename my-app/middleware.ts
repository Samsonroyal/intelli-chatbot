import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define routes that should be protected
const isProtectedRoute = createRouteMatcher([
  // '/demo',
  // '/chat',
  '/dashboard',

  '/dashboard/reservations',
  '/dashboard/analytics',
  '/dashboard/assistants',
  '/dashboard/billing',

   '/dashboard/conversations',
   '/dashboard/conversations/elli',  
   '/dashboard/conversations/email',
   '/dashboard/conversations/voice-assistant',
   '/dashboard/conversations/whatsapp',
   '/dashboard/conversations/whatsapp/chat_sessions',
   '/dashboard/conversations/whatsapp/chat_sessions/:phoneNumber',
   '/dashboard/conversations/whatsapp/chat_sessions/:phoneNumber/:recipientId',
   '/dashboard/conversations/whatsapp/chat_sessions/:phoneNumber/:recipientId/messages',

   '/dashboard/create-chatbot',
   '/dashboard/create-organization',
   '/dashboard/create-team',
   '/dashboard/get-started',

   '/dashboard/notifications',
  '/dashboard/organization',
  '/dashboard/settings',
  '/dashboard/employees',
 

  '/organization/organization-members',

  // Add any additional routes here
  // '/dashboard/conversations',
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    auth().protect(); // Protect the route if it matches the defined criteria
  }
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};