// Nizhal TNPSC case-study content, in the shared CaseStudyData shape (see
// src/types/caseStudy.ts and src/components/CaseStudyLayout.tsx).
//
// Verified directly from the project's own public source - not recalled or
// guessed. Read in full from:
//   https://github.com/DreamWebInfo79/tnpscBackend
//   https://github.com/DreamWebInfo79/tnpscFrontend
// Git history on both repos was checked too: the first commits on each repo
// ("first commit", "back-done", "hp last push") are authored by this
// portfolio's owner, who then built the Google-login flow, the bilingual
// Tamil/English PDF result export (both the server-side and client-side
// implementations), the Aptitude Series feature end-to-end, the Weekly Test
// feature, and the PhonePe payment/plan integration, working alongside one
// collaborator who handled question-bank data, API performance, and
// analytics wiring. No live screenshot is shown - this write-up is scoped to
// what's verifiable from the source itself.

import type { CaseStudyData } from "../types/caseStudy";

export const nizhalCaseStudy: CaseStudyData = {
  meta: {
    title: "Nizhal TNPSC",
    tagline: "A production TNPSC exam-prep platform - timed mock tests, bilingual PDF results, and a real payment-gated subscription model.",
    status: "Live production site",
    pills: ["Full-Stack Developer - Core team of two", "MERN stack", "nizhaltnpsc.com"],
  },
  blocks: [
    {
      kind: "prose",
      id: "overview",
      eyebrow: "01 - OVERVIEW",
      title: "Exam prep for a real, specific exam",
      text: `Nizhal TNPSC is a live exam-preparation platform for the Tamil Nadu Public
Service Commission (TNPSC) exams, built and shipped at DreamWebInfo. It
covers per-subject MCQ practice, full timed mock tests, a weighted aptitude
series, a combined weekly test, and bilingual (Tamil/English) PDF result
reports - gated behind a real free/basic/premium subscription enforced on
the server, not just hidden in the UI.

I was the one who started both repositories (the first commits on each are
mine), and built out the Google OAuth login, the Tamil PDF export, the
Aptitude Series feature, the Weekly Test feature, and the PhonePe payment
integration - working alongside one other developer on the team who handled
question-bank data, API performance, and analytics.`,
    },
    {
      kind: "bullets",
      id: "role",
      eyebrow: "02 - MY ROLE",
      title: "What I personally built, verified from commit history",
      intro:
        "A two-person core team on a project I started. Rather than claim the whole codebase, here's what git history actually attributes to me:",
      items: [
        "Started both repositories and the initial backend/frontend scaffold",
        "Google OAuth login - both the passport-based flow and a Google ID-token verification path",
        "Bilingual Tamil/English PDF result export - built twice, independently: server-side with PDFKit and a bundled Tamil font, and client-side with jsPDF using a base64-embedded Tamil font",
        "The Aptitude Series feature end-to-end: the backend's topic-weighted random-sampling API and the matching frontend flow",
        "The Weekly Test feature: the aggregated Tamil + General Studies + Aptitude test and its results flow",
        "PhonePe payment integration: checksum-signed payment requests and the server-side status-polling that actually upgrades a user's plan",
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
            "React 18 (Create React App)",
            "React Router v6",
            "MUI + react-bootstrap",
            "@react-oauth/google",
            "jsPDF / pdfmake / @react-pdf/renderer / pdf-lib",
            "Chart.js + recharts",
            "react-ga / react-ga4",
            "react-toastify",
          ],
        },
        {
          label: "Server",
          items: [
            "Node.js + Express",
            "MongoDB + Mongoose",
            "Passport (Google OAuth 2.0) + google-auth-library",
            "PDFKit (bundled Tamil variable font)",
            "serverless-http",
            "PhonePe payment gateway",
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
          title: "MCQ Practice",
          description:
            "Subject and standard-scoped multiple-choice practice, drawn per request from MongoDB via a randomized $sample aggregation rather than a fixed question order.",
        },
        {
          title: "Timed Mock Test",
          description:
            "A full test flow with per-question scoring, a exit-confirmation guard so an in-progress test can't be lost to a stray back-button press, and a bilingual PDF result at the end.",
        },
        {
          title: "Aptitude Series",
          description:
            "Topic-weighted question selection across English- and Tamil-medium aptitude banks, splitting a requested question count proportionally across selected topics.",
        },
        {
          title: "Weekly Test",
          description:
            "A single combined paper assembled from three separately-sampled pools (100 Tamil, 75 General Studies, 25 Aptitude questions), gated to basic/premium subscribers only.",
        },
        {
          title: "Subscription & Payments",
          description:
            "Free / Basic (₹99) / Premium (₹199) plans via PhonePe. Free-tier usage is counted per attempt server-side; the plan upgrade only lands after the server polls PhonePe's own status endpoint and confirms success.",
        },
        {
          title: "Study Materials",
          description: "Per-grade books and reference materials pages, alongside the test-taking flows.",
        },
      ],
    },
    {
      kind: "architecture",
      id: "architecture",
      eyebrow: "05 - SYSTEM ARCHITECTURE",
      title: "A single Express app, deployed as a Lambda function",
      intro: "Conceptual summary of the verified architecture - not a screenshot of the real application.",
      layers: [
        {
          label: "Client",
          items: [
            "Create React App, routed with React Router v6",
            "TestContext (exam config: standard/subject/medium/question count) and UserContext (logged-in user, persisted to localStorage) as shared app state",
            "Google OAuth login via @react-oauth/google, posting the ID token to the API",
          ],
        },
        {
          label: "API",
          items: [
            "One Express app, wrapped with serverless-http so the same code runs locally (app.listen) and as an AWS Lambda function",
            "CORS locked to an explicit allow-list of the production and local origins",
            "Auth: a Passport Google-OAuth strategy and a separate Google ID-token verification path, both resolving to the same user-by-googleId lookup",
          ],
        },
        {
          label: "Data",
          items: [
            "MongoDB via Mongoose, with the database selected dynamically per request (mongoose.connection.useDb(standard)) rather than one fixed schema",
            "Question collections are selected by subject name at query time, so a new standard/subject is just a new database/collection, not a migration",
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
          title: "Enforcing a paid plan server-side, not just in the UI",
          problem:
            "A free/basic/premium gate that only lives in the React UI can be bypassed by anyone calling the API directly - the weekly test and the free-tier usage cap both needed to be unavailable at the server, not just hidden on screen.",
          solution:
            "The plan check (isPremiumOrBasic) and the free-tier attempt counter both live inside the Express route handler itself, reading the user's stored plan from MongoDB on every request - so the limit holds regardless of what the client sends.",
        },
        {
          title: "Trusting a real payment without trusting the client redirect alone",
          problem:
            "PhonePe redirects the browser back after payment, but a redirect is not proof of payment - a user could reach the success page without actually having paid, or a network hiccup could drop the real confirmation.",
          solution:
            "The server independently re-checks PhonePe's own status endpoint with a signed request (SHA-256 checksum) in a capped polling loop, and only writes the plan upgrade to the user's record once PhonePe itself reports PAYMENT_SUCCESS.",
        },
        {
          title: "Losing an in-progress test to an accidental back-button",
          problem:
            "A timed mock test that gets silently discarded by a stray back-swipe or browser-back click wastes a real attempt and frustrates someone mid-exam.",
          solution:
            "The test page wires both a beforeunload handler and a popstate listener while a test is active, intercepting navigation with a confirmation modal instead of letting the browser just leave.",
        },
        {
          title: "Tamil text in a PDF, from two different renderers",
          problem:
            "Results need to be exportable as a PDF containing real Tamil script, but the result PDF is generated in two different places with two different PDF libraries - one server-side, one client-side - neither of which supports Tamil out of the box.",
          solution:
            "Built two independent font integrations for the same requirement: PDFKit on the server loads a bundled Tamil variable font file directly, while jsPDF on the client has a Tamil font base64-embedded and registered into its virtual filesystem at render time.",
        },
      ],
    },
    {
      kind: "bullets",
      id: "workflow",
      eyebrow: "07 - DEPLOYMENT & WORKFLOW",
      title: "How it actually runs in production",
      items: [
        "One Express app serves both a local dev server and an AWS Lambda deployment from the same codebase, via serverless-http",
        "MongoDB holds question banks split across databases by standard/subject, letting content be added without a schema migration",
        "Real third-party integrations throughout: Google OAuth for login, PhonePe for payment, Google Analytics (react-ga/react-ga4) for traffic - nothing mocked",
        "Built and shipped collaboratively: started solo, then built out alongside one other developer on the core feature set",
      ],
    },
    {
      kind: "note",
      id: "closing-note",
      icon: "shield",
      label: "ABOUT THIS WRITE-UP",
      text: `This write-up is based on a direct, full read of both repositories' public
source on GitHub (tnpscBackend, tnpscFrontend) and their git history, not
recalled from memory or guessed. "My role" above reflects what commit
authorship actually shows, not a blanket claim over the whole codebase. No
screenshot of the live site is shown here; nizhaltnpsc.com is linked directly
if you'd like to see it running.`,
    },
  ],
};
