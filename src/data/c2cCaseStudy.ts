// Cars2Customer case-study content, in the shared CaseStudyData shape (see
// src/types/caseStudy.ts and src/components/CaseStudyLayout.tsx).
//
// Verified directly from the project's own public source - not recalled or
// guessed. Read in full from:
//   https://github.com/DreamWebInfo79/c2cApp         (React Native consumer app)
//   https://github.com/DreamWebInfo79/c2c-backend    (Express/MongoDB API)
// A third repo, client-c2c (likely a separate admin web client, given the
// backend's /admin and listing-write routes), returned 404 this session and
// could not be read - this write-up is scoped to what the two readable repos
// actually show.
//
// Git history on both repos: the first commits on each ("Initial commit" /
// "first commit" / "user login successfull") are by this portfolio's owner,
// who authored the majority of commits on both repos and returned for a
// second phase of work (the search UI, "technical alignment") months later,
// working alongside one collaborator.

import type { CaseStudyData } from "../types/caseStudy";

export const c2cCaseStudy: CaseStudyData = {
  meta: {
    title: "Cars2Customer - Used Car Marketplace",
    tagline: "A React Native marketplace app for cars2customer.com, backed by a full listings/auth/inquiry API.",
    status: "Client project",
    pills: ["Full-Stack Developer - Core team of two", "React Native + Node.js", "cars2customer.com"],
  },
  blocks: [
    {
      kind: "prose",
      id: "overview",
      eyebrow: "01 - OVERVIEW",
      title: "A two-sided marketplace, not just a listing browser",
      text: `Cars2Customer is a used-car marketplace built at DreamWebInfo: a React Native
app for buyers to browse, filter, and favorite listings and send a buyer
inquiry on a car, backed by an Express/MongoDB API that also handles
admin-managed listings (create/edit/delete, with a separate "top admin"
tier), account verification, and inquiry/booking status.

I started both the app and the backend repository (the first commits on each
are mine) and wrote the majority of the commits on both, returning for a
second phase of work - the search UI and a technical/UI pass - a few months
later, working alongside one other developer on the team.`,
    },
    {
      kind: "bullets",
      id: "role",
      eyebrow: "02 - MY ROLE",
      title: "What I personally built, verified from commit history",
      intro: "A two-person core team on a project I started. What git history actually attributes to me:",
      items: [
        "Started both repositories and the initial React Native/Express scaffold",
        "User login and registration, including the email + OTP verification flow",
        "Google Sign-In integration (web OAuth callback and a separate Android-specific flow)",
        "Admin registration/editing for listing management",
        "A later pass (returned a few months after the initial build) implementing the search UI and a UI/technical-alignment cleanup",
      ],
    },
    {
      kind: "pillGroups",
      id: "stack",
      eyebrow: "03 - TECHNOLOGY STACK",
      title: "Verified from both repos' own dependencies",
      groups: [
        {
          label: "Client",
          items: [
            "React Native 0.75",
            "React Navigation (bottom tabs + stack)",
            "@react-native-google-signin/google-signin",
            "Axios",
            "React Context (car list + user state)",
            "react-native-reanimated-carousel / react-native-snap-carousel",
          ],
        },
        {
          label: "Server",
          items: [
            "Node.js + Express",
            "MongoDB + Mongoose",
            "Passport (Google OAuth 2.0) + google-auth-library, with separate web and Android client IDs",
            "Nodemailer (OTP email delivery)",
            "bcryptjs + serverless-http",
          ],
        },
      ],
    },
    {
      kind: "cards",
      id: "modules",
      eyebrow: "04 - KEY MODULES",
      title: "What the platform actually does",
      items: [
        {
          title: "Browse & Filter",
          description:
            "Home screen with brand filter chips, a budget slider, and a live-fetched car list, shared across screens through a CarContext provider.",
        },
        {
          title: "Car Details & Buyer Inquiry",
          description:
            "Full listing detail (price, km driven, fuel/transmission, condition, features, technical specs) with a buyer-inquiry form that creates a status-tracked booking record for the admin side.",
        },
        {
          title: "Favorites",
          description:
            "Add/remove a car from favorites against the signed-in user's record, with a dedicated screen to view saved cars.",
        },
        {
          title: "Admin-Managed Listings",
          description:
            "Admins create, edit, and delete car listings server-side, with a separate 'top admin' tier in the schema for elevated accounts.",
        },
        {
          title: "Account & Verification",
          description:
            "Email/password signup gated by a real 6-digit OTP (15-minute expiry) sent via Nodemailer, as an alternative to Google Sign-In, which skips OTP since Google already verifies the email.",
        },
      ],
    },
    {
      kind: "architecture",
      id: "architecture",
      eyebrow: "05 - SYSTEM ARCHITECTURE",
      title: "A React Native client over a single Lambda-deployed API",
      intro: "Conceptual summary of the verified architecture - not a screenshot of the real application.",
      layers: [
        {
          label: "Client",
          items: [
            "React Native app (Android + iOS), navigation split into a bottom-tab + stack structure",
            "CarContext (fetched listings + client-side location filtering) and UserContext (signed-in user, favorites) as shared state",
          ],
        },
        {
          label: "API",
          items: [
            "One Express app, wrapped with serverless-http and deployed as an AWS Lambda function, same pattern as this developer's other DreamWebInfo project",
            "CORS locked to an explicit allow-list including the production cars2customer.com domain",
            "Two separate Google OAuth integrations - a web client ID for the callback flow and a distinct Android client ID for native sign-in",
          ],
        },
        {
          label: "Data",
          items: [
            "MongoDB via Mongoose: Car, User, Admin, and CarBooking (buyer-inquiry) collections",
            "A user's favorited cars are stored as embedded copies of the car document on the user record, rather than references to the live listing",
          ],
        },
      ],
    },
    {
      kind: "challenges",
      id: "challenges",
      eyebrow: "06 - TECHNICAL CHALLENGES",
      title: "Real design problems, and how they were solved",
      items: [
        {
          title: "Google Sign-In isn't one integration on web and mobile",
          problem:
            "A Google OAuth client ID registered for a web callback URL doesn't work for native Android sign-in - they're registered as different OAuth client types with Google, and a mobile app needs its own verification path.",
          solution:
            "The backend registers two separate OAuth2Client instances, one for the web client ID and one for the Android client ID, with a dedicated /auth/google/android endpoint alongside the web callback - so each platform verifies against the credential type it actually receives.",
        },
        {
          title: "Letting email/password signup skip verification was a real risk",
          problem:
            "A marketplace with buyer-seller contact details attached needs some confidence an email address is real before an account can act on it - but Google Sign-In already proves that, so the same check shouldn't apply twice.",
          solution:
            "Email/password signup is gated behind a 6-digit OTP, emailed via Nodemailer with a 15-minute expiry, and the password is only hashed and saved once that OTP is confirmed; the Google Sign-In path bypasses it entirely since Google has already verified the address.",
        },
        {
          title: "Not every screen in the repo is live in the shipped app",
          problem:
            "A dedicated Search/filter screen and the Admin tab exist in the component tree and are referenced from the navigator file, but are commented out of the active Tab.Navigator - an honest gap worth naming rather than claiming the full tab set is live today.",
          solution:
            "The currently-wired experience is Home (browse, brand/budget filters, favorites) and Car Details (view, favorite, send a buyer inquiry); Search and a dedicated Favorites tab are built but not yet remounted into the live navigation as of the last commit I reviewed.",
        },
      ],
    },
    {
      kind: "bullets",
      id: "workflow",
      eyebrow: "07 - DEPLOYMENT & WORKFLOW",
      title: "How it actually runs in production",
      items: [
        "One Express app serves both local development and an AWS Lambda deployment from the same codebase, via serverless-http",
        "Real third-party integrations throughout: Google OAuth (web and Android) for login, Nodemailer/Gmail for OTP delivery - nothing mocked",
        "A likely third, separate repository (client-c2c) appears to provide the admin/listing-management web UI implied by the backend's /admin and /cars write routes, but wasn't accessible to verify this session",
        "Built and shipped collaboratively: started solo, then built out alongside one other developer, with a later solo pass adding search and UI refinements",
      ],
    },
    {
      kind: "note",
      id: "closing-note",
      icon: "shield",
      label: "ABOUT THIS WRITE-UP",
      text: `This write-up is based on a direct, full read of the two repositories that
were reachable (c2cApp, c2c-backend) and their git history, not recalled from
memory or guessed. The third repo named for this project, client-c2c,
returned a 404 and isn't reflected here. "My role" reflects what commit
authorship actually shows. No screenshot is shown - this is a React Native
app, not a public website, so there's no page to screenshot without running
it on a device or emulator.`,
    },
  ],
};
