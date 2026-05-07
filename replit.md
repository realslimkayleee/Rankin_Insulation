# Rankin Insulation

Marketing website for Rankin Insulation — a spray foam insulation company in Canton, TX offering insulation, removal, and painting services.

## Run & Operate

- `pnpm --filter @workspace/rankin-insulation run dev` — run the frontend (auto-started by workflow)
- `pnpm run typecheck` — full typecheck across all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite (react-vite artifact)
- Styling: Tailwind CSS v4
- Routing: wouter

## Where things live

- `artifacts/rankin-insulation/` — the main web app
- `artifacts/rankin-insulation/src/pages/HomePage.tsx` — entire single-page site (hero, insulation, removal, painting, gallery, contact, footer)
- `artifacts/rankin-insulation/src/components/ImageCarousel.tsx` — swipeable image carousel used in service cards
- `artifacts/rankin-insulation/src/components/GalleryCarousel.tsx` — auto-scrolling gallery with keyboard nav
- `artifacts/rankin-insulation/public/` — all photos (50+ real job site images), logo.png

## Architecture decisions

- Pure frontend app — no backend or database needed (marketing/contact site)
- Single route (`/`) — original was a Next.js single-page app, kept as one page with anchor navigation
- Tailwind color classes from original config replaced with hex literals (Tailwind v4 doesn't support the same extend.colors pattern as v3)
- Google Fonts loaded via `<link>` in index.html: Work Sans, Manrope, Inter, Be Vietnam Pro, Material Symbols Outlined

## Product

- Dark-themed marketing site for Rankin Insulation (Canton, TX)
- Sections: Hero, Closed Cell Insulation, Open Cell Insulation, Removal, Painting, Gallery, Contact
- Swipeable image carousels per service, auto-scrolling project gallery
- Click-to-call, Facebook link, Google Maps address link

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- The `fullstack_copy_frontend.sh` script cannot auto-detect CLIENT_DIR for this project — copy files manually if re-running migration steps
- Tailwind v3 color tokens (e.g. `bg-surface-container`, `text-primary`) are not available; use hex values directly

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
