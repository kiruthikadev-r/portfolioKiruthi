# Kiruthika R - Portfolio

A premium, dark-themed personal portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion. Single-page, anchor-navigated, fully responsive, and honest about what's real versus placeholder - no fabricated stats, testimonials, links, or project metrics.

## Tech stack

React 19 · Vite · TypeScript · Tailwind CSS · Framer Motion · lucide-react

No backend - this is a static site. The only runtime network call is an optional, unauthenticated read of your public GitHub repos (see "GitHub section" below).

## Setup

```
npm install
npm run dev
```

Runs at `http://localhost:5210`.

## Production build

```
npm run build   # outputs to dist/
npm run preview # serve the production build locally to sanity-check it
```

## Deployment

Static output - deploy `dist/` to any static host: Vercel, Netlify, Cloudflare Pages, GitHub Pages, etc. No environment variables are required for a baseline deploy; see below for the one optional one.

**Vercel / Netlify**: point the build command at `npm run build` and the output directory at `dist`. Both auto-detect Vite projects.

## Environment variables (optional)

Copy `.env.example` to `.env` if you want to enable live contact-form submission:

| Variable | Purpose |
|---|---|
| `VITE_CONTACT_FORM_ENDPOINT` | A form-submission endpoint (e.g. a [Formspree](https://formspree.io) form URL like `https://formspree.io/f/xxxxxxx`). Without it, the contact form validates input client-side and opens a pre-filled `mailto:` draft instead of pretending to submit - it never fakes a "message sent" state. |

## Project structure

```
src/
├── components/      Navbar, Hero, About, Skills, ProjectGallery, ProjectCard,
│                     ExperienceTimeline, Philosophy, Achievements, AchievementCard,
│                     EducationTimeline, GitHubSection, ContactSection, Footer,
│                     plus Reveal/SectionHeading/ProjectVisual/BrandIcons helpers
├── data/            profile.ts, skills.ts, projects.ts, experience.ts,
│                     education.ts, achievements.ts, philosophy.ts
├── hooks/           useReducedMotion, useActiveSection, useGitHubRepos
├── types/           shared TypeScript interfaces for the data files
└── App.tsx          assembles all sections in order
```

**To update content, edit the files in `src/data/` - not the components.** Every section reads from its data file, so e.g. adding a project means adding an entry to `src/data/projects.ts`, not touching `ProjectGallery.tsx`.

## GitHub section

`GitHubSection` fetches live, real data from `https://api.github.com/users/kiruthikadev-r/repos` (unauthenticated - only ever sees public repos, never exposes private ones or any token). It shows real repo names, descriptions, languages, and star counts - nothing here is fabricated. If the fetch fails (most likely GitHub's unauthenticated rate limit, 60 requests/hour per IP), it shows an honest fallback message rather than fake data or a broken layout.

## Photo

`src/assets/kiruthika-photo.jpg` is a real portrait photo (provided, not generated), used in Hero and About. It was resized/compressed from the original 2.2MB PNG down to ~90KB (900px wide, JPEG q84) for page-weight reasons - if you replace it with a new photo, keep it under ~150KB and reasonably sized (900px wide is plenty for how it's displayed).

## Accessibility & motion

- `prefers-reduced-motion: reduce` disables all Framer Motion entrance animations and CSS smooth-scrolling (see `useReducedMotion` and `src/index.css`).
- All interactive elements are keyboard-reachable with a visible focus ring (`:focus-visible` in `index.css`).
- The mobile menu, nav active-state, and scroll-to-section all work via keyboard and screen reader (`aria-expanded`, `aria-current`, `aria-label` are set throughout).

## Honesty-by-design choices (don't "fix" these without real info)

A few things are **intentionally** marked incomplete rather than faked, per the original brief's explicit instruction not to invent content:

- **Resume download** (`profile.resumeAvailable = false` in `src/data/profile.ts`): shows a disabled "Resume (coming soon)" state. To enable it: drop the real PDF at `public/resume/Kiruthika-R-Resume.pdf` and flip `resumeAvailable` to `true`.
- **Project links**: any project's `links.live.url` or `links.source.url` set to `null` renders as a clearly-marked "not public yet" pill instead of a dead or fake link. Only fill these in with real URLs.
- **Project overviews/features/contributions**: several entries in `src/data/projects.ts` carry a `placeholderNote` - these are flagged because the real feature set, your specific contributions, or screenshots haven't been confirmed yet. Replace the placeholder arrays with real content before treating the project as "finished" on the site.
- **Experience dates**: `experience[0].isPlaceholderDates = true` in `src/data/experience.ts` - the Altius Technology start date isn't set. Fill in `period` with a real value and remove that flag once confirmed.
- **Project screenshots**: every project currently renders `ProjectVisual`, a custom abstract placeholder (grid pattern + large number), not a real screenshot - no stock photos or fabricated UI mockups were used. Swap in a real `<img>` once you have real screenshots.
- **Contact form**: see the environment variables section above - it's real client-side validation with an honest fallback, not a fake "sent" confirmation.

## Finalize checklist

Before treating this as launch-ready:

- [ ] Add the real resume PDF at `public/resume/Kiruthika-R-Resume.pdf`, set `resumeAvailable: true` in `src/data/profile.ts`
- [ ] Confirm Altius Technology's actual start date; update `src/data/experience.ts`
- [ ] For each project in `src/data/projects.ts`: confirm real features/technologies/contributions, add real screenshots (replacing `ProjectVisual`), and fill in real live/source URLs where they exist
- [ ] Decide on a contact-form backend (e.g. create a free Formspree form) and set `VITE_CONTACT_FORM_ENDPOINT`, or leave the mailto fallback as the permanent behavior
- [ ] Export `public/og-image.svg` as a PNG (most social platforms - Twitter/X, LinkedIn, Facebook - don't reliably render SVG `og:image` previews) and update the `og:image`/`twitter:image` tags in `index.html` to point at the PNG
- [ ] Review `src/data/skills.ts` for accuracy/completeness
- [ ] Pick a deployment target and deploy; update any hardcoded `localhost` references if you add analytics or similar
