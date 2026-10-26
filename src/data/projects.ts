import type { Project } from "../types";
import shopSphereScreenshot from "../assets/shopsphere/shop-catalog.png";

// Edit freely. Set a link's `url` to null to render it as a clearly-marked
// "not public yet" state instead of a dead link. Never invent a URL here.
export const projects: Project[] = [
  {
    id: "nizhal-tnpsc",
    number: "01",
    icon: "graduationCap",
    visualCaption: "Live site is public - source isn't, so no real in-app screenshot here",
    title: "Nizhal TNPSC",
    category: "Web Application",
    summary: "A TNPSC exam-preparation focused website.",
    overview:
      "A website built around TNPSC exam preparation. This entry is a placeholder for a fuller write-up - the specific features I personally built versus the site's current full feature set haven't been itemized yet.",
    features: [],
    technologies: [],
    contributions: [],
    links: {
      live: { label: "Visit Site", url: "https://nizhaltnpsc.com" },
      source: { label: "Source Code", url: null },
    },
    placeholderNote:
      "Overview, feature list, technologies, and specific contributions are placeholders - fill in from the real build before publishing.",
  },
  {
    id: "svcf-chit-fund",
    number: "02",
    icon: "landmark",
    visualCaption: "Confidential client project - screenshots of the real app aren't publishable",
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
    screenshot: shopSphereScreenshot,
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
    icon: "car",
    visualCaption: "Source and live demo not available - screenshot pending",
    title: "Used Car Selling Platform",
    category: "React Web Application",
    summary: "A consumer-to-consumer used-car listing site with a carousel-based browsing interface.",
    overview:
      "A used-car selling website built with React, with a carousel-based interface for browsing listings. Further detail on search functionality and the full feature set is a placeholder pending real screenshots and a feature audit.",
    features: ["Carousel-based listing browser"],
    technologies: ["React"],
    contributions: [],
    links: {
      live: { label: "Live Site", url: null },
      source: { label: "Source Code", url: null },
    },
    placeholderNote: "Add real screenshots, confirmed features, and project links before publishing.",
  },
  {
    id: "blog-app",
    number: "05",
    icon: "newspaper",
    visualCaption: "Source and live demo not available - screenshot pending",
    title: "Blog Application",
    category: "Backend Development",
    summary: "A blog platform backend built with Node.js and SQLite.",
    overview:
      "A backend-focused blog application project using Node.js and SQLite. API structure, routes, and the exact feature set are placeholders pending a pass through the real codebase.",
    features: [],
    technologies: ["Node.js", "SQLite"],
    contributions: [],
    links: {
      live: { label: "Live Site", url: null },
      source: { label: "Source Code", url: null },
    },
    placeholderNote: "Fill in real API/database details and screenshots before publishing.",
  },
  {
    id: "chat-app",
    number: "06",
    icon: "messageCircle",
    visualCaption: "Source and live demo not available - screenshot pending",
    title: "Chat Application",
    category: "Application Development",
    summary: "A messaging application built as a Computer Science project.",
    overview:
      "A messaging-oriented application developed during coursework. Implementation details (real-time transport, database, auth) are placeholders pending confirmation against the real project.",
    features: [],
    technologies: [],
    contributions: [],
    links: {
      live: { label: "Live Site", url: null },
      source: { label: "Source Code", url: null },
    },
    placeholderNote: "Fill in the real communication stack, database, and screenshots before publishing.",
  },
];
