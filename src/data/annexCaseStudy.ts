// Annex Global Conferences case-study content, in the shared CaseStudyData
// shape (see src/types/caseStudy.ts and src/components/CaseStudyLayout.tsx).
//
// Verified directly from the project's own public source - not recalled or
// guessed. Read in full from:
//   https://github.com/DreamWebInfo79/annex-global-fe
// Only the frontend repository was provided, so this write-up is scoped to
// what that repo actually shows; no backend source was reviewed.
//
// Git history: 577 commits from four contributors. The most active author is
// a teammate (344 commits), with this portfolio's owner the second most
// active (98 commits) and another teammate close behind (95). "My role"
// below lists only the specific components her own commits touch, verified
// with `git log --author ... --name-only`, not a claim over the whole
// platform.

import type { CaseStudyData } from "../types/caseStudy";

export const annexCaseStudy: CaseStudyData = {
  meta: {
    title: "Annex Global Conferences",
    tagline: "A multi-tenant conference platform - a public microsite per conference, plus a full CMS admin dashboard.",
    status: "Team project - frontend",
    pills: ["Frontend Developer - Team of four", "Next.js 15 + React 19"],
  },
  blocks: [
    {
      kind: "prose",
      id: "overview",
      eyebrow: "01 - OVERVIEW",
      title: "One codebase, many conferences",
      text: `Annex Global Conferences is a platform for running academic/research
conferences: each conference gets its own public microsite (speakers, venue,
topics, schedule, registration, past-conference archive) generated from a
single dynamic route rather than a separate deploy, plus a shared admin
dashboard where staff manage content, speakers, sponsors, registrations, and
payments across every conference from one place.

This was a four-person team effort (577 commits total). I was the
second-most active contributor, focused specifically on the public-facing
conference pages rather than the admin backend or payment integration - "my
role" below lists only what my own commits actually touch.`,
    },
    {
      kind: "bullets",
      id: "role",
      eyebrow: "02 - MY ROLE",
      title: "What I personally built, verified from commit history",
      intro: "A team project with four contributors. The components my commits actually touch:",
      items: [
        "Registration form header - the most-revised piece of UI I worked on (22 commits)",
        "Alumni Speakers and the conference About/Details sections (About Mission, Conference Details, Organizing Committee)",
        "Venue Location, Connect With Others, and Topics (topic-centric view)",
        "Making the home banner and image sliders admin-driven instead of hardcoded, so conference content could be edited without a redeploy",
        "General UI work across the Gallery, FAQ, Webinar Program, Sponsors, and Abstract-submission sections, plus recurring mobile-responsiveness fixes",
      ],
    },
    {
      kind: "pillGroups",
      id: "stack",
      eyebrow: "03 - TECHNOLOGY STACK",
      title: "Verified from the repo's own dependencies",
      groups: [
        {
          label: "Core",
          items: ["Next.js 15 (App Router)", "React 19", "Redux Toolkit", "TanStack Query", "Formik + Yup"],
        },
        {
          label: "UI & content",
          items: [
            "PrimeReact + Bootstrap",
            "TinyMCE (rich-text admin editing)",
            "react-slick / slick-carousel",
            "react-player",
            "react-three-fiber + drei + three.js",
            "Chart.js",
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
          title: "Multi-Conference Public Site",
          description:
            "Every conference gets speakers, venue, topics, program, FAQ, brochure, abstract submission, and OCM (organizing committee) pages, all generated from one dynamic [slug] route rather than a per-conference codebase.",
        },
        {
          title: "Past Conference Archive",
          description:
            "A dated archive per conference - attendees, a written report, a photo gallery, proceedings, the program, and testimonials - each its own route under pastconferences/[dateSlug].",
        },
        {
          title: "Admin CMS Dashboard",
          description:
            "A shared dashboard across all conferences: speakers, sponsors, gallery, testimonials, organizing-committee members, footer/legal content, newsletter, and PDF uploads - role-gated so a restricted admin role can't reach certain pages.",
        },
        {
          title: "Registration & Payments",
          description:
            "Standard, self-service, and special registration flows, with an HDFC payment gateway integration (dedicated success/failure/response routes) and an admin order-status lookup tool.",
        },
      ],
    },
    {
      kind: "architecture",
      id: "architecture",
      eyebrow: "05 - SYSTEM ARCHITECTURE",
      title: "A single Next.js app serving every conference",
      intro: "Conceptual summary of the verified architecture - not a screenshot of the real application. Observed from the frontend repo only; no backend source was reviewed.",
      layers: [
        {
          label: "Public site",
          items: [
            "Next.js App Router, with a [slug] segment selecting the conference for every public page",
            "Redux Toolkit + TanStack Query for shared and server-derived state",
          ],
        },
        {
          label: "Admin dashboard",
          items: [
            "A separate route tree (admin-annex-global-conferences) protected by Next.js middleware",
            "Middleware checks a token cookie for authentication and a userContext cookie's isRoleUser flag to block a restricted role from the top-level conference-management page",
          ],
        },
        {
          label: "Payments",
          items: [
            "HDFC payment gateway, with dedicated success/failure/response pages and an admin-side order-status lookup",
          ],
        },
      ],
    },
    {
      kind: "challenges",
      id: "challenges",
      eyebrow: "06 - A CHALLENGE FROM MY OWN WORK",
      title: "Making marketing content editable without a redeploy",
      items: [
        {
          title: "Static conference content meant a developer for every edit",
          problem:
            "A conference's banner, image sliders, and conference cards started as hardcoded JSX - which meant any content update (a new sponsor logo, a changed date, refreshed banner copy) needed a developer and a redeploy, even though the team had already built an admin CMS for exactly this kind of content.",
          solution:
            "Rewired the home banner, image sliders, and conference cards to read from the admin-managed data source instead of static markup, so non-developers could update conference content through the dashboard the rest of the team was building, without touching code.",
        },
      ],
    },
    {
      kind: "bullets",
      id: "workflow",
      eyebrow: "07 - WORKING ON A FOUR-PERSON CODEBASE",
      title: "What that was actually like",
      items: [
        "577 commits across four contributors over roughly a year - the kind of shared codebase where touching a component means checking who else is actively working in it",
        "My work concentrated in specific component trees (Registration, Speakers, About/Conference Details, Venue, Topics) rather than spanning the whole app",
        "Left the admin-auth middleware, the payment integration, and the role-based access control to the teammates who built them - verified by git blame, not assumed",
      ],
    },
    {
      kind: "note",
      id: "closing-note",
      icon: "shield",
      label: "ABOUT THIS WRITE-UP",
      text: `This write-up is based on a direct read of the annex-global-fe repository
and its git history, not recalled from memory or guessed. Only the frontend
repo was available, so nothing here describes a backend that wasn't actually
reviewed. "My role" reflects exactly what git log --author and git blame
attribute to this portfolio's owner, not the project as a whole. No
screenshot is shown, and no live URL is listed, since this write-up is
scoped to the source code itself, not a deployed instance.`,
    },
  ],
};
