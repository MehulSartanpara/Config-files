# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

> The Next.js version here (16.2.4) may differ from training data — read the relevant guide in `node_modules/next/dist/docs/` before writing framework code.

## Commands

```bash
npm run dev      # Dev server at http://localhost:3000
npm run build    # Production build
npm start        # Serve the production build
npm run lint     # ESLint (flat config: next/core-web-vitals + next/typescript)
```

There is no test runner or formatter configured.

## Stack

- **Next.js 16 App Router** + **React 19**, TypeScript `strict`, path alias `@/*` → `./src/*`.
- **Tailwind CSS v4** — CSS-first config (no `tailwind.config.js`). Imported via `@import "tailwindcss"` in `globals.css`; theme bridged through `@theme inline`. PostCSS plugin is `@tailwindcss/postcss`.
- **framer-motion** (animation), **lenis** (smooth scroll), **three@0.134 + vanta** (animated NET background), **lucide-react** (icons).

## Architecture

This is a single-page marketing/portfolio site — there is one route.

- `src/app/layout.tsx` (server) — loads Geist / Geist Mono fonts as CSS variables, sets SEO metadata, and wraps all content in `<SmoothScroll>` (Lenis).
- `src/app/page.tsx` (server) — composes the entire page and defines the **layering model**:
  1. `VantaBackground` — fixed canvas at `z-0`.
  2. A dark scrim `div` (`rgba(9,9,11,0.78)`) at `z-0` that dims Vanta so text stays readable.
  3. `<main>` at `z-1` holding the sections in order: Navbar → Hero → About → TechStack → Projects → Testimonials → Apps → Contact → Footer.
  - Navbar sits at `z-50`, `ScrollProgress` at `z-10001`.
- Everything in `src/components/` except the two app files is a **`"use client"` component**.

### Section-ID navigation contract

`Navbar` links and its `IntersectionObserver` active-section tracking key off section `id`s, so renaming a section anchor breaks the nav. Current IDs: `#about`, `#skills` (rendered by `TechStack`), `#projects`, `#testimonials`, `#apps`, `#contact`. Note `skills` maps to the TechStack component, and `apps` has a section but no nav link.

## Styling conventions

- **Design tokens are CSS custom properties** declared in `:root` in `src/app/globals.css` (`--bg`, `--surface`, `--accent` = `#4ade80` green, `--cyan`, `--purple`, `--amber`, `--text`, `--muted`, …). Components reference them via inline `style={{ color: "var(--accent)" }}` — Tailwind utilities are used mainly for layout/spacing, not color.
- **Hover/interactive states are frequently inline** via `onMouseEnter`/`onMouseLeave` handlers that mutate `style`, rather than Tailwind `hover:` variants.
- Shared keyframes/animations live in `globals.css`: `blink` (`.cursor-blink`), `slideUp`, `fadeIn`, `glow-pulse` (`.glow-border`). The monospace/terminal aesthetic (e.g. `./about`, `mehul.dev`) uses Geist Mono.
- Scrolling is owned by Lenis, so `html { scroll-behavior: auto }` — don't reintroduce CSS smooth scroll.

## Vanta background gotchas

`VantaBackground` dynamically `import()`s `three` and `vanta/dist/vanta.net.min` **inside `useEffect`** (client-only, keeps three out of the SSR bundle). It guards against React StrictMode's double-mount with a `cancelled` flag + `effectRef`, and calls `.destroy()` on cleanup. `three` is pinned to **0.134.0** because Vanta depends on an older three.js API — upgrading three will likely break it. The module shim lives in `src/vanta.d.ts`.
