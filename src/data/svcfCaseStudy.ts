// SVCF case-study content, in the shared CaseStudyData shape (see
// src/types/caseStudy.ts and src/components/CaseStudyLayout.tsx).
//
// Everything here is written to the same "no fabrication" standard as the
// rest of the site: technologies are taken directly from the project's own
// package.json files, and every "challenge" below is a real, verified
// problem that was diagnosed and fixed - not a generic/illustrative example.
// No customer data, production URLs, credentials, or proprietary business
// figures appear anywhere in this file.

import type { CaseStudyData } from "../types/caseStudy";

export const svcfCaseStudy: CaseStudyData = {
  meta: {
    title: "SVCF - Chit Fund Accounting System",
    tagline: "Rewriting a 20-year-old financial system without breaking the books.",
    status: "In active development",
    pills: ["Software Engineer - Full-Stack", "Altius Technology (UK-based, remote engagement)", "Confidential fintech client (chit fund / rotating-savings operator)"],
  },
  blocks: [
    {
      kind: "prose",
      id: "overview",
      eyebrow: "01 - OVERVIEW",
      title: "What this is, and why it's hard",
      text: `SVCF runs the back-office accounting for a chit fund - a rotating-savings
business where groups of subscribers pay a fixed monthly amount into a pooled
"chit," and each cycle one member wins the pool via auction. Every rupee that
moves - a subscriber's payment, an auction payout, a branch-to-branch
transfer, a commission deduction - has to post as a correct, auditable ledger
entry. Get a join key or a timezone boundary wrong and a trial balance stops
balancing.

The client's existing system was a 20-year-old ASP.NET WebForms application
backed by MySQL, still running production branches daily. The project is a
ground-up rewrite onto a modern Node.js/MongoDB/React stack - not a reskin,
but a re-implementation of the underlying accounting logic, migrated
side-by-side with the live legacy system so the two could be reconciled
record-for-record before any branch cut over.`,
    },
    {
      kind: "bullets",
      id: "role",
      eyebrow: "02 - MY ROLE",
      title: "Full-Stack Contributor",
      intro: `Full-stack contributor on the rewrite, working across the Express/MongoDB
API and the React/MUI admin back-office used by branch staff. This is one
engineer's contribution within a larger, multi-developer effort - a separate
CRM front-end, a mobile collector app, and an end-user mobile app are built
and maintained by other parts of the team on the same shared backend; the
work described here is backend + admin-frontend only.`,
      items: [
        "Designed and implemented REST API endpoints and business logic in Express.js / MongoDB",
        "Built and maintained React/MUI screens in the branch admin back-office (payments, approvals, ledgers, reports)",
        "Reverse-engineered legacy accounting formulas (dividends, commissions, arrears) from the old codebase and verified the new implementation against real historical transactions",
        "Investigated and fixed data-integrity bugs surfaced during legacy-to-modern reconciliation, including running verified repair scripts against affected records",
        "Worked inside an active multi-developer codebase: resolving merge conflicts, tracing crashes introduced by parallel changes, and keeping a read-only legacy system strictly as reference material",
      ],
    },
    {
      kind: "pillGroups",
      id: "stack",
      eyebrow: "03 - TECHNOLOGY STACK",
      title: "Verified from the project's own dependencies",
      groups: [
        {
          label: "Backend",
          items: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "Redis (ioredis)",
            "BullMQ",
            "JWT / bcryptjs",
            "Zod",
            "Socket.io",
            "Multer",
            "ExcelJS / xlsx",
            "pdf-lib / pdfkit / Carbone",
            "Swagger",
            "Winston",
            "Helmet",
          ],
        },
        {
          label: "Admin Frontend",
          items: [
            "React 19",
            "Vite",
            "React Router",
            "MUI (Material UI) + MUI X",
            "Axios",
            "ExcelJS / xlsx-js-style",
            "html2pdf.js",
            "Superset Embedded SDK",
          ],
        },
        { label: "Legacy Reference", items: ["ASP.NET WebForms", "MySQL (read-only reference during migration)"] },
      ],
    },
    {
      kind: "cards",
      id: "modules",
      eyebrow: "04 - KEY MODULES",
      title: "What the system actually does",
      items: [
        {
          title: "Ledger & Vouchers",
          description:
            "Double-entry-style voucher system - every payment, transfer, or adjustment posts as a credit/debit pair. Covers receipts (cash & cheque), inter-branch advice acceptance, adjustment and deposit vouchers, and filing-fee vouchers.",
        },
        {
          title: "Chit Groups & Subscriptions",
          description:
            "Group creation and capacity rules, subscriber KYC onboarding, group transfer/removal suggestions, and a multi-step approval workflow before changes take effect.",
        },
        {
          title: "Auctions & Dividends",
          description:
            "Auction feed, draw scheduling, and a dividend/commission calculator ported from the legacy formula - discount, per-member dividend, and next-due adjustment - verified against real auction history before rollout.",
        },
        {
          title: "Collections & Reconciliation",
          description:
            "A mobile bill-collector app pipeline (submit to branch approval to ledger posting), plus bank-statement upload with cheque/chit mapping for reconciling bank credits against subscriber payments.",
        },
        {
          title: "Branch Admin & Reporting",
          description:
            "Role-based admin back-office: payment screens (current/other branch), approval management, trial & arrears, day book, decree diary, and branch-level arrear reports.",
        },
      ],
    },
    {
      kind: "architecture",
      id: "architecture",
      eyebrow: "05 - SYSTEM ARCHITECTURE",
      title: "One backend, four client apps",
      intro: "Conceptual summary of the verified architecture - not a screenshot of the real application.",
      layers: [
        {
          label: "Client Applications",
          items: [
            "React/MUI branch admin back-office (this project's primary scope)",
            "Separate CRM front-end",
            'Mobile bill-collector ("Executive") app',
            "Flutter end-user mobile app",
          ],
        },
        {
          label: "API Layer",
          items: [
            "Express.js REST API, one shared backend for all four client apps",
            "JWT/session auth + role-based access control (Admin, SuperAdmin, Branch roles)",
            "Zod request validation at the API boundary",
            "Swagger-documented endpoints",
          ],
        },
        {
          label: "Business Logic / Services",
          items: [
            "Voucher & ledger posting logic",
            "Auction / dividend / arrear calculation engines",
            "Migration & reconciliation scripts (legacy MySQL to MongoDB)",
            "Background jobs via BullMQ / Inngest (notifications, exports, scheduled reports)",
          ],
        },
        {
          label: "Data & Integrations",
          items: [
            "MongoDB (Mongoose) - primary store",
            "Redis - queues & caching",
            "Legacy MySQL (ASP.NET system) - read-only reference during migration, never queried live",
            "Twilio (SMS), Nodemailer (email), Firebase, PDF/Excel generation",
          ],
        },
      ],
    },
    {
      kind: "challenges",
      id: "challenges",
      eyebrow: "06 - TECHNICAL CHALLENGES",
      title: "Real bugs, real fixes",
      items: [
        {
          title: "A $lookup that fanned out 25 rows into 40,000",
          problem:
            "A report page meant to show a small, paginated result set was timing out. The aggregation pipeline joined on a field that was null on both sides for a large share of documents - MongoDB's $lookup matches null-to-null, so every null row joined against every other null row.",
          solution:
            "Traced the slowdown to the join, added an explicit non-null guard before the $lookup, and verified the page returned the correct ~25 rows with the expected values before closing it out.",
        },
        {
          title: "IST/UTC boundary silently moved transactions to the wrong day",
          problem:
            "A date-range report matched correctly in local development but disagreed with the same query running in the containerized dev/UAT environment. The root cause: local Date getters resolved in the host's local timezone, while the container ran in UTC - so a transaction stored near midnight IST could read as the previous day.",
          solution:
            "Rewrote the date-boundary logic to be timezone-independent (explicit UTC offset handling instead of relying on the host's local timezone), and re-verified the report against known transactions that straddled the boundary in both environments.",
        },
        {
          title: "Reconciling a legacy system's mislinked foreign keys",
          problem:
            "During migration validation, a sample of migrated vouchers resolved to the wrong member - the legacy system's own member-ID column was unreliable for a subset of records, even though the same rows looked fine in the legacy UI.",
          solution:
            "Identified a more reliable join path through the account-head hierarchy instead of the unreliable ID column, re-derived the correct links for the affected records, and reran validation against the full affected set rather than just the sample before signing off.",
        },
        {
          title: "A merge that looked like a no-op wasn't",
          problem:
            "A very large incoming merge touched a core reporting file with what looked like a one-sided, zero-net-change diff - tempting to resolve by just accepting one side wholesale.",
          solution:
            'Diffed both branches against their common merge-base (not against each other) before resolving, which surfaced a real, unrelated bug sitting in an adjacent, technically-unconflicted hunk that a naive "accept incoming" would have silently kept.',
        },
        {
          title: "Duplicate Mongoose model registration crashing the server after merges",
          problem:
            "Two independently-developed features each registered a Mongoose model under the same name from different file paths. Individually they worked; merged together, the second registration threw at boot - intermittently, depending on module load order.",
          solution:
            'Added a standing check (now part of the team\'s merge routine) to grep for duplicate `model("name", ...)` registrations across both sides of a merge, not just rely on Git\'s own conflict detection, which doesn\'t catch this case at all.',
        },
      ],
    },
    {
      kind: "bullets",
      id: "migration",
      eyebrow: "07 - DATABASE & MIGRATION",
      title: "Legacy as reference, never as a fallback",
      intro: `The legacy system's MySQL tables were mirrored into MongoDB as reference-only
collections - used purely for comparison and backfill scripts, and
explicitly never queried by live application code. That separation mattered:
it meant a migration bug could be investigated and fixed without any risk of
the live app silently falling back to stale legacy data.`,
      items: [
        "Reconciled legacy numeric foreign keys (e.g. a MySQL head/account ID) against the new document-reference schema",
        "Wrote and ran targeted, verified backfill scripts for records found to be missing required links after migration",
        "Treated dev and UAT as separate, independently-fingerprinted environments - same schema, different data - before running any write script against either",
      ],
    },
    {
      kind: "bullets",
      id: "business-logic",
      eyebrow: "08 - BUSINESS LOGIC & DATA INTEGRITY",
      title: "Where accounting rules meet code",
      intro: `Several of the system's calculations are genuine double-entry accounting
rules, not simple CRUD - getting them wrong doesn't just produce a bad UI,
it produces a ledger that no longer balances.`,
      items: [
        "Voucher pairs post as matched credit/debit legs; an arrear-before-current-due allocation rule mirrors the legacy system's own payment-allocation order",
        "The auction dividend/commission calculator was ported from the legacy formula and checked against real historical draws before being trusted for new ones",
        "Role-based authorization gates financial actions (approve, reject, void) separately from read access",
      ],
    },
    {
      kind: "bullets",
      id: "workflow",
      eyebrow: "09 - DEVELOPMENT WORKFLOW",
      title: "How the team worked",
      items: [
        "Git-based collaboration on an actively-developed, multi-engineer codebase - merge conflicts are routine, not exceptional",
        "Every bug fix or data repair was verified directly against the real database afterward - a financial system doesn't get the benefit of the doubt from a passing unit test alone",
        "ESLint, Prettier, Husky pre-commit hooks, and commitlint enforced on the backend for commit hygiene",
        "The legacy system was treated as strictly read-only reference material throughout - never built, run, or written to",
      ],
    },
    {
      kind: "cards",
      id: "learnings",
      eyebrow: "10 - KEY LEARNINGS",
      title: "What this project actually taught me",
      items: [
        {
          title: "Data integrity through migration",
          description:
            "Practical experience keeping financial data correct through a live migration: reference-only legacy mirrors, environment fingerprinting, and verifying repairs against the real data rather than trusting a script's own success message.",
        },
        {
          title: "Debugging environment-dependent bugs",
          description:
            "Debugging classes of bug that don't show up in normal testing - null-fanout joins, duplicate model registration across merges, host-timezone-dependent date math - because they only trigger under specific data shapes or deployment environments.",
        },
        {
          title: "Reverse-engineering legacy business rules",
          description:
            "Reverse-engineering undocumented business rules from a legacy codebase and proving the new implementation matches, number-for-number, before it touches real money.",
        },
        {
          title: "Disciplined merge hygiene",
          description:
            "Working disciplined merge hygiene in a shared codebase - diffing against the merge base, not just the two tips, and distinguishing a teammate's parallel change from your own before resolving a conflict.",
        },
      ],
    },
    {
      kind: "note",
      id: "confidentiality",
      icon: "shield",
      label: "CONFIDENTIALITY NOTICE",
      text: `SVCF is a private, commercial application built for a confidential client
through Altius Technology. There is no public production URL and no public
login - the live system is restricted to authorized branch employees. This
case study describes verified technical scope only: no customer records,
account numbers, production credentials, internal URLs, or proprietary
business figures are shown anywhere on this page. The architecture diagram
is an original conceptual summary, not a screenshot of the real
application.`,
    },
  ],
};
