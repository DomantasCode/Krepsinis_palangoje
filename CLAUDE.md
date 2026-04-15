# Krepšinis Palangoje

Kids basketball training & camps website for SKM Palanga. Client-facing marketing site.

## Tech Stack

- React 19 + TypeScript + Vite 8
- Tailwind CSS v4 (via `@tailwindcss/vite` plugin, configured in `src/index.css` with `@theme`)
- Google Fonts: Lexend (headlines) + Plus Jakarta Sans (body)
- Material Symbols Outlined icon font
- Deployed on Vercel: https://krepsinis-palangoje.vercel.app

## Project Structure

- `src/App.tsx` — Main layout: Navbar → Hero → Training → News → FAQ → Registration → Footer
- `src/components/` — All page sections as separate components
- `src/index.css` — Tailwind imports, full Material Design color theme (`@theme`), animations
- `src/assets/` — Hero video (hero-video.mp4)
- `public/` — Training images (training-1.png, training-2.png, training-3.png)

## Design System

- Material Design 3 color tokens defined in `src/index.css` under `@theme`
- Primary: orange (#a13900), Secondary: red (#b5161e), Tertiary: teal (#006573)
- Font families: `font-headline` (Lexend), `font-body` (Plus Jakarta Sans), `font-label` (Lexend)

## Commands

- `npm run dev` — Start dev server
- `npm run build` — TypeScript check + Vite build
- `npm run lint` — ESLint

## Key Details

- Language: All UI text is in Lithuanian
- Logo is placeholder ("LOGO" in navbar) — waiting for client's actual logo
- Contact: Mantas Straževičius, +370 686 68100
- Registration: Exoclass iframe for treniruotės + Google Form iframe for vasaros stovyklos (both in Registration.tsx, side-by-side)
- Contact form in FAQ section is visual only (no backend)
- Instagram: https://www.instagram.com/skm_treniruotespalangoje/
- Hero video must start muted (browser autoplay policy), restarts on unmute

## Conventions

- Components are default-exported single-file components
- Tailwind classes directly in JSX (no CSS modules)
- Mobile-first responsive design with `md:` breakpoints
- Section IDs for nav linking: `#treniruotes`, `#naujienos`, `#duk`, `#kontaktai`, `#registracija-forma`
