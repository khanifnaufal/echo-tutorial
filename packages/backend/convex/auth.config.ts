import { AuthConfig } from "convex/server";

if (!process.env.CLERK_JWT_ISSUER_DOMAIN) {
 throw new Error('Missing CLERK_JWT_ISSUER_DOMAIN environment variable. Configure it in the Convex Dashboard.');
}
export default {
  providers: [
    {
      // Replace with your Clerk Frontend API URL
      // or with `process.env.CLERK_JWT_ISSUER_DOMAIN`
      // and configure CLERK_JWT_ISSUER_DOMAIN on the Convex Dashboard
      // See https://docs.convex.dev/auth/clerk#configuring-dev-and-prod-instances
      domain: process.env.CLERK_JWT_ISSUER_DOMAIN!,
      applicationID: "convex",
    },
  ]
} satisfies AuthConfig;