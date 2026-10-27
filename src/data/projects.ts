import type { Project } from "../types";

// Edit freely. Set a link's `url` to null to render it as a clearly-marked
// "not public yet" state instead of a dead link. Never invent a URL here.
export const projects: Project[] = [
  {
    id: "nizhal-tnpsc",
    number: "01",
    title: "Nizhal TNPSC",
    category: "Full-Stack · Exam-Prep Platform",
    summary:
      "A live TNPSC exam-prep platform: timed mock tests, bilingual Tamil/English PDF results, and a real PhonePe-backed subscription model.",
    overview:
      "A production exam-preparation platform for the TNPSC (Tamil Nadu Public Service Commission) exams, built at DreamWebInfo. Covers per-subject MCQ practice, full timed mock tests, a weighted aptitude series, a combined weekly test, and bilingual PDF result exports, gated behind a free/basic/premium subscription enforced server-side. Started solo (first commits on both repos) and built out collaboratively with one other developer.",
    features: [
      "Timed mock tests with per-question scoring and an exit-confirmation guard against losing progress",
      "Bilingual Tamil/English PDF result export, built independently server-side (PDFKit) and client-side (jsPDF)",
      "Aptitude Series: topic-weighted random question selection across English- and Tamil-medium banks",
      "Weekly Test: a combined paper assembled from three separately-sampled question pools, gated to paid plans",
      "Free / Basic (₹99) / Premium (₹199) subscriptions via PhonePe, with server-verified payment status before any plan upgrade",
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Google OAuth", "PhonePe"],
    contributions: [
      "Started both repositories; built the Google OAuth login flow (Passport + Google ID-token verification)",
      "Built the Aptitude Series and Weekly Test features end-to-end, backend and frontend",
      "Built the bilingual Tamil/English PDF result export, independently on both the server and client",
      "Built the PhonePe payment integration: checksum-signed requests and server-side status polling",
    ],
    links: {
      live: { label: "Visit Site", url: null },
      source: { label: "Source Code", url: "https://github.com/DreamWebInfo79/tnpscFrontend" },
    },
    caseStudy:
      "Verified directly from the project's public source (tnpscBackend, tnpscFrontend) and git history, not recalled from memory - 'my role' reflects what commit authorship actually shows.",
    caseStudyPath: "/projects/nizhal-case-study",
  },
  {
    id: "svcf-chit-fund",
    number: "02",
    title: "SVCF / Chit Fund Accounting System",
    category: "Full-Stack · Fintech Platform Rewrite",
    summary:
      "Full-stack engineering on a production chit-fund accounting platform - a ground-up rewrite of a 20-year-old legacy system, including backend APIs, financial business logic, and the admin back-office UI.",
    overview:
      "A ground-up rewrite of a legacy ASP.NET/MySQL chit-fund accounting system into a modern MongoDB/Express/React stack, for a UK-based client (via Altius Technology). Full-stack work spanning REST API and business-logic development, a voucher-based double-entry ledger, legacy-to-modern data migration and reconciliation, and the React/MUI admin back-office used by branch staff for payments, approvals, and reporting.",
    features: [
      "Voucher-based ledger covering payments, auctions, vouchers, and multi-branch accounting",
      "Chit-group, subscription, and approval workflows (KYC, group transfer/removal, member approval)",
      "Auction/dividend calculation engine ported and verified against the legacy formula",
      "Bank statement upload, cheque mapping, and bill-collector app approval pipeline",
      "Admin reporting: ledgers, trial & arrears, day book, booklets, branch arrears",
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Redis", "MUI"],
    contributions: [
      "Backend REST API and business-logic development (Express.js, MongoDB/Mongoose)",
      "React/MUI admin back-office feature development and UI bug fixes",
      "Legacy-to-modern data migration, reconciliation, and verified data repairs",
      "Diagnosing and fixing production data-integrity and timezone bugs in financial reports",
    ],
    links: {
      live: { label: "Live Site", url: null },
      source: { label: "Source Code", url: null },
    },
    caseStudy:
      "Confidential client project - full write-up covers verified technical scope only. No customer records, production URLs, credentials, or proprietary business logic are shown.",
    caseStudyPath: "/projects/svcf-case-study",
  },
  {
    id: "ecommerce-app",
    number: "03",
    title: "ShopSphere - E-commerce Platform",
    category: "Full-Stack Web Development",
    summary:
      "A full storefront-plus-admin e-commerce platform, designed and built solo: cart, checkout, an enforced order-status lifecycle, and a full admin panel.",
    overview:
      "A full-stack e-commerce platform built as a single role-gated React app serving both a customer storefront (browse, cart, checkout, order history) and a complete admin panel (product/category CRUD, order-lifecycle management, a revenue dashboard, user moderation). Designed and implemented solo, end-to-end: schema, REST API, and both UIs.",
    features: [
      "Storefront: browse/search/filter/sort, product pages, a cart that works for guests and merges on login, mocked checkout, order history",
      "Admin dashboard: revenue chart, low-stock alerts, recent orders, and top products (Recharts over real aggregates)",
      "Enforced order-status state machine (Pending -> Processing -> Shipped -> Delivered, or Cancelled) with a timestamped audit trail",
      "Product/category CRUD with image upload, and role-gated admin/customer access from one codebase",
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    contributions: [
      "Sole developer: MongoDB schema design, Express REST API, and both the storefront and admin React UIs",
      "Built the guest-to-account cart merge flow and the server-enforced order-status transition logic",
      "Designed order documents to snapshot item price/name/image at purchase time, independent of later catalog edits",
    ],
    links: {
      live: { label: "Live Site", url: null },
      source: { label: "Source Code", url: null },
    },
    caseStudy:
      "Personal project, built solo end-to-end. Runs against a local MongoDB instance with a mocked checkout - no real payment gateway or public deployment.",
    caseStudyPath: "/projects/shopsphere-case-study",
  },
  {
    id: "used-car-platform",
    number: "04",
    title: "Cars2Customer - Used Car Marketplace",
    category: "Full-Stack · React Native Marketplace App",
    summary:
      "A used-car marketplace app for cars2customer.com: browse and favorite listings, send a buyer inquiry, backed by an admin-managed listings API.",
    overview:
      "A React Native marketplace app built at DreamWebInfo for cars2customer.com, backed by an Express/MongoDB API that handles admin-managed car listings, OTP-verified account signup, Google Sign-In, favorites, and buyer-inquiry bookings. Started solo (first commits on both the app and backend repos are mine) and built out alongside one other developer, with a later solo pass adding the search UI.",
    features: [
      "Browse and filter listings by brand and budget, with a live-fetched car list shared via React Context",
      "Full car detail view (price, km driven, fuel/transmission, condition, features) with a buyer-inquiry form",
      "Favorites, synced to the signed-in user's account",
      "Admin-managed listings: create/edit/delete, with a separate 'top admin' tier in the schema",
      "Email/password signup gated by a real OTP step, plus Google Sign-In with separate web and Android client IDs",
    ],
    technologies: ["React Native", "Node.js", "Express.js", "MongoDB", "Google OAuth"],
    contributions: [
      "Started both repositories; built the email+OTP signup flow and the Google Sign-In integration (web and Android)",
      "Built the admin registration/editing flow for listing management",
      "Returned for a later pass implementing the search UI and a UI/technical-alignment cleanup",
    ],
    links: {
      live: { label: "Live Site", url: null },
      source: { label: "Source Code", url: "https://github.com/DreamWebInfo79/c2cApp" },
    },
    caseStudy:
      "Verified directly from the project's public source (c2cApp, c2c-backend) and git history - a third repo (client-c2c) wasn't accessible to verify.",
    caseStudyPath: "/projects/c2c-case-study",
  },
  {
    id: "annex-global",
    number: "05",
    title: "Annex Global Conferences",
    category: "Frontend · Multi-Conference Platform",
    summary:
      "A multi-tenant conference platform: a public microsite per conference plus a shared CMS admin dashboard, built by a four-person team.",
    overview:
      "A platform for running academic/research conferences at DreamWebInfo - every conference gets its own public microsite (speakers, venue, topics, registration, past-conference archive) from a single dynamic route, plus a shared admin dashboard for managing content, speakers, sponsors, and payments across every conference. A four-person team effort (577 commits); I was the second-most active contributor, focused on the public-facing conference pages.",
    features: [
      "Per-conference public microsite generated from one dynamic route: speakers, venue, topics, program, registration, FAQ, abstract submission",
      "A dated past-conference archive per conference: attendees, report, gallery, proceedings, program, testimonials",
      "Shared admin CMS dashboard across every conference, role-gated so a restricted admin role can't reach certain pages",
      "HDFC payment gateway integration for registration, with dedicated success/failure pages and an admin order-status lookup",
    ],
    technologies: ["Next.js", "React", "Redux Toolkit", "TanStack Query", "PrimeReact"],
    contributions: [
      "Built the Registration form header, Alumni Speakers, and the conference About/Details and Organizing Committee sections",
      "Built Venue Location, Connect With Others, and the topic-centric Topics view",
      "Rewired the home banner and image sliders to read from the admin-managed data source instead of static markup",
    ],
    links: {
      live: { label: "Live Site", url: null },
      source: { label: "Source Code", url: "https://github.com/DreamWebInfo79/annex-global-fe" },
    },
    caseStudy:
      "Verified directly from the project's public source (annex-global-fe) and git history - only the frontend repo was available, and 'my role' reflects exactly what git blame attributes to me on a four-person team.",
    caseStudyPath: "/projects/annex-case-study",
  },
];
