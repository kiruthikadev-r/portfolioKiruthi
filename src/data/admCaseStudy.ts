// ALTIUSNXT Data Mapping (ADM) case-study content, in the shared
// CaseStudyData shape (see src/types/caseStudy.ts and
// src/components/CaseStudyLayout.tsx).
//
// This is a private company project (Antlab). Per the project owner's own
// instruction, the repository is NOT linked anywhere in the portfolio - no
// GitHub URL is shown. Everything below was still verified directly from a
// full read of that source and its git history, not recalled or guessed:
//   - Branch reviewed: the "retail v2" branch (a 107-file, +21,674/-2,021
//     line rewrite over the prior version).
//   - git log across all three branches in that repo (232, 339, and 24
//     commits respectively) shows every commit authored by this portfolio's
//     owner alone - no other contributor appears in the history reviewed.
//   - Only the frontend repository was available. No backend/API source was
//     reviewed, so nothing here describes backend implementation details -
//     only what the frontend's own API-call layer (Api.jsx) and component
//     code show it sends and expects back.

import type { CaseStudyData } from "../types/caseStudy";

export const admCaseStudy: CaseStudyData = {
  meta: {
    title: "ALTIUSNXT Data Mapping (ADM)",
    tagline: "An AI-assisted product data platform: import from any catalog source, map it to one schema, then enrich, brand-check, and benchmark it.",
    status: "Confidential company project - frontend",
    pills: ["Frontend Developer - Solo", "React + MUI + PrimeReact"],
  },
  blocks: [
    {
      kind: "prose",
      id: "overview",
      eyebrow: "01 - OVERVIEW",
      title: "Turning messy product feeds into clean, on-brand catalog content",
      text: `ADM is an internal product built at Antlab for retail clients who need
to take product data from many different sources - a flat file, or a direct
pull from Shopify, Wix, Squarespace, WooCommerce, Salsify, or Akeneo - and
turn it into clean, standardized, brand-compliant catalog content.

The flow is: import a catalog, map its column headers onto one predefined
product schema, then use rule-based AI generation to enrich and write
product content, check it against a brand's tone and restricted-word rules,
and benchmark or audit it before it's marked complete.

I reviewed the "retail v2" branch, a 107-file rewrite (+21,674/-2,021 lines)
over the prior version. Every commit across all three branches in this
repository's history is authored by me alone - this write-up describes work
I did solo, not a shared claim over a team's commits. Only the frontend
repository was available to review, so nothing below describes backend
implementation beyond what the frontend's own API layer shows it calls.`,
    },
    {
      kind: "bullets",
      id: "role",
      eyebrow: "02 - MY ROLE",
      title: "What's actually in the git history",
      intro: "Solo frontend work, verified by commit authorship rather than assumed:",
      items: [
        "Built the catalog-import flow: file upload plus six external platform-import entry points (Shopify, Salsify, Wix, Squarespace, WooCommerce, Akeneo)",
        "Built the header-to-schema mapping screen - pairing a catalog's own column headers against a fixed product schema (title, brand, part number, SKU, specs, description, SEO keywords, pricing, images, and more)",
        "Built the AI content-enrichment and content-creation flows, including reusable, savable generation rulesets",
        "Built Brand DNA: content rules, brand-tone detection (manual entry, from sample text, or from an uploaded sample), and restricted-word enforcement",
        "Built product benchmarking and bulk/catalog-level audit, with an approval step before content is marked complete",
        "The most-revised files in the project's history are the shared action modals (95 commits), the catalog product table (83 commits), and the central API layer (67 commits) - the AI-feature set this platform is built around",
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
          items: ["React 18", "React Router 7", "React Context (catalog + user state)", "React Hook Form", "Axios"],
        },
        {
          label: "UI",
          items: ["MUI 6", "PrimeReact + PrimeFlex", "lucide-react / react-icons", "react-toastify"],
        },
        {
          label: "Data & files",
          items: ["react-pdf", "xlsx (spreadsheet import/export)"],
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
          title: "Smart Catalogs: Import & Mapping",
          description:
            "Import a catalog from a file or a connected platform, then map its uploaded column headers onto a fixed product schema through a click-to-pair screen, with duplicate-catalog-name checking before the import is committed.",
        },
        {
          title: "AI Data Enrichment & Content Creation",
          description:
            "Generate or enrich product descriptions and specifications with configurable rules (use brand, part number, SKU, additional attributes, restricted domains), save a configuration as a reusable ruleset, and edit the generated output per product before it's accepted.",
        },
        {
          title: "Brand DNA",
          description:
            "Content rules and a brand-tone profile - detected manually, from pasted sample text, or from an uploaded writing sample - plus a restricted-word list, so AI-generated content can be refined to match a client's voice and stay inside their compliance rules.",
        },
        {
          title: "Benchmarking & Audit",
          description:
            "Compare a product's content against a benchmark product, run a bulk audit across a catalog, and route both through an explicit approval step before a product's content/audit status is marked complete.",
        },
      ],
    },
    {
      kind: "architecture",
      id: "architecture",
      eyebrow: "05 - SYSTEM ARCHITECTURE",
      title: "Import -> map -> enrich -> review, as one pipeline",
      intro: "Conceptual summary of the verified frontend architecture - not a screenshot of the real application. Observed from the frontend repo only; no backend source was reviewed.",
      layers: [
        {
          label: "Catalog layer",
          items: [
            "File or platform import -> header-to-schema mapping -> per-product screens (content, pricing, images, logs, preview)",
            "RetailContext holds in-progress import/catalog state across the multi-step import flow; UserContext holds auth/session state",
          ],
        },
        {
          label: "Content intelligence layer",
          items: [
            "Saved generation rulesets (brand / part number / SKU / additional attributes / restricted domains) feed the enrichment and content-creation modals",
            "Brand DNA (tone profile + restricted words) is applied as a refinement pass over generated content",
          ],
        },
        {
          label: "Review layer",
          items: [
            "Benchmark-against-reference and bulk audit, both gated behind an explicit approval step before a product counts as complete",
          ],
        },
      ],
    },
    {
      kind: "challenges",
      id: "challenges",
      eyebrow: "06 - A CHALLENGE FROM MY OWN WORK",
      title: "Making AI-generation settings reusable, not re-entered every time",
      items: [
        {
          title: "Every enrichment run started from a blank form",
          problem:
            "Enriching a catalog's content meant re-choosing the same handful of settings each time - whether to use the brand name, part number, or SKU, which additional attributes to pull in, which domains to exclude - with no way to reuse a configuration that had already worked well for a similar catalog.",
          solution:
            "Added a saved-ruleset path to the enrichment flow: generation rules are fetched and listed by content type, and picking one (useExistingRule / existingRuleId) populates the form's brand/part-number/SKU/attribute/domain fields automatically instead of starting from scratch.",
        },
      ],
    },
    {
      kind: "bullets",
      id: "workflow",
      eyebrow: "07 - WORKING SOLO ON AN AI-FEATURE PRODUCT",
      title: "What that was actually like",
      items: [
        "Built and then substantially rewrote the product myself - the v2 branch alone touches 107 files against the prior version",
        "The feature set grew iteratively: catalog import/mapping came first, with Brand DNA, benchmarking, and bulk audit added as later, increasingly interdependent layers over the same catalog data",
        "The central API-call layer (Api.jsx) grew to roughly 130 exported calls across catalogs, content rules, brand DNA, benchmarking, and auth - which is why keeping it organized was one of the most frequently revisited parts of the codebase",
      ],
    },
    {
      kind: "note",
      id: "closing-note",
      icon: "shield",
      label: "ABOUT THIS WRITE-UP",
      text: `This is a confidential company project. Per the project owner's own
instruction, no repository link or live URL is shown anywhere in this
portfolio. Everything above was still verified directly from a full read of
the source and its git history - not recalled or guessed - but only the
frontend repository was available, so nothing here describes backend
implementation beyond what the frontend's own API-call layer shows it sends
and expects back.`,
    },
  ],
};
