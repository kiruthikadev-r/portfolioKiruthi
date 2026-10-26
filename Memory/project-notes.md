# Kiruthika R Portfolio - Project Notes

## What this is
A static, single-page personal portfolio for Kiruthika R (Software Engineer, Full-Stack Developer). Built from a detailed "MASTER PROMPT" brief - premium dark theme, electric-lime accent, no fake stats/testimonials/links. React + Vite + TypeScript + Tailwind + Framer Motion + lucide-react, no backend. Dev port 5210.

## Status as of 2026-10-22
Built, builds cleanly (`npm run build` - zero TS errors), verified in a real headless browser at both desktop (1600px) and mobile (390px) widths with zero console errors. All sections render correctly: Hero, About, Skills, Projects (with working "Read Case Study" expand), Experience, Philosophy, Achievements + Education, GitHub (live API fetch confirmed working - pulled real repos from github.com/kiruthikadev-r), Contact (validation + honest no-backend-yet fallback confirmed working).

## Dev server fix (2026-10-23)
`vite@8` (originally installed) bundles Rolldown as its dev engine, and this machine's Application Control security policy blocks the native `@rolldown/binding-win32-x64-msvc` binary from executing - `npm run dev` failed outright (the generic "npm optional-deps bug" message Rolldown prints is a red herring; the real cause is in the innermost error chain). Fixed by downgrading to `vite@^6` + `@vitejs/plugin-react@^4` (esbuild/Rollup-based, no blocked native binary involved). Full detail in [[vite8-rolldown-blocked-by-app-control]]. `npm run build` was unaffected by this either way.

## Real content added (2026-10-23)
User supplied a real portrait photo and confirmed education dates (B.Sc. 2021–2024, M.Sc. 2024–2026, University Rank Holder in M.Sc. at Bharathidasan University). Photo swapped in at `src/assets/kiruthika-photo.jpg` (used in Hero + About, replacing the abstract "KR" placeholder there) - compressed from a 2.2MB PNG to ~90KB JPEG via a one-off `sharp` pass (not a project dependency, just used to process the asset). Education dates and the rank-holder credential are now real, no longer flagged as placeholders - both `src/data/education.ts` and the About highlights list were updated, and the README/finalize-checklist lines about unconfirmed education dates were removed since they're no longer accurate.

## Real bug caught during verification
`lucide-react` (installed v1.61.0) has **dropped brand/logo icons** (`Github`, `Linkedin`, etc. no longer exported) - a real, documented recent change, not a mistake on my part. Fixed by adding `src/components/BrandIcons.tsx` with inline SVG GitHub/LinkedIn marks instead. Worth remembering for any future project using a recent lucide-react version - don't assume brand icons are still there.

## Honesty-by-design (see README's "Honesty-by-design choices" section for the full list)
The brief was explicit about never inventing employment dates, project links, metrics, or testimonials. Where real info wasn't supplied, the site renders a clearly-marked placeholder/incomplete state rather than fabricating content - e.g. project `links.source.url: null` renders as a disabled "not public yet" pill, not a dead or fake link; resume download is disabled until a real PDF is dropped in; experience/education dates are flagged as unconfirmed. All of this is centralized in `src/data/*.ts` - editing those files is how the user (or a future session) fills in real info without touching components.

## Verified real data, not fabricated
The GitHub section does a live, unauthenticated fetch to the real GitHub API for `kiruthikadev-r` and displayed real repos during verification (skill-swap, shopsphere, AI-Resume-Job-Portal, College-Placement-Recruitment-Portal, Campus-Marketplace, conferenceBeintegrated) - useful corroboration that several of the many `D:\kiruthi\Pro\*` projects seen in this workspace really are this user's own work.

## Known gaps (also in README's finalize checklist)
- No real resume PDF yet (`profile.resumeAvailable: false`).
- Project screenshots are a custom abstract placeholder (`ProjectVisual`), not real screenshots - by design, not an oversight.
- Several projects' feature/contribution lists are placeholders pending a real feature audit (SVCF entry is intentionally scoped to what's publicly disclosable - confidential client project).
- No contact-form backend configured (`VITE_CONTACT_FORM_ENDPOINT` unset) - form falls back to a mailto draft, which is the intended honest behavior until the user sets one up (e.g. Formspree).
- `og-image.svg` should be exported to PNG before relying on social-preview cards (most platforms don't render SVG `og:image`).
- Not deployed yet.
