
# Portfolio Revamp Instructions (Reference: uxbert.com/present)

## Goal
Migrate the current Vite-based portfolio to **Next.js 15+ (App Router) + TypeScript**, and rebuild the site with:
1. A **Homepage** inspired by the full-screen scroll sections of `uxbert.com/present` (color-block hero panels per featured project), but WITHOUT complex 3D animations.
2. A **dedicated Case Studies listing page** (`/case-studies`) showing all projects in a grid.
3. A **Case Study detail page template** (`/case-studies/[slug]`) modeled on UXBERT's individual case study layout (e.g. `uxbert.com/case-studies/sagp`).

## Homepage Structure (simplified from uxbert.com/present)
Reference video shows: a vertical sequence of full-viewport-height sections, each representing one featured project, with:
- Solid/gradient color background unique per project (no 3D, just flat/gradient color or a large background image/video).
- Large bold project name as oversized background typography (subtle, low-opacity).
- Project logo/wordmark (small, bottom-left).
- Short 1–2 line description of the project's impact (bottom area).
- A circular floating "LEARN MORE →" button (sticky/fixed position, follows scroll, links to that project's case study page).
- A small fixed "Contact Us" circular badge (bottom-right corner, persistent across all sections).
- Top navigation bar listing all featured project names as in-page anchor links (sticky).

Build this as:
- `components/home/FeaturedProjectSection.tsx` — one full-height section per project (color/gradient bg, title, description, learn-more link).
- `components/home/ProjectNav.tsx` — sticky top nav of project names (scroll-spy highlight for active section).
- `components/home/FloatingContactBadge.tsx` — fixed circular contact button.
- Use CSS scroll-snap (`scroll-snap-type: y mandatory`) for section-by-section feel — simple, performant, no 3D libraries needed.
- After the featured sections, continue with: Services/Skills intro, then a "Selected Work" preview grid (3–4 cards) linking to `/case-studies`, FAQ, Contact CTA, Footer.

## Case Studies Listing Page (`/case-studies`)
- Page heading: "Case Studies" / "Selected Work".
- Grid of project cards (responsive: 1 col mobile, 2 col tablet, 3 col desktop):
  - Thumbnail image/video poster
  - Category tags (pills): `UI/UX`, `FRONTEND`, `VIDEOGRAPHY`, `EDITING`, `BRANDING`, `WEB DEV`, `MOBILE APP`
  - Project title
  - Hover: scale image + reveal "+" / arrow icon
  - Click → `/case-studies/[slug]`
- Optional filter/tabs by category (e.g. All / UI-UX / Frontend / Video).

## Case Study Detail Page Structure (adapted from uxbert.com/case-studies/sagp)


## Personal Role Framing
The portfolio represents a multi-disciplinary creator who works as:
- **UI/UX Designer**
- **Frontend Developer**
- **Videographer**
- **Video Editor**

All copy, section labels, and category tags throughout the site/template should reflect this combined skillset (e.g. category tags like `UI/UX`, `FRONTEND`, `VIDEOGRAPHY`, `EDITING`, `BRANDING`, `WEB DEV`, `MOBILE APP` instead of UXBERT's business categories).

## Tech Stack Changes
- Replace Vite with **Next.js 15+ (App Router)**.
- Use **TypeScript** for all components, pages, and config.
- Keep Tailwind CSS (or migrate existing CSS to Tailwind if not already used).
- Move existing components from `src/` into Next.js structure:
  - `app/` for routes/pages
  - `components/` for reusable UI
  - `public/` for static assets
  - Keep existing images in `src/assets` → move to `public/images/` (Next.js requires static assets in `public/`).
- Add `next.config.ts`, `tsconfig.json`, update `package.json` scripts (`dev`, `build`, `start`, `lint`).
- Next.js 15 notes: use async `params`/`searchParams` (now Promises) in route handlers/pages, React 19 support, Turbopack dev default — account for these when scaffolding.

## Asset Strategy (Temporary)
- Use images currently in `src/assets/` where relevant (move to `public/images/`).
- For missing visuals, use **placeholder images** (e.g. `https://placehold.co/...`) or **Unsplash** (`https://images.unsplash.com/...`).
- Add a comment `// TODO: replace with final asset` near every placeholder so they're easy to find later.
- Since the person is a videographer/editor, leave clearly marked placeholders for **video embeds** (hero reels, project walkthroughs) — e.g. placeholder `.mp4` or video thumbnail with TODO comment to swap in personal reels.

## Case Study Page Structure (adapted from uxbert.com/case-studies/sagp)

This becomes the template for `app/projects/[slug]/page.tsx`.

### 1. Project Hero
- Top meta row: **Category** (e.g. "UI/UX & Frontend"), **Project Duration**, **Date**, **Location/Context**.
- Large hero image or video (project showcase — device mockup or full-bleed screenshot/video).
- Process stage tags row (small pill labels): `RESEARCH`, `WIREFRAMING`, `DESIGN`, `DEVELOPMENT`, `VIDEO/EDITING`, `TESTING` — adapt stages per project type.
- Big bold title/tagline for the project (e.g. "Maximum speed in Jeddah!" style — punchy, personal).

### 2. Overview
- Short heading "Overview"
- 1–2 paragraphs: what the project is, who it's for, and the goal.
- Supporting full-width image below.

### 3. Project Process
- Numbered list (01–08 style) of process steps as small cards/grid, e.g.:
  1. Discovery / Brief
  2. Research & Requirements
  3. Competitor/Reference Analysis
  4. Wireframing & IA
  5. Visual Design / Storyboarding (for video work)
  6. Design System / UI Build
  7. Development / Filming & Editing
  8. Testing & Launch / Final Cut Delivery
- Supporting image alongside or below the grid.

### 4. Challenge / Problem Statement
- Two-column or stacked layout:
  - **The Challenge** — bullet list of pain points/problems before the project.
  - **The Approach / Solution** — bullet list of how it was tackled.
- Supporting screenshots/video stills (3–4 images in a grid) between or after the lists.

### 5. Methodology (renamed: "Process & Methodology")
- Series of subsections (heading + paragraph each), e.g.:
  - Audit & Research
  - Competitor/Reference Analysis
  - Information Architecture / Storyboard
  - Sketches & Moodboard
  - Ideation / Concept Development
  - UI Design / Visual Style
  - Prototyping / Rough Cut
  - Final Build / Final Edit & Delivery
- Each is a short paragraph (3–4 sentences) describing the work done.

### 6. Conclusion
- Heading "Conclusion" / "Outcome"
- Short paragraph summarizing the result/impact (use placeholder metrics where real ones aren't available yet, marked TODO).
- Supporting large image/video.

### 7. Visual/Design Gallery
- Section heading "UI Design" / "Final Visuals" / "Video Stills"
- Responsive image/video grid (masonry or grid layout) showing multiple screenshots/mockups/frame grabs — use placeholders/Unsplash for now.

### 8. Up Next
- Footer-of-page link to the next project in the list ("Up next: [Project Name] →") with a thumbnail preview.

## Component Checklist (TypeScript)
- `components/Header.tsx` — sticky nav with logo + links
- `components/Footer.tsx`
- `components/case-study/ProjectHero.tsx`
- `components/case-study/Overview.tsx`
- `components/case-study/ProcessSteps.tsx`
- `components/case-study/ChallengeApproach.tsx`
- `components/case-study/Methodology.tsx`
- `components/case-study/Conclusion.tsx`
- `components/case-study/Gallery.tsx`
- `components/case-study/UpNext.tsx`
- `lib/data/projects.ts` — typed project data:
```ts
interface ProcessStep { title: string; description?: string }
interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: string; // e.g. "UI/UX & Frontend", "Videography"
  duration: string;
  date: string;
  location?: string;
  tags: string[]; // pill tags e.g. ["UI/UX","FRONTEND","VIDEO EDITING"]
  heroImage: string;
  heroVideo?: string;
  overview: string;
  process: ProcessStep[];
  challenge: string[];
  approach: string[];
  methodology: { title: string; description: string }[];
  conclusion: string;
  gallery: string[];
}
```

## Visual & Motion Notes
- Dark theme base (deep navy/purple like `#0b042a`) with high-contrast white text — adapt to personal brand color.
- Scroll-triggered fade-in/slide-up animations using `framer-motion`.
- Hover states on gallery images/cards: subtle scale + shadow.
- Sticky meta sidebar (category/duration/date) on desktop, stacked on mobile.
- Responsive: image/video galleries collapse to single column on mobile.

## Package Manager
- Use **Bun** instead of npm/npx for all install, run, and scaffolding commands.
  - Scaffold: `bunx create-next-app@latest --typescript`
  - Install deps: `bun add <package>` / `bun add -d <package>`
  - Run scripts: `bun run dev`, `bun run build`, `bun run start`, `bun run lint`
- Ensure `bun.lock` (or `bun.lockb`) is committed; remove `package-lock.json` / `yarn.lock` if present.

## Migration Steps Summary
1. Scaffold new Next.js 15 + TS project (`bunx create-next-app@latest --typescript`).
2. Move/convert existing components from Vite project into `components/`, fix imports (`.jsx` → `.tsx`, add prop types).
3. Move assets from `src/assets` to `public/images`, update all references.
4. Build the Case Study template (`app/projects/[slug]/page.tsx`) following the structure above.
5. Create `lib/data/projects.ts` with 2–3 sample projects using placeholder/Unsplash assets.
6. Add placeholder/Unsplash images and video placeholders, marked with TODO comments.
7. Implement animations and responsive gallery.
8. Test responsiveness and accessibility (alt text, semantic HTML).
9. Remove all Vite config files (`vite.config.*`, `index.html` at root) once migration is verified.

## Deliverable
Produce `report.md` summarizing: mapping from uxbert.com case-study page to the new case-study template, asset list with placeholders used, and remaining TODOs for final asset replacement (project screenshots, video reels, real metrics/copy).