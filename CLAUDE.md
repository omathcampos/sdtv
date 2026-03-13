# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite)
npm run build     # Production build
npm run preview   # Preview production build locally
```

## Architecture

This is a **vanilla JS + Tailwind CSS v4 static site** built with Vite. No framework — just plain ES modules.

**Page assembly pattern:** `src/main.js` imports all section modules, calls each as a function returning an HTML string, concatenates the results, and injects them into `<div id="app">`. DOM event listeners are set up in `main.js` after injection.

**Section modules** (`src/sections/`): Each exports a single function (e.g., `navbar()`, `hero()`) that returns a raw HTML string. Sections rendered in order: navbar → hero → services → diferenciais → sobre → pagamento → contato → footer → float-button.

**Centralized config:** `config.js` (root) holds business data (WhatsApp number, phone, city, company name, Instagram). All sections that need contact info import from here — edit this file to update contact details site-wide.

**Styling:** Tailwind v4 via `@tailwindcss/vite` plugin. Custom design tokens defined in `src/style.css` under `@theme`:
- `sdtv-bg` (#0d1b3e) — dark navy background
- `sdtv-yellow` (#F5C400) — accent/CTA color
- `sdtv-light` (#F9FAFB) — text color
- `sdtv-red`, `sdtv-blue`, `sdtv-dark`, `sdtv-darker` — supporting palette

**Assets:** Logo images live in `src/assets/` — `logo-com-fundo.png` (used in hero with background) and `logo-sem-fundo.png` (used in navbar, transparent).

**No routing, no state management, no build-time templating** — the entire site is a single HTML page with anchor-based navigation (`#servicos`, `#diferenciais`, etc.).

**DOM event listeners** are wired in `src/main.js` after the full HTML is injected — specifically the mobile hamburger menu toggle. Any new interactive behavior should follow this same pattern: render HTML in the section function, attach listeners in `main.js`.

**`src/counter.js`** is an unused Vite scaffold leftover — it can be ignored or deleted.
